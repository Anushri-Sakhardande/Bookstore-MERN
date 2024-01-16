import React,{useEffect,useState} from 'react'
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import Header from '../components/Header';
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert("Something went wrong!!");
        console.log(error);
      });
  }

  return (
      <div className="p-4">
        <Header/>
        <BackButton />
        <h1 className="text-3xl text-white my-8">Delete Book</h1>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col border-2 border-slate-600 rounded-xl w-[600px] p-4 mx-auto bg-white">
            <h3 className='text-xl'>Do you want to delete this book?</h3>
            <button className='p-2 m-5 bg-red-500 rounded-xl text-white' onClick={handleDeleteBook}>Yes</button>
        </div>
      </div>
  )
}

export default DeleteBook