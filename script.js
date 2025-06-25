function playVideo() {
  const videoUrl = document.getElementById('videoURL').value.trim();
  const judul = document.getElementById('judulFilm').value.trim();

  if (!videoUrl) {
    alert("Mohon isi link video.");
    return;
  }

  document.getElementById('videoSource').src = videoUrl;

  const urlParams = new URLSearchParams(window.location.search);
  const subtitle = urlParams.get('subtitle');

  if (subtitle) {
    document.getElementById('subtitleTrack').src = subtitle;
  } else {
    document.getElementById('subtitleTrack').src = '';
  }

  document.getElementById('videoPlayer').load();
}

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const subtitle = urlParams.get('subtitle');
  if (subtitle) {
    document.getElementById('subtitleTrack').src = subtitle;
  }
};