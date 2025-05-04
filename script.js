$(function () {
    const availableCities = [
        "Mumbai", "Delhi", "Kolkata", "Bangalore", "Chennai",
        "Hyderabad", "Pune", "Ahmedabad", "Surat", "Visakhapatnam"
    ];
    $("#originInput, #destinationInput").autocomplete({
        source: availableCities
    });
});

function showRoute() {
    const origin = document.getElementById("originInput").value;
    const destination = document.getElementById("destinationInput").value;
    if (origin && destination) {
        const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
        window.open(url, "_blank");
    } else {
        alert("Please enter both origin and destination.");
    }
}
