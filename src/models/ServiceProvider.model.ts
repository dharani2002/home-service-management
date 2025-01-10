import mongoose, { Schema, Document, StringExpressionOperatorReturningArray } from "mongoose";
import { ServiceType } from "./Service.model";

export interface ServiceProvider extends Document{
    name:string;
    serviceType:ServiceType;
    isAvailable:boolean;
    createdAt:Date;
    updatedAt:Date;
}

const serviceProviderSchema:Schema<ServiceProvider>=new Schema({
    name:{
        type:String,
        required:true
    },
    serviceType:{
        type:String,
        enum: ["plumbing" , "gardening" , "furnishing" , "wiring" , "cleaning"],
        required:true
    },
    isAvailable:{
        type:Boolean,
        deafult:true
    },
},{timestamps:true})

const ServiceProviderModel = (mongoose.models.User as mongoose.Model<ServiceProvider>) || mongoose.model<ServiceProvider>("ServiceProvider", serviceProviderSchema)

export default ServiceProviderModel;
