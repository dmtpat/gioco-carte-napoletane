let allCards = "";

mazzoNapoletano.forEach((element, i) => {
    let isoffset = "";
    if (i === 0 || i % 10 === 0)
        isoffset = " is-offset-1";
    else
        isoffset = "";
  allCards +=
    `<div class="column is-1 ${isoffset}"> 
        <div class="box">
            <div class="block columns ">
                <img src=${element.img} class="column is-half " alt="${element.nome}">
                <img src=${cardBack.img} class="column is-half" alt="${cardBack.nome}">
            </div>
            <div class="block content">
                <h5 class="has-text-centered">${element.nome} di ${element.seme}</h5>
            </div>            
        </div>
    </div>`;
  
});
document.getElementById("cards-container").innerHTML = allCards;


