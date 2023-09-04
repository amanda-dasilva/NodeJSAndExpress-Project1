/*
Author: Amanda da Silva
Title: PROG3012: Assignment 2
Date: 2022/11/28
*/


// let table = document.createElement("table");
// let tBody = document.createElement("tbody");

// table.appendChild(tBody);


// let targetId = document.getElementById("api_results").appendChild(table); 
   

// fetch("https://emojihub.herokuapp.com/api/all")
//   .then( (response) => response.json() )
//   .then( (jsondata) => {
//     // console.log(jsondata[0].name);
//     let tableData = "";
//     jsondata.map((values) => {
//       tableData += `
//       <tr>
//       <td>${values.name}</td>
//       <td>${values.category}</td>
//       <td>${values.group}</td>
//       <td>${values.htmlCode}</td>
//       </tr>
//      `;
//     });
//     targetId.innerHTML = tableData;
//   });



// function scrollWinDown() {
//   window.scrollBy(3000, 3000);
// }

// function scrollWinUP() {
//   window.scrollTo(1000, 0);
// }

// =======================================================

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