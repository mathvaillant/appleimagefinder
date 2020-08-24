import React, { useState } from 'react';
import Search from '../assets/img/search.png';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    searchText(text);
  }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-black py-2">
        <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Apple Image..." />
        <button className="flex-shrink-0 bg-white border-none text-sm border-4 text-white py-1 px-2 rounded" type="submit">
            <img src={Search} alt=""/>
       </button>
      </div>
      </form>
		</div>
  )
}

export default ImageSearch;
