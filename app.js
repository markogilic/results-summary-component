let categorys = document.querySelectorAll('#category');
let scores = document.querySelectorAll('#score');

fetch('data.json')
  .then((response) => response.json())
  .then((json) => {
    categorys.forEach((category, idx) => {
      let textContent = json[idx].category;
      let img = `<img src="assets/images/icon-${json[
        idx
      ].category.toLowerCase()}.svg" alt="${json[idx].category} icon" />`;
      category.innerHTML = img + textContent;
    });
    scores.forEach((score, idx) => {
      score.textContent = json[idx].score;
    });
  });
