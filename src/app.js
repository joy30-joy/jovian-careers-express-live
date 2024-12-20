const express = require('express'); // Import Express
const path = require('path'); // Import Path module

const app = express(); // Create an Express application

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html')); // Correct path joining
});

// Port configuration
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
