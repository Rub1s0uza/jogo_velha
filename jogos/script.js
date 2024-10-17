var player = "X";
var numJog = 0;
var pc = document.getElementById('cpu').ariaChecked;

// Função para chamar o onclick
function checkjogo(id) {
    var opt = verificaSrc(id);

    if (opt == "transp.png") {
        document.getElementById(id).src = "img/" + player + ".png";

        // Alterna entre os jogadores
        player = (player == "X") ? "O" : "X";

        numJog++;

        // Verifica se há uma vitória
        if (winChek()) {
            alert("Fim do Jogo! " + (player == "X" ? "O" : "X") + " venceu!");
            return false;
            //location.reload(); 
        }
        if(numJog >=9){
            alert("Fim de jogo!! Deu VELHA!");
            return false;
            //location.reload(); 

        }

        
    }
        if(pc && player == "O"){
            checkjogo(jogoDoPc());
        }
}

function jogoDoPc(){
    if(verificaSrc(c5) == "transp.png"){
        return 'c5';
    }
    return 'c' + Math.floor((Math.random() * 9) + 1);
}

// Função para capturar somente nome e extensão da img
function verificaSrc(id) {
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

function winChek() {
    // Linhas
    if ((verificaSrc('c1') == verificaSrc('c2') && verificaSrc('c1') == verificaSrc('c3') && verificaSrc('c1') != "transp.png") ||
        (verificaSrc('c4') == verificaSrc('c5') && verificaSrc('c4') == verificaSrc('c6') && verificaSrc('c4') != "transp.png") ||
        (verificaSrc('c7') == verificaSrc('c8') && verificaSrc('c7') == verificaSrc('c9') && verificaSrc('c7') != "transp.png")) {
        return true; // Vitória em uma linha
    }

    // Colunas
    if ((verificaSrc('c1') == verificaSrc('c4') && verificaSrc('c1') == verificaSrc('c7') && verificaSrc('c1') != "transp.png") ||
        (verificaSrc('c2') == verificaSrc('c5') && verificaSrc('c2') == verificaSrc('c8') && verificaSrc('c2') != "transp.png") ||
        (verificaSrc('c3') == verificaSrc('c6') && verificaSrc('c3') == verificaSrc('c9') && verificaSrc('c3') != "transp.png")) {
        return true; // Vitória em uma coluna
    }

    // Diagonais
    if ((verificaSrc('c1') == verificaSrc('c5') && verificaSrc('c1') == verificaSrc('c9') && verificaSrc('c1') != "transp.png") ||
        (verificaSrc('c3') == verificaSrc('c5') && verificaSrc('c3') == verificaSrc('c7') && verificaSrc('c3') != "transp.png")) {
        return true; // Vitória em uma diagonal
    }

    return false; // Nenhuma vitória
}
