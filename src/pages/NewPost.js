import { Fragment } from "react";
import PostForm from "../components/posts/PostForm";

const NewPost = () => {
  return (
    <Fragment>
      <header className="masthead">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="page-heading">
                <h1>New Post</h1>
                <span className="subheading">
                  You're going to make a great blog post!
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <PostForm />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewPost;
