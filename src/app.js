const express = require('express'); // Import Express
const path = require('path'); // Import Path module
const mustacheExpress = require('mustache-express');
const JOBS = require('./jobs');

const app = express(); // Create an Express application

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', `${__dirname}/pages`);
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

app.get('/', (req, res) => {
    res.render('index', { jobs: JOBS});
});

app.get('/jobs/:id', (req, res) => {
    const id = req.params.id;
    const matchedJob = JOBS.find(job => job.id.toString() === id);
    res.render('job', { job: matchedJob});
})

// Port configuration
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
