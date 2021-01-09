const express=require('express');
const {createPost , getPosts,postsByUser,postById,isPoster,deletePost,updatePost }=require('../controllers/post');
const { requireSignin } = require("../controllers/auth");
const {createPostValidator}=require('../validator');
const { userById } = require("../controllers/user");

const router=express.Router();

router.get('/', getPosts);
router.post('/post/new/:userId', requireSignin , createPost , createPostValidator);//position of createPost is imp
router.get('/post/by/:userId', requireSignin , postsByUser); 
router.put("/post/:postId", requireSignin, isPoster, updatePost);
router.delete("/post/:postId", requireSignin, isPoster, deletePost);

//any route containing :userId, our app will first execute userById() method
router.param("userId",userById);
//any route containing :postId, our app will first execute postById() method
router.param("postId",postById);

module.exports=router;