const romans = require('romans')

const romanController = {
    converterRoman(req, res){

    var word = req.body.text

    var wordArray = word.split(/[^CDILMVX]/)

    var x = 0
    var y = 0
    for (let index = 0; index < wordArray.length; index++) {
        if (wordArray[index] != 0 && romans.deromanize(wordArray[index]) > x){
            x = romans.deromanize(wordArray[index])
            y = wordArray[index]
        }
    }
    res.send(JSON.stringify({number: y, value: x}))
    }
}

module.exports = romanController