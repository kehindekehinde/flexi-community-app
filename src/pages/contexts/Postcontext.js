import { createContext, useState, useEffect } from "react";
import PostDataService from "../../components/share/PostDataService";


const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const { getPost } = PostDataService;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const data = await PostDataService.getAllPosts();
    console.log(data.docs);
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
 
  const deleteHandler = async (id) => {
    await PostDataService.deletePost(id);
    getPosts();
  };

  return (
    <PostContext.Provider
      value={{
        posts,
      
        deleteHandler,
        getPosts,
        getPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
export default PostContext;
