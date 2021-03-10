function addPostToHTML(post) {
let parent = document.querySelector('#posts');
let container = document.createElement('div');
container.className = 'post';


let img = document.createElement('img');
img.src = "src/img/chinese-duck.png";
container.appendChild(img);

let author = document.createElement('div');
author.className = "author";
author.innerText = post.author;
container.appendChild(author);

let text = document.createElement('div');
text.className = "text";
text.innerText = post.text;
container.appendChild(text);

let date = document.createElement('div');
date.className = "date";
date.innerText = post.date;
container.appendChild(date);


parent.appendChild(container);



}

