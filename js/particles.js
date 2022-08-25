var top_mod = 0
var left_mod = 0

$("body").mousemove((event)=>{
    let button = $("#not").position();
    button.right = button.left + 100
    button.bottom = button.top + 28
    button.centerX = button.left + 50
    button.centerY = button.top + 14

    let distancia = Math.sqrt( Math.pow(event.pageX - button.centerX, 2) + Math.pow(event.pageY - button.centerY, 2))

    if(distancia < 80){
        let mods = angulo(event, button, distancia)
        if(event.pageX < button.centerX){
            left_mod += 10*mods.cosseno
        }
        else{
            left_mod -= 10*mods.cosseno
        }
        if(event.pageY < button.centerY){
            top_mod += 10*mods.seno
        }
        else{
            top_mod -= 10*mods.seno
        }
        $("#not").css({top: top_mod, left: left_mod, position:'relative'});
    }
})

function angulo(mouse, button, distancia){
    let seno = Math.abs(mouse.pageY - button.centerY)/distancia
    let cosseno = Math.abs(mouse.pageX - button.centerX)/distancia

    return {seno: seno, cosseno: cosseno}
}

function alertSim()
{
alert("Obaaa!!! Você pode marcar comigo no meu whatsapp! ❤️");
}