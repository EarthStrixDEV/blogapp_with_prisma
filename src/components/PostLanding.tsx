import React, {useState ,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'

interface Post {
  id: number;
  title: string;
  content: string;
  reference: string;
  authorId: number;
  timeStamp: any;
}

function PostLanding() {
  const [postData ,setPostData] = useState([])

  useEffect(() => {
    (
      async () => {
        try {
          const res = await fetch('http://localhost:5000/post/getPosts')
          const data = await res.json()
          setPostData(data)
        } catch (error) {
          console.error(error);
        }
      }
    )()
  }, [])

  return (
    <div>
      {
        postData?.map((item: Post) => (
          <div key={item.id} className='flex flex-col justify-between bg-primary p-5 rounded-lg my-5'>
            <div className="flex flex-col justify-center">
              <div className='flex flex-row justify-between'>
                <h1 className="text-xl mb-4 text-white font-semibold">{item.title}</h1>
                <p className='text-xl font-normal text-white'>เผยแพร่เมื่อ {item.timeStamp.replace('T',' เวลา ').slice(0 ,24)} น.</p>
              </div>
              <h3 className="text-base text-white font-normal">{item.content}</h3>
            </div>
            <div className='flex flex-row justify-between'>
              <div>
                <button className='text-lg text-slate-800 bg-button p-3 rounded-md mt-5 border-0 hover:shadow-sm hover:shadow-yellow-200'>ชอบข่าวนี้หรือไม่</button>
                <a href={item.reference} target={'_blank'} rel={'noreferrer'} className='text-lg text-white bg-secondary p-3 rounded-md mt-5 mx-3 border-0 hover:shadow-sm hover:shadow-slate-300'>อ่านเพิ่มเติม</a>
              </div>
              <div className='flex flex-row justify-center items-end'>
                <p className='mx-3 text-white text-xl font-semibold'>0</p>
                <FontAwesomeIcon icon={faThumbsUp} size='2x' color='white' />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default PostLanding