$(document).ready(function(){
    var magic8ball = {};

    magic8ball.listOfAnswers = [
        "Nah",
        "Sip",
        "Ni idea",
        "Pagame con té y te lo digo >:D",
        "Dejame en paz tengo los cascos puestos",
        "......¿En serio me acabas de preguntar eso?",
    ];

    $("#answer").hide();

    var onClick = function() { //para el dialogo de respuesta
        $("answer").hide()
    
        $("8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wpcontent/uploads/2016/09/magic8ballQuestion.png")
    
        setTimeout(function(){
            //Para la ventana emergente de si o no
            var question = prompt("HAZ UNA PREGUNTA DE RESPUESTA SI O NO");
            magic8ball.askQuestion(question);
        }, 500);
    }; //Fin función onClick

    magic8Ball.askQuestion = function(question) {
        $("#8ball").effect("shake");
        
        $("#8ball").attr("src",
        "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
        
        $("#answer").fadeIn(4000);
        var randomNumber = Math.random(); //Generamos numero aleatorio

        //Seleccionamos una respuesta aleatoria de la lista de respuestas
        var randomNumberForListOfAnswers = randomNumber *
        this.listOfAnswers.length;
        
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        
        var answer = this.listOfAnswers[randomIndex];
        
        $("#answer").text(answer);
        
        console.log(question);
        
        console.log(answer);
    }; //Fin funcion preguntar
});