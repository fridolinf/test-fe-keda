function isPalindrome(str) {
  // Menghapus whitespace dan mengubah ke huruf kecil
  str = str.toLowerCase().replace(/\s/g, "");

  // Membalikkan string
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  // Mengecek apakah string asli dan yang dibalik sama
  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("katak")); // true
console.log(isPalindrome("arah")); // false
console.log(isPalindrome("cek")); // false
