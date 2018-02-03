const PORT = process.env.PORT || 8000;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res, next) => {
    res.send({
        message: `Hello ${req.body.email}!. You was registed.`
    });
});

app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`);
});
