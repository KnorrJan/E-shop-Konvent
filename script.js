
const kosik = [];
const kosikList = document.getElementById("kosik-list");
const celkovaCena = document.getElementById("celkova-cena");

function pridejDoKosiku(nazev, cena) {
    kosik.push({ nazev, cena });
    zobrazKosik();
}

function zobrazKosik() {
    kosikList.innerHTML = "";
    let celkem = 0;
    kosik.forEach((polozka, index) => {
        const li = document.createElement("li");
        li.textContent = `${polozka.nazev} - ${polozka.cena} Kč`;
        kosikList.appendChild(li);
        celkem += polozka.cena;
    });
    celkovaCena.textContent = "Celkem: " + celkem + " Kč";
}
