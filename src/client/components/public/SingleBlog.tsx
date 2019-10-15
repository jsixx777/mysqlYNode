import * as React from "react";
import { json } from "../utils/api";
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";
//import BlogCard from './BlogCard'

class SingleBlog extends React.Component<ISingleBlogProps, ISingleBlogState> {
  constructor(props: ISingleBlogProps) {
    super(props);
    this.state = {
      blog: {
        id: null,
        title: null,
        body: null,
        authorid: null,
        _created: null,
        firstname: null,
        lastname: null
      }
      //tags: []
    };
  }

  async componentWillMount() {
    let id = this.props.match.params.id;
    try {
      let [blog]: any = await json(`/api/blogs/${id}`);
      //let tags = await json(`/api/blogtags/${id}`)

      this.setState({ blog });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <main className="container">
        <section className="row my-3">
          <div className="col md-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{this.state.blog.title}</h4>
                <p className="card-text">{this.state.blog.body}</p>
              </div>
            </div>
          </div>
        </section>
        <Link to={"/blogs"} className="btn btn-success">
          Previous Screen
        </Link>
      </main>
    );
  }
}
interface ISingleBlogProps extends RouteComponentProps<{ id: string }> {}
interface ISingleBlogState {
  blog: {
    id: number;
    title: string;
    body: string;
    authorid: number;
    _created: Date;
    firstname: string;
    lastname: string;
  };
}
export default SingleBlog;
