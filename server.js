const express = require('express');
const app = express();
const PORT = 3000;

// 🚨 [미션 1]: 프론트엔드에서 보낸 JSON 데이터를 백엔드가 읽을 수 있게 변환해주는 
// 미들웨어 설정을 완성하세요. (이거 안 쓰면 req.body가 undefined가 됩니다!)
app.use(express.json());

// 🚨 [미션 2]: 로그인 API의 HTTP 메서드(Method)와 주소를 완성하세요.
// 친구들이 보낸 fetch 요청의 주소는 '/api/auth/login' 이고, 데이터 전송 방식은 POST입니다.
app.post('/api/auth/login', (req, res) => {
  
  // 🚨 [미션 3]: 프론트엔드가 body에 담아서 보낸 데이터(userId, userPw)를 
  // req 객체 안에서 꺼내서 변수에 담으려고 합니다. 빈칸을 채우세요.
  const { userId, userPw } = req.body

  console.log(`\n[📥 로그인 요청 도착] ID: ${userId} | PW: ${userPw}`);

  // 예외 처리: 데이터가 비어있는지 검사
  if (!userId || !userPw) {
    console.log("❌ 결과: 로그인 실패 (데이터 누락)");
    // 🚨 [미션 4]: 값이 비어있을 때 프론트엔드에게 "잘못된 요청"이라는 의미의 
    // HTTP 상태 코드(400)와 함께 에러 메시지를 JSON 형태로 보내려고 합니다. 빈칸을 채우세요.
    return res.status(400).json({ 
      success: false, 
      message: "아이디와 비밀번호를 모두 입력해주세요!" 
    });
  }

  // 로그인 성공 응답
  console.log("✅ 결과: 로그인 성공");
  return res.status(200).json({ 
    success: true, 
    message: `서버 연동 대성공! ID(${userId}) 확인 완료.` 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 테스트 서버가 http://localhost:${PORT} 에서 대기 중...`);
});