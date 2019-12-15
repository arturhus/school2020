var express = require('express');
var router = express.Router();

var teams = [];
teams.push({teamName:'Black', members:'khusnullin-chuiko'});
teams.push({teamName:'Red', members:'snow-shevchuk'});
teams.push({teamName:'White', members:'dovhan-skurchak'});

router.get('/', function(req, res, next) {
    try {
        let memberLastName = req.headers['lastName'];
        let team = teams.find(element => element.members.includes(memberLastName));
        res.send('Congratulations! You have successfully completed the first task.\n\n You are in the "' + team.teamName + '" team. Go ahead and find your teammate. Good luck!');
    } catch (e) {
        res.send('Incorrect last name');
    }
});

module.exports = router;
