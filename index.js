require('dotenv').config();
const app = require("./server");

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`\n -*-*- server is one port ${port} -*-*-\n`))