import { db } from "../../firebase";
import {
  getDocs,
  collection,
  doc,
  deleteDoc,
  addDoc,
  updateDoc,
  getDoc,
  orderBy,
  query,
} from "firebase/firestore";

const postCollectionRef = collection(db, "posts");
class PostDataService {
  addPosts = (newPost) => {
    return addDoc(postCollectionRef, newPost);
  };
  updatePost = (id, updatedPost) => {
    const postCheckDoc = doc(db, "posts", id);
    return updateDoc(postCheckDoc, updatedPost);
  };
  deletePost = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const postCheckDoc = doc(db, "posts", id);
      return deleteDoc(postCheckDoc);
    }
  };
  getAllPosts = () => {
    return getDocs(query(postCollectionRef, orderBy("timestamp", "desc")));
  };
  getPost = (id) => {
    const postCheckDoc = doc(db, "posts", id);
    return getDoc(postCheckDoc);
  };
}

export default new PostDataService();
