import React from 'react';
import { json } from '../utils/api';
import BlogPreviewCard from '../public/BlogPreviewCard';

export interface AllBlogsProps {
    
}
 
export interface AllBlogsState {
    
}
 
class AllBlogs extends React.Component<AllBlogsProps, AllBlogsState> {
    constructor(props: AllBlogsProps) {
        super(props);
        this.state = {
            blogs: []
        };
    }

    async componentDidMount(){
        try{
            let blogs = await json('https://ghibliapi.herokuapp.com/films');
            this.setState({blogs});
        }catch(e){
            console.log(e);
        }

    }
    render() { 
        return (
            <main className="container">
                <section className="row my-3">
                    {this.state.blogs.map(blog=> <BlogPreviewCard key={blog.id} blog={blog} />)}
                </section>
            </main>
         );
    }
}
 
interface IAllBlogsProps { }
interface IAllBlogsState {
    blogs: {
        id: number,
        title: string,
        blogs: any

    }
}

export default AllBlogs;





