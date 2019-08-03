document.getElementById("contenedor").style.display = "none";
var starwars = {};
var characters = document.getElementById("characters");
//var Tabla1 = document.getElementById("tabla1");
var peticion;

function renderPagina() {
    peticion = new XMLHttpRequest(); // 
    var click = document.getElementById("selector");
    var indice = click.value;
    datos(indice);

    peticion.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            starwars = JSON.parse(this.responseText);
            //console.log(starwars.results.lenght);
            imprimir(indice);
            document.getElementById("contenedor").style.display = "block";

        }
    }
    peticion.open('GET', `https://swapi.co/api/${cambio}/`, true);
    peticion.send();
}

document.addEventListener("DOMContentLoaded", function (event) { });

var elemento = document.getElementById('titulo').style.color = 'red';
var boton = document.getElementById('botoncito');
boton.style.backgroundColor = 'blue';
boton.style.borderColor = 'blue';

function datos(k) {

    switch (k) {
        case "0":
            cambio = "people";
            break;
        case "1":
            cambio = "planets";
            break;
        case "2":
            cambio = "films";
            break;
        case "3":
            cambio = "species";
            break;
        case "4":
            cambio = "vehicles";
            break;
        case "5":
            cambio = "starships";
            break;
    }
}

function imprimir(indice) {
    //console.log(starwars);

    switch (indice) {
        case "0":
                        
            document.getElementById("tabla1").src ="https://images-na.ssl-images-amazon.com/images/I/31pojsXLF%2BL._SX342_.jpg";
            document.getElementById("tabla2").src ="https://www.sideshowtoy.com/wp-content/uploads/2013/08/400106b-product-feature.jpg";
            document.getElementById("tabla3").src ="https://images-na.ssl-images-amazon.com/images/I/41SfBlwpQkL._SL500_AC_SS350_.jpg";
            document.getElementById("tabla4").src ="https://aa1a5178aef33568e9c4-a77ea51e8d8892c1eb8348eb6b3663f6.ssl.cf5.rackcdn.com/p/full/aa3acebe-375c-4dda-846e-18485f985cfd.jpg";
            document.getElementById("tabla5").src ="https://i.ebayimg.com/images/g/K8IAAOSwOvhaxkws/s-l300.png";
            document.getElementById("tabla6").src ="http://fs.kinomania.ru/file/person/b/6c/b6c67e170dde2a1c49c380965c62271e.jpeg";
            document.getElementById("tabla7").src ="https://theartmad.com/wp-content/uploads/2015/06/Beru-Lars-2.jpg";
            document.getElementById("tabla8").src ="https://images-na.ssl-images-amazon.com/images/I/51LhTH-U%2BhL.jpg";
            document.getElementById("tabla9").src ="https://i.kinja-img.com/gawker-media/image/upload/s--L67hrd8S--/c_scale,f_auto,fl_progressive,q_80,w_800/bemzfolrhkh3qodxgrh2.jpg";
            document.getElementById("tabla10").src ="https://cdn.tekcrispy.com/wp-content/uploads/2018/05/ObiWanKenobi-640x360.jpg";

            var objectB = new Object(starwars.results);
            console.log(objectB[0]);
            
            document.getElementById("parrafo1").innerHTML = "Nombre Personaje: " + objectB[0].name + "<br />" + "Altura[cm]: " + objectB[0].height + "<br />" + "Masa corporal[kg]: " + objectB[0].mass + "<br />" + "Color ojos: "+ objectB[0].eye_color + "<br />" + "Genero " + objectB[0].gender;
            document.getElementById("parrafo2").innerHTML = "Nombre Personaje: " + objectB[1].name + "<br />" + "Altura[cm]: " + objectB[1].height + "<br />" + "Masa corporal[kg]: " + objectB[1].mass + "<br />" + "Color ojos: "+ objectB[1].eye_color + "<br />" + "Genero " + objectB[1].gender;
            document.getElementById("parrafo3").innerHTML = "Nombre Personaje: " + objectB[2].name + "<br />" + "Altura[cm]: " + objectB[2].height + "<br />" + "Masa corporal[kg]: " + objectB[2].mass+ "<br />" + "Color ojos: "+ objectB[2].eye_color + "<br />" + "Genero " + objectB[2].gender;
            document.getElementById("parrafo4").innerHTML = "Nombre Personaje: " + objectB[3].name + "<br />" + "Altura[cm]: " + objectB[3].height + "<br />" + "Masa corporal[kg]: " + objectB[3].mass + "<br />" + "Color ojos: "+ objectB[3].eye_color + "<br />" + "Genero " + objectB[3].gender;
            document.getElementById("parrafo5").innerHTML = "Nombre Personaje: " + objectB[4].name + "<br />" + "Altura[cm]: " + objectB[4].height + "<br />" + "Masa corporal[kg]: " + objectB[4].mass + "<br />" + "Color ojos: "+ objectB[4].eye_color + "<br />" + "Genero " + objectB[4].gender;
            document.getElementById("parrafo6").innerHTML = "Nombre Personaje: " + objectB[5].name + "<br />" + "Altura[cm]: " + objectB[5].height + "<br />" + "Masa corporal[kg]: " + objectB[5].mass + "<br />" + "Color ojos: "+ objectB[5].eye_color + "<br />" + "Genero " + objectB[5].gender;
            document.getElementById("parrafo7").innerHTML = "Nombre Personaje: " + objectB[6].name + "<br />" + "Altura[cm]: " + objectB[6].height + "<br />" + "Masa corporal[kg]: " + objectB[6].mass + "<br />" + "Color ojos: "+ objectB[6].eye_color + "<br />" + "Genero " + objectB[6].gender;
            document.getElementById("parrafo8").innerHTML = "Nombre Personaje: " + objectB[7].name + "<br />" + "Altura[cm]: " + objectB[7].height + "<br />" + "Masa corporal[kg]: " + objectB[7].mass + "<br />" + "Color ojos: "+ objectB[7].eye_color + "<br />" + "Genero " + objectB[7].gender;
            document.getElementById("parrafo9").innerHTML = "Nombre Personaje: " + objectB[8].name + "<br />" + "Altura[cm]: " + objectB[8].height + "<br />" + "Masa corporal[kg]: " + objectB[8].mass + "<br />" + "Color ojos: "+ objectB[8].eye_color + "<br />" + "Genero " + objectB[8].gender;
            document.getElementById("parrafo10").innerHTML = "Nombre Personaje: " + objectB[9].name + "<br />" + "Altura[cm]: " + objectB[9].height + "<br />" + "Masa corporal[kg]: " + objectB[9].mass + "<br />" + "Color ojos: "+ objectB[9].eye_color + "<br />" + "Genero " + objectB[9].gender;
            
            break;

        case "1":
            document.getElementById("parrafo1").innerHTML = " ";
            document.getElementById("parrafo2").innerHTML = " ";
            document.getElementById("parrafo3").innerHTML = " ";
            document.getElementById("parrafo4").innerHTML = " ";
            document.getElementById("parrafo5").innerHTML = " ";
            document.getElementById("parrafo6").innerHTML = " ";
            document.getElementById("parrafo7").innerHTML = " ";
            document.getElementById("parrafo8").innerHTML = " ";
            document.getElementById("parrafo9").innerHTML = " ";
            document.getElementById("parrafo10").innerHTML = " ";

            document.getElementById("tabla1").src = "https://i.imgur.com/HtykDVt.jpg";
            document.getElementById("tabla2").src = "https://78.media.tumblr.com/6d663e1836eb9632c9ea0c82156a527c/tumblr_ov79dqdX9P1rhdp6mo1_500.jpg";
            document.getElementById("tabla2").width = "200";
            document.getElementById("tabla3").src = "http://en.es-static.us/upl/2017/03/hoth-star-wars.jpg";
            document.getElementById("tabla3").width = "200";
            document.getElementById("tabla4").src = "http://www.geocities.ws/ksw_gd/Dagobah03.jpg";
            document.getElementById("tabla5").src = "https://pbs.twimg.com/media/ClLBZd2WAAAbhrB.jpg:large";
            document.getElementById("tabla6").src = "https://img00.deviantart.net/6795/i/2018/123/c/4/after_the_battle_of_endor_by_romandubina-dcak1ms.jpg";
            document.getElementById("tabla7").src = "https://starwarsblog.starwars.com/wp-content/uploads/2014/11/Image-1.jpg";
            document.getElementById("tabla8").src = "https://starwarsblog.starwars.com/wp-content/uploads/2014/12/coruscant-1536x864.jpg";
            document.getElementById("tabla9").src = "http://pm1.narvii.com/6298/73480eb799e932612cb4ee478903ba94e64a9011_00.jpg";
            document.getElementById("tabla10").src = "http://palpatine.org/wp-content/uploads/2018/01/Attack-of-the-Clones-Battle-of-Geonosis.jpg";

            var objectC = new Object(starwars.results);
            console.log(objectC[0]);
            
            document.getElementById("parrafo1").innerHTML = "Nombre Planeta: " + objectC[0].name + "<br />" + "Periodo rotacion[s]: " + objectC[0].rotation_period+ "<br />" + "Perido de orbita[s]: " + objectC[0].orbital_period+ "<br />" + "Clima: " + objectC[0].climate+ "<br />"+ "Gravedad: " + objectC[0].gravity+ "<br />"+ "Poblacion: " + objectC[0].population ;
            document.getElementById("parrafo2").innerHTML = "Nombre Planeta: " + objectC[1].name + "<br />" + "Periodo rotacion[s]: " + objectC[1].rotation_period+ "<br />" + "Periodo de orbita[s]: " + objectC[1].orbital_period+ "<br />" + "Clima: " + objectC[1].climate+ "<br />"+ "Gravedad: " + objectC[1].gravity+ "<br />"+ "Poblacion: " + objectC[1].population  ;
            document.getElementById("parrafo3").innerHTML = "Nombre Planeta: " + objectC[2].name + "<br />" + "Periodo rotacion[s]: " + objectC[2].rotation_period+ "<br />" + "Periodo de orbita[s]: " + objectC[2].orbital_period+ "<br />" + "Clima: " + objectC[2].climate+ "<br />"+ "Gravedad: " + objectC[2].gravity+ "<br />"+ "Poblacion: " + objectC[2].population  ;
            document.getElementById("parrafo4").innerHTML = "Nombre Planeta: " + objectC[3].name + "<br />" + "Periodo rotacion[s]: " + objectC[3].rotation_period+ "<br />" + "Periodo de orbita[s]: " + objectC[3].orbital_period+ "<br />" + "Clima: " + objectC[3].climate+ "<br />"+ "Gravedad: " + objectC[3].gravity+ "<br />"+ "Poblacion: " + objectC[3].population  ;
            document.getElementById("parrafo5").innerHTML = "Nombre Planeta: " + objectC[4].name + "<br />" + "Periodo rotacion[s]: " + objectC[4].rotation_period+ "<br />" + "Periodo de orbita[s]: " + objectC[4].orbital_period+ "<br />" + "Clima: " + objectC[4].climate+ "<br />"+ "Gravedad: " + objectC[4].gravity+ "<br />"+ "Poblacion: " + objectC[4].population  ;
            document.getElementById("parrafo6").innerHTML = "Nombre Planeta: " + objectC[5].name + "<br />" + "Periodo rotacion[s]: " + objectC[5].rotation_period+ "<br />" + "Periodo de orbita[s]: " + objectC[5].orbital_period+ "<br />" + "Clima: " + objectC[5].climate+ "<br />"+ "Gravedad: " + objectC[5].gravity+ "<br />"+ "Poblacion: " + objectC[5].population  ;
            document.getElementById("parrafo7").innerHTML = "Nombre Planeta: " + objectC [6].name + "<br />" + "Periodo rotacion[s]: " + objectC[6].rotation_period+ "<br />" + "Periodo de orbita[s]: " + objectC[6].orbital_period+ "<br />" + "Clima: " + objectC[6].climate+ "<br />"+ "Gravedad: " + objectC[6].gravity+ "<br />"+ "Poblacion: " + objectC[6].population  ;
            document.getElementById("parrafo8").innerHTML = "Nombre Planeta: " + objectC[7].name + "<br />" + "Periodo rotacion[s]: " + objectC[7].rotation_period+ "<br />" + "Periodo de orbita[s]: " + objectC[7].orbital_period+ "<br />" + "Clima: " + objectC[7].climate+ "<br />"+ "Gravedad: " + objectC[7].gravity+ "<br />"+ "Poblacion: " + objectC[7].population  ;
            document.getElementById("parrafo9").innerHTML = "Nombre Planeta: " + objectC[8].name + "<br />" + "Periodo rotacion[s]: " + objectC[8].rotation_period+ "<br />" + "Periodo de orbita[s]: " + objectC[8].orbital_period+ "<br />" + "Clima: " + objectC[8].climate+ "<br />"+ "Gravedad: " + objectC[8].gravity+ "<br />"+ "Poblacion: " + objectC[8].population  ;
            document.getElementById("parrafo10").innerHTML = "Nombre Planeta: " + objectC[9].name + "<br />" + "Periodo rotacion[s]: " + objectC[9].rotation_period+ "<br />" + "Periodo de orbita[s]: " + objectC[9].orbital_period+ "<br />" + "Clima: " + objectC[9].climate+ "<br />"+ "Gravedad: " + objectC[9].gravity+ "<br />"+ "Poblacion: " + objectC[9].population  ;
            break;

        case "2":
            document.getElementById("parrafo1").innerHTML = " ";
            document.getElementById("parrafo2").innerHTML = " ";
            document.getElementById("parrafo3").innerHTML = " ";
            document.getElementById("parrafo4").innerHTML = " ";
            document.getElementById("parrafo5").innerHTML = " ";
            document.getElementById("parrafo6").innerHTML = " ";
            document.getElementById("parrafo7").innerHTML = " ";
            document.getElementById("parrafo8").innerHTML = " ";
            document.getElementById("parrafo8").hidden;
            document.getElementById("parrafo9").innerHTML = " ";
            document.getElementById("parrafo9").hidden;
            document.getElementById("parrafo10").innerHTML = " ";
            document.getElementById("parrafo10").hidden;

            document.getElementById("tabla1").src = "https://http2.mlstatic.com/cuadros-star-wars-a-new-hope-15x20-D_NQ_NP_842746-MLA26113839807_102017-F.jpg";
            document.getElementById("tabla2").src = "https://images-na.ssl-images-amazon.com/images/I/51BGV8AJ4RL._SY445_.jpg";
            //document.getElementById("tabla2").width = "200";
            document.getElementById("tabla3").src = "https://images-na.ssl-images-amazon.com/images/I/81Vl2RQrZkL._SL1500_.jpg";
            //document.getElementById("tabla3").width = "200";
            document.getElementById("tabla4").src = "https://images-na.ssl-images-amazon.com/images/I/51RHXMVH9YL._SY445_.jpg";
            document.getElementById("tabla5").src = "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/220px-ReturnOfTheJediPoster1983.jpg";
            document.getElementById("tabla6").src = "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
            document.getElementById("tabla7").src = "https://images-na.ssl-images-amazon.com/images/I/814X0lSCJQL._SL1412_.jpg";
            document.getElementById("tabla8").src = "";
            document.getElementById("tabla8").hidden;
            document.getElementById("tabla9").src = "";
            document.getElementById("tabla9").hidden;
            document.getElementById("tabla10").src = "";
            document.getElementById("tabla10").hidden;

            var objectD = new Object(starwars.results);
            console.log(objectD[0]);

            document.getElementById("parrafo1").innerHTML = "Nombre Pelicula: " + objectD[0].title + "<br />" + "Numero de episodio: " + objectD[0].episode_id + "<br />" +"Reseña: " + objectD[0].opening_crawl + "<br />";
            document.getElementById("parrafo2").innerHTML = "Nombre Pelicula: " + objectD[1].title + "<br />" + "Numero de episodio: " + objectD[1].episode_id + "<br />" +"Reseña: " + objectD[1].opening_crawl + "<br />";
            document.getElementById("parrafo3").innerHTML = "Nombre Pelicula: " + objectD[2].title + "<br />" + "Numero de episodio: " + objectD[2].episode_id + "<br />" +"Reseña: " + objectD[2].opening_crawl + "<br />";
            document.getElementById("parrafo4").innerHTML = "Nombre Pelicula: " + objectD[3].title + "<br />" + "Numero de episodio: " + objectD[3].episode_id + "<br />" +"Reseña: " + objectD[3].opening_crawl + "<br />";
            document.getElementById("parrafo5").innerHTML = "Nombre Pelicula: " + objectD[4].title + "<br />" + "Numero de episodio: " + objectD[4].episode_id + "<br />" +"Reseña: " + objectD[4].opening_crawl + "<br />";
            document.getElementById("parrafo6").innerHTML = "Nombre Pelicula: " + objectD[5].title + "<br />" + "Numero de episodio: " + objectD[5].episode_id + "<br />" +"Reseña: " + objectD[5].opening_crawl + "<br />";
            document.getElementById("parrafo7").innerHTML = "Nombre Pelicula: " + objectD[6].title + "<br />" + "Numero de episodio: " + objectD[6].episode_id + "<br />" +"Reseña: " + objectD[6].opening_crawl + "<br />";
            
            break;

        case "3":
            
            document.getElementById("parrafo10").show = " ";
            
            var objectE = new Object(starwars.results);
            console.log(objectE[0]);

            document.getElementById("parrafo1").innerHTML = " ";
            document.getElementById("parrafo2").innerHTML = " ";
            document.getElementById("parrafo3").innerHTML = " ";
            document.getElementById("parrafo4").innerHTML = " ";
            document.getElementById("parrafo5").innerHTML = " ";
            document.getElementById("parrafo6").innerHTML = " ";
            document.getElementById("parrafo7").innerHTML = " ";
            document.getElementById("parrafo8").innerHTML = " ";
            document.getElementById("parrafo9").innerHTML = " ";
            document.getElementById("parrafo10").innerHTML = " ";
           
            document.getElementById("tabla1").src = "http://www.cineseven.xpg.com.br/gif/jabba.gif";
            document.getElementById("tabla2").src = "https://www.wykop.pl/cdn/c3201142/comment_QtsPWqoHcd01Bv4KRAu5W5wuhCHHhDeX.gif";
            document.getElementById("tabla2").width = "150";
            document.getElementById("tabla3").src = "https://static.comicvine.com/uploads/original/11111/111114474/4879904-bossk+vs+kage.gif";
            document.getElementById("tabla3").width = "150";
            //document.getElementById("tabla3").width = "200";
            document.getElementById("tabla4").src = "https://guidelive.imgix.net/1459817139-giphy.gif";
            document.getElementById("tabla4").width = "150";
            document.getElementById("tabla5").src = "http://a141.idata.over-blog.com/0/52/50/76/photos/photos-equipe/week60/ewok-annihilation.jpg";
            document.getElementById("tabla5").width = "150";
            document.getElementById("tabla6").src = "https://media0.giphy.com/media/hEJmxC1TPOF5C/200.gif";
            document.getElementById("tabla7").src = "https://i.imgur.com/aPdWRA8.jpg";
            document.getElementById("tabla8").src = "https://pa1.narvii.com/6340/13623546fceeac12151514af369bf6edf5890336_hq.gif";
            document.getElementById("tabla8").width = "150";
            document.getElementById("tabla9").src = "https://m.media-amazon.com/images/M/MV5BMTQ4MzY1NzU5Nl5BMl5BanBnXkFtZTcwODI0MTY2Mw@@._V1_.jpg";
            document.getElementById("tabla10").src = "https://www.bestiary.us/files/images/dug-sebulba.jpg";

            document.getElementById("parrafo1").innerHTML = "Nombre Especie: " + objectE[0].name + "<br />" + "Raza: " + objectE[0].classification + "<br />" + "Color ojos: " + objectE[0].eye_colors + "<br />" + "Altura media[cm]: " + objectE[0].average_height + "<br />" + "Edad media: " + objectE[0].average_lifespan+ "<br />" + "Lenguaje: " + objectE[0].lenguage;
            document.getElementById("parrafo2").innerHTML = "Nombre Especie: " + objectE[1].name + "<br />" + "Raza: " + objectE[1].classification + "<br />" + "Color ojos: " + objectE[1].eye_colors + "<br />" + "Altura media[cm]: " + objectE[1].average_height + "<br />" + "Edad media: " + objectE[1].average_lifespan+ "<br />" + "Lenguaje: " + objectE[1].lenguage;
            document.getElementById("parrafo3").innerHTML = "Nombre Especie: " + objectE[2].name + "<br />" + "Raza: " + objectE[2].classification + "<br />" + "Color ojos: " + objectE[2].eye_colors + "<br />" + "Altura media[cm]: " + objectE[2].average_height + "<br />" + "Edad media: " + objectE[2].average_lifespan+ "<br />" + "Lenguaje: " + objectE[2].lenguage;
            document.getElementById("parrafo4").innerHTML = "Nombre Especie: " + objectE[3].name + "<br />" + "Raza: " + objectE[3].classification + "<br />" + "Color ojos: " + objectE[3].eye_colors + "<br />" + "Altura media[cm]: " + objectE[3].average_height + "<br />" + "Edad media: " + objectE[3].average_lifespan+ "<br />" + "Lenguaje: " + objectE[3].lenguage;
            document.getElementById("parrafo5").innerHTML = "Nombre Especie: " + objectE[4].name + "<br />" + "Raza: " + objectE[4].classification + "<br />" + "Color ojos: " + objectE[4].eye_colors + "<br />" + "Altura media[cm]: " + objectE[4].average_height + "<br />" + "Edad media: " + objectE[4].average_lifespan+ "<br />" + "Lenguaje: " + objectE[4].lenguage;
            document.getElementById("parrafo6").innerHTML = "Nombre Especie: " + objectE[5].name + "<br />" + "Raza: " + objectE[5].classification + "<br />" + "Color ojos: " + objectE[5].eye_colors + "<br />" + "Altura media[cm]: " + objectE[5].average_height + "<br />" + "Edad media: " + objectE[5].average_lifespan+ "<br />" + "Lenguaje: " + objectE[5].lenguage;
            document.getElementById("parrafo7").innerHTML = "Nombre Especie: " + objectE[6].name + "<br />" + "Raza: " + objectE[6].classification + "<br />" + "Color ojos: " + objectE[6].eye_colors + "<br />" + "Altura media[cm]: " + objectE[6].average_height + "<br />" + "Edad media: " + objectE[6].average_lifespan+ "<br />" + "Lenguaje: " + objectE[6].lenguage;
            document.getElementById("parrafo8").innerHTML = "Nombre Especie: " + objectE[7].name + "<br />" + "Raza: " + objectE[7].classification + "<br />" + "Color ojos: " + objectE[7].eye_colors + "<br />" + "Altura media[cm]: " + objectE[7].average_height + "<br />" + "Edad media: " + objectE[7].average_lifespan+ "<br />" + "Lenguaje: " + objectE[7].lenguage;
            document.getElementById("parrafo9").innerHTML = "Nombre Especie: " + objectE[8].name + "<br />" + "Raza: " + objectE[8].classification + "<br />" + "Color ojos: " + objectE[8].eye_colors + "<br />" + "Altura media[cm]: " + objectE[8].average_height + "<br />" + "Edad media: " + objectE[8].average_lifespan+ "<br />" + "Lenguaje: " + objectE[8].lenguage;
            document.getElementById("parrafo10").innerHTML = "Nombre Especie: " + objectE[9].name + "<br />" + "Raza: " + objectE[9].classification + "<br />" + "Color ojos: " + objectE[9].eye_colors + "<br />" + "Altura media[cm]: " + objectE[9].average_height + "<br />" + "Edad media: " + objectE[9].average_lifespan+ "<br />" + "Lenguaje: " + objectE[9].lenguage;
            break;

        case "4":
            var objectF = new Object(starwars.results);
            console.log(objectF[0]);

            document.getElementById("parrafo1").innerHTML = " ";
            document.getElementById("parrafo2").innerHTML = " ";
            document.getElementById("parrafo3").innerHTML = " ";
            document.getElementById("parrafo4").innerHTML = " ";
            document.getElementById("parrafo5").innerHTML = " ";
            document.getElementById("parrafo6").innerHTML = " ";
            document.getElementById("parrafo7").innerHTML = " ";
            document.getElementById("parrafo8").innerHTML = " ";
            document.getElementById("parrafo9").innerHTML = " ";
            document.getElementById("parrafo10").innerHTML = " ";
           
            document.getElementById("tabla1").src = "https://pbs.twimg.com/media/CJ9wgyWVAAAfLpR.jpg:large";
            document.getElementById("tabla2").src = "https://c1.staticflickr.com/9/8607/16174508338_22d323017a_b.jpg";
            document.getElementById("tabla2").width = "150";
            document.getElementById("tabla3").src = "https://i.ebayimg.com/images/g/jUwAAOSw1BlZUnmO/s-l300.jpg";
            document.getElementById("tabla3").width = "150";
            document.getElementById("tabla4").src = "http://www.galacticempiredatabank.com/TIEfighter.JPG";
            document.getElementById("tabla4").width = "150";
            document.getElementById("tabla5").src = "https://media.entertainmentearth.com/assets/images/4537133417264fed8f00e36ad891d31f.jpg";
            document.getElementById("tabla5").width = "150";
            document.getElementById("tabla6").src = "https://img00.deviantart.net/02fa/i/2005/045/f/7/tie_bomber_by_adit1001.jpg";
            document.getElementById("tabla6").width = "150";
            document.getElementById("tabla7").src = "http://www.culttvmanshop.com/assets/images/bandatat02.jpg";
            document.getElementById("tabla8").src = "https://pbs.twimg.com/profile_images/1015248761965047808/-SdQKsUA_400x400.jpg";
            document.getElementById("tabla8").width = "150";
            document.getElementById("tabla9").src = "https://i.ebayimg.com/images/g/60QAAMXQW7VREcph/s-l300.jpg";
            document.getElementById("tabla9").width = "150";
            document.getElementById("tabla10").src = "https://starwarsblog.starwars.com/wp-content/uploads/2018/03/hasbro-jabba-sail-barge-tall.jpg";

            document.getElementById("parrafo1").innerHTML = "Vehiculo: " + objectF[0].name + "<br />" + "Modelo: " + objectF[0].model + "<br />"+ "Tamaño[in]: " + objectF[0].length + "<br />" + "Capacidad pasajeros: " + objectF[0].passengers + "<br />" + "Fabricado por: " + objectF[0].manufacturer + "<br />" + "Clase vehiculo: " + objectF[0].vehicle_class;
            document.getElementById("parrafo2").innerHTML = "Vehiculo: " + objectF[1].name + "<br />" + "Modelo: " + objectF[1].model + "<br />"+ "Tamaño[in]: " + objectF[1].length + "<br />" + "Capacidad pasajeros: " + objectF[1].passengers + "<br />" + "Fabricado por: " + objectF[1].manufacturer + "<br />" + "Clase vehiculo: " + objectF[1].vehicle_class;
            document.getElementById("parrafo3").innerHTML = "Vehiculo: " + objectF[2].name + "<br />" + "Modelo: " + objectF[2].model + "<br />"+ "Tamaño[in]: " + objectF[2].length + "<br />" + "Capacidad pasajeros: " + objectF[2].passengers + "<br />" + "Fabricado por: " + objectF[2].manufacturer + "<br />" + "Clase vehiculo: " + objectF[2].vehicle_class;
            document.getElementById("parrafo4").innerHTML = "Vehiculo: " + objectF[3].name + "<br />" + "Modelo: " + objectF[3].model + "<br />"+ "Tamaño[in]: " + objectF[3].length + "<br />" + "Capacidad pasajeros: " + objectF[3].passengers + "<br />" + "Fabricado por: " + objectF[3].manufacturer + "<br />" + "Clase vehiculo: " + objectF[3].vehicle_class;
            document.getElementById("parrafo5").innerHTML = "Vehiculo: " + objectF[4].name + "<br />" + "Modelo: " + objectF[4].model + "<br />"+ "Tamaño[in]: " + objectF[4].length + "<br />" + "Capacidad pasajeros: " + objectF[4].passengers + "<br />" + "Fabricado por: " + objectF[4].manufacturer + "<br />" + "Clase vehiculo: " + objectF[4].vehicle_class;
            document.getElementById("parrafo6").innerHTML = "Vehiculo: " + objectF[5].name + "<br />" + "Modelo: " + objectF[5].model + "<br />"+ "Tamaño[in]: " + objectF[5].length + "<br />" + "Capacidad pasajeros: " + objectF[5].passengers + "<br />" + "Fabricado por: " + objectF[5].manufacturer + "<br />" + "Clase vehiculo: " + objectF[5].vehicle_class;
            document.getElementById("parrafo7").innerHTML = "Vehiculo: " + objectF[6].name + "<br />" + "Modelo: " + objectF[6].model + "<br />"+ "Tamaño[in]: " + objectF[6].length + "<br />" + "Capacidad pasajeros: " + objectF[6].passengers + "<br />" + "Fabricado por: " + objectF[6].manufacturer + "<br />" + "Clase vehiculo: " + objectF[6].vehicle_class;
            document.getElementById("parrafo8").innerHTML = "Vehiculo: " + objectF[7].name + "<br />" + "Modelo: " + objectF[7].model + "<br />"+ "Tamaño[in]: " + objectF[7].length + "<br />" + "Capacidad pasajeros: " + objectF[7].passengers + "<br />" + "Fabricado por: " + objectF[7].manufacturer + "<br />" + "Clase vehiculo: " + objectF[7].vehicle_class;
            document.getElementById("parrafo9").innerHTML = "Vehiculo: " + objectF[8].name + "<br />" + "Modelo: " + objectF[8].model + "<br />"+ "Tamaño[in]: " + objectF[8].length + "<br />" + "Capacidad pasajeros: " + objectF[8].passengers + "<br />" + "Fabricado por: " + objectF[8].manufacturer + "<br />" + "Clase vehiculo: " + objectF[8].vehicle_class;
            document.getElementById("parrafo10").innerHTML = "Vehiculo: " + objectF[9].name + "<br />" + "Modelo: " + objectF[9].model + "<br />"+ "Tamaño[in]: " + objectF[9].length + "<br />" + "Capacidad pasajeros: " + objectF[9].passengers + "<br />" + "Fabricado por: " + objectF[9].manufacturer + "<br />" + "Clase vehiculo: " + objectF[9].vehicle_class;
            break;
            
        case "5":
            var objectG = new Object(starwars.results);
            console.log(objectG[0]);

            document.getElementById("parrafo1").innerHTML = " ";
            document.getElementById("parrafo2").innerHTML = " ";
            document.getElementById("parrafo3").innerHTML = " ";
            document.getElementById("parrafo4").innerHTML = " ";
            document.getElementById("parrafo5").innerHTML = " ";
            document.getElementById("parrafo6").innerHTML = " ";
            document.getElementById("parrafo7").innerHTML = " ";
            document.getElementById("parrafo8").innerHTML = " ";
            document.getElementById("parrafo9").innerHTML = " ";
            document.getElementById("parrafo10").innerHTML = " ";
           
            document.getElementById("tabla1").src = "http://www.renderbricks.com/render/RB0009_Super_Star_Destroyer/RB0009_Super_Star_Destroyer_v02_CamB_4K.jpg";
            document.getElementById("tabla2").src = "https://i.pinimg.com/736x/3d/56/b6/3d56b62ec42e7150bb0b70ad56cc3899--landing-craft-ships.jpg";
            document.getElementById("tabla2").width = "150";
            document.getElementById("tabla3").src = "https://i.stack.imgur.com/zKDVf.gif";
            document.getElementById("tabla3").width = "150";
            //document.getElementById("tabla3").width = "200";
            document.getElementById("tabla4").src = "https://i.gifer.com/KK0Q.gif";
            document.getElementById("tabla4").width = "150";
            document.getElementById("tabla5").src = "https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2013/09/y-wing.jpg";
            document.getElementById("tabla5").width = "150";
            document.getElementById("tabla6").src = "https://img1.cgtrader.com/items/708797/27ef4ea1ae/large/x-wing-fighter-3d-model-low-poly-rigged-max-obj-3ds-fbx-lwo-lw-lws-mtl.png";
            document.getElementById("tabla6").width = "150";
            document.getElementById("tabla7").src = "https://i.ytimg.com/vi/A9PVgoLa8z0/maxresdefault.jpg";
            document.getElementById("tabla8").src = "https://www.bobafettfanclub.com/multimedia/galleries/albums/userpics/10001/bandai-144-scale-slave-1.jpg";
            document.getElementById("tabla8").width = "150";
            document.getElementById("tabla9").src = "https://i.makeagif.com/media/10-20-2015/S4cXDU.gif";
            document.getElementById("tabla9").width = "150";
            document.getElementById("tabla10").src = "http://www.galacticempiredatabank.com/nebulonB.jpg";

            document.getElementById("parrafo1").innerHTML = "Nave espacial: " + objectG[0].name + "<br />" +  "Modelo: " + objectG[0].modelt + "<br />" + "Fabricado: " + objectG[0].manufacturer + "<br />" + "Capacidad pasajeros: " + objectG[0].passengers;
            document.getElementById("parrafo2").innerHTML = "Nave espacial: " + objectG[1].name + "<br />" +  "Modelo: " + objectG[1].modelt + "<br />" + "Fabricado: " + objectG[1].manufacturer + "<br />" + "Capacidad pasajeros: " + objectG[1].passengers;
            document.getElementById("parrafo3").innerHTML = "Nave espacial: " + objectG[2].name + "<br />" +  "Modelo: " + objectG[2].modelt + "<br />" + "Fabricado: " + objectG[2].manufacturer + "<br />" + "Capacidad pasajeros: " + objectG[2].passengers;
            document.getElementById("parrafo4").innerHTML = "Nave espacial: " + objectG[3].name + "<br />" +  "Modelo: " + objectG[3].modelt + "<br />" + "Fabricado: " + objectG[3].manufacturer + "<br />" + "Capacidad pasajeros: " + objectG[3].passengers;
            document.getElementById("parrafo5").innerHTML = "Nave espacial: " + objectG[4].name + "<br />" +  "Modelo: " + objectG[4].modelt + "<br />" + "Fabricado: " + objectG[4].manufacturer + "<br />" + "Capacidad pasajeros: " + objectG[4].passengers;
            document.getElementById("parrafo6").innerHTML = "Nave espacial: " + objectG[5].name + "<br />" +  "Modelo: " + objectG[5].modelt + "<br />" + "Fabricado: " + objectG[5].manufacturer + "<br />" + "Capacidad pasajeros: " + objectG[5].passengers;
            document.getElementById("parrafo7").innerHTML = "Nave espacial: " + objectG[6].name + "<br />" +  "Modelo: " + objectG[6].modelt + "<br />" + "Fabricado: " + objectG[6].manufacturer + "<br />" + "Capacidad pasajeros: " + objectG[6].passengers;
            document.getElementById("parrafo8").innerHTML = "Nave espacial: " + objectG[7].name + "<br />" +  "Modelo: " + objectG[7].modelt + "<br />" + "Fabricado: " + objectG[7].manufacturer + "<br />" + "Capacidad pasajeros: " + objectG[7].passengers;
            document.getElementById("parrafo9").innerHTML = "Nave espacial: " + objectG[8].name + "<br />" +  "Modelo: " + objectG[8].modelt + "<br />" + "Fabricado: " + objectG[8].manufacturer + "<br />" + "Capacidad pasajeros: " + objectG[8].passengers;
            document.getElementById("parrafo10").innerHTML = "Nave espacial: " + objectG[9].name + "<br />" +  "Modelo: " + objectG[9].modelt + "<br />" + "Fabricado: " + objectG[9].manufacturer + "<br />" + "Capacidad pasajeros: " + objectG[9].passengers;
            break;
    }
}

