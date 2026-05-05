const events = {
  hackathon: {
    name: "Hackathon 2026: May 9, 2026 at 10:00 AM",
    color: "#7ea4cc"
  },
  club: {
    name: "Club Rush: May 11, 2026 at 2:00 PM",
    color: "#a56cc1"
  },
  basketball: {
    name: "Basketball Finals: May 12, 2026 at 7:00 PM",
    color: "#6cc18a"
  }
};

const container = document.getElementById("your-events");

const registeredEvents = JSON.parse(localStorage.getItem("registeredEvents")) || [];

registeredEvents.forEach(eventKey => {
  const event = events[eventKey];

  if (event) {
    const card = document.createElement("div");
    card.className = "home-event-card";

    card.style.background = event.color;
    card.textContent = event.name;

    container.appendChild(card);
  }
});

function clearEvents() {
  localStorage.removeItem("registeredEvents");
  document.getElementById("your-events").innerHTML = "";
}

function clearClubs() {
  localStorage.removeItem("joinedClubs");
  document.getElementById("joinedClubs").innerHTML = "";
}

const clubs = {
    rosefloat: {
        name: "Cal Poly Rose Float",
        college: "College of Engineering",
        time: "Saturdays from 10AM - 5PM",
        location: "Rose Float Building",
        description: "Contribute to creating our annual float for the Rose Parade!",
        image: "images/ROSE_FLOAT.webp"
    },
    computersciencesociety: {
        name: "Computer Science Society",
        college: "College of Science",
        time: "Thursdays from 12PM - 1PM",
        location: "Bldg 8 Rm 4",
        description: "Learn about all aspects of Computer Science!",
        image: "images/CSS.webp"
    },
    shecodes: {
        name: "sheCodes",
        college: "College of Science",
        time: "Thursdays from 12PM - 1PM",
        location: "Bldg 8 Rm 4",
        description: "Participate in Semester-Long Projects to apply your coding skills!",
        image: "images/sheCodes.webp"
    },
    gamedev: {
        name: "Game Development Club",
        college: "College of Science",
        time: "Tuesdays from 12PM - 1PM",
        location: "Bldg 8 Rm 4",
        description: "Pitch and implement games!",
        image: "images/GAME_DEV.webp"
    },
    swift: {
        name: "SWIFT",
        college: "College of Business",
        time: "Tuesdays from 12PM - 1PM",
        location: "Bldg 163 Rm 1004",
        description: "Learn cyber by doing cyber!",
        image: "images/SWIFT.webp"
    },
    polisci: {
        name: "Political Science Club",
        college: "College of Letters, Arts, and Social Sciences",
        time: "Thursdays from 12PM - 1PM",
        location: "Bldg 5 Rm 138",
        description: "Discuss politics with experts and peers!",
        image: "images/POLI_SCI.webp"
    }}