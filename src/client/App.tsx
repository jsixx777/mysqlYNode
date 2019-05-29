import * as React from 'react';

import './scss/app';

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = { blogs: [] };
    }

    async componentWillMount() {
        let r = await fetch('/api/blogs');
        let blogs = await r.json();
        this.setState({ blogs })
    }

    render () {
        return (
            <main className="container">
                <h1 className="covalence-blue">My Blog</h1>
                <ul className="list-group">
                    {this.state.blogs.map(blog => {
                        return <li className="list-group-item">{blog.title}</li>
                    })}
                </ul>
            </main>
        )
    }
}

interface IAppProps {

}

interface IAppState {
    blogs: Array<{title: string, body: string}>;
}