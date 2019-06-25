import * as React from 'react';
import {json, User} from '../utils/api';
import { RouteComponentProps } from 'react-router-dom';




class Admin extends React.Component<IAdminProps, IAdminState> {
    constructor(props: IAdminProps) {
        super(props);
        this.state = {
            title: null,
            body: null,
            saveStatus: null
        };
    }
    private alert: JSX.Element = null;
    private saving: boolean = false;

    componentDidMount(){
        if(!User || User.userid === null || User.role != 'admin' )
        this.props.history.replace('/login')
    }

    async handleBlogSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(this.saving) return;

        let blog: { authorid: number, title: string, body: string } = {
            authorid: User.userid,
            title: this.state.title,
            body: this.state.body
        };

        try {
            this.saving = true;
            let result = await json('/api/blogs', 'POST', blog);
            if(result){
                this.setState({
                    title: "",
                    body: "",
                    saveStatus: 'success'
                })
            }else{
                this.setState({ saveStatus: 'error' })
            }
            //let result = await fetch("/api/blogs", {
            //    method: "POST",
            //    headers: {
            //        "Content-type": "application/json",
            //        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEzLCJhY2Nlc3N0b2tlbmlkIjo0LCJ1bmlxdWUiOiJiNTk1ZmVkM2EyODVjZGNmMDFkYTMwMDI2MDA3ZDA1YTliNWIwYzYwNWRiMmU0YTdhMzU4NDYxMGI3ZWUzMjZkIiwiaWF0IjoxNTYwMzEyMzI2fQ.oVMahFpj7Wd9K5Wj8l4Xpe60Cxg7LNSK7nVX_kp-pGM"
            //    },
            //    body: JSON.stringify(blog)
            //});
        } catch (e) {
            this.setState({ saveStatus: 'error' })
            throw e;
        }finally{
            this.saving = false;
        }
    }

    render() {

        if(this.state.saveStatus === 'successful'){
            this.alert = <div className="alert-success p-1 m-3" role='alert'>Blog Added</div>
        }else if(this.state.saveStatus === 'error'){
            this.alert = <div className="alert-danger p-1 m-3" role='alert'>Error Nothing Accomplished Here</div>
        }
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
                            {this.alert}
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

interface IAdminProps extends RouteComponentProps { };
interface IAdminState { title: string, body: string, saveStatus: string };
export default Admin;