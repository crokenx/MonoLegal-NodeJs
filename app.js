import './databaseConnections/mongoConnection.js';

import express from "express";
import cors from "cors";

import router from './routes/routes.js';


const app = express();
const port = 3000;

// Configure CORS
app.use( cors() );

// Lecture y parse body
app.use( express.json() );

// Import routes
app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
