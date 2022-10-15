let search = document.getElementById("#countryin");
let btn = document.getElementById("#submit");
search.addEventListener("click", (e) => {
  e.preventDefault;
  let countryin = countryin.value;
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(countryin);
});
