import mongoose,{Schema, Document, StringExpressionOperatorReturningArray} from "mongoose";

export interface User extends Document{
    username:string;
    email:string;
    password:string;
    fullname:string;
    refreshToken:string;
    createdAt:Date;
    updateAt:Date;
    serviceHistory:Request[];
}//avatar
const userSchema:Schema<User>=new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/.+\@.+\..+/, "please use a valid email address"]
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    serviceHistory:[{
        type:Schema.Types.ObjectId,
        ref:"Service"
    }]
},{timestamps:true})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", userSchema)

export default UserModel;