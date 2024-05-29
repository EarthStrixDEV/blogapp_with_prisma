import React, {useState ,useEffect} from 'react'
import Swal from 'sweetalert2'

function Login() {
  return (
    <div className='flex flex-row justify-between w-[800px] h-[800px] bg-primary'>
        <div className='flex flex-col items-center p-5 bg-secondary'>
            <form>
                <div>
                    <p></p>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <p></p>
                    <input type="text" name="" id="" />
                </div>
            </form>
        </div>
        <div>
            <form>
                <div>
                    <p></p>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <p></p>
                    <input type="text" name="" id="" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login