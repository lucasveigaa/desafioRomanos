const romans = require('romans')

const romanController = {
    converterRoman(req, res) {

        let word = req.body.text

        if (!word) {
            res.status(400).json(({ error: 'Body deve ser passado no formado {"text": "XXXIVHQIWEUKCXZXWS"}' }))
        } else {

            var wordArray = word.split(/[^CDILMVX]/)


            let maxNumberRoman = 0
            let maxRoman = 0

            
            for (let index = 0; index < wordArray.length; index++) {
                try {
                    if (wordArray[index] != '' && romans.deromanize(wordArray[index]) > maxNumberRoman) {

                        maxNumberRoman = romans.deromanize(wordArray[index])
                        maxRoman = wordArray[index]

                    }
                } catch (error) {
                    res.status(400).json(({ error: 'Palavra inválida! Número romano inexistente!' }))
                }
            }
            res.json({ number: maxRoman, value: maxNumberRoman })
        }
    }
}

module.exports = romanController

