const e = require('express');
const {json} = require('express');
const User = require('../../Api/models/userModel');

const router = require('express').Router();
const Blog = require('../models/blog_model');

router.get('/', async (req,res) => {
    const allPosts = await Blog.find();
    res.json({allPosts});
});

router.get('/:postId', async (req,res) => {
    try {
    const getPost = await Blog.find({postId: req.params.postId});  
    res.json(getPost);
    } catch (error) {
        res.json(error);
    }
});

router.post('/', async(req,res) => {
    try {
        const addedPost = new Blog(req.body);
        const result = await addedPost.save();
        res.json(result);
    } catch (error) {
        console.log("An error occured when adding post");
        res.json(error);
    }
});

router.delete('/:id', async (req,res) => {
    try {
        const result = await User.findByIdAndDelete({_id: req.params.id});
        if(result){
            return res.json({
                msg: "Post deleted."
            });
        }else{
            return res.status(404).send.json({
                msg: "Post not found. ID:"+id
            })
        }
    } catch (error) {
        console.log("An error occured when deleting post");
    }
});

module.exports = router;