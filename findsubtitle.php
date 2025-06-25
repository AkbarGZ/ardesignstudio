<?php
$subtitleDir = "subtitle";
$files = scandir($subtitleDir);
$vttFiles = array_filter($files, function($file) use ($subtitleDir) {
    return is_file("$subtitleDir/$file") && pathinfo($file, PATHINFO_EXTENSION) === 'vtt';
});
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Pilih Subtitle Indonesia</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1 class="logo">🎬 Pilih Subtitle Indonesia</h1>
    <?php if (empty($vttFiles)): ?>
      <p>Tidak ada subtitle ditemukan di folder <code>subtitle/</code></p>
    <?php else: ?>
      <?php foreach ($vttFiles as $file): ?>
        <div class="subtitle-item">
          <a href="index.html?subtitle=subtitle/<?= urlencode($file) ?>">
            <?= htmlspecialchars($file) ?>
          </a>
        </div>
      <?php endforeach; ?>
    <?php endif; ?>
  </div>
</body>
</html>