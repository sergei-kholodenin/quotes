const quotes = []
fetch('quotes.txt')
  .then(response => response.text())
  .then(text => text.split('\n').map(line => quotes.push(line)));
