import { Fragment } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const PostItem = (props)=>{

    const match = useRouteMatch()

    return(
        <Fragment>
            <div className="post-preview">
                <Link to={`${match.path}/${props.post.id}`}>
                    
                <h2 className="post-title">{props.post.title}</h2>
                <h3 className="post-subtitle">{props.post.subtitle} </h3>
                
                </Link>
                
                <p className="post-meta">Posted by
                <a href="/">{ props.post.author }</a>
                on {props.post.date}</p>
            </div>
            <hr />
        </Fragment>
        
    )
};

export default PostItem;