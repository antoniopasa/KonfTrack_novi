const tijelo = document.getElementById("radoviTijelo");

function dodajCeliju(red, tekst) {
  const td = document.createElement("td");
  td.textContent = tekst;
  red.appendChild(td);
}

async function povuciRad(id) {
  if (!id) {
    alert("Greška: ID rada nije pronađen.");
    return;
  }

  try {
    const res = await fetch("/api/papers/" + id + "/withdraw", {
      method: "PATCH",
      credentials: "include",
    });

    const tekstOdgovora = await res.text();
    let data = {};
    try {
      data = JSON.parse(tekstOdgovora);
    } catch (e) {
      console.error("Server nije vratio JSON:", tekstOdgovora);
    }

    alert(data.message || "Status odgovora: " + res.status);
    if (res.ok) {
      ucitajRadove();
    }
  } catch (err) {
    console.error("Greška pri slanju zahtjeva:", err);
    alert("Došlo je do mrežne greške pri povlačenju rada.");
  }
}

async function ucitajRadove() {
  try {
    const res = await fetch("/api/papers/my?t=" + Date.now(), {
      credentials: "include",
      cache: "no-store",
    });

    if (!res.ok) {
      tijelo.innerHTML =
        '<tr><td colspan="6">Radovi se trenutno ne mogu učitati (' +
        res.status +
        ").</td></tr>";
      return;
    }

    const data = await res.json();
    tijelo.innerHTML = "";

    if (!data.papers || data.papers.length === 0) {
      tijelo.innerHTML =
        '<tr><td colspan="6">Nemate predanih radova.</td></tr>';
      return;
    }

    for (const p of data.papers) {
      const red = document.createElement("tr");
      dodajCeliju(red, p.title);
      dodajCeliju(red, p.conference ? p.conference.name : "");
      dodajCeliju(red, p.topic || "");

      const siroviDatum = p.createdAt || p.created_at || p.submitted_at;
      const formatiraniDatum = siroviDatum
        ? new Date(siroviDatum).toLocaleDateString("hr-HR")
        : "—";
      dodajCeliju(red, formatiraniDatum);

      dodajCeliju(red, p.status);

      const tdGumb = document.createElement("td");
      const gumb = document.createElement("button");
      gumb.className = "btn btn-small";
      gumb.textContent = "Povuci";

      if (p.status === "withdrawn") {
        // Vizualno isticanje cijelog retka (lagano crvenkasta pozadina i blago zamućenje)
        red.style.backgroundColor = "rgba(239, 68, 68, 0.08)";
        red.style.color = "#991b1b";
        red.style.opacity = "0.65";

        gumb.disabled = true;
        gumb.style.opacity = "0.5";
        gumb.style.cursor = "not-allowed";
      } else {
        const radId = p.id || p._id || p.paper_id;
        gumb.addEventListener("click", function () {
          povuciRad(radId);
        });
      }

      tdGumb.appendChild(gumb);
      red.appendChild(tdGumb);

      tijelo.appendChild(red);
    }
  } catch (err) {
    console.error("Greška u skripti moji-radovi.js:", err);
    tijelo.innerHTML =
      '<tr><td colspan="6">Greška pri učitavanju podataka.</td></tr>';
  }
}

ucitajRadove();
