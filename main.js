const path = require('path');
const fs = require('fs')
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3366;

const FILE_INDEX = path.join(__dirname, 'html', 'index.html');


app.get("/", (req, res) => {
    fs.readFile(FILE_INDEX, (err, file) => {
        if(err) throw err;
        res.writeHead(200, {'Constent-Type': 'text/html'});
        res.end(file);
    });
})

app.use(express.static(__dirname));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));