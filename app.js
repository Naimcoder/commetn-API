function  loadDataComment() {
     fetch('https://jsonplaceholder.typicode.com/comments')
          .then(res => res.json())
          .then(data => displayComment(data))
}
function displayComment(comments) {
     const containerComment = document.getElementById('comment-container');
     for (const items of comments) {
          console.log(items)
          const div = document.createElement('div')
          div.classList.add('comment-items')
          div.innerHTML = `
              <i class="fa-solid fa-comments icon"></i>
               <div class=" commetn-body">
                    <h3 class="name">${items.name}</h3>
                    <p class="email">${items.email}</p>
                    <p class="comment-body">${items.body}</p>
               </div>
          `;
          containerComment.appendChild(div);
     }
}
loadDataComment();