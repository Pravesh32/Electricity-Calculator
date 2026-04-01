const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// Bill calculation function
function calculateBill(units) {
  let bill = 0;

  if (units <= 20) {
    bill = units * 4;
  } else if (units <= 50) {
    bill = (20 * 4) + (units - 20) * 7;
  } else if (units <= 100) {
    bill = (20 * 4) + (30 * 7) + (units - 50) * 10;
  } else {
    bill = (20 * 4) + (30 * 7) + (50 * 10) + (units - 100) * 12;
  }

  return bill;
}

// API route
app.post("/calculate", (req, res) => {
  const prev = parseInt(req.body.prev);
  const curr = parseInt(req.body.curr);

  const units = curr - prev;
  const bill = calculateBill(units);

  res.json({ units, bill });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});