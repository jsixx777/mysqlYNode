import * as React from 'react';
import { json, SetAccessToken, User } from '../utils/api';
import { RouteComponentProps } from 'react-router-dom';





class Login extends React.Component<ILoginProps, ILoginState> {
    constructor(props: ILoginProps) {
        super(props);
        this.state = {
            email: null,
            password: null,
            loginStatus: false
        };
    }

    private alert: JSX.Element = null;
    private loggingIn: boolean = false;

    componentDidMount(){
        if(User && User.role === 'admin'){
            this.props.history.push('/admin');
        }else{

        }
    }

    async handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        this.setState({ loginStatus: false })

        if(this.loggingIn) return;

        try{
            this.loggingIn = true;
            let result = await json('auth/login', 'POST', {
                email: this.state.email,
                password: this.state.password
            });

            if(result){
                SetAccessToken(result.token, { userid: result.userid, role: result.role })
                if(result.role === 'admin'){
                    this.props.history.push('/admin');
                }else{
                    this.props.history.push('/');
                }
            }else{
                    this.setState({ loginStatus: true });
                
            }
        }catch(e){
            console.log(e);
            this.setState({ loginStatus: true });
            throw e;
        }finally{
            this.loggingIn = false;
        }



    }

    render() {
        if(this.state.loginStatus){
            this.alert = <div className="alert-alert danger p-1 m-3" role='alert'>Invalid Credentials</div>
        } 
        return (
            <main className="container">
                <section className="row-my-3">
                    <div className="col-md-12">
                        <form className="form-group border border-primary rouned shadow-lg p-3" onSubmit={(e) => this.handleLoginSubmit(e)}>
                            <label>Email</label>
                            <input
                                type="text"
                                className="form-control p1 mb-1"
                                placeholder="Enter your email..."
                                value={this.state.email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}></input>
                            <label>Password</label>
                            <textarea
                                rows={5}
                                className="form-control p1 mb-1"
                                placeholder="Enter your password..."
                                value={this.state.password}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ password: e.target.value })}></textarea>
                            <button type="submit" className="btn btn-warning d-block border border-primary mt-2 p-2 shadow">Login</button>
                            {this.alert}
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

interface ILoginProps extends RouteComponentProps { };
interface ILoginState { email: string, password: string, loginStatus: boolean };

export default Login;