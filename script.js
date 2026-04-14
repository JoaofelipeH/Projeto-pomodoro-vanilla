let tempo = 1500;
let minutos;
let segundo;
let cronometro = document.getElementById("cronometro");
let intervaloid;
let padminutos = String(minutos).padStart(2, "0");
let padsegundos = String(segundo).padStart(2, "0");
//
document.getElementById("buttom-start").addEventListener("click", function () {
    //
    clearInterval(intervaloid);
    //
    intervaloid = setInterval(function () {
        //
        tempo = tempo - 1;
        minutos = Math.floor(tempo / 60);
        segundo = tempo % 60;
        padminutos = String(minutos).padStart(2, "0");
        padsegundos = String(segundo).padStart(2, "0");
        cronometro.textContent = `${padminutos}:${padsegundos}`;
        //
    }, 1000);
    //  
},);
//
document.getElementById("buttom-pause").addEventListener("click", function () {
    clearInterval(intervaloid);
});
//
document.getElementById("buttom-reset").addEventListener("click", function(){
    //
    clearInterval(intervaloid);
    tempo = 1500;
    cronometro.textContent = '25:00'
    //
})