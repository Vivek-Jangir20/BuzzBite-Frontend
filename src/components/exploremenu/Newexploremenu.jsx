import React, { useEffect, useRef } from 'react';
import './Newexploremenu.css';
import { menu_list } from '../../assets/assets';

const Newexploremenu = ({ category, setCategory }) => {
  const exploremenuRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
          } else {
            entry.target.classList.add('hidden');
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Observe the explore menu items and headings
    const elementsToObserve = [
      exploremenuRef.current,
      ...exploremenuRef.current.querySelectorAll('.explore-menu-list-item'),
      ...exploremenuRef.current.querySelectorAll('h2, h1'),
    ];

    elementsToObserve.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsToObserve.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className='explore-menu' ref={exploremenuRef} id='explore-menu'>
      <h2><strong><i>!! MENU !!</i></strong></h2>
      <h1 className="explore-menu-text"><strong>TASTE OUR FOOD's AND ENJOY !</strong></h1>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            key={index}
            className="explore-menu-list-item " 
          >
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Newexploremenu;
