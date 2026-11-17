import express from "express";
// Variavel para acessar os métodos express
const app = express();
// Ativa o leitor json
app.use(express.json())

let usuario = [];

// Rota saída de dados
app.get('/usuarios',(req, res)=>{
    res.json(usuario);
})

app.post('/usuarios',(req, res)=>{
    console.log(req.body);
    usuario.push(req.body);
    res.status(201).json({mensagem:"Cliente Cadastrado!"})
})

app.listen(3000, ()=>{
    console.log("Servidor Rodando!")
})
// http://localhost:3000