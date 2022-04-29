# Maior número romano em uma palavra
## Construção de uma API rest que retorna o maior número romano que existe na palavra enviada.


#### Instalando dependências e colocando o servidor para rodar:
Para fazer a aplicação rodar usar o comando npm install para instalar as dependências. Após isso utilizar o comando node index.js para executar a aplicação.


#### Executando a aplicação
Com a aplicação rodando deve se enviar um JSON pelo método POST no body utilizando algum programa como insomnia ou postman no seguinte formato:
{
	"text": "AXXBLX"
}

A palavra text deve sempre se manter a mesma, e onde está a palavra "AXXBLX" deve se colocar a palavra desejada.

 Após executar a aplicação irá retornar o maior número romano existente na palavra desejada.


#### Bibliotecas:
Foi utilizada a biblioteca do Express para rodar a aplicação e a biblioteca Roman que é responsável por converter números romanos em números normais.


*Desenvolvido por: Lucas Veiga.*