// Memanggil module expressjs
const express = require('express');

// Memanggil route/rute yang sudah dibuat di folder routes
const userRoute = require('./routes/user.route')

// Set app dengan expressjs
const app = express();

// Set json sebagai pertukaran data
app.use(express.json());

// Set route user di app
app.use(userRoute)

// Define port untuk akses ke api
const port = 8000;

// Run app
app.listen(port, () => {
    console.log('Server started on port : '+ port);
    console.log(`Server started on port : ${port}`);
});
