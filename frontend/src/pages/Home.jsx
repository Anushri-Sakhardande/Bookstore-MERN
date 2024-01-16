import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    
    <div className="p-4">
      <Header /> 
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8 text-white">Your Books</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-green-700 text-4xl" />
        </Link>
        
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing p-2">
          <thead>
            <tr>
              <th className="p-2 border-2 border-slate-600 rounded-md bg-white">No</th>
              <th className="border-2 border-slate-600 rounded-md bg-white">Title</th>
              <th className="border-2 border-slate-600 rounded-md max-md:hidden bg-white">
                Author
              </th>
              <th className="border-2 border-slate-600 rounded-md max-md:hidden bg-white">
                Publish Year
              </th>
              <th className="border-2 border-slate-600 rounded-md max-md:hidden bg-white">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index} >
                <td className="border-2 border-slate-600 rounded-md bg-white">
                  {index + 1}
                </td>
                <td className="border-2 border-slate-600 rounded-md bg-white">
                  {book.title}
                </td>
                <td className="border-2 border-slate-600 rounded-md max-md:hidden bg-white">
                  {book.author}
                </td>
                <td className="border-2 border-slate-600 rounded-md max-md:hidden bg-white">
                  {book.publishYear}
                </td>
                <td className="border-2 border-slate-600 rounded-md max-md:hidden bg-white">
                  <div className="flex justify-center gap-x-10 p-0 bg-white">
                    <Link to={`/books/show/${book._id}`}>
                      <BsInfoCircle className="text-gray-700 text-4xl" />
                    </Link>
                    <Link to={`/books/update/${book._id}`}>
                      <AiOutlineEdit className="text-blue-700 text-4xl" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-red-700 text-4xl" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
