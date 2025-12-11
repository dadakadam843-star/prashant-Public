// BASIC DATA
fetch("data.json")
  .then(res => res.json())
  .then(data => {
      document.getElementById("leaderName").innerText = data.name;
      document.getElementById("title").innerText = data.title;
      document.getElementById("leaderPhoto").src = data.photo;
      document.getElementById("mobile").innerText = data.mobile;
      document.getElementById("dailyMsg").innerText = data.message;
      document.getElementById("fbLink").href = data.facebook;
      document.getElementById("igLink").href = data.instagram;
  });

// BANNER SLIDER
fetch("data.json")
  .then(r => r.json())
  .then(d => {
      let slider = document.getElementById("bannerSlider");
      d.banners.forEach(b => {
          slider.innerHTML += `<img src="${b}">`;
      });
  });

// POSTS
fetch("posts.json")
  .then(r => r.json())
  .then(list => {
      let box = document.getElementById("postList");
      list.forEach(p => {
          box.innerHTML += `<div class='postItem'>${p}</div>`;
      });
  });

// GALLERY
fetch("gallery.json")
  .then(r => r.json())
  .then(list => {
      let g = document.getElementById("galleryBox");
      list.forEach(img => {
          g.innerHTML += `<img src="${img}">`;
      });
  });

// VIDEOS
fetch("videos.json")
  .then(r => r.json())
  .then(list => {
      let v = document.getElementById("videoList");
      list.forEach(link => {
          v.innerHTML += `<iframe width="100%" height="200" src="${link}" frameborder="0" allowfullscreen></iframe>`;
      });
  });
