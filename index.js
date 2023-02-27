// an example of an InstagramPost constructor function using the JavaScript constructor method:

function InstagramPost(authorHandle, content, imageLink, views, likes) {
  this.authorHandle = authorHandle;
  this.content = content;
  this.imageLink = imageLink;
  this.views = views;
  this.likes = likes;
}

// a new instance of the InstagramPost object by using the new keyword, like this:
const myPost = new InstagramPost(
  "gelaraph",
  "Check out my new post!",
  "https://myimage.com/image.jpg",
  1000,
  50
);

const myPic = new InstagramPost(
  "gelaraph",
  "TGIF!",
  "https://myimage.com/image.jpg",
  1000,
  50
);

// Factory function to create a person object
function createPerson(name, age, location) {
  return {
    name,
    age,
    location,
  };
}

// Factory function to create JAMB scores object
function createJambScores(eng, govt, lit, crk) {
  return {
    ENG: eng,
    GOVT: govt,
    LIT: lit,
    CRK: crk,
  };
}

// Create Musa object using the createPerson factory function
const musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");

// Create JAMB scores object using the createJambScores factory function
const musaJambScores = createJambScores(70, 85, 82, 94);

// Add JAMB scores object as a property to Musa object
musa.jambScores = musaJambScores;

// Object.assign(): This method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
const obj = { a: 1, b: 2 };
const cloneObj = Object.assign({}, obj);
console.log(cloneObj); // Output: { a: 1, b: 2 }

// Spread operator: This operator allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
const spreadObj = { a: 1, b: 2 };
const clonespreadObj = { ...obj };
console.log(clonespreadObj); // Output: { a: 1, b: 2 }

// JSON.stringify() and JSON.parse(): This method is used to convert a JavaScript object into a JSON string, and then parse it back into a JavaScript object.
const stringify0bj = { a: 1, b: 2 };
const clonestringifyObj = JSON.parse(JSON.stringify(obj));
console.log(clonestringifyObj); // Output: { a: 1, b: 2 }

// Object.create(): This method creates a new object with the specified prototype object and properties.
const createobj = { a: 1, b: 2 };
const clonecreateObj = Object.create(obj);
console.log(clonecreateObj); // Output: {}

// As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:

const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

// Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
// 	’Omoyele Sowore is the presidential candidate of AAC’

for (const party in presidentialCandidates) {
  console.log(
    `${presidentialCandidates[party]} is the presidential candidate of ${party}`
  );
}
