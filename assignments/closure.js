// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
// One aspect of a closure, closures are a tool for passing data to the next interaction (or function).

function animals() {
  const animalsIntro = "There are many species in the animal kingdom."
  const kingdom = "animal"
  console.log(animalsIntro);

  function mammals() {
    const mammalsIntro = "There are around 5000 species of mammals."
    const group = "mammal"
    console.log(mammalsIntro);

    function canines() {
      const species = "canine"
      console.log(`A Gray wold is a ${species} in the ${group} group of the ${kingdom} kingdom.`);
    }

    canines();
  } // mammals

  mammals(); 
} // animals

animals();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
let counterValue = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  counterValue += 1;
  return counterValue;
};
console.log(`Counter Value is: ${counter()}`); // 1
console.log(`Counter Value is: ${counter()}`); //
console.log(`Counter Value is: ${counter()}`); //

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let counterValueFactory = 0;
const counterFactory = (action) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  if (action == "increment") {
    counterValueFactory += 1;
  }
  else if (action == "decrement") {
    counterValueFactory += -1;
  }
  return counterValueFactory;
};
console.log(`Increase Factory Counter Value is: ${counterFactory("increment")}`); // 1
console.log(`Increase Factory Counter Value is: ${counterFactory("increment")}`); // 2
console.log(`Decrement Factory Counter Value is: ${counterFactory("decrement")}`); // 1
console.log(`Decrement Factory Counter Value is: ${counterFactory("decrement")}`); // 0

// Another take on Challenge 2: Create a counter function ====
const counter2 = {
  points: 0,
  score: function()  {
      this.points++;
  }
}

console.log(`Counter Value is: ${counter2.points}`); // 0
counter2.score();
console.log(`Counter Value is: ${counter2.points}`); // 1
counter2.score();
console.log(`Counter Value is: ${counter2.points}`); // 2
