let user = {
  name: "Mustafa",
  surName: "Ozturk",
  age: 35,
  username: "musti",
  password: "123",
  interest: ["Müzik", "Seyahat", "Spor"],
  expenses: [100, 60, 25, 850, 158],
  address: {
    country: "U.S.A",
    city: "New York",
  },
};

let ul = document.querySelector(".expenses_ul");
let filterButton = document.querySelector("#filterButton");
let clearButton = document.querySelector("#clearButton");

function filter() {
  let value = document.querySelector(".myinput").value;

  let list = user.expenses.filter((x) => x > value);

  list.forEach((y) => elemanYarat2(y));

  //   filterButton.setAttribute("class", "btn btn-primary disabled");
  filterButton.classList.add("disabled");
  clearButton.classList.remove("disabled");
}

function elemanYarat(value) {
  let li = document.createElement("li");
  li.textContent = value;
  ul.appendChild(li);
}

function elemanYarat2(value) {
  ul.innerHTML += `<li>${value}</li>`;
}
function clearUl() {
  ul.innerHTML = "";
  filterButton.classList.remove("disabled");
  clearButton.classList.add("disabled");
}
