import React, {useState ,useEffect} from 'react'
import Swal from 'sweetalert2'

interface UserData {
    username: string;
    email: string;
    password: string;
}

function Register() {
    const [username ,setUsername] = useState("")
    const [email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")

    async function handleSubmitForm() {
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
                text: ""
            })
        } else if (res.status === 404) {
            Swal.fire({
                title: 'Something went wrong',
                icon: 'error',
                text: ''
            })
        }
    }
  return (
    <div className='flex flex-col justify-center items-center p-10 h-screen w-full bg-background'>
      <form className='flex flex-col justify-center items-center w-5/12 px-10 mb-10 rounded-md'>
        <div className='px-10 my-5'>
          <h1 className='font-semibold text-center text-4xl text-button'>Sign up</h1>
        </div>
        <hr className='border-text w-full my-3' />
        <div className='w-96 my-4'>
          <p className='text-md text-button text-lg font-semibold'>Username</p>
          <input type="text" className='w-full text-lg p-2 caret-background rounded-xl outline-none transition-all ease-out focus:outline-2 focus:outline-button'/>
        </div>
        <div className='w-96 my-4'>
          <p className='text-md text-button text-lg font-semibold'>Email</p>
          <input type="email" className='w-full text-lg p-2 caret-background rounded-xl outline-none transition-all ease-out focus:outline-2 focus:outline-button'/>
        </div>
        <div className='w-96 my-4'>
          <p className='text-md text-button text-lg font-semibold'>Password</p>
          <input type="password" className='w-full text-lg p-2 caret-background rounded-xl outline-none transition-all ease-out focus:outline-2 focus:outline-button'/>
        </div>
        <div className='w-96 my-4'>
          <button type='submit' className='bg-button w-32 p-3 text-xl font-bold rounded-md text-background hover:shadow-sm hover:shadow-button'>Sign Up</button>
        </div>
        
      </form>
    </div>
  )
}

export default Register