const User = require("../models/user.js");

module.exports.renderSignup = (req,res) => {
    res.render("users/signup.ejs");
}

module.exports.signup = async (req,res) => {
    let {username, email, password} = req.body;
    let user = new User({
        email : email,
        username : username
    });
    const registerdUser = await User.register(user, password);
    req.login(registerdUser, (err) => {
        if(err){
            next(err);
        }
        req.flash("success", "Welcome to Wanderlust");
        res.redirect("/listing");
    })
}

module.exports.renderLogin = (req,res) => {
    res.render("users/login.ejs");
}

module.exports.login = (req,res) => {
    req.flash("success", "Welcome back to Wanderlust");
    let redirectUrl = res.locals.redirectUrl || "/listing";
    res.redirect(redirectUrl);
}

module.exports.logout = (req,res) => {
    req.logout((err) => {
        if(err){
            next(err);
        }
        req.flash("success", "You are logged out");
        res.redirect("/listing");
    })
}
