import React from 'react';

export interface AllBlogsProps {
    
}
 
export interface AllBlogsState {
    
}
 
class AllBlogs extends React.Component<AllBlogsProps, AllBlogsState> {
    constructor(props: AllBlogsProps) {
        super(props);
        //this.state = { :  };
    }
    render() { 
        return (
            <h1 className="text-center">All Blogs</h1>
         );
    }
}
 
export default AllBlogs;





