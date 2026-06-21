// Public Service Hub App

console.log("Public Service Hub Started");

// Welcome Message
window.onload = function () {
    console.log("Welcome to Public Service Hub");
};

// Search Profiles
function searchProfile() {

    let input =
    document.getElementById("search").value.toLowerCase();

    let cards =
    document.getElementsByClassName("profile-card");

    for(let i=0;i<cards.length;i++){

        let text =
        cards[i].innerText.toLowerCase();

        if(text.includes(input)){
            cards[i].style.display = "block";
        }else{
            cards[i].style.display = "none";
        }
    }
}

// WhatsApp Contact
function whatsapp(number){

    let msg =
    "नमस्कार, मला अधिक माहिती हवी आहे.";

    window.open(
    "https://wa.me/" + number +
    "?text=" + encodeURIComponent(msg)
    );
}

// Share Profile
function shareProfile(){

    if(navigator.share){

        navigator.share({
            title:"Public Service Hub",
            text:"माझे प्रोफाइल पहा",
            url:window.location.href
        });

    }else{

        alert("Share Feature Supported नाही");
    }
}

// Visitor Counter
let views =
localStorage.getItem("psh_views") || 0;

views++;

localStorage.setItem(
"psh_views",
views
);

console.log(
"Views : " + views
);

// Future AI Placeholder
function aiAssistant(){

    alert(
    "🤖 AI Assistant लवकरच उपलब्ध होईल"
    );

}

// Generate QR
function generateQR(){

    let url =
    window.location.href;

    let qr =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
    + encodeURIComponent(url);

    window.open(qr);

}
