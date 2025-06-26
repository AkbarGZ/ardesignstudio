let player = videojs('my-video');

function playVideo() {
  const url = document.getElementById("videoURL").value.trim();
  if (!url) return alert("Masukkan link video .mp4");

  player.src({ type: "video/mp4", src: url });
  player.play();
}

async function loadSubtitlesDropdown() {
  const toggleBtn = document.getElementById("toggleSubtitle");
  const listBox = document.getElementById("subtitleList");

  toggleBtn.addEventListener("click", () => {
    listBox.classList.toggle("show");
  });

  const res = await fetch("findsubtitle.json");
  const subtitles = await res.json();

  subtitles.forEach(sub => {
    const item = document.createElement("div");
    item.textContent = sub.name;
    item.addEventListener("click", () => {
      // Hapus track lama
      const tracks = player.textTracks();
      for (let i = tracks.length - 1; i >= 0; i--) {
        player.removeRemoteTextTrack(tracks[i]);
      }

      // Tambahkan subtitle baru
      player.addRemoteTextTrack({
        kind: "subtitles",
        src: sub.link,
        srclang: "id",
        label: "Indonesia",
        default: true
      }, false);

      listBox.classList.remove("show");
    });
    listBox.appendChild(item);
  });
}

window.onload = loadSubtitlesDropdown;