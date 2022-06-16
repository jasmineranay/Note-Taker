const express = require('express')
const app = express();
const path = require('path')

// Import Routes
const apiRoutes = require('./Develop/routes/apiRoutes')
const htmlRoutes = require('./Develop/routes/htmlRoutes')

// Middleware for parsing JSON and URLencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// PORT Info
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))

// Call Routes
app.use("/", apiRoutes);
app.use("/", htmlRoutes);

// GET Route for index.html
// Needs to be last
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})