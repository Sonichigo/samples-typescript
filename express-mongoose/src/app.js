const express = require('express');
require('./db/connection');
const student = require('./models/students');
const router = require('./routes/routes');
require('keploy-deduplicate-tests/dist/integrations/express/register')

const app = express();

app.use(express.json());
app.use(router);

app.listen(8000, () => {
    console.log(`Listening on port 8000`);
})