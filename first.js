function adduser(){
    player_1 = document.getElementById("player1").value;
    player_2 = document.getElementById("player2").value;
    localStorage.setItem("player1" , player_1);
    localStorage.setItem("player2" , player_2);
    window.location="game_page.html";
}