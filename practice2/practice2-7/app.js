const fs = require('fs').promises;

const reservatecomplete = function (name, machine) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name} 회원님의 ${machine} 예약이 완료되었습니다 !`);
    }, 2000);
  });
};

async function reservate(name, machine) {
  console.log('예약 처리 중...');

  let check;
  const list = await fs.readFile('./logs/reservation.txt', 'utf-8');

  var arr = list.toString().split('\n');
  for (i in arr) {
    if (name == arr[i].match(/^(.+?):/)[1]) {
      check = true;
    }
  }

  if (check) {
    console.log(name + '회원님은 이미 예약되어 있습니다.');
  } else {
    const complete = await reservatecomplete(name, machine);
    console.log(complete);

    await fs.appendFile(
      './logs/reservation.txt',
      `\n${name}: ${machine}`,
      (err) => {
        if (err) {
          return console.error('에러' + err);
        }
        console.log('출석 기록이 파일에 저장되었습니다!');
      }
    );
    console.log('예약 기록이 파일에 저장되었습니다.');
  }
}
reservate('이승기', '스피닝');
