import React from 'react';
import AppleIcon from '../assets/img/apple icon.png';
import Heart from '../assets/img/heart.png';
import Save from '../assets/img/save.png';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    
    <div className="max-w-sm overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full"/>
      <div className="px-6 py-4 bg-black bg-opacity-80">
        <div className="text-white text-xl mb-20">
          <img className="inline pb-2 pl-2" src={AppleIcon} alt=""/> 
          <h6 className="inline"> Photo by: <strong>{image.user}</strong></h6>
        </div>
        <div className="text-white flex flex-row justify-between">
          <ul>
            {tags.map((tag, index) => (
              <li key={index} className="bg-gray-300 text-black inline-block m-1 px-2 rounded-full">
                <span>#{tag}</span>
              </li>
            ))}
          </ul>

          <ul className="flex flex-row">
            <li className="mx-3">
              <img className="inline px-2" src={Heart} alt=""/>
              <span>{image.likes}</span>
            </li>
            <li>
              <img className="inline px-2" src={Save} alt=""/>
              <span>{image.downloads}</span>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default ImageCard;
