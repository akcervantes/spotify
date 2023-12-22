"use strict";

let artist = "tricot";

const dur = function (min, sec) {
  return min * 60 + sec;
};

const song1 = {
  title: "Poolside",
  artist: artist,
  duration: dur(1, 1),
};
const song2 = {
  title: "POOL",
  artist: artist,
  duration: dur(3, 57),
};

const song3 = {
  title: "Fly",
  artist: artist,
  duration: dur(3, 55),
};

const song4 = {
  title: "Hospitality",
  artist: artist,
  duration: dur(3, 26),
};

const song5 = {
  title: "Art Sick",
  artist: artist,
  duration: dur(5, 2),
};

const song6 = {
  title: "C & C",
  artist: artist,
  duration: dur(3, 8),
};

let THE = [song1, song2, song3, song4, song5, song6];
let songTitles = [];

const songSort = function () {
  for (let i = 0; i < THE.length; i++) {
    songTitles.push([THE[i][0]]);
    songTitles.sort();
  }
};
