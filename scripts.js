const students = [
  {
      name: "Chris Miller",
      course: "History",
      info: "Failed last exam",
      score: 59
  },
  {
      name: "Courtney Seward",
      course: "History",
      info: "Has completed all homework",
      score: 91
  },
  {
      name: "Garrett Ward",
      course: "History",
      info: "Wonderful at helping other students",
      score: 88
  },
  {
      name: "John Dulaney",
      course: "History",
      info: "Has never missed a class or exam",
      score: 92
  },
  {
      name: "Greg Lawrence",
      course: "History",
      info: "Sub-par performance all around",
      score: 64
  },
  {
      name: "Leah Duvic",
      course: "History",
      info: "Wonderful student",
      score: 97
  },
  {
      name: "Jesse Page",
      course: "History",
      info: "Smokes too much. Distracting.",
      score: 76
  },
  {
      name: "Kevin Haggerty",
      course: "History",
      info: "Falls asleep in class",
      score: 79
  },
  {
      name: "Max Wolf",
      course: "History",
      info: "Talks too much",
      score: 83
  },
  {
      name: "Lissa Goforth",
      course: "History",
      info: "Asks pointless, unrelated questions",
      score: 78
  },
  {
      name: "Tyler Bowman",
      course: "History",
      info: "When was the last time he attended class?",
      score: 48
  },
  {
      name: "Ray Medrano",
      course: "History",
      info: "Needs to contribute to in-class discussions",
      score: 95
  }
]
  

  
// function to make an element

const makeElement = (...props) => {
let newElement = document.createElement(props[0]);
newElement.innerHTML = props[1];
newElement.classList.add(props[2]);
return newElement;
}

// function to make the whole student component
const student = (...props) => {
  // makes the outer container
  let studentComponent = document.createElement("div");
  studentComponent.classList.add("student");

  // calling the makeElement function to make the h1
  let newH1 = makeElement("h1", props[0], "xx-large");
  // logic to change color for passing or failing
    if(props[3] >= 60) {
      newH1.classList.add("passing");
      } else {
      newH1.classList.add("failing");
      }
  // calling the makeElement function to make the section
  let newSection = makeElement("section", props[1], "section--padded");
  // calling the makeElement function to make the 
  let newAside = makeElement("aside", props[2], "pushRight");

  // appends h1, section and aside to the outer container
  studentComponent.appendChild(newH1);
  studentComponent.appendChild(newSection);
  studentComponent.appendChild(newAside);
  return studentComponent;
}

//  loop to add components to the DOM. Use the student function inside.

students.forEach( (currentStudent => {
  let studentComponent = student(currentStudent.name, currentStudent.course, currentStudent.info, currentStudent.score);

  let container = document.querySelector("#container");
  container.appendChild(studentComponent);
  }
))

    







