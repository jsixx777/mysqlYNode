import * as React from 'react';

export interface BlogCardProps {
    
}
 
export interface BlogCardState {
    
}
 
class BlogCard extends React.Component<BlogCardProps, BlogCardState> {
    constructor(props: BlogCardProps) {
        super(props);
        this.state = {
            card: []
        };
    }
    render() { 
        return ( 
            <main className="container">
                <section className="row my-3">
                    <h1 className="text-center">Play your card right!</h1>
                </section>
            </main>
         );
    }
}
 
export default BlogCard;