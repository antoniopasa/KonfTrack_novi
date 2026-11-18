const API = ""; // adresa backenda

const form = document.getElementById("predajaForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const file = document.getElementById("rukopis").files[0];
  if (!file) {
    alert("Odaberi PDF datoteku.");
    return;
  }

  const fd = new FormData();
  fd.append("title", document.getElementById("naslov").value);
  fd.append("abstract", document.getElementById("sazetak").value);
  fd.append("conferenceId", document.getElementById("konferencija").value);
  fd.append("keywords", document.getElementById("kljucne").value);
  fd.append("topic", document.getElementById("tema").value);
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

  const headers = {};
  const token = localStorage.getItem("token");
  if (token) headers["Authorization"] = "Bearer " + token;

  const res = await fetch(API + "/api/papers", {
    method: "POST",
    headers: headers, // bez Content-Type
    credentials: "include",
    body: fd,
  });
  const data = await res.json();
  console.log(res.status, data);

  if (res.ok) {
    alert(data.message);
  } else {
    alert(data.message || "Greška " + res.status);
  }
});
