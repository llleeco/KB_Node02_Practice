const runStretching = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('스트레칭 완료');
    }, 1000);
  });
};
const runTreadmill = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('러닝머신 완료');
    }, 500);
  });
};
const runProtein = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('단백질 보충 완료');
    }, 0);
  });
};

async function trainig() {
  console.log('운동 기록 처리 시작');

  const stretch = await runStretching();
  console.log(stretch);
  const threadmill = await runTreadmill();
  console.log(threadmill);
  const protein = await runProtein();
  console.log(protein);
  console.log('운동 기록 처리 종료');
}

trainig();
