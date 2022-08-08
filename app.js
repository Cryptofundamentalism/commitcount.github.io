function getElement(id) {
  return document.getElementById(id);
}

fetch('https://api.github.com/repos/bitcoin/bitcoin/stats/commit_activity')
.then(res => res.json())
.then((res) => {
  const data = res.data;
  getElement('0').innerHTML =  'firstweek: ' + data.name;
  getElement('1').innerHTML = 'secondweek: ' + data.symbol;
  getElement('rank').innerHTML = 'Rank: ' + data.rank;
  getElement('price').innerHTML = 'Price: ' + data.quotes.USD.price;
  // do the rest here
});
