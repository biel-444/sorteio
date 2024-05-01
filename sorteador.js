//Todos os times disponíveis
var times = ['MANCHESTER CITY', 'REAL MADRID', 'ATALANTA', 'BORUSSIA DORTMUND','PARIS SAINT-GERMAIN','LIVERPOOL','BAYERN MÜNCHEN','ARSENAL','ATLÉTICO DE MADRID','INTERNAZIONALE','Porto','Bayer Leverkusen','Chelsea','Sporting',

'Riffa','Milan','RB Leipzig','Roma','Barcelona','Napoli','Real Sociedad','West Ham','Club Brugge','PSV Eindhoven','Benfica','Juventus','Lille','Aston Villa','Feyenoord','Sevilla','Sevilla','Olympique Marseille','Freiburg','Slavia Praga','FC Kobenhavn','Manchester United','Internacional','Grêmio']

//variáveis
var time1 = 'n'
var time2 ='n'
var min = 0
var max = 37
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
//print
console.log(times[time1])
console.log(times[time2])