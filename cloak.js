function cloak(url) {
  const win = window.open('about:blank', '_blank');
  const doc = win.document;
  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Game</title>
      <style>
        html, body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: #000;
        }
        iframe {
          border: none;
          width: 100vw;
          height: 100vh;
        }
      </style>
    </head>
    <body>
      <iframe src="${url}" allowfullscreen></iframe>
    </body>
    </html>
  `);
  doc.close();
}
