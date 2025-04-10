const kosik = [];
const kosikList = document.getElementById("kosik-list");
const celkovaCena = document.getElementById("celkova-cena");

function pridejDoKosiku(nazev, cena) {
    // Zkontroluj, jestli už položka v košíku není
    const existuje = kosik.find(polozka => polozka.nazev === nazev);
    if (existuje) {
        alert("Tento obraz už je v košíku.");
        return;
    }

    kosik.push({ nazev, cena });
    zobrazKosik();
}

function odstranZKosiku(index) {
    kosik.splice(index, 1);
    zobrazKosik();
}

function zobrazKosik() {
    kosikList.innerHTML = "";
    let celkem = 0;

    kosik.forEach((polozka, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${polozka.nazev} - ${polozka.cena} Kč
            <button onclick="odstranZKosiku(${index})">🗑️</button>
        `;
        kosikList.appendChild(li);
        celkem += polozka.cena;
    });

    celkovaCena.textContent = `Celkem: ${celkem} Kč`;
}
