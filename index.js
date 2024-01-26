// Load the express module
const express = require("express");
// Create an instance of express
// Configure CORS
const corsHelper = require("./cors");
const app = express();
corsHelper.configure(app);

// Mount routes from modules
const doctors = [
  {
    name: "Dr. Kshama Mangal",
    expertise: "M.Sc (Advanced Sports Therapy & Rehabilitation Science)",
    city: "Bangalore",
  },
  {
    name: "Dr. Ritika Saxena",
    expertise: "M.Sc (Neuro Rehabitilation)",
    city: "Mumbai",
  },
  {
    name: "Dr. Namita Singh",
    expertise: "PMPTh (Musculoskeletal)",
    city: "Bangalore",
  },
];
// Create an instance of a Router
const router = express.Router();

// Specify the port to use for this server
const port = 3002;

// Configure location(s) of static HTML files
app.use(express.static("public"));

/**
 * GET
 * @returns index.html file
 */
app.get("/doctors/city/:city", (req, res, next) => {
  res
    .status(200)
    .send(
      doctors.filter(
        (doc) => doc.city.toLowerCase() === req.params.city.toLowerCase()
      )
    );
});

// Create web server to listen on the specified port
app.listen(port, function () {
  console.log(`AdvWorks web server is running on http://localhost:${port}.`);
});

module.exports = app;
