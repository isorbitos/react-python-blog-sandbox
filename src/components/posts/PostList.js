import { Fragment, useEffect, useState } from "react";
import PostItem from "./PostItem";

const PostList = ()=>{

    const [allPost, setAllPost] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


// author: "Angela Yu"
// body: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify."
// date: "August 24, 2009"
// id: 1
// img_url: "https://images.unsplash.com/photo-1530482054429-cc491f61333b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
// subtitle: "Who knew that cacti lived such interesting lives."
// title: "The Life of Cactus"


    const fetchPostsHandler = async ()=>{
        setIsLoading(true)
        try {
            const resp = await fetch('/allPosts')
            if(!resp.ok){
                throw new Error("Something bad is comming!!! muhahahaha") 
            }

            const data = await resp.json()
            const transformedPosts = data.posts.map(postData=>{
                return {
                    id: postData.id,
                    author: postData.author,
                    title: postData.title,
                    subtitle: postData.subtitle,
                    date: postData.date
                }
            })
            setAllPost(transformedPosts)
            setIsLoading(false)

        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
    }

    useEffect(()=>{
        fetchPostsHandler()
    },[])

    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {allPost.map((post)=>(
                            <PostItem key={post.id} post={post}/>
                        ))}
                        <div className="clearfix">
                             <a className="btn btn-primary float-end" href="/newpost">Create New Post</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default PostList;