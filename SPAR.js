document.addEventListener("DOMContentLoaded", () => {
  filterTeams();
});

function filterTeams() {
  const teamList = document.getElementById("teamList");
  teamList.innerHTML = "";

  const teams = [
    {
      name: "FC Barcelona",
      city: "Jakarta Selatan",
      img: "./Assets/barcelona.png",
      date: "23 May 2024",
      time: "17.00 WIB",
      location: "D37 Mini Soccer",
      price: "800.000",
    },
    {
      name: "Manchester United",
      city: "Jakarta Utara",
      img: "./Assets/manchester united.png",
      date: "23 May 2024",
      time: "17.00 WIB",
      location: "D37 Mini Soccer",
      price: "800.000",
    },
    {
      name: "Shanghai Port FC",
      city: "Solo",
      img: "./Assets/shanghai port.png",
      date: "23 May 2024",
      time: "17.00 WIB",
      location: "D37 Mini Soccer",
      price: "800.000",
    },
    {
      name: "Malaga CF",
      city: "Tangerang",
      img: "./Assets/malaga.png",
      date: "23 May 2024",
      time: "17.00 WIB",
      location: "D37 Mini Soccer",
      price: "800.000",
    },
    {
      name: "Wrexham A.F.C",
      city: "Yogyakarta",
      img: "./Assets/wrexhamafc.png",
      date: "23 May 2024",
      time: "17.00 WIB",
      location: "D37 Mini Soccer",
      price: "800.000",
    },
    {
      name: "Borussia Dortmund",
      city: "Bandung",
      img: "./Assets/dortmund.png",
      date: "23 May 2024",
      time: "17.00 WIB",
      location: "D37 Mini Soccer",
      price: "800.000",
    },
    {
      name: "AFC Richmond",
      city: "Cirebon",
      img: "./Assets/richmond.png",
      date: "23 May 2024",
      time: "17.00 WIB",
      location: "D37 Mini Soccer",
      price: "800.000",
    },
    {
      name: "Chelsea FC",
      city: "Bekasi",
      img: "./Assets/chelsea.png",
      date: "23 May 2024",
      time: "17.00 WIB",
      location: "D37 Mini Soccer",
      price: "800.000",
    },
    {
      name: "Real Madrid CF",
      city: "Jakarta Pusat",
      img: "./Assets/madrid.png",
      date: "23 May 2024",
      time: "17.00 WIB",
      location: "D37 Mini Soccer",
      price: "800.000",
    },
  ];

  teams.forEach((team) => {
    const teamCard = document.createElement("div");
    teamCard.className = "team-card";
    teamCard.innerHTML = `
            <img src="${team.img}" alt="${team.name}">
            <h3>${team.name}</h3>
            <p>${team.city}</p>
            <p>${team.date} - ${team.time}</p>
            <p>${team.location}</p>
            <p>Biaya - ${team.price}</p>
        `;
    teamCard.addEventListener("click", () => {
      window.location.href = "confirmationspar.html";
    });
    teamList.appendChild(teamCard);
  });
}

function tantangTim(teamId) {
    const team = allTeams.find(t => t.id === teamId);
    localStorage.setItem('selectedSparring', JSON.stringify(team));
    window.location.href = "confirmationSPAR.html";
}