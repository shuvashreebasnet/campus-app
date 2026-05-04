const events = {
  hackathon: {
    name: "Hackathon 2026",
    color: "#7ea4cc"
  },
  club: {
    name: "Club Rush",
    color: "#a56cc1"
  },
  basketball: {
    name: "Basketball Finals",
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

const clubs = {
    rosefloat: {
        name: "Cal Poly Rose Float",
        college: "College of Engineering",
        image: "https://www.clipartkey.com/mpngs/m/208-2086742_cal-poly-rose-float-logo.png"
    },
    computersciencesociety: {
        name: "Computer Science Society",
        college: "College of Science",
        image: "https://cppcss.club/assets/logo_for_web_2_2025-DBzYwraK.png"
    },
    shecodes: {
        name: "sheCodes",
        college: "College of Science",
        image: "https://www.cppshecodes.com/images/25-26/logos/sheCodes.png"
    },
    gamedev: {
        name: "Game Development Club",
        college: "College of Science",
        image: "https://tse3.mm.bing.net/th/id/OIP.0r7DBUu0Gt0Zmlu6msgDJgHaFO?pid=Api&h=220&P=0"
    },
    swift: {
        name: "SWIFT",
        college: "College of Business",
        image: "https://tse1.mm.bing.net/th/id/OIP.Kmz3ZGxpiJSVn1su-FZkXAAAAA?pid=Api&h=220&P=0"
    },
    polisci: {
        name: "Political Science Club",
        college: "College of Letters, Arts, and Social Sciences",
        image: "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-19/402729249_1308011053242776_483352576817620717_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby40NzUuYzIifQ&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2gGYHrZ9U816Ttweau7Vyo5QGq5TZRyKeoLyLne2wHoKPKZHzs2axpLOubSAXXqQ9gWkVLKfomOpGupobIay-i17&_nc_ohc=Q7dd5eJxtywQ7kNvwFQyFs5&_nc_gid=u2mHKDgTvx6Vhmzwcg-gfw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af5tS8Xn-aWR6tzNZILDPQHe9NrkxAuPTDsce_PRe3VZMw&oe=69FE9CFB&_nc_sid=8b3546"
    }
}