// const express = require("express");
// const app = express();

// /**
//  * html rendering engine
//  */
// app.set("view engine", "ejs");

// /**
//  * '/' is the root of the directory
//  */
// app.get("/GregV-crypto/RealEstateRep", (req, res) => {
//   console.log("Here");
//   //send method seems pretty important
//   // res.send("Hello");
//   res.render("index", { text: "This text is coming from the server" });
// });

// //incorporate the other created routes
// const userRouter = require("./routes/user");

// //all outside created routes start with "users" as their route
// app.use("/users", userRouter);

// //listen for info on this port
// app.listen(3000);
