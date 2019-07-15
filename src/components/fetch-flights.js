const fetchFlights = () => fetch(`https://infinite-dawn-93085.herokuapp.com/flights`)
  .then(res => res.json());
// .then(res => res.data);

export default fetchFlights;