import mongoose, { Schema, Document, StringExpressionOperatorReturningArray } from "mongoose";
import { User } from "./User.model"
import { ServiceProvider } from "./ServiceProvider.model";

export type ServiceType="plumbing"| "gardening" |"furnishing" |"wiring" | "cleaning";

export interface Service extends Document{
    serviceType: ServiceType;
    description:string;
    createdBy:User;
    providedBy:ServiceProvider[];
    isCompleted:boolean;
    createdAt:Date;
    updatedAt:Date;
}

const serviceSchema: Schema<Service> = new Schema({
    serviceType: {
        type: String,
        enum: ["plumbing", "gardening", "furnishing", "wiring", "cleaning"],
        required: true
    },
    description:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        deafult:false
    },
    providedBy:[{
        type:Schema.Types.ObjectId,
        ref:"ServiceProvider"
    }]
},{timestamps:true})

const ServiceModel = (mongoose.models.User as mongoose.Model<Service>) || mongoose.model<Service>("Service", serviceSchema)

export default ServiceModel;