document.querySelectorAll('.d2l-documentViewer-renders').forEach((parent) => {
  let path = parent.children[0].src;
  let pathSplit = path.split('/');
  parent.childNodes.forEach((img, index) => {
    pathSplit[pathSplit.length - 2] = index + 1;
    img.src = pathSplit.join('/');
  })
})