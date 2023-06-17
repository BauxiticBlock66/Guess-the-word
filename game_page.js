player1_score = 0;
player2_score = 0;
player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");
question_turn = "player1";
answer_turn = "player2";
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question turn- " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn- " + player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lower case is " + word);

    charat1 = word.charAt(1);
    console.log(charat1);

    length_divideby2 = Math.floor(word.length/2);
    charat2 = word.charAt(length_divideby2);
    console.log(charat2);

    length_minus1 = word.length - 1;
    charat3 = word.charAt(length_minus1);
    console.log(charat3);

    remove_1 = word.replace(charat1 , "_");
    remove_2 = remove_1.replace(charat2 , "_");
    remove_3 = remove_2.replace(charat3 , "_");
    console.log(remove_3);

    question = "<h4 id = 'word_display'> Q. "+ remove_3+"</h4>";
    input = "<br> Answer: <input type = 'text' id = 'input_check_box'>";
    check = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question + input + check;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}


function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log(answer);

    if(answer == word)
    {
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score;

    }
    else{
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
}
if(question_turn == "player1"){
    question_turn = "player2";
    document.getElementById("player_question").innerHTML = "Question Turn- " + player2_name;
}
else{
    question_turn = "player1";
    document.getElementById("player_question").innerHTML = "Question Turn- " + player1_name;
}

if(answer_turn == "player1"){
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML = "Answer Turn- " + player2_name;
}
else{
    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML = "Answer Turn- " + player1_name;
}