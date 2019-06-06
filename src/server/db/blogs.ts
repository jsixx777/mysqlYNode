//import { Connection } from './index';
import { Query } from './index';

//export const all = async () => {
 //   return new Promise((resolve,reject) => {

 //       Connection.query('Select * from blogs', (err,results) => {
 //           if(err){
 //               return reject(err);
 //           }
 //           resolve(results);
  //      });
 //   });
//}

const getAll = async () => Query ("SELECT * FROM blogs");
const getSingleBlog = async (id:number) => Query(`SELECT * FROM blogs WHERE id = ${id}`);
const postBlog = async (title:string, content:string) => Query(`INSERT INTO blogs (title,content) VALUES("${title}","${content}")`);
const editBlog = async (title:string, content:string, id:number) => Query(`UPDATE blogs SET title = "${title}", content = "${content}", id ="${id}"`);
const deleteBlog = async (id:number) => Query(`DELETE FROM blogs WHERE id = ${id}`);


export default {
    
    getAll,
    getSingleBlog,
    postBlog,
    editBlog,
    deleteBlog
}