/**
 * check if a note can be created from a magazine.
 */
function harmlessRansomNote(noteText, magazineText) {
  const dict = {};
  let notEnough = false;
  magazineText.split(" ").forEach((word) => {
    if (!dict[word]) dict[word] = 0;
    dict[word]++;
  });
  noteText.split(" ").forEach((word) => {
    if (dict[word]) {
      dict[word]--;
      if (dict[word] < 0) notEnough = true;
    } else {
      notEnough = true;
    }
  });
  if (notEnough) {
    console.log("There are not enough words in magazine");
  } else {
    console.log("Note can be created from magazine");
  }
}

const noteText = "hello everyone";
const magazineText =
  "hello everyone this world will be better place if people are more empathtic.";
harmlessRansomNote(noteText, magazineText);
