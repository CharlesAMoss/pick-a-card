const _ = require('underscore')
const prompt = require('syncprompt')

function createDeck() {
  let deck = []
  const numVal = _.range(2, 11).map(String)
  const faceVal = ['J', 'Q', 'K', 'A']
  const jokers = ['Jk', 'jK']
  const value = numVal.concat(faceVal)
  const suits = ['♠', '♥', '♣', '♦']
  for (var suit of suits) {
    const cards = value.map(val => val + suit)
    deck.push(cards)
  }
  deck = deck.concat(jokers)
  deck = _.flatten(deck)
  return deck
}

function getRando(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Table(deck) {

  this.deck = _.shuffle(deck)
  this.pOne = []
  this.topCard = this.deck.slice(0,1)

}

const game = new Table(createDeck())

console.log('the deck has been shuffled\n')
const pick = prompt(`type draw to pick a card\n`)
if (pick === 'draw') {
      game.pOne.push(game.deck.slice(0,1))
      game.deck.shift()
      console.log(`Your card is ${game.pOne}\n`)
    } else if (pick === 'end') {
      console.log(`bye bye`)
    } else {
      console.log(`try that again...\n`)
    }
