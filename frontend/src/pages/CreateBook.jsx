import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post(`http://localhost:5555/books`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("Something went wrong!!");
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <Header />
      <BackButton />
      <h1 className="text-3xl text-white my-8">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-slate-600 rounded-xl w-[600px] p-4 mx-auto bg-white">
        <div className="my-8">
          <label className="text-xl mr-4">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-4 py-2 w-full border-2 border-gray-500 rounded-xl text-gray-500"
          ></input>
        </div>
        <div className="my-8">
          <label className="text-xl mr-4">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="px-4 py-2 w-full border-2 border-gray-500 rounded-xl text-gray-500"
          ></input>
        </div>
        <div className="my-8">
          <label className="text-xl mr-4">Published Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="px-4 py-2 w-full border-2 border-gray-500 rounded-xl text-gray-500"
          ></input>
        </div>
        <button className="p-2 m-5 bg-green-500 rounded-xl text-white" onClick={handleSaveBook}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
