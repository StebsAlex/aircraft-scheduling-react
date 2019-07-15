import React from 'react';

const styles = {
  flightStyle: {
    marginBottom: '10px',
  }
};

const Flight = (props) => {
  // const {id, destination, origin, readable_arrival, readable_departure
  //   // arrivaltime,// departuretime,
  // } = flight;
  const {flight, onAddMe} = props;
  const addMe = (e, flight) => {
    debugger;
    e.preventDefault();
    onAddMe(flight);
  }
  return (
    <>
      <div className="flex" style={styles.flightStyle}>
        <div className="box">
          <div style={styles.flightStyle}>Flight: {flight.id}</div>
          <div className="info row">
            <span className="origin col-sm-3 col-sm-offset-0">
              <div>
                <div>
                  {flight.origin}
                </div>
                <div>
                  {flight.readable_departure}
                </div>
              </div>
            </span>
            <span className="icon col-sm-6 col-sm-offset-0">
              ADD ICON
            </span>
            <span className="destination col-sm-3 col-sm-offset-0">
              <div>
                <div>
                  {flight.destination}
                </div>
                <div>
                  {flight.readable_arrival}
                </div>
              </div>
            </span>
            <button onClick={(e) => addMe(e, flight)}> Add me</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Flight;