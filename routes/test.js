const express = require('express');
const router = express.Router();
const path = require('path');

// 메인 경로
router.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// 로그인 경로 (체이닝 에러 안 나게 분리 완료)
router.get("/login", (req, res) => {
    res.status(200).send("Okay");
});

module.exports = router;