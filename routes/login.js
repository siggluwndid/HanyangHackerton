const express = require('express');
const router = express.Router();

// 🚀 DB(User 모델)를 아예 호출하지 않고 메모리 상에서 바로 비교합니다.
router.post('/', (req, res) => {
    try {
        const { username, password } = req.body; 

        // 아이디 비번 검증 (DB 조회 없음)
        if (username !== "test1234@naver.com") {
            return res.status(401).json({ success: false, message: "아이디가 없습니다." });
        }
        if (password !== "password123") {
            return res.status(401).json({ success: false, message: "비밀번호가 틀렸습니다." });
        }

        // 로그인 성공 시 세션/로컬스토리지용 어르신 더미 데이터 즉시 반환
        return res.status(200).json({
            success: true,
            message: "로그인 성공!",
            user: {
                username: "test1234@naver.com",
                name: "김기성어르신",
                progress: {
                    currentLevel: "패스트푸드",
                    completedStages: [],
                    failCount: 0
                }
            }
        });

    } catch (error) {
        console.error("하드코딩 라우터 에러:", error);
        return res.status(500).json({ success: false, message: "임시 서버 오류 발생" });
    }
});

module.exports = router;