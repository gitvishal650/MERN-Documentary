// callback hell task 1
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
    movieName: "The Dark Knight",
    type: "Thriller",
    actor: "Christan Bale",
  },
  {
    movieId: "105",
    movieName: "Intersteller",
    type: "Sci-fi",
    actor: "Matthew McConaughey",
  },
];
function getMovie(movieId, callback) {
  setTimeout(() => {
    let m = movies.find((movie) => movie.movieId == movieId);
    callback(m);
  }, 2000);
}
function getCinemas(movieId, callback) {
  let cinemas = [
    "PVR RDC Ghaziabad",
    "Wave Cinemas Kaushambi",
    "INOX Shipra Mall Indirapuram",
    "PVR Opulent Mall Ghaziabad",
  ];
  setTimeout(() => {
    callback(cinemas);
  }, 2000);
}
function getTicket(c, callback) {
  setTimeout(() => {
    let ticket = { premium: 400, diamond: 300, gold: 200 };
    callback(ticket);
  }, 2000);
}

getMovie(101, (m) => {
  console.log(m);
  getCinemas(m.movieId, (c) => {
    console.log(c);
    getTicket(c[0], (ticket)=>{
        console.log("Ticket Price:",ticket);
    });
  });
});
