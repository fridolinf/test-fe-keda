// Fungsi untuk mengurutkan angka dari kecil ke besar
function sortAsc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// Fungsi untuk mengurutkan angka dari besar ke kecil
function sortDesc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let arr = [3, 7, 2, 1, 8, 4, 5, 6];
console.log(sortAsc(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(sortDesc(arr)); // Output: [8, 7, 6, 5, 4, 3, 2, 1]
