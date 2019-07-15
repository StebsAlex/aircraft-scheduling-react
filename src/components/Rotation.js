import React from 'react';

const styles = {
  flightStyle: {
    marginBottom: '10px',
  }
};

const Rotation = ({flight}) => {
  const {id, destination, origin, readable_arrival, readable_departure
    // arrivaltime,// departuretime,
  } = flight;

  return (
    <>
      <div className="flex" style={styles.flightStyle}>
        <div className="box">
          <div style={styles.flightStyle}>Flight: {id}</div>
          <div className="info row">
            <span className="origin col-sm-4 col-sm-offset-0">
              <div>
                <div>
                  {origin}
                </div>
                <div>
                  {readable_departure}
                </div>
              </div>
            </span>
            <span className="icon col-sm-4 col-sm-offset-0">
              ADD ICON
            </span>
            <span className="destination col-sm-4 col-sm-offset-0">
              <div>
                <div>
                  {destination}
                </div>
                <div>
                  {readable_arrival}
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
export default Rotation;