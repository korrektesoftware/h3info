// Projekt installiert mit:
// npm install express netlify-lambda serverless-http

const express = require('express');
const serverless = require('serverless-http');
const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        'class':'hi!'
    });
});
router.get('/valeska', (req, res) => {
    res.json({
        'name':'Valeska',
        'class':'Knight',
        'spec':'Archers',
        'skill1':'Basic Leadership',
        'skill2':'Basic Archery',
        'spell':'-'
    });
});

app.use('/.netlify/functions/api/', router);

module.exports.handler = serverless(app);

