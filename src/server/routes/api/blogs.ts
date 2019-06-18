import * as express from 'express';

import DB from '../../db';
import { RequestHandler } from 'express-serve-static-core';



const router = express.Router();
const isAdmin: RequestHandler = (req, res,next) =>{
    console.log(req.user);
    if(!req.user || req.user.role !== 'guest'){
        return res.sendStatus(401);
    }else{
        return next();
    }
}

router.get('/', async(req, res, next) =>{
    console.log('nanu nanu');
    try{
        let blogs = await DB.Blogs.getAll();
        res.send(blogs);
    }catch(e){
        console.log(e);
        res.sendStatus(500);  
    };
    
})

router.get('/:id', isAdmin, async(req, res, next) =>{
    let id = req.params.id;
    try{
        let blog = await DB.Blogs.getSingleBlog(id);
        res.send(blog);
    }catch(e){
        console.log(e);
        res.sendStatus(500);  
    };
    
})




  
export default router;