const inputText = document.getElementById("input-text");
const submitBtn = document.getElementById("submit-btn");
const clearBtn = document.getElementById("clear-btn");
const resultContainer = document.getElementById("result");

const permuteString = (str, prefixValue = "", result = []) => {

  if (str.length === 0) {
   result.push(prefixValue);
   return result;
  } 
  else {
    for (let i=0; i < str.length; i++) {
     const currentChar = str[i];
     const remaining = str.slice(0, i) + str.slice(i + 1);
     permuteString(remaining, prefixValue + currentChar, result);
    }
    return [...new Set(result)];
  }
};

submitBtn.addEventListener("click", () => {
    const word = inputText.value.trim().toLowerCase();
    const regex = /^[a-z]+$/;
 if (!word) {
  alert("Please enter a word like 'cat'");
  return;
 };
 if (word.length > 7) {
    alert("Please enter a maximum of 7 characters.");
    return;
 };
 if (!regex.test(word)) {
  alert("Please enter letters only (a-z).");
  return;
 };
const results = [...new Set(permuteString(word))];
resultContainer.innerHTML = "";

const paragraph = document.createElement("p");
paragraph.className = "total-permutations";
paragraph.textContent = `Total permutations: ${results.length}`;
resultContainer.appendChild(paragraph);

results.forEach((permutation) => {
 const span = document.createElement("span");
 span.className = "permutation";
 span.textContent = permutation;
 resultContainer.appendChild(span);
});

inputText.value = "";
});

clearBtn.addEventListener("click", () => {
    inputText.value = "";
    resultContainer.innerHTML = "";
    inputText.focus();
});