import { OBJEKTUMLISTA } from "./jfugveny.js";
$(function () {
  const tartalom = osszealit(OBJEKTUMLISTA);
  $("article").append(tartalom);
  $("table").on("click", ".delete", delete_user);
  console.log(ertek)
});

function osszealit(OBJEKTUMLISTA) {
  let txt = `<table class="table text-white"><thead><th>Name</th><th>Type</th><th>Price</th><th>Image</th><th></th></thead><tbody>`;
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    txt += `<tr id="${index}"><td>${OBJEKTUMLISTA[index].nev}</td><td>${OBJEKTUMLISTA[index].fajta}</td><td>${OBJEKTUMLISTA[index].ar}</td><td><img src="${OBJEKTUMLISTA[index].kep}" alt="item image" class="img-fluid"></td><td><button class="btn btn-danger delete">Delete</button></td></tr>`;
    
    }
  txt += "</tbody></table>";
  
  return txt;
}

function delete_user(event) {
 
  if (!confirm("Biztosan törlöd ezt az itemet")) {
    return;
  }
  const index = $(event.target).closest("tr").attr("id");
  OBJEKTUMLISTA.splice(index, 1);
  $(event.target).closest("tr").remove();
  ertek--;
  console.log(ertek)
}