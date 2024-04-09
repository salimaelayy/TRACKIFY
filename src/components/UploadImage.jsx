// import React, { useState } from 'react';


// const ImageUpload = (onEditClick) => {
//   const [image, setImage] = useState(Profile);

//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImage(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="mx-auto w-64 text-center">
//       <div className="relative w-52">
//         <img className="w-52 h-52 rounded-full absolute" src={image} alt="" />
//         <label htmlFor="fileInput" className="w-52 h-52 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
//           <img className="hidden group-hover:block w-12" src="https://www.svgrepo.com/show/33565/upload.svg" alt="" />
//         </label>
//         <input id="fileInput" type="file" className="hidden" onChange={handleUpload} />
//       </div>
//     </div>
//   );
// };

// export default ImageUpload;

import React, { useState } from 'react';
import {MdModeEdit} from 'react-icons/md'
import Profile from "../assets/profile.jpg"

const ImageUpload = (handleEditClick) => {
  const [image, setImage] = useState(Profile);

  const handleUpload = (e) => {
    const file = e.target.files[0];
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
  //    <div className="mx-auto w-64 text-center">
  //    <div className="relative w-52">
  //      <img className="w-52 h-52 rounded-full border-8 border-accent" src={image} alt="" />
  //      <label
  //        htmlFor="fileInput"
  //        className="absolute bottom-0 left-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-15 hover:bg-opacity-25 rounded-full p-1 cursor-pointer"
  //      >
  //        <input id="fileInput" type="file" className="hidden" onChange={handleUpload} />
  //        <MdModeEdit className="w-6 h-6 text-gray-600" onClick={onEditClick} />
  //      </label>
  //    </div>
  //  </div>
  );
};


export default ImageUpload;
