import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [blogBody, setBlogBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {  
    e.preventDefault();  

    const blog = { title, blogBody, author };

    setIsPending(true);

    fetch(`${import.meta.env.VITE_API_URL}api/v1/blogs/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('New blog added');
      setIsPending(false);
      navigate('/');  
    });
  };

  return (
    <div className="max-w-md my-0 mx-auto text-center">
      <h2 className="text-md font-bold text-[#f1356d] mb-7">
        Add a New Blog
      </h2>
      <form onSubmit={handleSubmit}>  
        <label htmlFor="blogtitle" className="text-left block">
          Blog title: 
        </label>
        <input
          type="text"
          required
          name="blogtitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-[1px] border-[#ddd] rounded-md w-full py-2 px-4 my-2 mx-0 box-border block"
        />
        <label htmlFor="blogbody" className="text-left block">
          Blog body: 
        </label>
        <textarea
          name="blogbody"
          required
          value={blogBody}
          onChange={(e) => setBlogBody(e.target.value)}
          className="border-[1px] border-[#ddd] rounded-md w-full py-2 px-4 my-2 mx-0 box-border block"
        ></textarea>
        <label htmlFor="blogauthor" className="text-left block">
          Blog author:
        </label>
        <input
          name="blogauthor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border-[1px] border-[#ddd] rounded-md w-full py-2 px-4 my-2 mx-0 box-border block"
        />

        {!isPending && (
          <button className="bg-[#f1356d] text-[#fff] border-0 p-2 rounded-lg cursor-pointer">
            Add Blog
          </button>
        )}
        {isPending && (
          <button
            disabled
            type="submit"
            className="bg-[#f1356d] text-[#fff] border-0 p-2 rounded-lg cursor-pointer"
          >
            Adding Blog...
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
