const fs = require('fs').promises;

async function total(name) {
  const list = await fs.readFile('./logs/bench.txt', 'utf-8');
  let sum = 0;

  var arr = list.toString().split('\n');
  for (i in arr) {
    let [nname, kg] = arr[i].split(':');
    nname = nname.trim();
    kg = parseInt(kg.trim());
    if (nname == name) {
      sum += kg;
    }
  }

  const list2 = await fs.readFile('./logs/deadlift.txt', 'utf-8');

  var arr = list2.toString().split('\n');
  for (i in arr) {
    let [nname, kg] = arr[i].split(':');
    nname = nname.trim();
    kg = parseInt(kg.trim());
    if (nname == name) {
      sum += kg;
    }
  }

  const list3 = await fs.readFile('./logs/deadlift.txt', 'utf-8');

  var arr = list3.toString().split('\n');
  for (i in arr) {
    let [nname, kg] = arr[i].split(':');
    nname = nname.trim();
    kg = parseInt(kg.trim());
    if (nname == name) {
      sum += kg;
    }
  }

  if (sum >= 500) {
    console.log(`${name} 회원님! 3대 500 돌파! 강력한 힘의 소유자!`);
  } else if (sum >= 200) {
    console.log(`${name} 회원님, 3대 200은 넘으셨네요. 꾸준히 파이팅!`);
  } else {
    console.log(`${name} 회원님, 아직 3대 200은 부족해요. 힘내세요!`);
  }
}
total('이승기');
total('김종국');
total('박보검');
total('유재석');
total('이병헌');
