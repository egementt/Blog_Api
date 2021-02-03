const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    postId:{
        type: Number,
        unique: true,
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    imgPath: {
        type: String,
        required: false
    }
},{collection: 'blogs', timestamps: true, _id: true});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;