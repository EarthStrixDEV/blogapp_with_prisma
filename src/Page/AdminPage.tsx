import React, {useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

interface Post {
    id: number;
    title: string;
    content: string;
    published: boolean;
    reference: string;
    authorId: number;
    timeStamp: string;
}

function AdminPage() {
    const [postData ,setPostData] = useState([])
    const params = useParams()
    const adminKey = params.adminKey
    
    useEffect(() => {
        (async() => {
            const res = await fetch('http://localhost:5000/post/getPosts')
            const data = await res.json()
            setPostData(data)
        })()
    }, [postData])

    useEffect(() => {
        (async() => {
            const res = await fetch(`http://localhost:5000/user/adminValidate`,{
                method: 'POST',
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  adminKey: adminKey
                })
            })
            
            if (res.status === 404) {
                window.location.href = "/"
            }
        })()
    }, [adminKey])

    async function handleDeleteSubmit(postId: number) {
        try {
            const res = await fetch(`http://localhost:5000/post/deletePost/${postId}`,{
                method: 'POST',
            })
            
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Post deleted successfully'
                })
                setTimeout(() => {
                    window.location.reload()
                }, 2000)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Post delete failed'
                })
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div className="flex flex-col p-10 h-screen w-full bg-background">
                <table className="w-full text-sm text-left mt-14">
                    <thead className="text-lg text-button uppercase bg-primary">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Content
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Reference
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Published
                            </th>
                            <th scope="col" className="px-6 py-3">
                                TimeStamp
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Author Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action (Edit)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action (Delete)
                            </th>
                        </tr>
                    </thead>
                    <tbody className='overflow-y-scroll h-10'>
                        {
                            postData.map((item:Post) => (
                                <tr className="bg-secondary border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                        {item.id}
                                    </th>
                                    <td className="px-6 py-4 text-white text-base font-semibold">
                                        {item.title}
                                    </td>
                                    <td className="px-6 py-4 text-white text-base font-semibold">
                                        {item.content}
                                    </td>
                                    <td className="px-6 py-4 max-w-56 text-white text-base font-semibold text-wrap truncate">
                                        {item.reference === null ? "No" : item.reference}
                                    </td>
                                    <td className="px-6 py-4 text-white text-base font-semibold">
                                        {item.published === false ? "Not Published" : "Published"}
                                    </td>
                                    <td className="px-6 py-4 text-white text-base font-semibold">
                                        {item.timeStamp.replace("T"," ").slice(0,19)}
                                    </td>
                                    <td className="px-6 py-4 text-white text-base font-semibold">
                                        {item.authorId}
                                    </td>
                                    <td className="px-6 py-4 text-white text-base font-semibold">
                                        <a href={`/editPost/${item.id}`} className="text-lg text-secondary bg-button p-3 rounded-md border-0 hover:shadow-sm hover:shadow-yellow-200">Edit</a>
                                    </td>
                                    <td className="px-6 py-4 text-white text-base font-semibold">
                                        <button onClick={() => handleDeleteSubmit(item.id)} className="text-lg text-secondary bg-button p-3 rounded-md border-0 hover:shadow-sm hover:shadow-yellow-200">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminPage