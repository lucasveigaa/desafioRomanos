const romans = require('romans')
const express = require('express')

const app = express()
app.use(express.json())

app.post('/search', function(req, res){
    body = req.body
    var palavra = body.text

    var palavraArray = palavra.split(/[^CDILMVX]/)

    var x = 0
    var y = 0
    for (let index = 0; index < palavraArray.length; index++) {
        if (palavraArray[index] != 0 && romans.deromanize(palavraArray[index]) > x){
            x = romans.deromanize(palavraArray[index])
            y = palavraArray[index]
        }
    }
    res.send(JSON.stringify({number: y, value: x}))

  });

app.listen(8080, () => console.log('Servidor rodando na porta 8080') )