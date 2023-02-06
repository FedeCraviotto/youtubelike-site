import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        unique: false,
    },
    image:{
        type: String,
    },
    suscribers:{
        type: Number,
        default: 0
    },
    subscriberUsers:{
        // Here will go all the channels a user suscribes to.
        // Default value is empty
        type: [String]
    },
}, {
    timestamps: true
});

// mongoose.model('modelNameInDB', UserSchema)
export default mongoose.model('User', UserSchema);