import express from "express";

const app = express();

//middleware to tell express to expect json and convert it for us to an object (use for line 29)
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ success: true, message: "Welcome to the Emoji Server" });
});

//get requests
app.get("/emojis", (req, res) => {
  res.send({ success: true, emojis });
});

app.get("/emojis/:emojiId", (req, res) => {
  const emoji = findEmoji(req.params.emojiId);
  res.send({ success: true, emoji });
});

//post request
app.post("/emojis", (req, res) => {
  const { name, character } = req.body;
  if (!name)
    return res.send({
      success: false,
      error: "Name must be provided to create a emoji!",
    });
  if (!character)
    return res.send({
      success: false,
      error: "Character must be provided to create a emoji!",
    });
  const emoji = {
    id: emojis.length + 1,
    name,
    character,
  };
  emojis.push(emoji);
  res.send({ success: true, emoji });
});

//put request
app.put("/emojis/:emojiId", (req, res) => {
  const emoji = findEmoji(req.params.emojiId);
  const { name, character } = req.body;
  if (!name)
    return res.send({
      success: false,
      error: "Name must be provided to update a emoji!",
    });
  if (!character)
    return res.send({
      success: false,
      error: "Character must be provided to update a emoji!",
    });
  //update emoji
  emoji.name = name;
  emoji.character = character;
  res.send({ success: true, emoji });
});

//delete request
app.delete("/emojis/:emojiId", (req, res) => {
  const emoji = findEmoji(req.params.emojiId);
  const emojiIndex = emojis.indexOf(emoji);
  emojis.splice(emojiIndex, 1);
  res.send({ success: true, emoji });
});

app.use((req, res) => {
  res.send({ success: false, error: "No route found." });
});

// express's built in error handling. need 4 paramaters to activate
app.use((error, req, res, next) => {
  res.send({ success: false, error: error.message });
});

//function to find emoji in array emojis
function findEmoji(emojiId) {
  const emoji = emojis.find((child) => child.id === parseInt(emojiId));
  if (!emoji)
    return res.send({
      success: false,
      error: "The emoji with the given ID was not found!",
    });
  return emoji;
}

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//fake db
let emojis = [
  { id: 1, character: "😀", name: "Grinning Face" },
  { id: 2, character: "🚀", name: "Rocket" },
  { id: 3, character: "🌟", name: "Star" },
  { id: 4, character: "🎉", name: "Party Popper" },
  { id: 5, character: "🐱", name: "Cat Face" },
  { id: 6, character: "🌺", name: "Hibiscus" },
  { id: 7, character: "🍔", name: "Hamburger" },
  { id: 8, character: "🚲", name: "Bicycle" },
  { id: 9, character: "📚", name: "Books" },
  { id: 10, character: "🎈", name: "Balloon" },
  { id: 11, character: "🍕", name: "Pizza" },
  { id: 12, character: "🏖️", name: "Beach with Umbrella" },
  { id: 13, character: "🎸", name: "Guitar" },
  { id: 14, character: "🌈", name: "Rainbow" },
  { id: 15, character: "🌊", name: "Ocean Wave" },
  { id: 16, character: "🍦", name: "Ice Cream" },
  { id: 17, character: "🎨", name: "Artist Palette" },
  { id: 18, character: "🐶", name: "Dog Face" },
  { id: 19, character: "🌄", name: "Sunrise Over Mountains" },
  { id: 20, character: "🎓", name: "Graduation Cap" },
  { id: 21, character: "🍂", name: "Fallen Leaf" },
  { id: 22, character: "🍁", name: "Maple Leaf" },
  { id: 23, character: "🎃", name: "Jack-O-Lantern" },
  { id: 24, character: "🎄", name: "Christmas Tree" },
  { id: 25, character: "❄️", name: "Snowflake" },
  { id: 26, character: "🌻", name: "Sunflower" },
  { id: 27, character: "🌍", name: "Earth Globe Europe-Africa" },
  { id: 28, character: "🌞", name: "Sun with Face" },
  { id: 29, character: "🌚", name: "New Moon Face" },
  { id: 30, character: "🎶", name: "Musical Notes" },
];
