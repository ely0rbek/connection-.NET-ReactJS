import React, {  useState  } from 'react'
import {useNavigate} from 'react-router-dom'
import Input from './input'
import {v4 as uuid} from 'uuid'
const Register = () => {
    const [name,setName]=useState('')
    const [status,setStatus]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [age,setAge]=useState('');
    const [userRole,setUserRole]=useState('')

    const navigate = useNavigate();

    const OnSendRegister= async (e)=>{
        e.preventDefault()
        const register=
        { 
            fullName:name,
            email: email , 
            password: password,
            status:status,
            age: parseInt(age),
            roles:[`${userRole}`]
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(register)
        };
        fetch('https://localhost:5000/api/Users/Register', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));

            navigate('/login');
        }



    return (
    <form className='container w-25 mt-3'>
            <div className='d-flex'>

            <img className="mb-4 m-auto justify-content-center" src="https://logowik.com/content/uploads/images/letter-e3192.logowik.com.webp" alt="" width="120" height="90" />
            </div>
            <h1 className="h3 mb-3 fw-normal text-center">Please sign up</h1>

            <Input state={name} id={uuid()} setState={setName} label={'Name...'} />
            <Input state={email} id={uuid()} type="email" setState={setEmail} label={'Email...'} />
            <Input state={password} id={uuid()} type="password" setState={setPassword} label={'Password...'} />
            <Input state={status} id={uuid()} setState={setStatus} label={'Status...'} />
            <Input state={age} id={uuid()} setState={setAge} label={'Age...'} />
            <Input state={userRole} id={uuid()} type="text" setState={setUserRole} label={'User Roles...'} />
            <button className="btn btn-primary w-100 py-2 mt-3" type="submit" onClick={OnSendRegister}>Sign up</button>
        </form>
  )
}

export default Register