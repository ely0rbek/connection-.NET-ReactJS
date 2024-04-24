import React, {  useState ,useEffect  } from 'react'
import {useNavigate} from 'react-router-dom'
import Input from './input'
import {jwtDecode} from 'jwt-decode';
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate();


    const OnSendLogin= async (e)=>{
        e.preventDefault()
        const login={ email: email , password: password}
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(login)
        };
        fetch('https://localhost:5000/api/Users/Login', requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("token",data.token)
                const decodedToken = jwtDecode(data.token); 
            if(decodedToken.role==='admin'){
                navigate('/admin');
            }
            else if(decodedToken.role==='student'){
                navigate('/student');
            }
            });
        }
    
    return (
        <form className='container w-25 mt-3'>
            <div className='d-flex'>

            <img className="mb-4 m-auto justify-content-center" src="https://logowik.com/content/uploads/images/letter-e3192.logowik.com.webp" alt="" width="120" height="90" />
            </div>
            <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

            <Input state={email} id={'1'} type="email" setState={setEmail} label={'Email...'} />
            <Input state={password} id={'2'} type="password" setState={setPassword} label={'Password...'} />

            <button className="btn btn-primary w-100 py-2 mt-3" type="submit" onClick={OnSendLogin}>Sign in</button>
        </form>
    )
}

export default Login