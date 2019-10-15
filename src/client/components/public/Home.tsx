import * as React from "react";
import { Link } from "react-router-dom";

export interface HomeProps {}

export interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    //this.state = { :  };
  }
  render() {
    return (
      <main>
        <h1 className="text-center">Welcome!</h1>
        <section>
          <Link to={"/blogs"} className="btn btn-primary">
            Get List of Blogs
          </Link>
        </section>
      </main>
    );
  }
}

export default Home;
