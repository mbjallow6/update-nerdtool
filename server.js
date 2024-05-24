const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/programs', express.static(path.join(__dirname, 'programs')));

app.get('/programs', (req, res) => {
    fs.readdir(path.join(__dirname, 'programs'), (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory');
        }
        res.json(files);
    });
});

app.listen(1234, () => {
    console.log('Server is running on http://localhost:1234');
});
