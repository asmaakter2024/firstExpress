let test = (req, res, next) => {
  //   //res.send("Hello Developers");
  //   // let { title } = req.body;
  //   // // console.log(title);
  //   // res.send({ success: "Todo created" });

  //   //middleware kivabe kaj kore:
  //   // console.log("ami middleware");
  //   // let fever = 100;
  //   // if (fever > 103) {
  //   //   res.send("tumi vitore aste parbe na");
  //   // } else {
  //   //   next();
  //   // }

  //   //api ke sequre korte:
  console.log(req.headers.authorization);

  let token = req.headers.authorization;
  //verify:
  var decoded = jwt.verify(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiQXNtYSIsImlhdCI6MTc1ODEzMTE2MiwiZXhwIjoxNzU4MTMxNzYyfQ.iwrjJwXy0xXNY3ceSLc7rAUGnsj1Z4MMMowYJcprIUw",
    "shhh"
  );

  console.log(decoded);
  // if(token == "Asma@2025")
  if (decoded.data) {
    next();
  } else {
    res.send("you are not authorized");
  }
};

module.exports = test;
