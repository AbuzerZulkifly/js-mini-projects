
const apiUrl = "https://dummyjson.com/quotes/random";

let quoteText = document.querySelector('.sub-container');
let btnQuote = document.querySelector('.btnquote');


async function getQuote(){
  const response = await fetch (apiUrl)
  let data = await response.json();
  console.log(data)
  quoteText.innerHTML = `
   <p class="quote">${data.quote}</p>
      <p class="author">
        -${data.author}-
      </p>`
      saveData()
}

btnQuote.addEventListener('click', ()=> {
  getQuote();
  saveData();
})

function saveData() {
  localStorage.setItem("quoteData", quoteText.innerHTML)
}

function getData() {
  quoteText.innerHTML = localStorage.getItem("quoteData")
}

getData();