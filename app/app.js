/**********************  메인 코드 ********************/

//express 모듈을 실행
const express = require("express"); //express 모듈 추출 
const app = express(); //서버 생성

//ejs를 사용하기 위한 코드
app.set("views","./app/src/views");
app.set("view engine", "ejs");

// 프런트 js 파일을 이용하기 위한 미들웨어 등록
app.use(express.static(`${__dirname}/src/public`)) 

//라우팅 파일을 사용하기 위한 코드
const route = require("./src/routes/home/route");
//라우팅 파일을 읽어와서 변수에 저장
app.use("/",route);
//첫번째 파라미터의 경로에서부터 라우팅 파일 사용해서 경로 지정

module.exports = app; //외부 파일에서 메인 코드를 사용할 수 있도록 하는 명령어