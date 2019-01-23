let characters = [
  {
    name: "Dilbert",
    image: "imageDilbert"
  },
  {
    name: "Alice",
    image: "imageAlice"
  },
  {
    name: "Dogbert",
    image: "image"
  },
  {
    name: "Catbert",
    image: "image"
  },
  {
    name: "Ratbert",
    image: "image"
  },
  {
    name: "Loud Howard",
    image: "image"
  },
  {
    name: "Wally",
    image: "image"
  },
  {
    name: "Pointy-Haired Boss",
    image: "image"
  },
  {
    name: "Ashok",
    image: "image"
  },
  {
    name: "Dilbert's Mother",
    image: "image"
  },
  {
    name: "Bob the Dinosaur",
    image: "image"
  },
  {
    name: "Mister Garbage Man",
    image: "image"
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