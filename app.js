"use strict";

let artist = "tricot";

const dur = function (min, sec) {
  return min * 60 + sec;
};

const songA1 = {
  title: "Poolside",
  artist: artist,
  duration: dur(1, 1),
};
const songA2 = {
  title: "POOL",
  artist: artist,
  duration: dur(3, 57),
};

const songA3 = {
  title: "Fly",
  artist: artist,
  duration: dur(3, 55),
};

const songA4 = {
  title: "Hospitality",
  artist: artist,
  duration: dur(3, 26),
};

const songA5 = {
  title: "Art Sick",
  artist: artist,
  duration: dur(5, 2),
};

const songA6 = {
  title: "C & C",
  artist: artist,
  duration: dur(3, 8),
};

const theSongs = [songA1, songA2, songA3, songA4, songA5, songA6];

const songB1 = {
  name: "Noradrenaline",
  artist: artist,
  duration: dur(4, 3),
};

const songB2 = {
  name: "Run",
  artist: artist,
  duration: dur(3, 32),
};

const songB3 = {
  name: "E",
  artist: artist,
  duration: dur(3, 38),
};

const songB4 = {
  name: "Colorless Aquarium",
  artist: artist,
  duration: dur(2, 55),
};

const songB5 = {
  name: "Kobe number",
  artist: artist,
  duration: dur(3, 42),
};

const songB6 = {
  name: "Disappear",
  artist: artist,
  duration: dur(4, 35),
};

const andSongs = [songB1, songB2, songB3, songB4, songB5, songB6];

const songAZ = function () {
  const songTitles = theSongs.map(({ title }) => title);
  songTitles.sort();
  console.log(songTitles);
};

const albumDur = function () {
  let albumTime1 = theSongs.map(({ duration }) => duration);
  albumTime1 = albumTime1.reduce((acumulador, numero) => {
    return acumulador + numero;
  });

  console.log(albumTime1);
};

console.log(theSongs);
albumDur();
songAZ();

const THE = {
  name: "THE",
  artist: artist,
  songs: theSongs,
};

const AND = {
  name: "AND",
  artist: artist,
  songs: andSongs,
};

const tricot = {
  name: "tricot",
  albums: [THE, AND],
};

console.log(tricot);
