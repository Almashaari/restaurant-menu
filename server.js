const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "seven-spoons",
    password: "123123",
    port: 5432,
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});