import { itxClientDenyList } from "@prisma/client/runtime/library";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface User {
  id: number;
}

interface Post {
  title: string;
  content: string;
  published: boolean;
  reference: string;
  category: string;
  author?: User | null;
  authorId?: number;
}

function EditPost() {
  const params = useParams();
  const postId = params.postId;

  const [postData, setPostData] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [references, setReferences] = useState("");
  const [category, setCategory] = useState("");
  const [published, setPublished] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `http://localhost:5000/post/getPostById/${postId}`
      );
      const data = await res.json();
      setPostData(data);
    })()
  }, [postId])

  return (
    <div className="flex flex-col justify-center items-center p-10 h-screen w-full bg-background">
      {postData.map((post: Post) => (
        <form className="flex flex-col justify-center items-center bg-primary w-5/12 p-10 mt-24 mb-10 rounded-md">
          <div className="px-10 my-5">
            <h1 className="font-semibold text-center text-4xl text-button">
              Edit Post
            </h1>
          </div>
          <div className="w-96 my-4">
            <p className="text-md text-button text-lg font-semibold">Title</p>
            <input
              type="text"
              className="w-full text-lg p-2 caret-background rounded-xl outline-none transition-all ease-out focus:outline-2 focus:outline-button"
              value={post.title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="w-96 my-4">
            <p className="text-button text-lg font-semibold">Content</p>
            <textarea
              className="w-full text-lg p-2 caret-background rounded-xl outline-none focus:outline-2 transition-all ease-out focus:outline-button"
              name=""
              id=""
              cols={30}
              rows={5}
              onChange={(event) => setContent(event.target.value)}
              value={post.content}
            ></textarea>
          </div>
          <div className="w-96 my-4">
            <p className="text-md text-button text-lg font-semibold">
              Reference
            </p>
            <input
              type="text"
              className="w-full text-lg p-2 caret-background rounded-xl outline-none transition-all ease-out focus:outline-2 focus:outline-button"
              onChange={(event) => setReferences(event.target.value)}
              value={post.reference}
            />
          </div>
          <div className="w-96 my-4">
            <p className="text-md text-button text-lg font-semibold">
              Category
            </p>
            <select
              onChange={(event) => setCategory(event.target.value)}
              name=""
              id=""
              className="text-lg rounded-md p-2 outline-none focus:outline-2 focus:outline-button"
              value={post.category}
            >
              <option value="No Category">No Category</option>
              <option value="Game">Game</option>
              <option value="Computer & IT">Computer & IT</option>
              <option value="Engineering">Engineering</option>
              <option value="Engineering">Entertainment</option>
            </select>
          </div>
          <div className="w-96 my-4">
            <p className="text-button text-lg font-semibold">Publish Now</p>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="publish-checkbox"
                name="isPublished"
                className="h-10 w-10 rounded-full bg-gray-200 border-gray-300 focus:outline-2 focus:outline-button"
                checked={post.published}
                onChange={(event) => setPublished(event.target.checked)}
              />
            </label>
          </div>
          <div className="w-96 my-4">
            <button
              type="submit"
              className="bg-button w-32 p-3 text-xl font-bold rounded-md text-background hover:shadow-sm hover:shadow-button"
            >
              Post
            </button>
          </div>
        </form>
      ))}
    </div>
  );
}

export default EditPost;
