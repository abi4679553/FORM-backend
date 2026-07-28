const Listen = async(app)=>{
    try{
        const port = process.env.PORT
        if(!app){
          console.log("app is verified sucessfully")  
        }
        if(!port){
              console.log("port is verified successfully")
        }
        app.listen(process.env.PORT,()=>{
              console.log(` Server is runnning on port : ${port}`);
        })

    }
    catch(err){
         console.error("networ error".err.message)
    }
}

module.exports = Listen;