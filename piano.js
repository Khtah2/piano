function game(sname)
{
    const audio = new Audio("tunes/"+sname+".wav");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
    button.addEventListener("click", () => {
        audio.play();
    });
    });
}