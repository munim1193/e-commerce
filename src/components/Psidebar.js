import React, { useState } from 'react';
import './psidebar.css';
import filter from '../assets/filter.svg';
import arrowdown from '../assets/arrowdown.svg';

const Psidebar = () => {
  const [isCategoryVisible, setIsCategoryVisible] = useState(true);
  const [isStockVisible, setIsStockVisible] = useState(true);
  const [isSizeVisible, setIsSizeVisible] = useState(true);
  const [isColorVisible, setIsColorVisible] = useState(true); // Added new state for color

  const toggleVisibility = (setter, value) => {
    setter(!value);
  };

  return (
    <div className='psidebar'>
      <div className='filter'>
        <img className='fimg' src={filter} alt='filter' />
        <div className='ftext'>Filters</div>
      </div>

      <div className='spacer'></div>

      <div className='appliedfilter'>
        <div className='afhead'>
          <div className='afhtext'>Applied Filters</div>
          <a className='afhtext2' href='/'>clear all</a>
        </div>
        <div className='afselect'>
          <div className='afstext'>All</div>
          <div className='afstext'>Running Shoes</div>
          <div className='afstext'>Red</div>
        </div>

        <div className='spacer'></div>

        <div className='categorybox'>
          <div className='categoryhead' onClick={() => toggleVisibility(setIsCategoryVisible, isCategoryVisible)}>
            <div className='ctext'>Category</div>
            <img
              src={arrowdown}
              alt='arrowdown'
              className={isCategoryVisible ? 'arrow rotate' : 'arrow'}
            />
          </div>
          {isCategoryVisible && (
            <div className='ccheckbox'>
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
          )}
        </div>

        <div className='spacer'></div>

        <div className='categorybox'>
          <div className='categoryhead' onClick={() => toggleVisibility(setIsStockVisible, isStockVisible)}>
            <div className='ctext'>Stock Status</div>
            <img
              src={arrowdown}
              alt='arrowdown'
              className={isStockVisible ? 'arrow rotate' : 'arrow'}
            />
          </div>
          {isStockVisible && (
            <div className='ccheckbox'>
              <div className='cbox'>
                <input type='checkbox' id='stock1' name='stock1' value='In Stock' />
                <label htmlFor='stock1'> In Stock</label>
              </div>
              <div className='cbox'>
                <input type='checkbox' id='stock2' name='stock2' value='Out of Stock' />
                <label htmlFor='stock2'> Out of Stock</label>
              </div>
            </div>
          )}
        </div>

        <div className='spacer'></div>

        <div className='categorybox'>
          <div className='categoryhead' onClick={() => toggleVisibility(setIsSizeVisible, isSizeVisible)}>
            <div className='ctext'>Size</div>
            <img
              src={arrowdown}
              alt='arrowdown'
              className={isSizeVisible ? 'arrow rotate' : 'arrow'}
            />
          </div>
          {isSizeVisible && (
            <div className='ccheckbox'>
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
          )}
        </div>

        <div className='spacer'></div>

        <div className='categorybox'>
          <div className='categoryhead' onClick={() => toggleVisibility(setIsColorVisible, isColorVisible)}>
            <div className='ctext'>Colour</div>
            <img
              src={arrowdown}
              alt='arrowdown'
              className={isColorVisible ? 'arrow rotate' : 'arrow'}
            />
          </div>
          {isColorVisible && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Psidebar;
