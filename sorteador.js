// Function que engloba todo o código JS.
// É acionada por um button no HTML
function cliqueDeSorteio(){

    //Todos os times disponíveis
    var times = ['MANCHESTER CITY', 'REAL MADRID', 'ATALANTA', 'BORUSSIA DORTMUND','PARIS SAINT-GERMAIN','LIVERPOOL','BAYERN MÜNCHEN','ARSENAL','ATLÉTICO DE MADRID','INTERNAZIONALE','Porto','Bayer Leverkusen','Chelsea','Sporting',
    'Milan','RB Leipzig','Barcelona','Napoli','Real Sociedad','West Ham','Club Brugge','PSV Eindhoven','Benfica','Juventus','Lille','Aston Villa','Sevilla','Olympique Marseille','Freiburg','Manchester United','Internacional','Grêmio']

    //todas as URLs das fotos dos times
    var imgs = ["estilo/imagensTimes/manchester-city.png", "estilo/imagensTimes/logo-real-madrid-escudo-256.png", "estilo/imagensTimes/atalanta-bergamasca-calcio-256.png", "estilo/imagensTimes/borussia-dortmund-256.png", "estilo/imagensTimes/paris-saint-germain-256.png", "estilo/imagensTimes/liverpool-football-club-256.png", "estilo/imagensTimes/bayern-munchen-256.png", "estilo/imagensTimes/arsenal-football-club-256.png", "estilo/imagensTimes/logo-atletico-madrid-256.png", "estilo/imagensTimes/football-club-internazionale-milano-256.png", "estilo/imagensTimes/logo-porto-256.png", "estilo/imagensTimes/bayer-04-leverkusen-256.png", "estilo/imagensTimes/chelsea-football-club-256.png", "estilo/imagensTimes/logo-sporting-portugal-5.png", "estilo/imagensTimes/associazione-calcio-milan-256.png", "estilo/imagensTimes/rb-leipzig-256.png", "estilo/imagensTimes/logo-barcelona-256.png", "estilo/imagensTimes/societa-sportiva-calcio-napoli-256.png", "estilo/imagensTimes/logo-real-sociedad-256.png", "estilo/imagensTimes/west-ham-united-football-club-256.png", "estilo/imagensTimes/logo-brugge-5.png", "estilo/imagensTimes/logo-psv-eindhoven-5.png", "estilo/imagensTimes/logo-benfica-5.png", "estilo/imagensTimes/juventus-football-club-256.png", "estilo/imagensTimes/lille-olympique-sporting-club-256.png", "estilo/imagensTimes/aston-villa-football-club-256.png", "estilo/imagensTimes/logo-sevilla-256.png", "estilo/imagensTimes/olympique-de-marseille-256.png", "estilo/imagensTimes/sport-club-freiburg-256.png", "estilo/imagensTimes/manchester-united-football-club-256.png", "estilo/imagensTimes/logo-internacional-256.png", "estilo/imagensTimes/logo-gremio-256.png"]

    

    //variáveis
    var time1 = 'n'
    var time2 = 'n'
    var min = 0
    var max = 31
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


    //manda as imagens dos times para o HTML por id
    var img11 = "estilo/imagensTimes/arsenal-football-club-256.png";
    document.getElementById("img1").src = imgs[time1];
    var img22 = "estilo/imagensTimes/rb-leipzig-256.png";
    document.getElementById("img2").src = imgs[time2];

    }



