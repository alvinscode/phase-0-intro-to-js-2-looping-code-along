// Code your solutions in this file
function writeCards(names, event) {
    let card = [];
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      card.push(message);
    }
    return card;
  }

function countDown(count) {
    while (count >= 0) {
        console.log(count);
        count--;
    }
}