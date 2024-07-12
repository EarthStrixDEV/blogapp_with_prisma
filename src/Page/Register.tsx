import React, {useState ,useEffect, FormEvent} from 'react'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
interface UserData {
    username: string;
    email: string;
    password: string;
}

function Register() {
    const [username ,setUsername] = useState("")
    const [email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const [randomLength ,setRandomLength] = useState(8)
    const [togglePasswordInput ,setTogglePasswordInput] = useState(false)

    async function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (username.length === 0) {
          Swal.fire({
            title: "Sign Up",
            icon: "error",
            text: "Username is required"
          })
          return
        }

        if (password.length === 0) {
          Swal.fire({
            title: "Sign Up",
            icon: "error",
            text: "Password is required"
          })
          return
        }

        if (email.length === 0) {
          Swal.fire({
            title: "Sign Up",
            icon: "error",
            text: "Email is required"
          })
          return
        }

        const formData: UserData = {
            username: username,
            email: email,
            password: password,
        }

        const res = await fetch('http://localhost:5000/user/register',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        if (res.status === 200) {
            Swal.fire({
                title: 'Sign Up',
                icon: 'success',
                text: "Add user successful"
            })
        } else if (res.status === 404) {
            Swal.fire({
                title: 'Something went wrong',
                icon: 'error',
                text: "Add user failed"
            })
        }

    }

    function randomPassword() {
      let ascii = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
      let result = ""
      for (let index = 0; index < randomLength; index++) {
        result += ascii[Math.floor(Math.random() * ascii.length)]
      }
      setPassword(result)
    }
  return (
    <div className='flex flex-col justify-center items-center p-10 h-screen w-full bg-background'>
      <form onSubmit={handleSubmitForm} className='flex flex-col justify-center items-center w-5/12 px-10 mb-10 rounded-md'>
        <div className='px-10 my-5'>
          <h1 className='font-semibold text-center text-4xl text-button'>Sign up</h1>
        </div>
        <hr className='border-text w-full my-3' />
        <div className='w-96 my-4'>
          <p className='text-md text-button text-lg font-semibold'>Username</p>
          <input type="text" onChange={(event) => setUsername(event.target.value)} className='w-full text-lg p-2 caret-background rounded-xl outline-none transition-all ease-out focus:outline-2 focus:outline-button'/>
        </div>
        <div className='w-96 my-4'>
          <p className='text-md text-button text-lg font-semibold'>Email</p>
          <input type="email" onChange={(event) => setEmail(event.target.value)} className='w-full text-lg p-2 caret-background rounded-xl outline-none transition-all ease-out focus:outline-2 focus:outline-button'/>
        </div>
        <div className='w-96 my-4'>
          <p className='text-md text-button text-lg font-semibold'>Password</p>
          <input type={togglePasswordInput === false ? "password" : "text"} value={password} className='w-full text-lg p-2 caret-background rounded-xl outline-none transition-all ease-out focus:outline-2 focus:outline-button' onChange={(event) => setPassword(event.target.value)} />
          <div className='flex flex-row justify-start items-center mt-3'>
            <button type='button' className='bg-button w-28 p-1 text-base font-bold rounded-tl-md rounded-bl-md text-background' onClick={randomPassword} >Random</button>
            <input 
              type='number'
              min={8} max={20} 
              className='w-26 rounded-tr-md rounded-br-md text-medium font-medium pl-3 h-8' 
              onChange={(event) => setRandomLength(parseInt(event.target.value))} 
            />
            <FontAwesomeIcon icon={faEye} size='lg' className='relative bottom-14 left-36 cursor-pointer p-3' onClick={() => setTogglePasswordInput(!togglePasswordInput)} />
          </div>
        </div>
        <div className='w-96 my-4'>
          <button type='submit' className='bg-button w-32 p-3 text-xl font-bold rounded-md text-background hover:shadow-sm hover:shadow-button'>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Register