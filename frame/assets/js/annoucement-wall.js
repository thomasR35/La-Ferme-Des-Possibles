/**************************************************************/
/*                         DATA                       */
/**************************************************************/

const form = document.querySelector(".announcement-form");
const wall = document.querySelector(".announcements-wall");
const clearButton = document.querySelector(".clear-button");

/**************************************************************/
/*                      FUNCTIONS                            */
/**************************************************************/

function announcementSubmit(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const announcementData = { title, description };
  createAnnouncementElement(announcementData);
  saveAnnouncement(announcementData);
  form.reset();
}

function createAnnouncementElement(data) {
  const newAnnouncement = document.createElement("div");
  newAnnouncement.classList.add("announcement");
  newAnnouncement.innerHTML = `<h3>${data.title}</h3><p>${data.description}</p>`;
  wall.appendChild(newAnnouncement);
}

function saveAnnouncement(data) {
  const announcements = JSON.parse(localStorage.getItem("announcements")) || [];
  announcements.push(data);
  localStorage.setItem("announcements", JSON.stringify(announcements));
}

function loadAnnouncements() {
  const announcements = JSON.parse(localStorage.getItem("announcements")) || [];
  announcements.forEach(createAnnouncementElement);
}

function clearAllAnnouncements() {
  wall.innerHTML = "";
  localStorage.removeItem("announcements");
}

/**************************************************************/
/*                         MAIN PROGRAMM                      */
/**************************************************************/

window.addEventListener("DOMContentLoaded", function () {
  console.log("test");

  loadAnnouncements();

  form.addEventListener("submit", announcementSubmit);

  clearButton.addEventListener("click", clearAllAnnouncements);
});
