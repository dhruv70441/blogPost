import mongoose,{ Schema } from 'mongoose'

const blogSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    blogBody:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    }
},{
    timestamps: true
})

const blogModel = mongoose.model('Blog', blogSchema);
export default blogModel;