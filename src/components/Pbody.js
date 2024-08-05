import React, { useState } from 'react';
import './pbody.css';
import sort from '../assets/sort.svg';
import Card from './Card';
import shoeimg from '../assets/shoeimg.png'
import filter from '../assets/filter.svg'

const Pbody = () => {
  const [showDummyList, setShowDummyList] = useState(false);

  const toggleDummyList = () => {
    setShowDummyList(!showDummyList);
  };

  const cardData = [
    {
      id: 1,
      image: shoeimg,
      name: 'Ultraboost Light Running Shoes',
      category: 'Running Shoes',
      rating: '5.0 (10 Reviews)',
      amount: '$100',
    },
    {
      id: 2,
      image: shoeimg,
      name: 'Ultraboost Light Running Shoes',
      category: 'Running Shoes',
      rating: '5.0 (50 Reviews)',
      amount: '$150',
    },
    // Add more objects to complete 10 cards
    {
      id: 3,
      image: shoeimg,
      name: 'Ultraboost Light Running Shoes',
      category: 'Running Shoes',
      rating: '5.0 (30 Reviews)',
      amount: '$170',
    },
    {
      id: 4,
      image: shoeimg,
      name: 'Ultraboost Light Running Shoes',
      category: 'Running Shoes',
      rating: '5.0 (90 Reviews)',
      amount: '$200',
    },
    {
      id: 5,
      image: shoeimg,
      name: 'Ultraboost Light Running Shoes',
      category: 'Running Shoes',
      rating: '5.0 (60 Reviews)',
      amount: '$169',
    },
    {
      id: 6,
      image: shoeimg,
      name: 'Ultraboost Light Running Shoes',
      category: 'Running Shoes',
      rating: '5.0 (6 Reviews)',
      amount: '$130',
    },
    {
      id: 7,
      image: shoeimg,
      name: 'Ultraboost Light Running Shoes',
      category: 'Running Shoes',
      rating: '5.0 (8 Reviews)',
      amount: '$190',
    },
    {
      id: 8,
      image: shoeimg,
      name: 'Ultraboost Light Running Shoes',
      category: 'Running Shoes',
      rating: '5.0 (19 Reviews)',
      amount: '$1600',
    },
    {
      id: 9,
      image: shoeimg,
      name: 'Ultraboost Light Running Shoes',
      category: 'Running Shoes',
      rating: '5.0 (17 Reviews)',
      amount: '$1100',
    },
    {
      id: 10,
      image: shoeimg,
      name: 'Ultraboost Light Running Shoes',
      category: 'Running Shoes',
      rating: '5.0 (19 Reviews)',
      amount: '$1200',
    },
  ];

  return (
    <div className='pbody'>
      <div className='resultinfo'>
        <div className='ri1'>
          <div className='ri11'>Home / Search / Running Shoes</div>
          <div className='ri12'>“Running Shoes”</div>
        </div>
        <button className='filter-button' onClick={toggleDummyList}>
          <img src={filter} alt='filter' />
          <div className='filtertext'>Filter</div>
        </button>
        <button className='ri2'>
          <img src={sort} alt='sort' />
          <div>Sort by</div>
        </button>
      </div>
      {showDummyList && (
        <div className='dummy-list'>
          <div className='ctext'>Category</div>
          <div className='cccheckbox'>
            <div className='cbox'>
              <input type='checkbox' id='vehicle1' name='vehicle1' value='All' />
              <label htmlFor='vehicle1'> All</label>
            </div>
            <div className='cbox'>
              <input type='checkbox' id='vehicle2' name='vehicle2' value='Running Shoes' />
              <label htmlFor='vehicle2'> Running Shoes</label>
            </div>
            <div className='cbox'>
              <input type='checkbox' id='vehicle3' name='vehicle3' value='Category 3' />
              <label htmlFor='vehicle3'> Category 3</label>
            </div>
            <div className='cbox'>
              <input type='checkbox' id='vehicle4' name='vehicle4' value='Category 4' />
              <label htmlFor='vehicle4'> Category 4</label>
            </div>
          </div>

          <div className='ctext'>Stock Status</div>
          <div className='cccheckbox'>
            <div className='cbox'>
              <input type='checkbox' id='stock1' name='stock1' value='In Stock' />
              <label htmlFor='stock1'> In Stock</label>
            </div>
            <div className='cbox'>
              <input type='checkbox' id='stock2' name='stock2' value='Out of Stock' />
              <label htmlFor='stock2'> Out of Stock</label>
            </div>
          </div>

          <div className='ctext'>Size</div>
          <div className='cccheckbox'>
            <div className='cbox'>
              <input type='checkbox' id='size1' name='size1' value='Small' />
              <label htmlFor='size1'> Small</label>
            </div>
            <div className='cbox'>
              <input type='checkbox' id='size2' name='size2' value='Medium' />
              <label htmlFor='size2'> Medium</label>
            </div>
            <div className='cbox'>
              <input type='checkbox' id='size3' name='size3' value='Large' />
              <label htmlFor='size3'> Large</label>
            </div>
            <div className='cbox'>
              <input type='checkbox' id='size4' name='size4' value='X Large' />
              <label htmlFor='size4'> X Large</label>
            </div>
            <div className='cbox'>
              <input type='checkbox' id='size5' name='size5' value='XX Large' />
              <label htmlFor='size5'> XX Large</label>
            </div>
          </div>

          <div className='ctext'>Colour</div>
          <div className='cccheckbox'>
            <div className="checkbox custom-checkbox">
              <label htmlFor="vehicle1">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="color1" />
              </label>
            </div>
            <div className="checkbox custom-checkbox">
              <label htmlFor="vehicle2">
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Bike" className="color2" />
              </label>
            </div>
            <div className="checkbox custom-checkbox">
              <label htmlFor="vehicle3">
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Bike" className="color3" />
              </label>
            </div>
            <div className="checkbox custom-checkbox">
              <label htmlFor="vehicle4">
                <input type="checkbox" id="vehicle4" name="vehicle4" value="Bike" className="color4" />
              </label>
            </div>
            <div className="checkbox custom-checkbox">
              <label htmlFor="vehicle5">
                <input type="checkbox" id="vehicle5" name="vehicle5" value="Bike" className="color5" />
              </label>
            </div>
            <div className="checkbox custom-checkbox">
              <label htmlFor="vehicle6">
                <input type="checkbox" id="vehicle6" name="vehicle6" value="Bike" className="color6" />
              </label>
            </div>
            <div className="checkbox custom-checkbox">
              <label htmlFor="vehicle7">
                <input type="checkbox" id="vehicle7" name="vehicle7" value="Bike" className="color7" />
              </label>
            </div>
            <div className="checkbox custom-checkbox">
              <label htmlFor="vehicle8">
                <input type="checkbox" id="vehicle8" name="vehicle8" value="Bike" className="color8" />
              </label>
            </div>
            <div className="checkbox custom-checkbox">
              <label htmlFor="vehicle9">
                <input type="checkbox" id="vehicle9" name="vehicle9" value="Bike" className="color9" />
              </label>
            </div>
            <div className="checkbox custom-checkbox">
              <label htmlFor="vehicle10">
                <input type="checkbox" id="vehicle10" name="vehicle10" value="Bike" className="color10" />
              </label>
            </div>
          </div>

        </div>
      )}
      <div className='shopitems'>
        {cardData.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            name={card.name}
            category={card.category}
            rating={card.rating}
            amount={card.amount}
          />
        ))}
      </div>
      <div className='lowerbuttons'>
        <button className='lb1'>Next Page → </button>
        <div className='lb2'>
          <button className='lb1'>1</button>
          <div>of 1</div>
          <button className='lb1'>&lt;</button>
          <button className='lb1'>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Pbody;
