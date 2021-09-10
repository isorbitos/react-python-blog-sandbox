import { Fragment, useCallback, useEffect, useState } from "react"
import { useParams } from "react-router"
import EditPostForm from "../components/posts/EditPostForm"

const EditPost = ()=>{

  const [errorMsg, setErrorMsg] = useState(null)
  const [postData, setPostData] = useState(null)

  const [isLoding, setIsLoading] = useState(false)


  const params = useParams()

  console.log(params.postId)

  const fetchPostHandler = useCallback(async ()=>{
    try {
      setIsLoading(true)
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

    return(
        <Fragment>
        <header className="masthead">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="page-heading">
                  <h1>Edit post</h1>
                  <span className="subheading">
                    You can do it!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
            <EditPostForm post={postData} error={errorMsg}/>
            </div>
          </div>
        </div>
      </Fragment>
        
    )

}

export default EditPost;