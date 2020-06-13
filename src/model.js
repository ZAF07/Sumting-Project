import axios from 'axios';

// find APIs
// seperate functions to call the request
// put functions in maps() and use the keys for random calling of the function


// https://sunrise-sunset.org/api
export const getSunriseInfo = async ()=>{
  const results = await axios({
    url: 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today',
  })
  return (`Today's sunrise is at ${results.data.results.sunrise}`)
};



// http://open-notify.org/Open-Notify-API/People-In-Space/
// FINDS HOW MANY PEOPLE ARE IN SPACE RGHT NOW
 export const getHowManyInSpace = async ()=>{
  const results = await axios({
    url: 'http://api.open-notify.org/astros.json',
  })
  let list = [];
  let listOfNames = [];
  let craft = (results.data.people);
  craft.forEach((data, i) => {
    list.push(data);
  });
  list.forEach((item, i) => {
    listOfNames.push(item['name']);
  });
  return listOfNames;
};


// http://open-notify.org/Open-Notify-API/ISS-Location-Now/
// FINDS THE CURRENT LOCATION OF THE ISS
export const getISSInfo = async ()=>{
  const results = await axios({
    url: 'http://api.open-notify.org/iss-now.json',
  })
  let i = results.data.iss_position
  return (`These are the current coordinates of the ISS🚀: Latitude at ${i.latitude} and longitude at ${i.longitude}`)
};

//http://numbersapi.com/#42
// GETS FUN FACTS ABOUT NUMBERS
export const getNumFacts = async ()=>{
  const num = Math.floor(Math.random() * (1 - 100) + 100);
  const results = await axios({
    url: ` http://numbersapi.com/${num}/trivia`,
  })
  return (results.data);
};

// https://rapidapi.com/api-sports/api/covid-193
// GETS DATA ON COVID19 NEWS
export const getCovid = async ()=>{
  const result = await axios({
    "method":"GET",
    "url":"https://covid-193.p.rapidapi.com/statistics",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-193.p.rapidapi.com",
    "x-rapidapi-key":"cea516208fmsh3470ec4837cb294p174685jsna83448666099",
    "useQueryString":true
    }
    })
    const response = result
      const singapore = result.data.response[37].cases;
      return (`There are ${singapore.new} new cases in singapore with ${singapore.active}
                   active cases! ${singapore.critical} of the total are in critical condition
                   while ${singapore.recovered} have recovered making the total cases at ${singapore.total}!`);

};



// // USAGE FROM rapidapi
// const geddit = async ()=>{
//   const result = await axios({
//       "method":"GET",
//       "url":"https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
//       "headers":{
//       "content-type":"application/octet-stream",
//       "x-rapidapi-host":"matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
//       "x-rapidapi-key":"cea516208fmsh3470ec4837cb294p174685jsna83448666099",
//       "accept":"application/json",
//       "useQueryString":true
//       }
//       })
//       .then((response)=>{
//         console.log(response.data.value)
//       })
//       .catch((error)=>{
//         console.log(error)
//       })
// }
// geddit()
