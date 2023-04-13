const express = require("express");
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 5050;

app.use(express.json());
// app.use(cors());
app.use(cors())
// const moviesRoutes = require('./routes/moviesRoute');
const moviesRoutes = require('./routes/moviesRoute');

// basic home route
// app.get('/', (req, res) => {
//   res.send('Welcome to my API');
// });

// app.use("/movies", moviesRoutes)
app.use('/movies', moviesRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});

