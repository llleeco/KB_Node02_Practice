const fs = require('fs');
const path = require('path');

let content = '김종국, 나이: 45, 체중: 80kg, 운동: 벤치프레스 100kg';

fs.writeFile('./members/kim_jong_kook.txt', content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('파일 생성 완료!');

    const dir = path.dirname(__filename);
    const filename = dir + '/members/kim_jong_kook.txt';
    const parsedPath = path.parse(filename);

    const fn = path.basename(filename);
    console.log(`디렉터리 경로: ${parsedPath.dir}`);
    console.log(`파일 이름: ${parsedPath.base}`);
    console.log(`파일 확장자: ${parsedPath.ext}`);
    console.log(`파일 이름(확장자 제외): ${parsedPath.name}`);
  }
});
