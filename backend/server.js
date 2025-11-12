 require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose")
const cors=require("cors");
const talentRoutes=require("./routes/talents")

const app=express();
app.use(express.json())
app.use(cors())
app.use("/api/talents",talentRoutes)

const PORT=process.env.PORT || 5000;
const MONGO_URL=process.env.MONGO_URL

mongoose.connect(MONGO_URL).then(()=>{
    console.log("MONGODB CONNECTED")
    app.listen(PORT,()=>{
        console.log(`server is running on port${PORT}`)
    })
}).catch(()=>{
    console.log("momgodb connection falied")
})