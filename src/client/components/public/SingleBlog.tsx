import * as React from 'react';

export interface SingleBlogProps {
    
}
 
export interface SingleBlogState {
    
}
 
class SingleBlog extends React.Component<SingleBlogProps, SingleBlogState> {
    constructor(props: SingleBlogProps) {
        super(props);
        //this.state = { :  };
    }
    render() { 
        return ( 
            <h1 className="text-center">One Single Blog</h1>
         );
    }
}
 
export default SingleBlog;