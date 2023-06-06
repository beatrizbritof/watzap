//Importar o módulo express
const express = require('express')();

//Importar o módulo HTTP e atribuindo a constante do express e criando um servidor
const http = require('http').createServer(express);

//Importar o socket.io e colocando o http como parâmetro
const io = require('socket.io')(http);

//Importa o módulo express
const app = require('express');
//Criando variavel instancia do express

express.use(app.static('public'));


//Rota para página inicial
express.get('/', (req, res) => res.sendFile(__dirname + '/public/chatOnline.html'));

//Evento para o usuário conectar ao servidor
io.on('connection', (socket) => {
    console.log("Usuário conectado")
    socket.on('preenche id', (infos) => {
        infos.id = socket.id
        io.emit('preenche id', infos)
    });
    //Evento para quando o usuario enviar uma mensagem via socket.io
    socket.on('chat message', (dados) => io.emit('chat message', dados));
    socket.on('enviaFoto', (pessoa) => {
        io.emit('enviaFoto', pessoa)});
    //aqui é onde o socket.emit verifica o que deve fazer com a função que foi chamada e com o parâmetro (dados) que foi emitido
    socket.on('card', (dados) => {
        dados.id = socket.id;
        io.emit('card', dados)
    });

    //Evento para quando o usuário se desconectar
    socket.on('disconnect', () => console.log("Usuário desconectado"));
})

//Iniciar o servidor na porta 3000
http.listen(3000, () => {
    console.log("Servidor iniciado: http://localhost:3000");
})