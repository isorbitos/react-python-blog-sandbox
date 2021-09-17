import { useHistory } from "react-router";
import { useRef } from "react/cjs/react.development";

const RegisterForm = ()=>{

    const history = useHistory()
    
    const usernameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const submitHandler =async (event)=>{
        event.preventDefault()
        const user = {
            email: emailRef.current.value,
            name: usernameRef.current.value,
            password: passwordRef.current.value,
        }
        const resp = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers:{
                'Content-Type': 'application/json' 
            }
        })

        const data = await resp.json()
        console.log(data)
        history.replace('/')

    }
    
    return(
        <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" ref={emailRef} />
            </div>

            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" ref={passwordRef} />
            </div>

            <div className="mb-3">
                <label htmlFor="inputUsername" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputUsername" ref={usernameRef} />
            </div>

            <button type="submit" className="btn btn-primary">
            Submit
            </button>

        </form>
    )
}

export default RegisterForm;