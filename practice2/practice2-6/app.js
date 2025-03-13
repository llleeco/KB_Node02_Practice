const fs = require('fs').promises;

const today3 = `${new Date().getFullYear()}-${String(
  new Date().getMonth() + 1
).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`;

const attendance = function (name) {
  console.log('출석중...');

  //   check(name);
  return new Promise((resolve) => {
    setTimeout(() => {
      let date = new Date();
      resolve(
        `${name}: 출석 완료 (${today3} ${new Date().getHours()}:${new Date().getMinutes()})`
      );
    }, 1000);
  });
};

function check(name) {
  return new Promise((resolve) => {
    fs.readFile('./logs/checkin.txt', 'utf8', function (err, data) {
      if (err) throw err;
      var arr = data.toString().split('\n');
      for (i in arr) {
        const n = arr[i].match(/^(.+?):/)[1];
        if (name == arr[i].match(/^(.+?):/)[1]) {
          resolve(name + ' 회원님은 이미 출석하셨습니다!');
        }
      }
    });
  });
}

async function getName(name) {
  const result = await attendance(name);
  console.log(result);

  await fs.appendFile('./logs/checkin.txt', '\n' + result, (err) => {
    if (err) {
      return console.error('에러' + err);
    }
    console.log('출석 기록이 파일에 저장되었습니다!');
  });
}

getName('이찬희');
