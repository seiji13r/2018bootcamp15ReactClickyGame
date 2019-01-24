let characters = [
  {
    name: "Dilbert",
    image: "./img/Dilbert-Pin.jpg"
  },
  {
    name: "Alice",
    image: "./img/Alice.png"
  },
  {
    name: "Dogbert",
    image: "./img/Dogbert1.jpg"
  },
  {
    name: "Catbert",
    image: "./img/Catbert1.png"
  },
  {
    name: "Ratbert",
    image: "./img/Ratbert.png"
  },
  {
    name: "Loud Howard",
    image: "./img/Loud_Howard_1.jpg"
  },
  {
    name: "Wally",
    image: "./img/Wally.png"
  },
  {
    name: "Pointy-Haired Boss",
    image: "./img/Boss.png"
  },
  {
    name: "Asok",
    image: "./img/ASOK.jpeg"
  },
  {
    name: "Dilbert's Mother",
    image: "./img/Dilmom.jpg"
  },
  {
    name: "Bob the Dinosaur",
    image: "./img/BobTheDinosaur.gif"
  },
  {
    name: "Mister Garbage Man",
    image: "./img/Garbageman.jpg"
  }
]


// Add Array Index as id Property to each element.
characters = characters.map((ch, idx ) => {
  ch["id"] = idx;
  return ch;
});

const navMessages = [
  {
    id: 0,
    msg: ""
  },
  {
    id: 1,
    msg: "You Already Clicked This One!!! Try Again!!"
  },
  {
    id: 2,
    msg: "Excellent!! Hit the Next One!!!"
  },
  {
    id: 3,
    msg: "You Win"
  },
]

module.exports = { characters, navMessages }