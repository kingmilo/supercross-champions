let riders = [
  {
    name: 'Ken Roczen',
    championships: []
  },
  {
    name: 'Ryan Dungey',
    championships: [
      {
        name: 'AMA 450 Supercross Champion',
        year: 2010,
      },
      {
        name: 'AMA 450 Supercross Champion',
        year: 2015,
      },
      {
        name: 'AMA 450 Supercross Champion',
        year: 2016,
      },
      {
        name: 'AMA 450 Supercross Champion',
        year: 2017,
      }
    ]
  },
  {
    name: 'Cooper Web',
    championships: [
      {
        name: 'AMA 450 Supercross Champion',
        year: 2019,
      },
      {
        name: 'AMA 250 Supercross Champion',
        year: 2017,
      },
    ]
  },
  {
    name: 'Ryan Villopoto',
    championships: [
      {
        name: 'AMA 450 Supercross Champion',
        year: 2011,
      },
      {
        name: 'AMA 450 Motocross Champion',
        year: 2011,
      },
      {
        name: 'AMA 450 Supercross Champion',
        year: 2012,
      },
      {
        name: 'AMA 450 Supercross Champion',
        year: 2013,
      },
      {
        name: 'AMA 450 Supercross Champion',
        year: 2014,
      },
      {
        name: 'AMA 450 Supercross Champion',
        year: 2017,
      }
    ]
  }
]

// Who has won the most 450 supercross championships? Get a list of riders
// names in order based on who has won the most 450 supercross championships.


/* FIRST SOLUTION */
//let champ = [];
// for (let i = 0; i < riders.length; i++) {
//   champ.push( {name: riders[i].name, wins: riders[i].championships.length} );
//   champ.sort((a,b) => b.wins - a.wins)
// }
// let blah = champ.map(item => item.name);
// console.log(blah.join(', '));


/* SECOND SOLUTION */
// const countChampionships = (name, champ) => {
//   let count = 0
//   champ.forEach(function(item) { if (item.name === "AMA 450 Supercross Champion") { count++ }  })
//   return (name + ', ' + count)
// }
// const sortByChampionships = riders.sort((a,b) => b.championships.length - a.championships.length)
// const riderName = sortByChampionships.map(item => countChampionships(item.name, item.championships))
// console.log(riderName)


/* SECOND SOLUTION REFACTORED */
const countChampionships = (name, champ) => {
  return (name + ', ' + champ.filter(item => item.name === "AMA 450 Supercross Champion").length)
}

const sortByChampionships = riders.sort((a,b) => b.championships.length - a.championships.length)
const riderName = sortByChampionships.map(item => countChampionships(item.name, item.championships))
console.log(riderName)




















