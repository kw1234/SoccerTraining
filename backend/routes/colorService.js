
var colorStore = {};

exports.postColors = async function(req, res) {
    var body = req.body;
    console.log(body);
    /*const result = await blockspring.runParsed("get-text-from-url", { "url": body['url'] }, { api_key: "br_130906_e2b2210aee5959f094ebb31c4d1bb98267277765"}, function(response) {
            var text = response.params;
            if (text == null || Object.keys(text).length == 0) {
                res.send({"text":"Error: We were not able to get the text from this website"});
            } else {
                var topWords = getTopTenWords(text['text']);
                res.send(topWords);
            }
        });
    return result;
    */
};