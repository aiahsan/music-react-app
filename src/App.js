import './style/style.css';
import React from 'react';
import Nav from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
const Check = () => {
  return (
    <svg
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='50' height='50' rx='25' fill='url(#paint0_linear)' />
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='0'
          y1='50'
          x2='50'
          y2='50'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#8C59D6' />
          <stop offset='1' stopColor='#F8574F' />
        </linearGradient>
      </defs>
    </svg>
  );
};
const UnCheck = () => {
  return (
    <svg
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='50' height='50' rx='25' fill='#E2E3E6' />
    </svg>
  );
};
const Menu = () => {
  return (
    <svg
      width='33'
      height='22'
      viewBox='0 0 33 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 21.75H32.625V18.125H0V21.75ZM0 12.6875H32.625V9.0625H0V12.6875ZM0 0V3.625H32.625V0H0Z'
        fill='black'
      />
    </svg>
  );
};
const Bin = () => {
  return (
    <svg
      width='26'
      height='33'
      viewBox='0 0 26 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M25.375 1.8125H19.0312L17.2188 0H8.15625L6.34375 1.8125H0V5.4375H25.375V1.8125ZM1.8125 7.25V29C1.8125 30.9937 3.44375 32.625 5.4375 32.625H19.9375C21.9312 32.625 23.5625 30.9937 23.5625 29V7.25H1.8125ZM16.3125 19.9375V27.1875H9.0625V19.9375H5.4375L12.6875 12.6875L19.9375 19.9375H16.3125Z'
        fill='black'
      />
    </svg>
  );
};
const Search = () => {
  return (
    <svg
      width='25'
      height='26'
      viewBox='0 0 25 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.7311 17.8399C13.312 18.7337 11.6366 19.25 9.842 19.25C4.72506 19.25 0.576965 15.0527 0.576965 9.875C0.576965 4.69733 4.72506 0.5 9.842 0.5C14.9589 0.5 19.107 4.69733 19.107 9.875C19.107 12.3321 18.1728 14.5685 16.6442 16.2402L23.6866 23.3661C24.169 23.8543 24.169 24.6457 23.6866 25.1339C23.2041 25.622 22.422 25.622 21.9395 25.1339L14.7311 17.8399ZM16.6363 9.875C16.6363 13.672 13.5944 16.75 9.842 16.75C6.08958 16.75 3.04764 13.672 3.04764 9.875C3.04764 6.07804 6.08958 3 9.842 3C13.5944 3 16.6363 6.07804 16.6363 9.875Z'
        fill='#85858B'
      />
    </svg>
  );
};

const MusicBox = ({ number, src, name, category, pr }) => {
  return (
    <div className='music-box '>
      <div className='d-flex align-items-center'>
        <div className='num'>{number}</div>
        <div>
          <div className='d-flex align-items-center'>
            <div>
              <img src={src} alt='' />
              <div className='pr-box'>
                <img src='m2.png' alt='' />
                <h5>{pr}</h5>
              </div>
            </div>
            <div>
              <h2>{name}</h2>
              <h3>{category}</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Menu />
        <Bin />
      </div>
    </div>
  );
};
function App() {
  const [checked, setchecked] = React.useState(true);

  return (
    <>
      <div className='nav-p'>
        {' '}
        <Nav />
      </div>
      <div className='container-fluid'>
        <div className='container-main'>
          <div className='d-flex justify-content-between align-items-center newList'>
            <div className='d-flex align-items-center'>
              <div className='brd-right'></div>
              <h1 className='fs30 lh35 fw700'>Create a new list</h1>
            </div>
            <div>
              <button className='btn'>Create</button>
            </div>
          </div>
          <div className='add-title'>
            <input type='text' placeholder='Add a title' />
          </div>
          <div className='description-box w-100'>
            <div className='w-100'>
              <textarea placeholder='Add a description' rows={5}></textarea>
            </div>
            <div className='radio-box'>
              <div className='d-flex c1' onClick={() => setchecked(true)}>
                {checked === true ? <Check /> : <UnCheck />}

                <h2>Unordered</h2>
              </div>
              <div className='d-flex' onClick={() => setchecked(false)}>
                {checked === false ? <Check /> : <UnCheck />}
                <h2>Ordered</h2>
              </div>
            </div>
            <button className='btn mt-4'>Create</button>
          </div>
          <div className='add-title d-flex align-items-center'>
            <Search />
            <input
              type='text'
              className='text-2'
              placeholder='Add Music to List'
            />
          </div>
          <MusicBox
            number='1'
            src='m1.png'
            name='Album Name'
            category='Artist'
            pr='87%'
          />
          <MusicBox
            number='1'
            src='m1.png'
            name='Album Name'
            category='Artist'
            pr='87%'
          />
          <MusicBox
            number='1'
            src='m1.png'
            name='Album Name'
            category='Artist'
            pr='87%'
          />
          <MusicBox
            number='1'
            src='m1.png'
            name='Album Name'
            category='Artist'
            pr='87%'
          />
        </div>
      </div>
    </>
  );
}

export default App;
