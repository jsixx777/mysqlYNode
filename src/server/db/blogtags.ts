import { Query } from './index';

const getBlogTags = (pizza:number)=> Query (`CALL spGetBlogTags(${pizza})`);





export default {
    getBlogTags
}