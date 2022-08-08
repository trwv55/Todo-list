import React from 'react';
import styled from 'styled-components';
// import './header.css';

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

  const ShowDate = styled.span`
    color: #b5b5b5;
    margin-top: 5px;
    text-align: center;
  `;

  const DayOfWeek = styled(ShowDate)`
    color: #525252;
  `;

  const DayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px 0 20px 20px;
  `;

  return (
    <DayWrapper>
      <DayOfWeek className="day">{days[time.getDay()]}</DayOfWeek>
      <ShowDate>{date}</ShowDate>
    </DayWrapper>
  );
}

export default Header;
