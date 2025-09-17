var jwt = require("jsonwebtoken");
let myController = (req, res) => {
  // var token = jwt.sign({ foo: 'asma' }, 'shhhhh');

  // let token = jwt.sign(
  //   {
  //     data: "Asma",
  //   },
  //   "shhh",
  //   { expiresIn: "10m" }
  // );
  // console.log(token);
  //verify:
  // var decoded = jwt.verify(
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiQXNtYSIsImlhdCI6MTc1ODEzMTE2MiwiZXhwIjoxNzU4MTMxNzYyfQ.iwrjJwXy0xXNY3ceSLc7rAUGnsj1Z4MMMowYJcprIUw",
  //   "shhh"
  // );

  // console.log(decoded);

  console.log("ami todo create kori");
  res.send("tumi jao shopping koro");
};

module.exports = myController;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiQWRpYmEiLCJpYXQiOjE3NTc5NjY0ODMsImV4cCI6MTc1Nzk3MDA4M30.GcG_p9slc7KjX3qpjIxbNtrVlTtBUrwsInUSZqRqey0

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiQWRpYmEiLCJpYXQiOjE3NTc5NjcwMjQsImV4cCI6MTc1Nzk3MDYyNH0.jEEwaow7t7Sw1TGwTCcSmntoTjFdAXY4wmlT8sGDBcY