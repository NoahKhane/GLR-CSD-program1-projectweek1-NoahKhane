function bestelBestelling() {
    const naam = document.getElementById("naam").value;
    const adres = document.getElementById("adres").value;

    const geselecteerdeTour = document.querySelector('input[name="tour"]:checked');

    if (!geselecteerdeTour) {
        alert("Kies een tourdatum om verder te gaan.");
        return;
    }
    if (!naam || !adres) {
        alert("Vul zowel je naam als adres in.");
        return; 
    }
    
    const tourDetails = geselecteerdeTour.value;
    const ticketPrijs = 30;
    const albumGekocht = document.querySelector('input[name="album"]:checked');

    let totalePrijs = ticketPrijs;
    let korting = 0;

    if (albumGekocht) {
        totalePrijs += 15; 
    }

    if (albumGekocht) {
        korting = 0.10 * totalePrijs;
        totalePrijs -= korting; 
    }

    
    const bestellingDetailsDiv = document.getElementById("bestelling-details");
    bestellingDetailsDiv.innerHTML = `
    <br>
        <h3>Bedankt voor je bestelling!</h3>

        <p>Naam:</strong> ${naam}</p>
        <p>Adres:</strong> ${adres}</p>
        <p>Gekozen Tour:</strong> ${tourDetails}</p>
        <p>Album:</strong> ${albumGekocht ? "Ja" : "Nee"}</p>
                <p>Korting:</strong> €${korting.toFixed(2)}</p>

        <p>Totale Prijs:</strong> €${totalePrijs.toFixed(2)}</p>
        <br>
        <h4><strong>De tickets komen uw kant op!</h4>

    `;
}
