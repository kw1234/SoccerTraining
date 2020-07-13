
var colorStore = {};

exports.postColors = async function(req, res) {
    var body = req.body;
    console.log(body);
    var colorArr = [body.color1, body.color2, body.color3];
    var color = colorArr[getRandomInt(3)];
    res.send({"color": color});
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}