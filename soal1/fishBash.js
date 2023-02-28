function fishBash(val) {
  for (let i = 1; i <= val; i++) {
    let output = "";
    if (i % 3 === 0) {
      output = "fish";
    }
    if (i % 5 === 0) {
      output = "bash";
    }
    if (output === "") {
      output = i;
    }
    console.log(output);
  }
}
fishBash(5);
