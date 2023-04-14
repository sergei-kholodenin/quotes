const quotes = []
fetch('quotes.txt')
  .then(response => response.text())
  .then(text => text.split('\n').map(line => quotes.push(line)));


const quoteEl = document.getElementById("quote");
const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    let rnd = Math.floor(Math.random() * 94);
    quoteEl.textContent = quotes[rnd];
});