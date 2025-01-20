import mongoose,{ Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
},
{
    timestamps:true
});


userSchema.statics.signup = async function(email, password){
    
    const exist = await this.findOne({email})
    if(exist){
        throw Error('Email already in use')
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({firstName, lastName,email, password:hash});

    return user;
}


const User = mongoose.model('User',userSchema);
export default User;