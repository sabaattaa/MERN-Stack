const ex = require("express");
const router = ex.Router();
const User = require('../model/User');

router.post("/createuser", async (req, res) => {
    try {
        const newUser = new User({
            name: "saba",
            email: "sabaatta24@gmail.com",
            password: "saba123"
        });

        const createdUser = await newUser.save();

        res.json({
            success: true,
            user: createdUser 
        });
    } catch (error) {
        console.error("createuser error", error);
        res.status(500).json({
            success: false,
            error: error.message 
        });
    }
});

module.exports = router;
