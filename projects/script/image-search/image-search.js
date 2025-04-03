const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".img-input")
const searchResults = document.querySelector(".search-result");
const btnSearch = document.querySelector(".btnsearch"); 
const btnMore = document.querySelector(".btnmore"); 
const accessKey = "&client_id=BVLJkm1hIID9uwEPWfOXEK7bUZ5G8Bg9bJjQut2lRz0";
const apiKey = "https://api.unsplash.com/search/photos?"

let page = 1
async function getImages() {
  const completeLink = await fetch(`${apiKey}page=${page}&query=${searchInput.value}${accessKey}&per_page=12`);
  let imgData = await completeLink.json();

  if (page === 1) {
    searchResults.innerHTML = ""
  }
  const result = imgData.results;

  result.map((results) => {
    const image = document.createElement('img');
    image.src = results.urls.regular;
    const imageLink = document.createElement('a');
    imageLink.href = results.links.html
    imageLink.target = "_blank"
    imageLink.classList.add("images")

    imageLink.appendChild(image);
    searchResults.appendChild(imageLink)
  })

}

searchForm.addEventListener("submit", (event)=> {
  event.preventDefault();
  getImages();
  btnMore.style.display = "block";
}
)

btnMore.addEventListener('click', ()=> {
  page++
  getImages();
})
