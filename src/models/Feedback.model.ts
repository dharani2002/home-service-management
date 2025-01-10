import mongoose, { Schema, Document, StringExpressionOperatorReturningArray } from "mongoose";
import { User } from "./User.model"
import { Service } from "./Service.model";

type Rating="poor"|"good"|"excellent"|"average"
export interface Feedback extends Document{
    content:string;
    owner:User;
    createdAt:Date;
    updateAt:Date;
    rating:Rating;
    service:Service;
}
const feedbackSchema:Schema<Feedback>= new Schema({
    content:{
        type:String,
        required:true,
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    rating:{
        type:String,
        enum:["poor","average","good","excellent"]
    },
    service:{
        type:Schema.Types.ObjectId,
        ref:"Service"
    }
},{timestamps:true})

const feedbackModel = (mongoose.models.User as mongoose.Model<Feedback>) || mongoose.model<Feedback>("Feedback", feedbackSchema)

export default feedbackModel;