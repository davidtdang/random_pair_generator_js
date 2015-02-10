var shuffleArray;
var classArray = [
"Kevin Litchfield",
"Erika Lim",
"Zubair Desai",
"Nina Bachvarova",
"Julien Mayer",
"Denise Shephard",
"Oscar Linares",
"Max Gordon",
"Dana Mulder",
"Rory Grant",
"Tina Hweicheng Loh",
"Kristian Ziel",
"Ngan Pham",
"Brady Stilwell",
"Michael Dean",
"Alex Sell",
"Michael Smykowski",
"Luis Manzo",
"Heather Farley",
"Irina Tagintseva",
"Lauren Richie",
"Edozie Izegbu",
"David Dang",
"Bradley Johnson",
"Helen Lam",
"Cameron Irmas",
"Victoria Billingsley",
"Rosa Choi",
];

$(document).ready(function() {
  $('.button').on('click', function() {
    console.log('hi');
    shuffleArray = classArray.sort(function() {return 0.5 - Math.random();});

    makeList();

  });
})

function makeList () {
  $('.odd-list').empty();
  $('.even-list').empty();

  for (var i = 0; i < shuffleArray.length; i++) {
    if (i%2 === 0) {
      $('.odd-list').append('<ul>' + shuffleArray[i] + '</ul>');
    }
    else {
      $('.even-list').append('<ul>' + shuffleArray[i] + '</ul>');
    }
  };
}
