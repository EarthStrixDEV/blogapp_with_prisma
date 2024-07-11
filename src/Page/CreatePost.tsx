import React, {useState , FormEvent} from 'react'
import Swal from 'sweetalert2'

interface User {
  id: number;
}

interface Post {
  title: string;
  content: string;
  published: boolean;
  reference: string | null;
  category: string | null;
  author?: User | null;
  authorId?: number | null;
}

function CreatePost() {
  const [title ,setTitle] = useState('')
  const [content ,setContent] = useState('')
  const [references ,setReferences] = useState('')
  const [category ,setCategory] = useState('')
  const [published ,setPublished] = useState(false)

  function handleSubmitPost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (title.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'title is required'
      })
      return
    }

    if (content.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'content is required'
      })
      return
    }

    if (references.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'references is required'
      })
      return
    }

    (
      async() => {
        const formData:Post = {
          title: title,
          content: content,
          published: published,
          reference: references,
          category: category,
          authorId: 97
        }
        
        try {
          const res = await fetch('http://localhost:5000/post/createPost',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
          })
          
          if (res.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Post Alert',
              text: "Post successfully created"
            })
            setTimeout(() => {
              window.location.reload()
            }, 2000)
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Post Alert',
              text: "Post failed to create"
            })
          }
          
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Post Alert',
            text: "Post failed to create"
          })

          console.error(error);
        }
      }
    )()
  }

  return (
    <div className='flex flex-col justify-center items-center p-10 h-screen w-full bg-background'>
      <form className='flex flex-col justify-center items-center w-5/12 p-10 mt-24 mb-10 rounded-md' onSubmit={handleSubmitPost}>
        <div className='px-10 my-5'>
          <h1 className='font-semibold text-center text-4xl text-button'>Create Post</h1>
        </div>
        <hr className='border-text w-full my-3' />
        <div className='w-96 my-4'>
          <p className='text-md text-button text-lg font-semibold'>Title</p>
          <input type="text" className='w-full text-lg p-2 caret-background rounded-xl outline-none transition-all ease-out focus:outline-2 focus:outline-button' onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className='w-96 my-4'>
          <p className='text-button text-lg font-semibold'>Content</p>
          <textarea className='w-full text-lg p-2 caret-background rounded-xl outline-none focus:outline-2 transition-all ease-out focus:outline-button' name="" id="" cols={30} rows={5} onChange={(event) => setContent(event.target.value)}></textarea>
        </div>
        <div className='w-96 my-4'>
          <p className='text-md text-button text-lg font-semibold'>Reference</p>
          <input type="text" className='w-full text-lg p-2 caret-background rounded-xl outline-none transition-all ease-out focus:outline-2 focus:outline-button' onChange={(event) => setReferences(event.target.value)} />
        </div>
        <div className='w-96 my-4'>
          <p className='text-md text-button text-lg font-semibold'>Category</p>
          <select onChange={(event) => setCategory(event.target.value)} name="" id="" className='text-lg rounded-md p-2 outline-none focus:outline-2 focus:outline-button'>
            <option value="No Category">No Category</option>
            <option value="Game">Game</option>
            <option value="Computer & IT">Computer & IT</option>
            <option value="Engineering">Engineering</option>
            <option value="Engineering">Entertainment</option>
          </select>
        </div>
        <div className='w-96 my-4'>
          <p className='text-button text-lg font-semibold'>Publish Now</p>
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" id="publish-checkbox" name="isPublished" className="h-10 w-10 rounded-full bg-gray-200 border-gray-300 focus:outline-2 focus:outline-button" onChange={(event) => setPublished(event.target.checked)} />
          </label>
        </div>
        <div className='w-96 my-4'>
          <button type='submit' className='bg-button w-32 p-3 text-xl font-bold rounded-md text-background hover:shadow-sm hover:shadow-button'>Post</button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost