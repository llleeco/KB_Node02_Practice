const fs = require('fs').promises;

const record = function (name, kcal) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name} 회원님, 오늘도 건강한 한 끼 감사합니다!`);
    }, 1000);
  });
};
async function recordDiet(name, kcal) {
  console.log('식단 기록 중... (오늘도 건강한 한 끼!)');

  const recordresult = await record(name, kcal);
  console.log(recordresult);
  let content = '';
  if (kcal < 500) {
    content = '괜찮아요 아직 여유 있어요!';
    await fs.appendFile('./logs/diet.txt', `\n${name}: ${kcal}kcal` + content);
  } else {
    content = '조금 과했어요! 내일은 가볍게 가볼까요?';
    await fs.appendFile('./logs/diet.txt', `\n${name}: ${kcal}kcal` + content);
    await fs.appendFile(
      './logs/diet.txt',
      `\n${name} 회원님, 오늘 뭐 드셨어요? 칼로리 폭탄인가요?!`
    );

    console.log(`${name} 회원님, 오늘 뭐 드셨어요? 칼로리 폭탄인가요?!`);
  }

  console.log('식단 기록이 맛있게 저장되었습니다.');
}

recordDiet('이승기', 450);
