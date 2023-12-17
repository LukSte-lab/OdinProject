const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = 'Hey I am Red';

container.appendChild(para);

const header = document.createElement('h3');
header.style.color = 'blue';
header.textContent = 'I am a Blue H3';

container.appendChild(header);

const div2 = document.createElement('div');
div2.style.textAlign = 'center';
div2.style.backgroundColor = 'pink';
div2.style.border = 'black solid 5px'; 

content.appendChild(div2);

const header2 = document.createElement('h1');
header2.textContent = 'I am in a <div>';

div2.appendChild(header2);

const para2 = document.createElement('p');
para2.textContent = 'ME TOO';

div2.appendChild(para2);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

function alertFunction() {
 alert("YAY! YOU DID IT!");
}

btn2.addEventListener('click', function (e) {
  e.target.style.background = 'red';
});