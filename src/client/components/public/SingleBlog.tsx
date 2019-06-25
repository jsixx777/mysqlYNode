import * as React from 'react';
import {json} from '../utils/api';
import { RouteComponentProps } from 'react-router-dom';
import BlogCard from './BlogCard'

export interface SingleBlogProps {
    
}
 
export interface SingleBlogState {
    
}
 
class SingleBlog extends React.Component<ISingleBlogProps, ISingleBlogState> {
    constructor(props: ISingleBlogProps) {
        super(props);
        this.state = {
            blog: {
                id: null,
                title: null,
                body: null,
                authorid: null,
                _created: null,
                firstname: null,
                lastname: null
            },
            tags: []
        };
    }

    async componentWillMount(){
        this.props.match.params.id
        try{
            let blog = await json(`/api/blogs/${id}`);
            let tags = await json(`/api/blogtags/${id}`)

            this.setState({ blog, tags })
        }catch(e){
            console.log(e);
        }
    }
    render() { 
        return ( 
            <main className="container">
                <section className="row my-3">
                    <div className="col md-12">
                        <BlogCard blog={this.state.blog} tags={this.state.tags} />
                    </div>
                </section>
            </main>
         );
    }
}
 interface ISingleBlogProps extends RouteComponentProps<{ id:string}>{}
 interface ISingleBlogState{
     blog:{
         
     }
 }
export default SingleBlog;