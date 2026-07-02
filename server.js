const express = require('express');
const app = express();
// ❌ 기존 코드: const PORT = 3000;
// 🟢 변경할 무적 코드:
const PORT = 3000;



app.get("/", (req,res) => {
  res.send("Hello World!")
})

// 주소(0.0.0.0)를 명시해 주어야 Render 시스템이 외부 포트를 정확히 감지합니다.
app.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`🚀 서버가 성공적으로 실행되었습니다!!`);
  console.log(`🚀 현재 오픈된 포트: ${PORT}`);
  console.log(`====================================================`);
});