import * as mysql from 'mysql';
import config from '../config';
import Blogs from './blogs';
import Users from './users';
import AccessTokens from './accesstokens';

//export const Connection = mysql.createConnection(config.mysql);

//Connection.connect(err => {
//    if(err) console.log(err);
//});


export const pool = mysql.createPool(config.mysql);

export const Query = (query: string, values?: Array<string | number>)=>{
    return new Promise<Array<any>>((resolve, reject) =>{
        pool.query(query, values, (err, results) =>{
            if(err) reject(err);
            return resolve(results);
        })
    })
}
export default{
    Blogs, 
    Users,
    AccessTokens
}