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
  

  
// individual functions
const h1 = (title, style) => {
  let newH1 = document.createElement("h1");
  newH1.innerHTML = title;
  newH1.classList.add(style);
  return newH1;
}

const section = (title, style) => {
  let newSection = document.createElement("section");
  newSection.innerHTML = title;
  newSection.classList.add(style);
  return newSection;
}

const aside = (title, style) => {
  let newAside = document.createElement("aside");
  newAside.innerHTML = title;
  newAside.classList.add(style);
  return newAside;
}

// student component function
const student = (name, subject, info, score) => {
  let studentComponent = document.createElement("div");
  studentComponent.setAttribute("id", "student");

  let newH1 = h1(name, "xx-large");
  // logic to change color for passing or failing
    if(score >= 60) {
      newH1.classList.add("passing");
      } else {
      newH1.classList.add("failing");
      }
  let newSection = section(subject, "section--padded");
  let newAside = aside(info, "pushRight");

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







