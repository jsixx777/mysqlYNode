import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';




class Admin extends React.Component<IAdminProps, IAdminState> {
    constructor(props: IAdminProps) {
        super(props);
        this.state = {
            title: null,
            body: null
        };
    }

    async handleBlogSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let blog: { authorid: number, title: string, body: string } = {
            authorid: 1,
            title: this.state.title,
            body: this.state.body
        };

        try {
            let result = await fetch("/api/blogs", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEzLCJhY2Nlc3N0b2tlbmlkIjo0LCJ1bmlxdWUiOiJiNTk1ZmVkM2EyODVjZGNmMDFkYTMwMDI2MDA3ZDA1YTliNWIwYzYwNWRiMmU0YTdhMzU4NDYxMGI3ZWUzMjZkIiwiaWF0IjoxNTYwMzEyMzI2fQ.oVMahFpj7Wd9K5Wj8l4Xpe60Cxg7LNSK7nVX_kp-pGM"
                },
                body: JSON.stringify(blog)
            });
        } catch (e) {
            throw e;
        }
    }

    render() {
        return (
            <main className="container">
                <section className="row-my-3">
                    <div className="col-md-12">
                        <form className="form-group border border-primary rouned shadow-lg p-3" onSubmit={(e) => this.handleBlogSubmit(e)}>
                            <label>Title</label>
                            <input
                                type="text"
                                className="form-control p1 mb-1"
                                placeholder="Enter a Title..."
                                value={this.state.title}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ title: e.target.value })}></input>
                            <label>Content</label>
                            <textarea
                                rows={5}
                                className="form-control p1 mb-1"
                                placeholder="Write Your Blog..."
                                value={this.state.body}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ body: e.target.value })}></textarea>
                            <button type="submit" className="btn btn-warning d-block border border-primary mt-2 p-2 shadow">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

interface IAdminProps { };
interface IAdminState { title: string, body: string };
export default Admin;