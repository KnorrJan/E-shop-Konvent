document.addEventListener("DOMContentLoaded", () => {
    const kosik = [];
    const kosikList = document.getElementById("kosik-list");
    const celkovaCena = document.getElementById("celkova-cena");

    window.pridejDoKosiku = function (nazev, cena) {
        const existuje = kosik.find(polozka => polozka.nazev === nazev);
        if (existuje) {
            alert("Tento obraz už je v košíku.");
            return;
        }
        kosik.push({ nazev, cena });
        zobrazKosik();
    };

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
                <button class="odstranit-btn" data-index="${index}">🗑️</button>
            `;
            kosikList.appendChild(li);
            celkem += polozka.cena;
        });

        celkovaCena.textContent = `Celkem: ${celkem} Kč`;

        // Přiřazení funkcí k tlačítkům až po vykreslení
        document.querySelectorAll(".odstranit-btn").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                odstranZKosiku(index);
            });
        });
    }
});
