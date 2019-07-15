import React from 'react';

const styles = {
  date: {
    margin: '20px',
    fontSize: '20px',
  }
}

const Header = () => {
  const todayDate = new Date();
  console.log(todayDate);
  return (
    <div style={styles.date}>
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span>
        {todayDate.getDate()} {todayDate.getMonth()} {todayDate.getFullYear()}
      </span>
      <span>
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
     </span>
    </div>
  )
}
export default Header;