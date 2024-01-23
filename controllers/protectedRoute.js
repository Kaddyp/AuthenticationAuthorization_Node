
const protectedRoute = (req,res) => {
    try{
        console.log("you r authorize user so now you can access our page. protected route is working..");
        res.json({
            message: "This is protcted route, your authorize user so now you can access our page.",
            user: req.user
        })
    } catch (error) {
        console.log("error",error);
    }
}

module.exports = {protectedRoute};