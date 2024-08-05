import React, { useState } from 'react';
import './products.css';  // Ensure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import shopcart from '../assets/shopping_cart.svg'
import Psidebar from './Psidebar';
import Pbody from './Pbody';


const Products = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Type');
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', query);
  };

  return (
    <div className="products">
      <div className='searchhead'>
        <div className="search-bar">
          <div className="searchdropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              {selectedOption}
            </button>
            {isOpen && (
              <div className="dropdown-menu">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className='searchfeild'>
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search..."
              className="search-input"
            />
            <button className="search-button" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        
        <button className='chart-button'>
          <img src={shopcart} alt='shopcart'/>
          <div className='shoptext'>View Chart</div>   
        </button>
      </div>
      <div className='productcomponents'>
        <Psidebar/>
        <Pbody/>
      </div>
    </div>
  );
};

export default Products;
