import { OBJEKTUMLISTA } from "./jfugveny.js";
let ertek = 0;
let osszeg = 0;
$(function () {
  const tartalom = osszealit(OBJEKTUMLISTA);
  $("article").append(tartalom);
  kephozzaad();
  kosarak();
});
  function kephozzaad(){
    $(".info").click(function(event){
      $(event.target).attr("id")
      const valasztott= $(event.target).attr("id");
      const tarolo = $(".modal-body");
      tarolo.html(`<img src="${OBJEKTUMLISTA[valasztott].kep}"class="img-fluid"> <p>${OBJEKTUMLISTA[valasztott].nev}</p>
      <p>${OBJEKTUMLISTA[valasztott].fajta}</p>`)
      console.log(valasztott);
    })
  }
  function kosarak(){
    $(".kosar").click(function(event){
      $(event.target).attr("id")
      const valasztott= $(event.target).attr("id");
      const tarolo = $(".form-group");
       osszeg += OBJEKTUMLISTA[valasztott].ar;
      tarolo.html(`<p class="text-white text-center">${osszeg}Ft</p>`)
      console.log(valasztott);
    })
  }
  
  function osszealit(OBJEKTUMLISTA) {
    let txt = "";
    for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
      txt += `<div class="card col-lg-5.5 col-md-3 col-sm-1.5 bg-info text-white text-center ${ertek}"  ><img src="${OBJEKTUMLISTA[ertek].kep}" alt="kep" 
      <p>${OBJEKTUMLISTA[ertek].nev}</p>
      <p>${OBJEKTUMLISTA[ertek].fajta}</p>
      <p>${OBJEKTUMLISTA[ertek].ar}Ft</p>
      <div><button id="${ertek}" class="btn btn-primary info" data-toggle="modal" data-target="#myModal">Info</button>
      <button id="${ertek}" class="btn btn-primary kosar">Kosár</button></div></div>`;
      ertek++;
    }
    txt += `<div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
  
        <!-- Modal Header -->
        <div class="modal-header bg-danger text-white text-center">
          <h4 class="modal-title">Info</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
  
        <!-- Modal body -->
        <div class="modal-body text-white bg-info">
        
        </div>
  
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
  
      </div>
    </div>
  </div>`
    return txt;
  }
  
  


