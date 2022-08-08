import React from 'react';
import './header.css';

function Header() {
  const time = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'Jule',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const date = time.getDate() + ' ' + months[time.getMonth()] + ', ' + time.getFullYear();

  return (
    <div className='day-wrapper'>
      <span className='day'>{days[time.getDay()]}</span>
      <span className='date'>{date}</span>
    </div>
  );
}

export default Header;
