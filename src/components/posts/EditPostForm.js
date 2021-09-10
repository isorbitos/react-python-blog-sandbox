import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const EditPostForm =(params)=>{

    const {post, error} = params



    const titleRef = useRef('');
    const subtitleRef= useRef('')
    const usernameRef= useRef('')
    const imageUrlRef = useRef('')
    // const blogContentRef = useRef('')
    const [blogBody, setBlogBody] = useState('')

    const history = useHistory()

    const handleOnChange = (e, editor)=>{
        const data = editor.getData()
        setBlogBody(data)
    }

    const submitHandler =async (event) =>{
        event.preventDefault()
        const blogPost = {
            // title: titleRef.current.value,
            // subtitle: subtitleRef.current.value,
            // author: usernameRef.current.value,
            // img_url: imageUrlRef.current.value,
            body: blogBody,
        }
        const resp = await fetch(`/edit-post/${post.id}`, {
            method: 'POST',
            body: JSON.stringify(blogPost),
            headers:{
                'Content-Type': 'application/json' 
            }
        })

        const data = await resp.json()
        console.log(data.message)
        history.replace('/')
    }

    if(!post && error)
    return (<h1>{error}</h1>)
    if(!post){
        return (<h1>loading...</h1>)
    }

    return (
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="inputTitle" className="form-label">
              Blog Title
            </label>
            <input type="text" className="form-control" id="inputTitle" ref={titleRef} />
          </div>
    
          <div className="mb-3">
            <label htmlFor="inputSubtitle" className="form-label">
              Subtile
            </label>
            <input type="text" className="form-control" id="inputSubtitle" ref={subtitleRef} />
          </div>
    
          <div className="mb-3">
            <label htmlFor="inputUsername" className="form-label">
              Your Name
            </label>
            <input type="text" className="form-control" id="inputUsername" ref={usernameRef} />
          </div>
          <div className="mb-3">
            <label htmlFor="inputImageUrl" className="form-label">
              Image URL
            </label>
            <input type="text" className="form-control" id="inputImageUrl" ref={imageUrlRef} />
          </div>
    
          <div className="mb-3">
          <label htmlFor="inputBody" className="form-label">
              Blog Content
            </label>
              <CKEditor editor={ClassicEditor}  id="inputBody" onChange={handleOnChange} data={blogBody} data={post.body} />
          </div>
    
          <button type="submit" className="btn btn-primary">
            Edit
          </button>
        </form>
      );
}

export default EditPostForm;