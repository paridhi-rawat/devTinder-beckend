 const adminAuth = (req,res,next)=>{
    console.log("admin auth is getting checked")
    const token = "xyz";
    const isAuthenticate = token === 'xyz';
    if(!isAuthenticate){
        res.status(400).send("invalid auth")
    }else{
        next()
    }
}

module.exports = {adminAuth}