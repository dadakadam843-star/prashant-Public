// Auto Slider
let images = ["images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg"];
let i = 0;

function slider() {
    document.getElementById("slide").src = images[i];
    i = (i + 1) % images.length;
}
setInterval(slider, 2500);

// Load Data.json
fetch("data.json")
    .then(res => res.json())
    .then(data => {
        // Gallery
        const gallery = document.getElementById("gallery");
        data.gallery.forEach(img => {
            let tag = `<img src="${img}" class="gimg">`;
            gallery.innerHTML += tag;
        });

        // Posts
        const posts = document.getElementById("posts");
        data.posts.forEach(p => {
            let tag = `
                <div class="post-box">
                    <p>${p.text}</p>
                    <small>${p.date}</small>
                </div>
            `;
            posts.innerHTML += tag;
        });

        // Videos
        const videos = document.getElementById("videos");
        data.videos.forEach(v => {
            let tag = `<iframe width="100%" height="200" src="${v}" allowfullscreen></iframe>`;
            videos.innerHTML += tag;
        });
    });
