import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router';


const PostForm = () => {

    const history = useHistory()

    const titleRef = useRef('');
    const subtitleRef= useRef('')
    const usernameRef= useRef('')
    const imageUrlRef = useRef('')
    // const blogContentRef = useRef('')
    const [blogBody, setBlogBody] = useState()

    const handleOnChange = (e, editor)=>{
        const data = editor.getData()
        setBlogBody(data)
    }

    const submitHandler =async (event) =>{
        event.preventDefault()
        const blogPost = {
            title: titleRef.current.value,
            subtitle: subtitleRef.current.value,
            author: usernameRef.current.value,
            img_url: imageUrlRef.current.value,
            body: blogBody,
            date: new Date().getTime().toString()
        }
        console.log(blogPost.img_url)
        const resp = await fetch('/new-post', {
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
          <CKEditor editor={ClassicEditor}  id="inputBody" onChange={handleOnChange}  />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default PostForm;
