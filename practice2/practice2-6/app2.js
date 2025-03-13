const fs = require('fs').promises;
// const data = await fs.readFile('./sec03/example.txt', 'utf-8');
// console.log('파일 내용' + data);

const checkinDate = `${new Date().getFullYear()}-${String(
  new Date().getMonth() + 1
).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`;

const onesecond = function (name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let date = new Date();
      resolve(
        `${name}: 출석 완료 (${checkinDate} ${new Date().getHours()}:${new Date().getMinutes()})`
      );
    }, 1000);
  });
};

async function attendance(name) {
  console.log('출석중...');

  let check;
  const checklist = await fs.readFile('./logs/checkin.txt', 'utf-8');

  var arr = checklist.toString().split('\n');
  for (i in arr) {
    if (name == arr[i].match(/^(.+?):/)[1]) {
      check = true;
    }
  }

  if (check) {
    console.log(name + ' 회원님은 이미 출석하셨습니다!');
  } else {
    const print = await onesecond(name);
    console.log(print);

    await fs.appendFile('./logs/checkin.txt', '\n' + print, (err) => {
      if (err) {
        return console.error('에러' + err);
      }
      console.log('출석 기록이 파일에 저장되었습니다!');
    });
    console.log('출석 기록이 파일에 저장되었습니다!');
  }
}

attendance('이찬희');
