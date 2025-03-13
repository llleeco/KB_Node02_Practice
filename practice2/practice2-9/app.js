const fs = require('fs').promises;

const onesecondafter = function (name, part) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (part == '상체') {
        resolve(
          `${name} 회원님, 오늘의 ${part} 추천 루틴은 \'어깨프레스 3세트\'입니다! 화이팅!`
        );
      } else if (part == '하체') {
        resolve(
          `${name} 회원님, 오늘의 ${part} 추천 루틴은 \'레그프레스 4세트\'입니다! 화이팅!`
        );
      }
    }, 1000);
  });
};

async function recommandRoutine() {
  try {
    // 'memberRoutine.txt' 파일 존재 여부 확인
    await fs.access('./logs/memberRoutine.txt');
  } catch (err) {
    return console.log('"회원 루틴 파일이 없습니다!"');
  }

  const list = await fs.readFile('./logs/memberRoutine.txt', 'utf-8');

  let alreadyrecommanded = [];
  var arr = list.toString().split('\n');
  for (i in arr) {
    let [name, part] = arr[i].split(':');

    name = name.trim();
    part = part.trim();
    console.log(`운동 루틴 추천 중...(${name})`);

    if (alreadyrecommanded.includes(name)) {
      console.log(`${name} 회원님은 이미 추천을 받으셨습니다.`);
    } else {
      const content = await onesecondafter(name, part);

      console.log(content);

      if (!(await fs.access('./logs/routine.txt'))) {
        return console.log('운동 루틴 기록 파일이 없습니다!');
      } else {
        await fs.appendFile('./logs/routine.txt', '\n' + content);
        console.log('추천 루틴이 기록되었습니다!');
        alreadyrecommanded.push(name);
      }
    }
  }
}

recommandRoutine();
