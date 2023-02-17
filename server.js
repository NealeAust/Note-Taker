// Dependencies
const express = require("express")
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Initialize express app
const app = express();
const PORT =3001;

// Middleware for parsing of URL encoded data 
app.use(express.urlencoded({ extended: true }));

// Middleware for parsing of JSON data
app.use(express.json());

app.use(express.static('public'));

// Route middleware
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Setup Listener
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});