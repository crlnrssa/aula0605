const express = require('express');
const axios = require('axios');
const app = express();
const host = '0.0.0.0';
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Novo endpoint para consumir a API Flask
app.get('/data', async (req, res) => {
    try {
        // Consumindo a API Flask no container `flask_api`
        const response = await axios.get('http://flask_api:5000');  // Substitua '/sua-rota-aqui' pela sua rota da API Flask
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao consumir a API Flask:', error);
        res.status(500).json({ error: 'Erro ao consumir a API Flask' });
    }
});

app.listen(port, host, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
