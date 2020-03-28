const express = require("express");
const router = express.Router();



router.post("/register", (req, res) => {
    const user = new user(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ sucess: false, err });
        return res.status(200).json({
            sucess: true
        });
    });
});

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Email nicht gefunden"
            });
        
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (!isMatch)
                    return res.json({ loginSuccess: false, message: "Falsches Passwort"});

                
            });
    });
});


module.exports = router;