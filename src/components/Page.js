import React, {useEffect, useState} from 'react';
import fetchAircarfts from './fetch-aircraft';
import fetchFlights from './fetch-flights';
import Aircraft from './Aircraft';
import Flight from './Flight'
import Rotation from './Rotation'
import eligibleFlights from './eligible-flights';
import ErrorMessage from './errors'
import Header from './Header'
import Utilisation from './Utilisation';

const Page = function () {
  const [isLoaded, setIsLoaded] = useState(false);
  const [aircraft, setAircraft] = useState('');
  const [flights, setFlights] = useState([]);
  const [rotation, setRotation] = useState([]);
  const [error, setError] = useState(false);

  const addFlight = (flight) => {
    if (rotation.some(item => item.id === flight.id)) return;
    if (eligibleFlights(flight, rotation)) {
      setFlights(flights.filter(item => item.id !== flight.id))
      setRotation([...rotation, flight]);
    }
    else {
      setError(true);
      return null;
    }
  };

  useEffect(() => {
    fetchAircarfts().then(res => {
      setAircraft(res.data[0].base);
    });
    fetchFlights().then(res => {
      setFlights(res.data)
    })
    setIsLoaded(true);
  }, [])
  return isLoaded ? (
    <>
      <div className="wrapper">
        <Header />
        <span>{error ? <ErrorMessage /> : ''}</span>
        <div className="row">

          <div className="col-sm-4 ">
            <h2>Aircrafts</h2>
            <Aircraft aircraft={aircraft} />
            <Utilisation rotation={rotation} />
          </div>
          <div className="col-sm-4">
            <h2>Rotation</h2>
            <div className="flights">
              {rotation.map((flight) => (
                <Rotation flight={flight} key={flight.id} />
              ))}
            </div>
          </div>
          <div className="col-sm-4" >
            <h2>Flights</h2>
            <div className="flights">
              {flights.map((flight) => (
                <Flight flight={flight} onAddMe={addFlight} key={flight.id} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  ) : (
      <div> Loading ... </div>
    )
}
export default Page;