/*Ecrivez un programme qui affiche ligne par ligne, l'index et le caractère situé à cet index de la phrase suivante:

C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar.

Le format du message attendu pour chaque caractère sera par exemple:
Le caractère C est à l'index 0 Le caractère ' est à l'index 1
*/

let sentence = `C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar.`;



for (let i = 0; i < sentence.length; i++)
  console.log(`Le caractère ${sentence[i]} est à l'index ${i}`);


console.log(`Un court extrait de Salammbô (Gustave Flaubert)\nNombre de charactère : ${sentence.length}`);