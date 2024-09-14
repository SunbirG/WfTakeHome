// Linking the CSS file directley from my github repo.
// This works when I retrieve the RAW url from the file on the repo.  
// However The RAW file on gihub serves the link type as text/plain.
// To fix this we can use jsDelivr to detect and sever the correct file type as text/css.
// Referance https://www.jsdelivr.com/github , https://rawgit.com/ , https://stackoverflow.com/questions/7780550/referencing-a-css-file-in-github-repo-as-stylesheet-in-a-html-file .

const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';

link.href = 'https://cdn.jsdelivr.net/gh/SunbirG/WfTakeHome@main/style.css';
document.head.appendChild(link);

// create new div in body to act as the glass wall.
const elGlasswall = document.createElement('div');
elGlasswall.setAttribute('id', 'wf-glasswall');
document.body.appendChild(elGlasswall);