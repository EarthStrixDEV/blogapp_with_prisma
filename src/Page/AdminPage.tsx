import React, {useState ,useEffect} from 'react'
import Swal from 'sweetalert2';

interface Post {
    id: number;
    title: string;
    content: string;
    published: boolean;
    reference: string;
    authorId: number;
}

function AdminPage() {
    const [postData ,setPostData] = useState([])
    
    useEffect(() => {
        (async() => {
            const res = await fetch('http://localhost:5000/post/getPosts')
            const data = await res.json()
            setPostData(data)
        })()
        
    }, [])

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
                <table className="w-full text-sm text-left mt-10">
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
                    <tbody>
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
                                    <td className="px-6 py-4 w-24 text-white text-base font-semibold text-wrap">
                                        {item.reference === null ? "No" : item.reference}
                                    </td>
                                    <td className="px-6 py-4 text-white text-base font-semibold">
                                        {item.published === false ? "Not Published" : "Published"}
                                    </td>
                                    <td className="px-6 py-4 text-white text-base font-semibold">
                                        {item.authorId}
                                    </td>
                                    <td className="px-6 py-4 text-white text-base font-semibold">
                                        <a className="text-lg text-secondary bg-button p-3 rounded-md border-0 hover:shadow-sm hover:shadow-yellow-200">Edit</a>
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