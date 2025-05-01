import React, { useEffect, useState } from 'react';
import Card from './Card';
import HeroSection from './HeroSection';
import HeroSection1 from './HeroSection1';
import Footer from './Footer';
import { useFavorites } from './FavouriteProvider';
import Search from './Search';

function Home() {
  const [items, setItems] = useState([]);
  const { search } = useFavorites();

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    try {
      let response = await fetch('http://localhost:5000/getitems');
      let data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <div>
      {search.length > 0 ? (
        <Search key={items._id} items={items} />
      ) : (
        <>
          <HeroSection />
          <HeroSection1 />
          <div className='flex justify-center mt-12'>
            <div className='flex w-full max-w-7xl justify-start mb-4 px-4'>
              <span className='w-full sm:w-72 bg-teal-100 text-xl rounded-3xl h-10 flex items-center justify-center'>
                order some Yummy-Tummy
              </span>
            </div>
          </div>
          <div className='flex flex-wrap justify-center gap-4 px-4'>
            {items.map((item) => (
              <Card items={item} key={item._id} />
            ))}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default Home;
