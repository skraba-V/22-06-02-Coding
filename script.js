let persons = JSON.parse(students);
console.table(persons);
function updateHTML(arr) {
  document.getElementById("result").innerHTML = "";
  for (let x of arr) {
    document.getElementById("result").innerHTML += `
    <div class="col-lg-4 col-sm-6 col-xs-12">
    <div class="card" style="width: 18rem;">
  <img src="${x.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${x.name}</h5>
    <p class="card-text">${x.age}.</p>
    <a class="btn-likes btn btn-primary">Like <span class="result">${x.likes}</span></a>
  </div>
</div>
</div>
    `;
  }
  likeAction();
}

function likeAction() {
  let btns = document.getElementsByClassName("btn-likes");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      persons[i].likes++;
      document.getElementsByClassName("result")[i].innerHTML = persons[i].likes;

      var sortedArray = persons.sort((a, b) => b.likes - a.likes);
      updateHTML(sortedArray);
    });
  }
}
// var sortedArray = persons.sort((a, b) => b.likes - a.likes);
updateHTML(persons);
likeAction();
