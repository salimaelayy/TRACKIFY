import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState('https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mx-auto w-64 text-center">
      <div className="relative w-52">
        <img className="w-52 h-52 rounded-full absolute" src={image} alt="" />
        <label htmlFor="fileInput" className="w-52 h-52 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
          <img className="hidden group-hover:block w-12" src="https://www.svgrepo.com/show/33565/upload.svg" alt="" />
        </label>
        <input id="fileInput" type="file" className="hidden" onChange={handleUpload} />
      </div>
    </div>
  );
};

export default ImageUpload;
