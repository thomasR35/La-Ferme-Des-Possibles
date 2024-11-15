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
  newAnnouncement.innerHTML = `<h5>${data.title}</h5><p>${data.description}</p>`;
  wall.appendChild(newAnnouncement);

  rotatePostit(newAnnouncement);
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

function rotatePostit(postit) {
  const randomRotation = Math.floor(Math.random() * 21) - 10;
  postit.style.transform = `rotate(${randomRotation}deg)`;
  postit.style.transition = "transform 0.5s ease";
}

// Fonction pour ajouter des post-its par défaut
function addDefaultPostits() {
  const defaultPostits = [
    {
      title: "Fruits à donner",
      description:
        "Mes pommiers ont bien donné cette année. J'ai beaucoup de surplus. Passez me voir, je suis dans le secteur de Bedée. Mon numéro : 06.32.15.14.45 — Sabine",
    },
    {
      title: "Besoin d'un coup de main pour déménager",
      description:
        "Je déménage samedi prochain et j’aurais besoin de bras pour m’aider à porter quelques meubles. Pizza offerte ! Je suis à Pleumeleuc, contactez-moi au 07.21.65.43.22. Merci ! — Antoine",
    },
    {
      title: "Service de jardinage gratuit",
      description:
        "Passionné de jardinage, je propose un coup de main gratuit pour les personnes ayant du mal à entretenir leur potager ou jardin. Que ce soit pour un désherbage, un coup de bêche, ou un conseil, je suis là ! Secteur : Montfort-sur-Meu. Contactez-moi au 06.45.23.87.10 — Jacques",
    },
  ];

  defaultPostits.forEach((postit) => {
    createAnnouncementElement(postit);
  });
}

/**************************************************************/
/*                         MAIN PROGRAMM                      */
/**************************************************************/

window.addEventListener("DOMContentLoaded", function () {
  console.log("test");

  loadAnnouncements();

  // load les postits par défaur au démarrage pourn la démo
  addDefaultPostits();

  form.addEventListener("submit", announcementSubmit);

  clearButton.addEventListener("click", clearAllAnnouncements);

  // rotatePostit();
});
