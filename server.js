const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config(); // .env 환경변수 로드

const app = express();
const PORT = process.env.PORT || 3000;

// 1. 필수 미들웨어 설정
app.use(cors()); // 🚀 다른 도메인 간 통신을 위한 CORS 허용
app.use(express.json()); // 🚀 프론트엔드가 보낸 JSON(req.body) 파싱 필수
app.use(express.urlencoded({ extended: true }));

// 2. 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 3. 🚀 몽고DB 연결 (클라우드 도메인 에러 우회를 위해 로컬 DB 주소로 강제 전환)
// 만약 몽고DB Atlas 진짜 주소를 알아내셨다면 그 주소를 따옴표 안에 넣으시면 됩니다.
const MONGO_URI = "mongodb+srv://didalswns:didalswns@cluster0.hdno9aa.mongodb.net/";

mongoose.connect(MONGO_URI)
    .then(() => console.log('🟢 몽고DB 연결 성공! 데이터베이스 준비 완료.'))
    .catch((err) => {
        console.error('❌ 몽고DB 연결 실패:', err.message);
    });

// 4. 라우터 연결
const mainRouter = require('./routes/main');
const loginRouter = require('./routes/login');

app.use('/', mainRouter);      
app.use('/login', loginRouter); 

// 5. 서버 가동
app.listen(PORT, () => {
    console.log(`🚀 서버가 포트 ${PORT}에서 정상 작동 중입니다!`);
});