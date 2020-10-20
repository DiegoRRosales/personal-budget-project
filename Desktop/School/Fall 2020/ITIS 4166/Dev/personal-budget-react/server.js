const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
app.use(cors());

app.use('/', express.static('public'));

app.get('/budget', (req, res) => {
    res.json(budgetdata);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});