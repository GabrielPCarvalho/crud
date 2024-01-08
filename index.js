const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['NodeJS', 'JavaScript', 'React Native'];

// Retorna um curso

server.get('/cursos/:index', (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);

});

// Retorna todos os cursos

server.get('/cursos', (req, res) => {
  return res.json(cursos);
});

// Cria um novo curso
server.post('/cursos', (req, res) => {
  const { name } = req.body;

  cursos.push(name);

  return res.json(cursos);
});

// Atualiza um curso
server.put('/cursos/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

// Deleta um curso
server.delete('/cursos/:index', (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);

  return res.json({ message: 'Curso deletado com sucesso' });
})

server.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));