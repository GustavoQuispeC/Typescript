interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}
interface Details {
  author: string;
  year: number;
}
const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 360,
  song: "My way",
  details: {
    author: "Frank Sinatra",
    year: 1969,
  },
};

const song = "New song";

//! destructuring object
const { song: anotherSong, songDuration: duration, details } = audioPlayer;
const { author } = details;

console.log("SOng: ", anotherSong);
console.log("Duration: ", duration);
console.log("Author: ", author);

//! destructuring arreglos
const [ , , trunks = 'Not Found']: string[] = ["Goku", "Vegeta"];

console.log('Personaje 3: ', trunks);





export {};
