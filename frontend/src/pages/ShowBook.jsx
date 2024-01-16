import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import Header from "../components/Header";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data.book);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="p-4">
      <Header />
      <BackButton />
      <h1 className="text-3xl text-white my-8">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-slate-600 rounded-xl w-[600px] p-4 mx-auto bg-white">
          <div className="my-4">
            <span className="text-xl mr-4">Id</span>
            <span className="text-xl mr-4 text-gray-500">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4">Title</span>
            <span className="text-xl mr-4 text-gray-500">{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4">Author</span>
            <span className="text-xl mr-4 text-gray-500">{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4">Publish Year</span>
            <span className="text-xl mr-4 text-gray-500">
              {book.publishYear}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4">Create Time</span>
            <span className="text-xl mr-4 text-gray-500">
              {new Date(book.createdAt).toLocaleString()}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4">Last Updated</span>
            <span className="text-xl mr-4 text-gray-500">
              {new Date(book.updatedAt).toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
