"use strict";

const dur = function (min, sec) {
  return min + ":" + (sec <= 9 ? "0" + sec : sec);
};

const artist = "tricot";
const albums = {
  THE: [
    ["poolside", artist, dur(1, 1)],
    ["POOL", artist, dur(3, 57)],
    ["飛べ", artist, dur(3, 55)],
    ["おもてなし", artist, dur(3, 26)],
    ["Art Sick", artist, dur(5, 2)],
    ["C & C", artist, dur(3, 8)],
    ["おちゃんせんすぅす", artist, dur(2, 48)],
    [" 初耳", artist, dur(3, 58)],
    ["99.974℃", artist, dur(4, 21)],
    ["タラッタラッタ", artist, dur(4, 53)],
    ["CGPP", artist, dur(3, 46)],
    ["Swimmer", artist, dur(4, 27)],
    ["おやすみ", artist, dur(3, 30)],
  ],

  AND: [
    ["Noradrenaline", artist, dur(4, 3)],
    ["走れ", artist, dur(3, 32)],
    ["E", artist, dur(3, 38)],
    ["色の無い水槽", artist, dur(2, 55)],
    ["神戸ナンバー", artist, dur(3, 42)],
    ["消える", artist, dur(4, 35)],
    ["ぱい～ん (A N D Ver.)", artist, dur(4, 13)],
    ["食卓", artist, dur(4, 15)],
    ["庭", artist, dur(3, 19)],
    ["CBG", artist, dur(3, 12)],
    ["QFF", artist, dur(6, 55)],
    ["Break", artist, dur(3, 26)],
  ],
  TEN: [
    ["おまえ", artist, dur(2, 44)],
    ["サマーナイトタウン", artist, dur(4, 12)],
    ["Warp ", artist, dur(3, 24)],
    [" 箱", artist, dur(3, 40)],
    ["炒飯", artist, dur(3, 58)],
    ["あげない", artist, dur(2, 50)],
    ["悪戯", artist, dur(3, 46)],
    ["幽霊船", artist, dur(4, 6)],
    ["Laststep", artist, dur(4, 43)],
    ["體", artist, dur(3, 22)],
  ],
};

console.log(albums);
