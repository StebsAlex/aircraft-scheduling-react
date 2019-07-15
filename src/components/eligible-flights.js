
const midnight = 24 * 60 * 60;
const twentyMins = 20 * 60;
const withinTwentyMinutes = (a, b) => {
  if (Math.abs(a - b) <= twentyMins) {
    return false
  } else {
    return true
  }
}


const eligibleFlights = (flight, rotation) => {
  // check if lands before midnight
  const arrival = flight.arrivaltime;
  if (arrival === 0 || arrival === midnight) {
    return null;
  }
  // Turnaround time, arrival time to departure time, 
  if (rotation.length > 0) {
    return rotation.find(item => {
      if (withinTwentyMinutes(item.arrivaltime, flight.departuretime)
        && withinTwentyMinutes(item.departuretime, flight.arrivaltime)) {
        return true;
      } else {
        return false
      }
    })
  }
  return true
}
export default eligibleFlights;