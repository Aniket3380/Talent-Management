const mongoose=require("mongoose")


const TalentSchema=mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,unique:true,trim:true,lowercase:true},
    skills:{type:[String],default:[]},
    experience:{type:Number,default:0},
    createdAt:{type:Date,default:Date.now}
})

// TalentSchema.index({email:1},{unique:true})

module.exports=mongoose.model('Talent',TalentSchema)