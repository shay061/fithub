var express = require("express");
var router = express.Router();
const userModel = require("./users");
const passport = require("passport");
const localStrategy = require("passport-local");


passport.use(new localStrategy(userModel.authenticate()));

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/aboutus", function (req, res) {
  res.render("about-us");
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.get("/register", function (req, res) {
  res.render("register");
});

router.get("/blogs", function (req, res) {
  res.render("blogs");
});

router.get("/dashboard/profile", isLoggedIn, async function (req, res) {
  const user = await userModel.findOne({ username: req.session.passport.user })
  res.render("profile", { user });
});

router.get("/dashboard/workout", isLoggedIn, async function (req, res) {
  const user = await userModel.findOne({ username: req.session.passport.user })
  res.render("workout", { user });
});

router.get("/dashboard/diet-info", isLoggedIn, async function (req, res) {
  const user = await userModel.findOne({ username: req.session.passport.user })
  res.render("diet-info", { user });
});

router.get("/dashboard/meditation", isLoggedIn, async function (req, res) {
  const user = await userModel.findOne({ username: req.session.passport.user })
  res.render("meditation", { user });
});

router.get("/dashboard/progress-tracker", isLoggedIn, async function (req, res) {
  const user = await userModel.findOne({ username: req.session.passport.user })
  res.render("progress-tracker", { user });
});

router.get("/dashboard/workout/beginner", isLoggedIn,async function (req, res) {
  const user = await userModel.findOne({ username: req.session.passport.user })
  res.render("beginner", { user });
})

router.get("/dashboard/workout/intermediate", isLoggedIn,async function (req, res) {
  const user = await userModel.findOne({ username: req.session.passport.user })
  res.render("intermediate", { user });
})

router.get("/dashboard/workout/advance", isLoggedIn,async function (req, res) {
  const user = await userModel.findOne({ username: req.session.passport.user })
  res.render("advance", { user });
})

router.post("/register", function (req, res, next) {
  const userData = new userModel({
    username: req.body.username,
    email: req.body.email,
    age: req.body.age,
    gender: req.body.gender,
    height: req.body.height,
    weight: req.body.weight,
    password: req.body.password,
  });
  userModel.register(userData, req.body.password).then(function () {
    passport.authenticate("local")(req, res, function () {
      res.redirect("/dashboard/profile");
    });
  });
});


router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard/profile",
    failureRedirect: "/login",
  }),
  function (req, res) { }
);



router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

module.exports = router;
