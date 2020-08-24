import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import Loading from './assets/img/loading.gif';
import Header from './layout/Header';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=iphone+apple+${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div>
      <Header />
        <div className="container mx-auto">
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && <h1 className="text-5lx text-center mx-auto mt-32">No Images Found.</h1> }

        {isLoading ? <img className="text-center mx-auto mt-32" src={Loading} alt=""/> :  
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6w gap-4 text-center">
          {images.map(image => (
            <ImageCard key={image.id} image={image}/>
          ))}
        </div> }
      </div>
    </div>
  );
}

export default App;
