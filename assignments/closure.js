// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
// One aspect of a closure, closures are a tool for passing data to the next interaction (or function).

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */
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

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
