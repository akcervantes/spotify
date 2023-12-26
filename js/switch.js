"use strict";

const rene = {
  name: "rene",
  birthDay: new Date(2005, 11, 22),
  friends: ["javier", "mario", "julia"],
  job: "maestro",
  favColor: "azul",
};
const julia = {
  name: "julia",
  birthDay: new Date(2023, 3, 8),
  friends: ["javier", "mario", "rene"],
  job: "asddadas",
  favColor: "red",
};

const karina = {
  name: "karina",
  birthDay: new Date(1995, 4, 12),
  friends: ["javier", "mario", "rene"],
  job: "animadora",
  favColor: "naranja",
};

// Aries (March 21 – April 19)
// Taurus (April 20 – May 20)
// Gemini (May 21 – June 20)
// Cancer (June 21 – July 22)
// Leo (July 23 – August 22)
// Virgo (August 23 – September 22)
// Libra (September 23 – October 22)
// Scorpio (October 23 – November 21)
// Sagittarius (November 22 – December 21)
// Capricorn (December 22 – January 19)
// Aquarius (January 20 – February 18)
// Pisces (February 19 – March 20)

function zodiacSign(persona) {
  const month = persona.birthDay.getMonth() + 1;
  const day = persona.birthDay.getDay();

  let sign;

  switch (month) {
    case 1:
      sign = day <= 19 ? "capricornio" : "acuario";
      break;
    case 2:
      sign = day <= 18 ? "acuario" : "piscis";
      break;
    case 3:
      sign = day <= 20 ? "piscis" : "aries";
      break;
    case 4:
      sign = day <= 19 ? "aries" : "tauro";
      break;
    case 5:
      sign = day <= 20 ? "tauro" : "geminis";
      break;
    case 6:
      sign = day <= 20 ? "geminis" : "cancer";
      break;
    case 7:
      sign = day <= 22 ? "cancer" : "leo";
      break;
    case 8:
      sign = day <= 22 ? "leo" : "virgo";
      break;
    case 9:
      sign = day <= 22 ? "virgo" : "libra";
      break;
    case 10:
      sign = day <= 22 ? "libra" : "escorpio";
      break;
    case 11:
      sign = day <= 21 ? "escorpio" : "sagitario";
      break;
    case 12:
      sign = day <= 21 ? "sagitario" : "capricornio";
      break;
  }

  console.log(`${persona.name} es ${sign}`);
}

zodiacSign(rene);
zodiacSign(julia);
zodiacSign(karina);

// const rene = {
//   name: "rene",
//   birthDay: new Date(2005, 11, 22),
//   friends: ["javier", "mario", "julia"],
//   job: "maestro",
//   favColor: "azul",
// };

// Crear una función que reciba un arreglo de 5 objetos de la forma:
// {name: ‘Rene’, birthday: ‘2023-12-22’}
// y que regrese un arreglo de strings con el siguiente formato:
// 'Rene es capricornio'
// Considerar el uso de switch y objetos Date
// Opcional: Crear una solución que no implique el uso de switch
