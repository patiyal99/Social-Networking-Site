const express=require('express');
const {createPost , getPosts}=require('../controllers/post');
const { requireSignin } = require("../controllers/auth");
const {createPostValidator}=require('../validator');
const { userById } = require("../controllers/user");

const router=express.Router();

router.get('/', getPosts);
router.post('/post/new/:userId', requireSignin , createPost , createPostValidator);//position of createPost is imp

//any route containing :userId, our app will first execute userById() method
router.param("userId",userById);

module.exports=router;