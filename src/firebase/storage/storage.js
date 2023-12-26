import {  getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { app } from '../firebase';
import { INewsArticle } from "@/app/types/types";

export const db = getFirestore(app);

const addFavorite = async (props) => {
  try {
    const docRef = await addDoc(collection(db, "favorites"), {
      ...props
    })
    console.log("Document written with ID: ", docRef.id);
  }catch(err){
    console.error("Error adding document: ", err)
  }
}

const getAllFavorite = async () => {
  try {
    const docs = await getDocs(collection(db, "favorites"));
    const favorites = [];
    docs.forEach((doc) => {
      favorites.push(doc.data());
    });
    return favorites;
  }catch(err){
    console.error("Error adding document: ", err)
  }
}

const removeFavorite = async (id) => {
  try {
    await deleteDoc(doc(db, "favorites", id));
    console.log("Document successfully deleted!");
  }catch(err){
    console.error("Error deleting document: ", err);
  }
}

export { 
  addFavorite, 
  getAllFavorite, 
  removeFavorite 
};