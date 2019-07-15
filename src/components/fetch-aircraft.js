const fetchAircarfts = () => fetch(`https://infinite-dawn-93085.herokuapp.com/aircrafts`)
  .then(res => res.json());
// .then(res => res.data);

export default fetchAircarfts;