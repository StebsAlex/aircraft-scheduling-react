import React from 'react';

const Aircraft = (props) => {
  const {aircraft} = props;
  return (
    <>
      <div className="aircraft">
        {aircraft}
      </div>
    </>
  )
}
export default Aircraft;