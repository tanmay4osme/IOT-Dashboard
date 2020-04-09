const express= require('express');
const router=express.Router();
const Post=require('../models/Post');


//get all posts
//router.get('/posts',(req,res)=>{
router.get('/',async (req,res)=>{
    //res.send('We are on posts');
    try{
        const posts= await Post.find();//return all posts
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

router.get('/specific',(req,res)=>{
    res.send('specific posts');
});

//submits post
router.post('/',async (req,res)=>
{
    //console.log(req.body);
    const post=new Post({
        title: req.body.title,
        description:req.body.description
    });
    try{
    const savedPost= await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message:err});
    }
    /*.then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.json({message:err});
    })*/
});

//specific posts
router.get('/:postId', async (req,res)=>
{
    //console.log(req,params.postId);
    try{
    const post= await Post.findById(req,params.postId);
    res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

//Delete post
router.delete('/:postId', async (req,res)=>
{
    //console.log(req,params.postID);
    try{
    const removedPost= Post.remove({_id: req.params.postId});
    res.json(removedPost);
}catch(err){
    res.json({message:err});
}
});
module.exports=router;