const express = require('express');
const app = express();
const port = 6000;
const db = require('./config/db');
const cors = require('cors');

app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.use('/', require('./routes/userRoutes'));

app.listen(port, (error) => {
    if (error) {
        console.log(error);
        return false;
    }
    console.log(`Server started on port ${port}`);
});