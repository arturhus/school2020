var express = require('express');
var router = express.Router();

var teams = [];
teams.push({teamName:'Black', members:'tymchenko-rosovskyi'});
teams.push({teamName:'White', members:'kholod-boiko'});

router.get('/', function(req, res, next) {
    let memberLastName = req.headers['lastname'];
    if(!memberLastName) res.send('Incorrect header. Please try again.');

    try {
        memberLastName = memberLastName.toLowerCase();
        let team = teams.find(element => element.members.includes(memberLastName));
        res.send('\n\nCongratulations! You have successfully completed the first task. \n\n' +
            'You are in the "' + team.teamName + '" team. Go ahead and find your teammate. \n\n' +
            'Good luck!');
    } catch (e) {
        res.send('Incorrect Last Name. Please try again.');
    }
});

module.exports = router;
