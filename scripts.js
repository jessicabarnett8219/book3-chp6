const students = [
  {
      name: "Chris Miller",
      class: "History",
      info: "Failed last exam",
      score: 59
  },
  {
      name: "Courtney Seward",
      class: "History",
      info: "Has completed all homework",
      score: 91
  },
  {
      name: "Garrett Ward",
      class: "History",
      info: "Wonderful at helping other students",
      score: 88
  },
  {
      name: "John Dulaney",
      class: "History",
      info: "Has never missed a class or exam",
      score: 92
  },
  {
      name: "Greg Lawrence",
      class: "History",
      info: "Sub-par performance all around",
      score: 64
  },
  {
      name: "Leah Duvic",
      class: "History",
      info: "Wonderful student",
      score: 97
  },
  {
      name: "Jesse Page",
      class: "History",
      info: "Smokes too much. Distracting.",
      score: 76
  },
  {
      name: "Kevin Haggerty",
      class: "History",
      info: "Falls asleep in class",
      score: 79
  },
  {
      name: "Max Wolf",
      class: "History",
      info: "Talks too much",
      score: 83
  },
  {
      name: "Lissa Goforth",
      class: "History",
      info: "Asks pointless, unrelated questions",
      score: 78
  },
  {
      name: "Tyler Bowman",
      class: "History",
      info: "When was the last time he attended class?",
      score: 48
  },
  {
      name: "Ray Medrano",
      class: "History",
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

const student = (name, subject, info) => {
  let studentComponent = document.createElement("div");
  studentComponent.setAttribute("id", "student");
  let newH1 = h1(name, "xx-large");
  let newSection = section(subject, "section--padded");
  let newAside = aside(info, "pushRight");
  studentComponent.appendChild(newH1);
  studentComponent.appendChild(newSection);
  studentComponent.appendChild(newAside);
  return studentComponent;
}




const container = document.querySelector("#container");
let studentComponent = student("Marcus Fulbright", "Algebra", "Not a bright student");
container.appendChild(studentComponent);
console.log(container);



