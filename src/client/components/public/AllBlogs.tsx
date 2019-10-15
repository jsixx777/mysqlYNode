import React from "react";
import { json } from "../utils/api";
import { Link } from "react-router-dom";

//import BlogPreviewCard from '../public/BlogPreviewCard';

export interface AllBlogsProps {}

export interface AllBlogsState {
  blogs: any; //adjust later
}

class AllBlogs extends React.Component<AllBlogsProps, AllBlogsState> {
  constructor(props: AllBlogsProps) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  async componentDidMount() {
    try {
      let blogs = await json("api/blogs");
      this.setState({ blogs });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <main className="container">
        <section className="row my-3">
          <ul className="list-group">
            {this.state.blogs.map((blog: any) => {
              return (
                <li
                  key={blog.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {blog.title}{" "}
                  <Link to={`/single/${blog.id}`} className="btn btn-primary">
                    Blog Info
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
        <Link to={"/"} className="btn btn-success">
          Back To Home
        </Link>
      </main>
    );
  }
}

interface IAllBlogsProps {}
interface IAllBlogsState {
  blogs: {
    id: number;
    title: string;
    blogs: any;
  };
}

export default AllBlogs;
