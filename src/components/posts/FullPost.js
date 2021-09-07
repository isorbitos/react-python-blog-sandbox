import { Fragment } from "react";

const FullPost = (props) => {

    const {post, error} = props


    if(!post && error)
    return (<h1>{error}</h1>)
    if(!post){
        return (<h1>loading...</h1>)
    }

    

  return (
    <Fragment>
      <header className="masthead">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-heading">
                <h1>{post.title}</h1>
                <h2 className="subheading">{post.subtitle}</h2>
                <span className="meta">
                  Posted by
                  <a href="/authorFB">{post.author}</a>
                  on {post.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <p>{post.body}</p>
              <hr />
              <div className="clearfix">
                <a className="btn btn-primary float-right" href="/editPost">
                  Edit Post
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Fragment>
  );
};

export default FullPost;
