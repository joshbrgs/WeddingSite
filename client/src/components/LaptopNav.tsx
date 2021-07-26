import React from 'react';
import { Link } from 'react-router-dom';
import { REGISTRY_GUEST } from '../key';

const LaptopNav: React.FC = () => {
  return (
    <>
      <div className='hidden md:contents'>
        <div className=' text-white flex p-3 justify-between sticky font-items z-50 w-screen '>
          <div className='flex justify-start'>
            <Link className='px-8 hover:text-primary' to='/'>
              Home
            </Link>
            <Link className='px-8 hover:text-primary' to='/rsvp'>
              RSVP
            </Link>
            <Link
              className='px-8 hover:text-primary'
              to={{ pathname: REGISTRY_GUEST }}
              target='blank'
            >
              Registry
            </Link>
          </div>
          <div className='flex justify-end'>
            <Link className='px-8 hover:text-primary' to='/photos'>
              Photos
            </Link>
            <Link className='px-8 hover:text-primary' to='/faq'>
              FAQ
            </Link>
            <Link className='px-8 hover:text-primary' to='/places-to-stay'>
              Places To Stay
            </Link>
            {/* <Link className='px-8 hover:text-primary' to='/login'>
              Bridal Party Login
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LaptopNav;
