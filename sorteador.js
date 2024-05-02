// Function que engloba todo o código JS.
// É acionada por um button no HTML
function cliqueDeSorteio(){

    //Todos os times disponíveis
    var times = ['MANCHESTER CITY', 'REAL MADRID', 'ATALANTA', 'BORUSSIA DORTMUND','PARIS SAINT-GERMAIN','LIVERPOOL','BAYERN MÜNCHEN','ARSENAL','ATLÉTICO DE MADRID','INTERNAZIONALE','Porto','Bayer Leverkusen','Chelsea','Sporting',
    'Milan','RB Leipzig','Roma','Barcelona','Napoli','Real Sociedad','West Ham','Club Brugge','PSV Eindhoven','Benfica','Juventus','Lille','Aston Villa','Sevilla','Olympique Marseille','Freiburg','Manchester United','Internacional','Grêmio']



    //variáveis
    var time1 = 'n'
    var time2 = 'n'
    var min = 0
    var max = 32
    min = Math.ceil(min)
    max = Math.floor(max)

    var x = 0
    var i = 0

    //looping
        while(i == 0 || i == 1 ){

        x = Math.floor(Math.random() * (max - min + 1)) + min;

            if( i == 0 ){  time1 = x;  i = 1}
            if(i == 1  && x != time1) { time2 = x;  i = 12}
        

        }
    //print no Terminal
    console.log(times[time1])
    console.log(times[time2])

    //Retorna os nomes dos times para o HTML por id
    document.getElementById("vartime1").innerHTML = times[time1]
    document.getElementById("vartime2").innerHTML = times[time2]
    }



