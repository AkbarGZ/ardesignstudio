function playVideo() {
  const videoUrl = document.getElementById('videoURL').value.trim();

  if (!videoUrl) {
    alert("Mohon isi link video .mp4");
    return;
  }

  document.getElementById('videoSource').src = videoUrl;
  document.getElementById('videoPlayer').load();
}

async function loadSubtitlesDropdown() {
  const toggleBtn = document.getElementById("toggleSubtitle");
  const listBox = document.getElementById("subtitleList");

  toggleBtn.addEventListener("click", () => {
    listBox.classList.toggle("show");
  });

  try {
    const response = await fetch("findsubtitle.json");
    const subtitles = await response.json();

    subtitles.forEach(sub => {
      const item = document.createElement("div");
      item.textContent = sub.name;
      item.addEventListener("click", () => {
        document.getElementById("subtitleTrack").src = sub.link;
        document.getElementById("videoPlayer").load();
        listBox.classList.remove("show");
      });
      listBox.appendChild(item);
    });
  } catch (e) {
    listBox.innerHTML = "<div style='color:red;'>Gagal memuat subtitle</div>";
  }
}

window.onload = function () {
  loadSubtitlesDropdown();
};