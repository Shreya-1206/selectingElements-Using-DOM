//selecting 
const siteTile = document.getElementById('site-title');
const navEls = document.getElementsByTagName('li');
const contentText = document.getElementsByClassName('content-text');
const siteDesc = document.querySelector('#site-description');
const contentDiv = document.querySelector('.content');

//manipulation
siteTile.innerText = 'Dynamation SpaceTech';
Array.from(navEls).forEach((el) => (el.innerText = `--${el.innerText}--`));

Array.from(contentText).forEach((el) => el.innerText = el.innerText.toUpperCase());

siteDesc.innerText = siteDesc.innerText.replace('DynTech LLC', 'Dynamation SpaceTech');

contentDiv.style.backgroundColor = '#A6FF96';
contentDiv.style.textAlign = 'justify';
