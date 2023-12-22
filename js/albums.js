"use strict";

const dur = function (min, sec) {
  // return min + ":" + (sec <= 9 ? "0" + sec : sec);
  return min * 60 + sec;
};
const artist = "tricot";

const albums = {
  THE: [
    ["Poolside", artist, dur(1, 1)],
    ["POOL", artist, dur(3, 57)],
    ["Fly", artist, dur(3, 55)],
    ["Hospitality", artist, dur(3, 26)],
    ["Art Sick", artist, dur(5, 2)],
    ["C & C", artist, dur(3, 8)],
    ["Ochansensu", artist, dur(2, 48)],
    ["First time hearing", artist, dur(3, 58)],
    ["99.974℃", artist, dur(4, 21)],
    ["Taratta Ratta", artist, dur(4, 53)],
    ["CGPP", artist, dur(3, 46)],
    ["Swimmer", artist, dur(4, 27)],
    ["Good Night", artist, dur(3, 30)],
  ],

  AND: [
    ["Noradrenaline", artist, dur(4, 3)],
    ["Run", artist, dur(3, 32)],
    ["E", artist, dur(3, 38)],
    ["Colorless aquarium", artist, dur(2, 55)],
    ["Kobe number", artist, dur(3, 42)],
    ["Disappear", artist, dur(4, 35)],
    ["Pain (A N D Ver.)", artist, dur(4, 13)],
    ["Dining Table", artist, dur(4, 15)],
    ["Garden", artist, dur(3, 19)],
    ["CBG", artist, dur(3, 12)],
    ["QFF", artist, dur(6, 55)],
    ["Break", artist, dur(3, 26)],
  ],
  TEN: [
    ["You", artist, dur(2, 44)],
    ["Summer Night Town ", artist, dur(4, 12)],
    ["Warp", artist, dur(3, 24)],
    ["Box", artist, dur(3, 40)],
    ["Fried Rice", artist, dur(3, 58)],
    ["I won't give it", artist, dur(2, 50)],
    ["Mischief", artist, dur(3, 46)],
    ["Ghost Ship", artist, dur(4, 6)],
    ["Laststep", artist, dur(4, 43)],
    ["Body", artist, dur(3, 22)],
  ],
};

const songTitles = [];
const albumLong = [];
let albumTime = 0;

const songSort = function () {
  for (let i = 0; i < albums.THE.length; i++) {
    songTitles.push(albums.THE[i][0]);
    albumLong.push(albums.THE[i][2]);
  }
  songTitles.sort();
};

const albumSum = function () {
  for (let i = 0; i < albumLong.length; i++) {
    albumTime += albumLong[i];
  }
};

songSort();
albumSum();

// // const albumDur = function () {
// //   for (let i = 0; i < albums.THE.length; i++)
// // // };

// const albumTotal = albumLong.reduce((acc, curr) => acc + curr, 0);

console.log(albumTime);
console.log(albums);
console.log(songTitles);

// const songTitles = [
//   albums.THE[0][0],
//   albums.THE[1][0],
//   albums.THE[2][0],
//   albums.THE[4][0],
//   albums.THE[5][0],
//   albums.THE[6][0],
//   albums.THE[7][0],
//   albums.THE[8][0],
//   albums.THE[9][0],
//   albums.THE[10][0],
//   albums.THE[11][0],
//   albums.THE[12][0],
// ];

// songTitles.sort();

// console.log(songTitles);
