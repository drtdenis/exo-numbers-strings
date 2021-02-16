/*Ecrivez un programme qui convertira les nombres suivants
en binaire, octal et hexadécimal(utiliser.toString() pour cela):
10
15
16
5005
52390903
*/

let nombres = [10,
  15,
  16,
  5005,
  52390903
];

for (let nombre of nombres) {
  console.log(` ${nombre.toString(2)}`);
  console.log(` ${nombre.toString(8)}`);
  console.log(` ${nombre.toString(16)}\n`);
}