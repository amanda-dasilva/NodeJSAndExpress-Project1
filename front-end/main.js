const loadEmojis = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "http://localhost:3000/emojis", false);
  xhttp.send();

  const emojis = JSON.parse(xhttp.responseText);
  let x = `
            <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Group</th>
                <th scope="col">HTML Code</th>
              </tr>
            </thead>
            <tbody> `
  for (let emoji of emojis) {
    x += `
              <tr>
                <td>${emoji.emoji_id}</td>
                <td>${emoji.name}</td>
                <td>${emoji.category}</td>
                <td>${emoji.emoji_group}</td>
                <td>${emoji.htmlcode}</td>
              </tr>
      `      
  }
  x += `
      </tbody>
      </table>
      `
  document.getElementById('api_results').innerHTML = document.getElementById('api_results').innerHTML + x;
}

loadEmojis();