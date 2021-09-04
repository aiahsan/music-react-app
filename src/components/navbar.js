import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
const P1 = () => {
  return (
    <svg
      width='10'
      height='8'
      viewBox='0 0 10 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M5 8L0.669872 0.5L9.33013 0.5L5 8Z' fill='#C4C4C4' />
    </svg>
  );
};
const P2 = () => {
  return (
    <svg
      width='8'
      height='10'
      viewBox='0 0 8 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M8 5L0.5 9.33013L0.5 0.669873L8 5Z' fill='#C4C4C4' />
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

export default function CSTNavbar() {
  const Logo = () => (
    <svg
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z'
        fill='#010022'
      />
      <path
        d='M1.00916 25.0563C1.00916 25.0563 4.17021 24.4417 5.39933 22.2904C6.62845 20.1392 6.93413 16.9353 8.12104 16.5835C9.30795 16.2318 9.17494 22.2028 10.9745 22.7733C12.774 23.3437 12.9499 7.71622 15.451 6.96992C17.9521 6.22363 17.514 22.905 19.5777 23.7395C21.6414 24.5741 21.9042 13.6425 23.1774 13.1155C24.4507 12.5886 24.8453 23.3885 26.5137 23.7395C28.1822 24.0906 28.5339 11.0525 30.4217 10.6157C32.3095 10.1789 32.5321 23.6973 34.6801 23.7415C36.8282 23.7856 36.8749 16.8931 37.8847 16.7172C38.8944 16.5413 39.9049 22.3787 41.7914 23.9173C43.6779 25.456 48.9909 25.0588 48.9909 25.0588C48.9909 25.0588 44.1185 27.4736 43.8551 29.0538C43.5916 30.634 42.9745 34.1436 41.7038 33.7925C40.4331 33.4414 39.9918 26.9441 38.7186 27.1634C37.4453 27.3828 36.5679 39.8505 34.37 39.6746C32.172 39.4988 32.0019 27.0317 30.4658 26.7682C28.9298 26.5047 28.9732 37.2605 26.9537 37.6116C24.9342 37.9627 24.8433 27.9551 23.4857 26.9876C22.128 26.02 22.0788 43.055 19.6225 43.055C17.1661 43.055 16.8131 27.2076 15.4523 26.593C14.0914 25.9784 12.9499 34.2312 11.5891 34.2312C10.2282 34.2312 9.3508 28.2199 7.1554 26.813C4.95999 25.4061 1.00916 25.0563 1.00916 25.0563Z'
        fill='url(#paint0_linear)'
      />
      <path
        opacity='0.8'
        d='M25 33.0782C29.4614 33.0782 33.0782 29.4614 33.0782 25C33.0782 20.5385 29.4614 16.9218 25 16.9218C20.5385 16.9218 16.9218 20.5385 16.9218 25C16.9218 29.4614 20.5385 33.0782 25 33.0782Z'
        fill='#010022'
      />
      <path
        d='M25 26.797C25.9925 26.797 26.797 25.9925 26.797 25C26.797 24.0075 25.9925 23.203 25 23.203C24.0075 23.203 23.203 24.0075 23.203 25C23.203 25.9925 24.0075 26.797 25 26.797Z'
        fill='white'
      />
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='4.73808'
          y1='15.671'
          x2='39.5531'
          y2='34.8048'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#7D59E8' />
          <stop offset='1' stop-color='#FA574D' />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <Navbar collapseOnSelect expand='xl'>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />

      <Navbar.Brand href='#home'>
        <div className='d-flex align-items-center'>
          <Logo />
          <h1 className='logo'>Music</h1>
        </div>
      </Navbar.Brand>
      <div className='search-nav'>
        <Search />
      </div>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <div className='flex-nav w-100'>
          <div className='jfdsfnse'>
            <div className='jfdsfnse-i'>
              <a>
                News <P1 />
              </a>
              <a>
                Genres <P1 />
              </a>
              <a>
                Login <P2 />
              </a>
              <a>
                Sign Up <P2 />
              </a>
            </div>
            <div className='add-title d-flex align-items-center nav-search'>
              <Search />
              <input type='text' className='text-2' placeholder='Search...' />
            </div>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
