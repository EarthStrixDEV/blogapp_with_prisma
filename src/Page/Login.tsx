import React, {useState ,useEffect, FormEvent} from 'react'
import Swal from 'sweetalert2'

interface UserDataLogin {
  username: string;
  password: string;
}

function Login() {
  const [username ,setUsername] = useState("")
  const [password ,setPassword] = useState("")

  async function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (username.length === 0) {
      Swal.fire({
        title: "Sign In",
        icon: "error",
        text: "Username is required"
      })
      return
    }

    if (password.length === 0) {
      Swal.fire({
        title: "Sign In",
        icon: "error",
        text: "Password is required"
      })
      return
    }
    
    const res = await fetch("http://localhost:5000/user/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })

    if (res.status === 200) {
      window.location.href = "/"
    } else if (res.status === 404) {
      Swal.fire({
        title: "Sign In",
        icon: "error",
        text: "Invalid username or password"
      })
      return
    }
  }
  return (
    <div className='flex flex-col justify-center items-center p-10 h-screen w-full bg-background'>
      <form onSubmit={handleSubmitForm} className='flex flex-col justify-center items-center w-5/12 px-10 mb-10 rounded-md'>
        <div className='px-10 my-5'>
          <h1 className='font-semibold text-center text-4xl text-button'>Sign In</h1>
        </div>
        <hr className='border-text w-full my-3' />
        <div className='w-96 my-4'>
          <p className='text-md text-button text-lg font-semibold'>Username</p>
          <input type="text" onChange={(event) => setUsername(event.target.value)} className='w-full text-lg p-2 caret-background rounded-xl outline-none transition-all ease-out focus:outline-2 focus:outline-button'/>
        </div>
        <div className='w-96 my-4'>
          <p className='text-md text-button text-lg font-semibold'>Password</p>
          <input type="password" onChange={(event) => setPassword(event.target.value)} className='w-full text-lg p-2 caret-background rounded-xl outline-none transition-all ease-out focus:outline-2 focus:outline-button'/>
        </div>
        <div className='w-96 my-4'>
          <button type='submit' className='bg-button w-32 p-3 text-xl font-bold rounded-md text-background hover:shadow-sm hover:shadow-button'>Sign In</button>
        </div>
        <div className='w-96 my-2'>
            <p className='text-button text-base font-medium'>If you have no account yet ,Sign Up <a href="/register" className='text-button underline'>Here</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login