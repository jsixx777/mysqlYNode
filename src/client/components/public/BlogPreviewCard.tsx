import * as React from 'react';

export interface BlogPreviewCardProps {
    
}
 
export interface BlogPreviewCardState {
    
}
 
class BlogPreviewCard extends React.Component<BlogPreviewCardProps, BlogPreviewCardState> {
    constructor(props: BlogPreviewCardProps) {
        super(props);
        this.state = {
            preview: [],
        };
    }
    render() { 
        return ( 
            <main className="container">
                <section className="row my-3">
                    <h1 className="text-center">check out the previews!</h1>
                </section>
            </main>
         );
    }
}
 
export default BlogPreviewCard;