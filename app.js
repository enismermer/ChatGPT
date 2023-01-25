/*$(window).on("load", function () {
	$("#exampleModalToggle").modal("show");
});*/

let sender = document.getElementById('sender');
const info = document.getElementById('info');
const chat = document.getElementById('chat');
const style = document.getElementById('myStyle')

function sendMessage(){
        info.style.visibility = 'hidden';
        chat.style.visibility = 'visible';
        chat.innerHTML += '<p class="response">' + sender.value + '</p>';
        chat.innerHTML += '<p id="rep" class="response text-end">Vous avez envoyez un message</p>';
        style.innerText = '.response {\n' +
            '\toverflow: hidden; /* Ensures the content is not revealed until the animation */\n' +
            '\tborder-right: .15em solid orange; /* The typwriter cursor */\n' +
            '\twhite-space: nowrap; /* Keeps the content on a single line */\n' +
            '\tmargin: 0 auto; /* Gives that scrolling effect as the typing happens */\n' +
            '\tletter-spacing: .15em; /* Adjust as needed */\n' +
            '}'
        rep.style.animation = "typing 3.5s steps(40, end), blink-caret .75s step-end infinite";
}