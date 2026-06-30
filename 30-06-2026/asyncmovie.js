let movies = [
  {
    movieId: "101",
    movieName: "The Dark Knight",
    type: "Thriller",
    actor: "Christan Bale",
  },
  {
    movieId: "102",
    movieName: "Dhurandhar",
    type: "Spy Drama",
    actor: "Ranveer singh",
  },
  {
    movieId: "103",
    movieName: "The Dark Knight",
    type: "Thriller",
    actor: "Christan Bale",
  },
  {
    movieId: "104",
    movieName: "Infinity Wars",
    type: "Action",
    actor: "Christan Bale",
  },
  {
    movieId: "105",
    movieName: "Intersteller",
    type: "Sci-fi",
    actor: "Matthew McConaughey",
  },
];
let cinemas = [
  {
    movieId: 101,
    hallName: "Regal",
  },
  {
    movieId: 102,
    hallName: "Maya complex",
  },
  {
    movieId: 101,
    hallName: "Miraj Talkies",
  },
  {
    movieId: 102,
    hallName: "Wave cinemas",
  },
  {
    movieId: 102,
    hallName: "US cinemas",
  },
];
function getMovie(id) {
  let pr = new Promise((resolve, reject) => { 
    setTimeout(() => {
      let m = movies.find((movie) => movie.movieId == id);
      if (m) {
        resolve(m);
      } else {
        reject("Movie not found in database....");
      }
    }, 500);
  });
  return pr;
}

function getCinemas(movieId) {
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      let movieCinemas = cinemas.filter((cinema) => cinema.movieId == movieId);
      if (movieCinemas.length > 0) {
        resolve(movieCinemas);
      } else {
        reject("NOT Available");
      }
    }, 500);
  });
  return pr;
}

function getTicket(hallName) {
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      let hall = hallName.map((hall) => hall.hallName);
      // console.log(hall);
      let price = [];
      for (let i = 0; i < hall.length; i++) {
        if (hall[i] == "US cinemas") {
          let obj = {
            name:hall[i],
            Diamond: 600,
            Gold: 400,
            Silver: 300,
          };
          price.push(obj);
        } else if (hall[i] == "Wave cinemas") {
          let obj = {
            name:hall[i],
            Diamond: 6000,
            Gold: 4000,
            Silver: 300,
          };
          price.push(obj);
        } else if (hall[i] == "Regal") {
          let obj = {
            
            name:hall[i],
            Diamond: 800,
            Gold: 1400,
            Silver: 400,
          };
          price.push(obj);
        } else if (hall[i] == "Maya complex") {
          let obj = {
            
            name:hall[i],
            Diamond: 800,
            Gold: 1400,
            Silver: 400,
          };
          price.push(obj);
        
        } else if (hall[i] == "Miraj Talkies") {
          let obj = {
            
            name:hall[i],
            Diamond: 800,
            Gold: 1400,
            Silver: 400,
          };
          price.push(obj);
        }
      }
      if (price.length !==0) {
        resolve(price);
      } else {
        reject("No Cinema Name found in db....");
      }
    }, 500);
  });
  return pr;
}
async function movieSummary(){
    try{
        let movie = await getMovie(101)
        let cinemas = await getCinemas(movie.movieId)
        let ticket = await getTicket(cinemas)
        console.log(ticket);
    }
    catch(err){
        console.log(err);
    }
}
movieSummary(); 