import React from 'react';
const fullTime = 24 * 60 * 60;

const Utilisation = (props) => {
  const {rotation} = props;

  const getDifferenceInTime = (a, b) => {
    return b - a;
  }
  const getcalculatePercentage = () => {
    let total = 0;
    const calculateTime = rotation.forEach(item => {
      debugger;
      const time = getDifferenceInTime(item.departuretime, item.arrivaltime);
      total += time;
      return total;
    });
    return (total / fullTime) * 100;
  }
  const percentage = parseInt(getcalculatePercentage());
  return (
    <div>
      {percentage ? percentage : ''}
    </div>
  )
}
export default Utilisation;