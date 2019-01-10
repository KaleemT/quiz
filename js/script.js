/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var finalAnswer = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Input = $("#question1").val();
        var q2Input = $("#question2").val();
        var q3Input = $("#question3").val();
        var q4Input = $("#question4").val();
        var Score1 = q1Score(q1Input);
        var Score2 = q2Score(q2Input);
        var Score3 = q3Score(q3Input);
        var Score4 = q4Score(q4Input);
        var totalScore =Score1 + Score2 + Score3 + Score4;
    });

});
function q1Score(input){
    if(input==="Chocolate chip"){
        return 3;
    }else if(input==="Vanilla"){
        return 4;
    }else if(input==="strawberry"){
        return 1;
    }else if(input==="pistachio"){
        return 2;
    }
}
function q2Score(input){
    if(input==="Comedy"){
        return 3;
    }else if(input==="Horror"){
        return 4;
    }else if(input==="Romantic"){
        return 5;
    }else if(input==="Action"){
        return 2;
    }
}
function q3Score(input){
    if(input==="funny"){
        return 5;
    }else if(input==="jealous"){
        return 4;
    }else if(input==="curios"){
        return 1;
    }else if(input==="serious"){
        return 3;
    }
}
function q4Score(input){
    if(input==="lawer"){
        return 3;
    }else if(input==="athlete"){
        return 4;
    }else if(input==="doctor"){
        return 5;
    }else if(input==="teacher"){
        return 2;
    }
}