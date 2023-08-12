import { showButton } from './showmore.js'
import { content } from './content.js'

const para = document.querySelector('#para');
console.log(para);

let open = false; 
showButton.addEventListener('click', () => {
  if (!open) {
    open = true;
  } else {
    open = false;
  }
  if (open) {
    root.appendChild(content);
    content.innerHTML = `aiueo kakikukeko sasisuseso`
  } else {
    content.innerHTML = ``;
  }
})

const root = document.getElementById('root');
const title = 'It is root';
root.innerHTML = `<h1>${title}</h1>`;

const ul = document.createElement('ul');
const abcd = ['a', 'b', 'c', 'd'];

const fragment = new DocumentFragment();

abcd.forEach((str) => {
  const li = document.createElement('li');
  li.textContent = str;
  fragment.appendChild(li);
})

root.appendChild(ul);
ul.appendChild(fragment);
root.appendChild(showButton);
//root.appendChild(content);
