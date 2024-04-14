

import React, { useState } from 'react';
import {MdModeEdit} from 'react-icons/md'
import Profile from "../assets/profile.jpg"
import {  useDispatch } from 'react-redux';
import { setImgaeProfile } from '../redux/slices/userSlice/userSlice';

const ImageUpload = (handleEditClick) => {
  const [image, setImage] = useState(Profile);
  const dispatch = useDispatch()

  const handleUpload = (e) => {
    const file = e.target.files[0];


    dispatch(setImgaeProfile(file))


    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mx-auto w-64 text-center ">
      <div className="relative w-52">
        <img className="w-52 h-52 rounded-full border-8 border-accent absolute" src={image} alt="" />
        <label htmlFor="fileInput" className="w-52 h-52 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
          <img className="hidden group-hover:block w-12" src="https://www.svgrepo.com/show/33565/upload.svg" alt="" />
        </label>
        <input id="fileInput" type="file" className="hidden" onChange={handleUpload} />
        <div onClick={handleEditClick}>
          <MdModeEdit className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
