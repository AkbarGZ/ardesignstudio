function playVideo() {
  const videoUrl = document.getElementById('videoURL').value.trim();
  const urlParams = new URLSearchParams(window.location.search);
  const subtitle = urlParams.get('subtitle');

  if (!videoUrl) {
    alert("Mohon isi link video.");
    return;
  }

  document.getElementById('videoSource').src = videoUrl;
  document.getElementById('subtitleTrack').src = subtitle || '';
  document.getElementById('videoPlayer').load();
}

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const subtitle = urlParams.get('subtitle');
  if (subtitle) {
    document.getElementById('subtitleTrack').src = subtitle;
  }
};