const API = "";

const form = document.getElementById("predajaForm");
const rezultat = document.getElementById("rezultat");
const fileInput = document.getElementById("rukopis");
const dropText = fileInput.parentElement.querySelector("span");
const dropTekstPocetni = dropText.textContent;

fileInput.addEventListener("change", function () {
  dropText.textContent = fileInput.files[0]
    ? fileInput.files[0].name
    : dropTekstPocetni;
});

function redak(naziv, vrijednost) {
  const p = document.createElement("p");
  const b = document.createElement("strong");
  b.textContent = naziv + ": ";
  p.appendChild(b);
  p.appendChild(document.createTextNode(vrijednost));
  return p;
}

function prikaziKarticu(naslov, redci, poveznica) {
  rezultat.innerHTML = "";
  const kartica = document.createElement("div");
  kartica.className = "card";

  const h = document.createElement("h3");
  h.textContent = naslov;
  kartica.appendChild(h);

  for (const r of redci) kartica.appendChild(redak(r[0], r[1]));

  if (poveznica) {
    const a = document.createElement("a");
    a.href = "/korisnik/moji-radovi";
    a.className = "btn btn-primary";
    a.textContent = "Pogledaj moje radove";
    kartica.appendChild(a);
  }

  rezultat.appendChild(kartica);
  kartica.scrollIntoView({ behavior: "smooth" });
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const file = fileInput.files[0];
  if (!file) {
    prikaziKarticu("Nedostaje datoteka", [["Greška", "Odaberi PDF datoteku."]]);
    return;
  }

  const naslov = document.getElementById("naslov").value;
  const konferencija = document.getElementById("konferencija").value;
  const tema = document.getElementById("tema").value;
  const kljucne = document.getElementById("kljucne").value;

  const fd = new FormData();
  fd.append("title", naslov);
  fd.append("abstract", document.getElementById("sazetak").value);
  fd.append("conferenceId", konferencija);
  fd.append("keywords", kljucne);
  fd.append("topic", tema);
  fd.append(
    "authors",
    JSON.stringify([
      {
        name: form.dataset.ime,
        email: form.dataset.email,
        isContactAuthor: true,
      },
    ]),
  );
  fd.append("pdfFile", file);

  const gumb = form.querySelector("button[type=submit]");
  gumb.disabled = true;

  try {
    const res = await fetch(API + "/api/papers", {
      method: "POST",
      credentials: "include",
      body: fd,
    });
    const data = await res.json().catch(function () {
      return {};
    });

    if (res.ok) {
      const redci = [
        ["Naslov", naslov],
        ["Konferencija (ID)", konferencija],
        ["Tema", tema],
        ["Ključne riječi", kljucne || "—"],
        ["Datoteka", file.name],
      ];
      if (data.paper && data.paper.status)
        redci.push(["Status", data.paper.status]);

      prikaziKarticu(data.message || "Rad je uspješno predan.", redci, true);
      form.reset();
      dropText.textContent = dropTekstPocetni;
    } else {
      prikaziKarticu("Predaja nije uspjela", [
        ["Razlog", data.message || "Greška " + res.status],
      ]);
    }
  } catch (err) {
    prikaziKarticu("Predaja nije uspjela", [
      ["Razlog", "Nema veze s poslužiteljem."],
    ]);
  } finally {
    gumb.disabled = false;
  }
});
