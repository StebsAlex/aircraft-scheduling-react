import React, {useEffect, useState} from 'react';
import fetchAircarfts from './fetch-aircraft';
import fetchFlights from './fetch-flights';
import Aircraft from './Aircraft';
import Flight from './Flight'

const Page = function () {
  const [isLoaded, setIsLoaded] = useState(false);
  const [aircraft, setAircraft] = useState('');
  const [flights, setFlights] = useState([]);
  const [rotation, setRotation] = useState([]);

  const addFlight = (flight) => {
    setRotation([...rotation, flight]);
  };

  useEffect(() => {
    fetchAircarfts().then(res => {
      setAircraft(res.data[0].base);
    });
    fetchFlights().then(res => {
      console.log(res.data)
      setFlights(res.data)
    })
    setIsLoaded(true);
  }, [])
  return isLoaded ? (
    <>
      <div className="container">
        <div className="row">

          <div className="col-sm-3 ">
            <h2>Aircrafts</h2>
            <Aircraft aircraft={aircraft} />
          </div>
          <div className="col-sm-6">
            <h2>Rotation</h2>
            {flights.map((flight) => (
              <Flight flight={flight} onAddMe={addFlight} key={flight.id} />
            ))}
          </div>
          <div className="col-sm-3 ">
            <h2>
              Flights component
          </h2>
          </div>
        </div>
      </div>
    </>
  ) : (
      <div> Loading ... </div>
    )
}
export default Page;