/**********************************************carte napoletane singole******************************************************/
// const assoDen = "https://upload.wikimedia.org/wikipedia/commons/e/e9/01_Asso_di_denari.jpg"
// const dueDen = "https://upload.wikimedia.org/wikipedia/commons/2/2e/02_Due_di_denari.jpg";
// const treDen = "https://upload.wikimedia.org/wikipedia/commons/7/7d/03_Tre_di_denari.jpg";
// const quattroDen = "https://upload.wikimedia.org/wikipedia/commons/a/a0/04_Quattro_di_denari.jpg";
// const cinqueDen = "https://upload.wikimedia.org/wikipedia/commons/b/b7/05_Cinque_di_denari.jpg";
// const seiDen = "https://upload.wikimedia.org/wikipedia/commons/2/2a/06_Sei_di_denari.jpg";
// const setteDen = "https://upload.wikimedia.org/wikipedia/commons/1/10/07_Sette_di_denari.jpg";
// const ottoDen = "https://upload.wikimedia.org/wikipedia/commons/0/06/08_Otto_di_denari.jpg";
// const noveDen = "https://upload.wikimedia.org/wikipedia/commons/e/e3/09_Nove_di_denari.jpg";
// const dieciDen = "https://upload.wikimedia.org/wikipedia/commons/0/0b/10_Dieci_di_denari.jpg";
// const assoCop = "https://upload.wikimedia.org/wikipedia/commons/b/ba/11_Asso_di_coppe.jpg"
// const dueCop = "https://upload.wikimedia.org/wikipedia/commons/6/63/12_Due_di_coppe.jpg";
// const treCop = "https://upload.wikimedia.org/wikipedia/commons/2/2f/13_Tre_di_coppe.jpg";
// const quattroCop = "https://upload.wikimedia.org/wikipedia/commons/6/6a/14_Quattro_di_coppe.jpg";
// const cinqueCop = "https://upload.wikimedia.org/wikipedia/commons/b/b2/15_Cinque_di_coppe.jpg";
// const seiCop = "https://upload.wikimedia.org/wikipedia/commons/0/0d/16_Sei_di_coppe.jpg";
// const setteCop = "https://upload.wikimedia.org/wikipedia/commons/a/ac/17_Sette_di_coppe.jpg";
// const ottoCop = "https://upload.wikimedia.org/wikipedia/commons/e/ee/18_Otto_di_coppe.jpg";
// const noveCop = "https://upload.wikimedia.org/wikipedia/commons/4/4b/19_Nove_di_coppe.jpg";
// const dieciCop = "https://upload.wikimedia.org/wikipedia/commons/2/25/20_Dieci_di_coppe.jpg";
// const assoSpad = "https://upload.wikimedia.org/wikipedia/commons/9/9d/21_Asso_di_spade.jpg"
// const dueSpad = "https://upload.wikimedia.org/wikipedia/commons/e/e1/22_Due_di_spade.jpg";
// const treSpad = "https://upload.wikimedia.org/wikipedia/commons/1/1b/23_Tre_di_spade.jpg";
// const quattroSpad = "https://upload.wikimedia.org/wikipedia/commons/8/86/24_Quattro_di_spade.jpg";
// const cinqueSpad = "https://upload.wikimedia.org/wikipedia/commons/b/b5/25_Cinque_di_spade.jpg";
// const seiSpad = "https://upload.wikimedia.org/wikipedia/commons/4/4c/26_Sei_di_spade.jpg";
// const setteSpad = "https://upload.wikimedia.org/wikipedia/commons/b/b4/27_Sette_di_spade.jpg";
// const ottoSpad = "https://upload.wikimedia.org/wikipedia/commons/b/bc/28_Otto_di_spade.jpg";
// const noveSpad = "https://upload.wikimedia.org/wikipedia/commons/4/4d/29_Nove_di_spade.jpg";
// const dieciSpad = "https://upload.wikimedia.org/wikipedia/commons/c/c7/30_Dieci_di_spade.jpg";
// const assoBast = "https://upload.wikimedia.org/wikipedia/commons/6/64/31_Asso_di_bastoni.jpg"
// const dueBast = "https://upload.wikimedia.org/wikipedia/commons/c/c7/32_Due_di_bastoni.jpg";
// const treBast = "https://upload.wikimedia.org/wikipedia/commons/4/4f/33_Tre_di_bastoni.jpg";
// const quattroBast = "https://upload.wikimedia.org/wikipedia/commons/c/c6/34_Quattro_di_bastoni.jpg";
// const cinqueBast = "https://upload.wikimedia.org/wikipedia/commons/5/52/35_Cinque_di_bastoni.jpg";
// const seiBast = "https://upload.wikimedia.org/wikipedia/commons/c/cd/36_Sei_di_bastoni.jpg";
// const setteBast = "https://upload.wikimedia.org/wikipedia/commons/e/ea/37_Sette_di_bastoni.jpg";
// const ottoBast = "https://upload.wikimedia.org/wikipedia/commons/b/b4/38_Otto_di_bastoni.jpg";
// const noveBast = "https://upload.wikimedia.org/wikipedia/commons/9/91/39_Nove_di_bastoni.jpg";
// const dieciBast = "https://upload.wikimedia.org/wikipedia/commons/8/85/40_Dieci_di_Bastoni.jpg";
// const cardBack = "https://upload.wikimedia.org/wikipedia/commons/9/93/Carte_Napoletane_retro.jpg";
/*******************************************carte napoletane array di oggetti *******************************************>^.^<******************/
const mazzoNapoletano = [
    {
        nome: "Asso",
        seme: "Denari",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/01_Asso_di_denari.jpg",
        valore: 1
    },{
        nome: "Due",
        seme: "Denari",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/02_Due_di_denari.jpg",
        valore: 2
    }, {
        nome: "Tre",
        seme: "Denari",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/04_Quattro_di_denari.jpg",
        valore : 3
    }, {
        nome: "Quattro",
        seme: "Denari",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/04_Quattro_di_denari.jpg",
        valore: 4
    }, {
        nome: "Cinque",
        seme: "Denari",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/05_Cinque_di_denari.jpg",
        valore: 5
    }, {
        nome: "Sei",
        seme: "Denari",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/06_Sei_di_denari.jpg",
        valore: 6
    }, {
        nome: "Sette",
        seme: "Denari",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/10/07_Sette_di_denari.jpg",
        valore: 7
    }, {
        nome: "Donna",
        seme: "Denari",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/06/08_Otto_di_denari.jpg",
        valore: 8
    }, {
        nome: "Cavallo",
        seme: "Denari",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/09_Nove_di_denari.jpg",
        valore: 9
    }, {
        nome: "Re",
        seme: "Denari",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/10_Dieci_di_denari.jpg",
        valore: 10
    }, {
        nome: "Asso",
        seme: "Coppe",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/ba/11_Asso_di_coppe.jpg",
        valore: 1
    }, {
        nome: "Due",
        seme: "Coppe",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/63/12_Due_di_coppe.jpg",
        valore: 2
    }, {
        nome: "Tre",
        seme: "Coppe",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/13_Tre_di_coppe.jpg",
        valore: 3
    }, {
        nome: "Quattro",
        seme: "Coppe",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/14_Quattro_di_coppe.jpg",
        valore: 4
    }, {
        nome: "Cinque",
        seme: "Coppe",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/15_Cinque_di_coppe.jpg",
        valore: 5
    }, {
        nome: "Sei",
        seme: "Coppe",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/16_Sei_di_coppe.jpg",
        valore: 6
    }, {
        nome: "Sette",
        seme: "Coppe",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/17_Sette_di_coppe.jpg",
        valore: 7
    }, {
        nome: "Donna",
        seme: "Coppe",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/18_Otto_di_coppe.jpg",
        valore: 8
    }, {
        nome: "Cavallo",
        seme: "Coppe",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/19_Nove_di_coppe.jpg",
        valore: 9
    }, {
        nome: "Re",
        seme: "Coppe",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/25/20_Dieci_di_coppe.jpg",
        valore: 10
    }, {
        nome: "Asso",
        seme: "Spade",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/21_Asso_di_spade.jpg",
        valore: 1
    }, {
        nome: "Due",
        seme: "Spade",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/22_Due_di_spade.jpg",
        valore: 2
    }, {
        nome: "Tre",
        seme: "Spade",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/23_Tre_di_spade.jpg",
        valore: 3
    }, {
        nome: "Quattro",
        seme: "Spade",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/86/24_Quattro_di_spade.jpg",
        valore: 4
    }, {
        nome: "Cinque",
        seme: "Spade",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/25_Cinque_di_spade.jpg",
        valore: 5
    }, {
        nome: "Sei",
        seme: "Spade",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/26_Sei_di_spade.jpg",
        valore: 6
    }, {
        nome: "Sette",
        seme: "Spade",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/27_Sette_di_spade.jpg",
        valore: 7
    }, {
        nome: "Donna",
        seme: "Spade",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/bc/28_Otto_di_spade.jpg",
        valore: 8
    }, {
        nome: "Cavallo",
        seme: "Spade",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/29_Nove_di_spade.jpg",
        valore: 9
    }, {
        nome: "Re",
        seme: "Spade",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/30_Dieci_di_spade.jpg",
        valore: 10
    }, {
        nome: "Asso",
        seme: "Bastoni",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/64/31_Asso_di_bastoni.jpg",
        valore: 1
    }, {
        nome: "Due",
        seme: "Bastoni",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/32_Due_di_bastoni.jpg",
        valore: 2
    }, {
        nome: "Tre",
        seme: "Bastoni",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/33_Tre_di_bastoni.jpg",
        valore: 3
    }, {
        nome: "Quattro",
        seme: "Bastoni",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c6/34_Quattro_di_bastoni.jpg",
        valore: 4
    }, {
        nome: "Cinque",
        seme: "Bastoni",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/52/35_Cinque_di_bastoni.jpg",
        valore: 5
    }, {
        nome: "Sei",
        seme: "Bastoni",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/cd/36_Sei_di_bastoni.jpg",
        valore: 6
    }, {
        nome: "Sette",
        seme: "Bastoni",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/37_Sette_di_bastoni.jpg",
        valore: 7
    }, {
        nome: "Donna",
        seme: "Bastoni",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/38_Otto_di_bastoni.jpg",
        valore: 8
    }, {
        nome: "Cavallo",
        seme: "Bastoni",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/91/39_Nove_di_bastoni.jpg",
        valore: 9
    }, {
        nome: "Re",
        seme: "Bastoni",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/85/40_Dieci_di_Bastoni.jpg",
        valore: 10
    }, {
        nome: "cardBack",
        seme: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Carte_Napoletane_retro.jpg"
        valore :0
    }

];