const form = document.getElementById("kontaktForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const podaci = {
    primatelj: document.getElementById("primatelj").value,
    predmet: document.getElementById("predmet").value,
    poruka: document.getElementById("poruka").value,
  };

  const res = await fetch("/api/ENDPOINT", {
    // zamijeni kad saznaš
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(podaci),
  });

  alert(res.ok ? "Poruka poslana." : "Greška " + res.status);
});
