import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';




class Login extends React.Component<ILoginProps, ILoginState> {
    constructor(props: ILoginProps) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    async handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();


    }

    render() {
        return (
            <main className="container">
                <section className="row-my-3">
                    <div className="col-md-12">
                        <form className="form-group border border-primary rouned shadow-lg p-3" onSubmit={(e) => this.handleLoginSubmit(e)}>
                            <label>Email</label>
                            <input
                                type="text"
                                className="form-control p1 mb-1"
                                placeholder="Enter a Title..."
                                value={this.state.email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}></input>
                            <label>Password</label>
                            <textarea
                                rows={5}
                                className="form-control p1 mb-1"
                                placeholder="Write Your Blog..."
                                value={this.state.password}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ password: e.target.value })}></textarea>
                            <button type="submit" className="btn btn-warning d-block border border-primary mt-2 p-2 shadow">Login</button>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

interface ILoginProps { };
interface ILoginState { email: string, password: string };

export default Login;