const tijelo = document.getElementById("radoviTijelo");

function dodajCeliju(red, tekst) {
  const td = document.createElement("td");
  td.textContent = tekst;
  red.appendChild(td);
}

async function povuciRad(id) {
  const res = await fetch("/api/papers/" + id + "/withdraw", {
    method: "PATCH",
    credentials: "include",
  });
  const data = await res.json();
  alert(data.message || "Status " + res.status);
  if (res.ok) ucitajRadove();
}

async function ucitajRadove() {
  const res = await fetch("/api/papers/my", { credentials: "include" });
  if (!res.ok) {
    tijelo.textContent =
      "Radovi se trenutno ne mogu učitati (" + res.status + ").";
    return;
  }
  const data = await res.json();
  tijelo.innerHTML = "";

  for (const p of data.papers) {
    const red = document.createElement("tr");
    dodajCeliju(red, p.title);
    dodajCeliju(red, p.conference ? p.conference.name : "");
    dodajCeliju(red, p.topic || "");
    dodajCeliju(red, new Date(p.createdAt).toLocaleDateString("hr-HR"));
    dodajCeliju(red, p.status);

    const tdGumb = document.createElement("td");
    const gumb = document.createElement("button");
    gumb.className = "btn btn-small";
    gumb.textContent = "Povuci";
    gumb.addEventListener("click", function () {
      povuciRad(p.id);
    });
    tdGumb.appendChild(gumb);
    red.appendChild(tdGumb);

    tijelo.appendChild(red);
  }
}

ucitajRadove();
