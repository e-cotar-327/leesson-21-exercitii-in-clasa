/*
1. Declarați variabile numite „country”, „continent” și „population” și atribuiți-le valorile corespunzătoare (populația în milioane), afișați valorile lor în consolă.
2. Declarați o variabilă numită „isIsland” și setați valoarea acesteia în funcție de țara aleasă. Variabila ar trebui să dețină o valoare booleană. De asemenea, declarați o variabilă „language”, dar nu îi atribuiți încă nicio valoare. 
3. Afișați tipurile valorilor „isIsland”, „population”, „country” și „language” în consolă.
4. Setați valoarea „language” la limba vorbită în țara aleasă.
5. Dacă țara dvs. s-ar împărți în jumătate și fiecare jumătate ar conține jumătate din populație, atunci câți oameni ar trăi în fiecare jumătate?
6. Creșteți populația țării dvs. cu 1 mln și înregistrați rezultatul în consolă
7. Finlanda are o populație de 6 milioane de locuitori. Țara ta are mai mulți oameni decât Finlanda?
8. Populația medie a unei țări este de 33 de milioane de oameni. Țara ta are mai puțini oameni decât o țară medie?
9. Pe baza variabilelor pe care le-ați creat, creați o nouă variabilă „description” care conține un șir (string) cu acest format: „Portugalia este în Europa și cei 11 milioane ale ei oamenii vorbesc portugheza”
*/

// Exercitiul 1
const country = 'Republic of Moldova';
const continent = 'Europa';
let population = 2.539;
//console.log(country, continent, population);

// Exercitiul 2
const isIsland = false;
let language;

// Exercitiul 3
//console.log(typeof isIsland);
//console.log(typeof population);
//console.log(typeof country);
//console.log(typeof language);

// Exercitiul 4
language = 'romanian';

// Exercitiul 5
let halfPopulation = population / 2;
//console.log(halfPopulation);
let quarterPopulation = halfPopulation / 2;
//console.log(quarterPopulation);

// Exercitiul 6
let plusMlnPopulation = ++population;
//console.log(plusMlnPopulation);

// Exercitiul 7
let populationFinland = 6;
//console.log(population > populationFinland);

// Exercitiul 8
let averagePopulation = 33;
//console.log(population < averagePopulation);

// Exercitiul 9
let description = country + " este in " + continent + " si cei " + population + " milioane de cetateni ale ei vorbesc " + language + ".";
console.log(description);
