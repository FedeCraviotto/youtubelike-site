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
        // Los suscriptores de este usuario van a subir ese numero
        type: Number,
        default: 0
    },
    subscribedUsers:{
        // Here will go all the channels a user suscribes to.
        // Default value is empty
        // Van los IDs de los canales a los que este usuario se suscribio
        type: [String]
    },
}, {
    timestamps: true
});

// mongoose.model('modelNameInDB', UserSchema)
export default mongoose.model('User', UserSchema);