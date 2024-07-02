function triParInsertion(arr) {
  let i, j;

  for (i = 1; i < arr.length; i++) {
    let current = arr[i];
    j = i - 1;

    // Déplacer les éléments de arr[0..i-1], qui sont plus grands que current, d'une position vers l'avant
    while (j >= 0 && arr[j] > card) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = card;
  }

  return arr;
}

// Exemple :
let array = [12, 11, 13, 5, 6];
console.log("Tableau non trié :", array);
let sortedArray = triParInsertion(array);
console.log("Tableau trié :", sortedArray);
