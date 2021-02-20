//capitalize first letter of each word

function capitaliz(str) {
  const strArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(" ");
}
console.log(capitaliz("ah med is awsem"));

///////////////////////////////

// Array's higher order Methods (forEach-filter-map-sort-reduce)

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// normal for loop

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// forEach
//////////

companies.forEach(function(company) {
  console.log(company.name);
});
///////////////////////////////////////////////////
// filter //
///////////

// const canDrink = ages.filter(function(age) {
//   if (age >= 21) {
//     return true;
//   }
// });
// console.log(canDrink);

// filter with es6
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

// with for loop

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

const retailCompanies = companies.filter(
  company => company.category === "Retail"
);
console.log(retailCompanies);

const eightiesCompanies = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);
console.log(eightiesCompanies);

//////////////////////////////////////////////////////////
// map //
////////

const companiesNames = companies.map(function(company) {
  return company.name;
});
console.log(companiesNames);

const ageMap = ages
  .map(age => Math.sqrt(age)) //creates a new array of square roots
  .map(age => age * 2); // creates a new array of sqrt arr then *2
console.log(ageMap);

/////////////////////////////////////////////////////////
//sort//
///////

// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);

// short hand of the code above
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

const sortedAges = ages.sort((a, b) => a - b); // ascending order
console.log(sortedAges);

//////////////////////////////////////////////////////////
//reduce//
/////////

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);

////////////////////////////////////////
//combined methods//
///////////////////

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(combined);
///////////////////////////////////////////////////////////////////////
//Anagram validation
//create a function which receives two different strings and return true if they are anagrms and false otherwise

function validAnagram(ana1, ana2) {
  if (ana1.length !== ana2.length) {
    return false;
  }
  let lookup = {};

  for (let i = 0; i < ana1.length; i++) {
    let letter = ana1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < ana2.length; i++) {
    let letter = ana2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
console.log(validAnagram("care", "race"));
