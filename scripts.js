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

const makeElement = (element, title, style) => {
let newElement = document.createElement(element);
newElement.innerHTML = title;
newElement.classList.add(style);
return newElement;
}

// function to make the whole student component
const student = (name, subject, info, score) => {
  // makes the outer container
  let studentComponent = document.createElement("div");
  studentComponent.setAttribute("id", "student");

  // makes the h1
  let newH1 = makeElement("h1", name, "xx-large");
  // logic to change color for passing or failing
    if(score >= 60) {
      newH1.classList.add("passing");
      } else {
      newH1.classList.add("failing");
      }
  // makes the section
  let newSection = makeElement("section", subject, "section--padded");
  // makes the aside
  let newAside = makeElement("aside", info, "pushRight");

  // appends h1, section and aside to the outer container
  studentComponent.appendChild(newH1);
  studentComponent.appendChild(newSection);
  studentComponent.appendChild(newAside);
  return studentComponent;
}

//  loop to add components to the DOM
for (i = 0; i < students.length; i++) {
  let studentComponent = student(students[i].name, students[i].course, students[i].info, students[i].score);
    
  let container = document.querySelector("#container");
  container.appendChild(studentComponent);
}







