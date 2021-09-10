import { Fragment } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useHistory } from 'react-router';

const PostItem = (props)=>{

    const match = useRouteMatch()

    const [error, setError] = useState(null)

    const history = useHistory()

    const deltePostHandler = async()=>{
        try {
            const resp = await fetch(`/delete/${props.post.id}`, { method: 'DELETE' })
            if(!resp.ok){
                throw new Error("Something bad is comming!!! muhahahaha") 
            }

            const data = await resp.json()
            console.log(data)
            history.replace('/')



        } catch (error) {
            setError(error.message)
        }
    }

    return(
        <Fragment>
            <div className="post-preview">
                <Link to={`${match.path}/${props.post.id}`}>
                    
                <h2 className="post-title">{props.post.title}</h2>
                <h3 className="post-subtitle">{props.post.subtitle} </h3>
                
                </Link>
                
                <p className="post-meta">Posted by
                <a href="/">{ props.post.author }</a>
                on {props.post.date} <button onClick={deltePostHandler}><i class="fas fa-times"></i></button> </p>
                
            </div>
            <hr />
        </Fragment>
        
    )
};

export default PostItem;