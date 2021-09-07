import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FullPost from "../components/posts/FullPost";

const PostDetail =() =>{

    const [errorMsg, setErrorMsg] = useState(null)
    const [postData, setPostData] = useState(null)

    const params = useParams()

    const fetchPostHandler = useCallback(async ()=>{
        try {
            const resp = await fetch(`/posts/${params.postId}`)
            if(!resp.ok){
                throw new Error("Cant load post from server...") 
            }

            const data = await resp.json()
            console.log(data)
            if(data.post){
               setPostData(data.post) 
            }else{
                console.log(data.error)
                throw new Error(data.error) 
            }
            

        } catch (error) {
            setErrorMsg(error.message)
        }
    },[params.postId])

    useEffect(()=>{
        fetchPostHandler()
    },[fetchPostHandler])

    return <FullPost post={postData} error={errorMsg}/>
};

export default PostDetail;