let allCards = "";

mazzoNapoletano.forEach(element => {
  allCards +=
    `<div class="col-2 border-3 border-black"> 
        <div class="card ">
            <img src=${element.img} class="col-6 img-fluid card-img-top" alt="${element.nome}">
            <img src=${cardBack.img} class="col-6 img-fluid card-img-top" alt="${cardBack.nome}">
            <div class="card-body pe-0">
                <h5 class="card-title fw-bolder">${element.nome} di ${element.seme}</h5>
            </div>
                      
        </div>
    </div>`;
  
});
document.getElementById("cards-container").innerHTML = allCards;