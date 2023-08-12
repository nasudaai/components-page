const root = document.getElementById('root');
const title = 'It is root';
root.innerHTML = `<h1>${title}</h1>`;

const ul = document.createElement('ul');
const abcd = ['a', 'b', 'c', 'd'];

const fragment = new DocumentFragment();

for (const str of abcd) {
  const li = document.createElement('li');
  li.textContent = str;
  fragment.appendChild(li);
}

root.appendChild(ul);
ul.appendChild(fragment);
