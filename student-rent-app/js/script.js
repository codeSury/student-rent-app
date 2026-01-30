let properties = [];
let studentGroups = [];

/* OWNER: ADD PROPERTY */
function addProperty() {
  let property = {
    title: title.value,
    bhk: bhk.value,
    rent: rent.value,
    location: location.value,
    maxStudents: students.value,
    joined: 0
  };
  properties.push(property);
  alert("Property Added!");
}

/* STUDENT: SHOW PROPERTIES */
function showProperties() {
  if (!document.getElementById("propertyList")) return;

  propertyList.innerHTML = "";
  properties.forEach((p) => {
    let div = document.createElement("div");
    div.className = "property";
    div.innerHTML = `
      <h4>${p.title}</h4>
      <p>${p.bhk} BHK | ₹${p.rent}</p>
      <p>📍 ${p.location}</p>
      <p>👥 ${p.joined}/${p.maxStudents}</p>
      <button onclick="joinProperty()">Join Group</button>
    `;
    propertyList.appendChild(div);
  });
}

function joinProperty() {
  alert("Student joined property group (demo)");
}

/* STUDENT SEARCH GROUP */
function createStudentGroup() {
  let group = {
    area: area.value,
    needed: needed.value,
    joined: 1
  };
  studentGroups.push(group);
  showStudentGroups();
}

function showStudentGroups() {
  studentGroupsDiv = document.getElementById("studentGroups");
  studentGroupsDiv.innerHTML = "";
  studentGroups.forEach(g => {
    let div = document.createElement("div");
    div.className = "group";
    div.innerHTML = `
      <p>📍 ${g.area}</p>
      <p>👥 ${g.joined}/${g.needed}</p>
    `;
    studentGroupsDiv.appendChild(div);
  });
}

/* AUTO LOAD */
window.onload = showProperties;

