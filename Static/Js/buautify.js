pressed = 0

function changeTheme(){
    pressed += 1
    pinkAndSomething = ["#E56399","#320E3B","#7F96FF"]
    Default = ["gray","black","white"]
    brownish = ["#FCAA67","#B0413E","#FFFFC7"]
    colors = [pinkAndSomething,brownish,Default]
    if(pressed > (colors.length - 1)){
        pressed = 0
    }
    theme = colors[pressed]
    changeColor(theme[0],theme[1],theme[2])
}

function changeColor(blockcolor, textcolor, backcolor) {
    var item = document.getElementsByClassName("colored");
    var i;
    for (i = 0; i < item.length; i++) {
        item[i].style.backgroundColor = blockcolor;
        item[i].style.color = textcolor;
    }
    document.getElementById("body").style.backgroundColor = backcolor;
}