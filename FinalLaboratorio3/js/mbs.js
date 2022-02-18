$(document).ready(function () {

    $(".listaLado").hide();

    $(".envioMedianoTexto").hide();

    $(".envioGrandeTexto").hide();

    $(".envioPequeñoTexto").hide();

    $("#flechasProdGrande").html("expand_less");

    $("#flechasProdMediano").html("expand_less");

    $("#flechasProdPequeño").html("expand_less");

    $("#flechasProd").html("expand_less");

    $(".listasProductos").click(function () {
        if ($("#flechasProd").text() == "expand_less") {
            document.getElementById("flechasProd").innerHTML = "expand_more";
        }
        else {
            document.getElementById("flechasProd").innerHTML = "expand_less";
        }
        $(".listaLado").toggle(1000);
    });



    $(".envioGrande").click(function () {
        $(".envioGrandeTexto").fadeToggle();
        if ($("#flechasProdGrande").text() == "expand_less") {
            document.getElementById("flechasProdGrande").innerHTML = "expand_more";
        }
        else {
            document.getElementById("flechasProdGrande").innerHTML = "expand_less";
        }
    });

    $(".envioMediano").click(function () {

        $(".envioMedianoTexto").fadeToggle();

        if (document.getElementById("flechasProdMediano").textContent == "expand_less") {
            document.getElementById("flechasProdMediano").innerHTML = "expand_more";
        }
        else {

            document.getElementById("flechasProdMediano").innerHTML = "expand_less";
        }
    });

    $(".envioPequeño").click(function () {
        $(".envioPequeñoTexto").fadeToggle();
        if ($("#flechasProdPequeño").text() == "expand_less") {
            document.getElementById("flechasProdPequeño").innerHTML = "expand_more";
        }
        else {
            document.getElementById("flechasProdPequeño").innerHTML = "expand_less";
        }
    });





    $.getJSON("../../../js/productos.json", function (data, textStatus) {

        if (textStatus == "success")
            for (x of data.Productos) {



                if (x.Nombre == "Bajo-mesada" && document.getElementById("productosBajo-mesada") != null) {
                    carga(x, document.getElementById("productosBajo-mesada"));

                }
                if (x.Nombre == "Alacena" && document.getElementById("productosAlacena") != null) {
                    carga(x, document.getElementById("productosAlacena"));
                }
                if (x.Nombre == "Despensero" && document.getElementById("productosDespensero") != null) {
                    carga(x, document.getElementById("productosDespensero"));
                }
                if (x.Categoria == "Cocina" && document.getElementById("productosCocina") != null) {
                    carga(x, document.getElementById("productosCocina"));
                }


            }

    });








    function carga(x, prod) {
        b = document.createElement("b");
        b = "$ " + x.Precio;

        p1 = document.createElement("p");
        p1 = x.Descripcion;

        p2 = document.createElement("p");
        p2 = x.llegada;

        p3 = document.createElement("p");
        p3 = x.Cuotas;


        divBold = document.createElement("div");
        divParrafo1 = document.createElement("div");
        divParrafo2 = document.createElement("div");
        divParrafo3 = document.createElement("div");

        divBold.append(b);
        divParrafo1.append(p1);
        divParrafo2.append(p2);
        divParrafo3.append(p3);

        img = document.createElement("img");

        div = document.createElement("div");
        div.append(img);
        img.src = x.Imagen;



        src = document.getElementById(prod.id);

        m = src.appendChild(div);
        m.appendChild(divBold);
        m.appendChild(divParrafo1);
        m.appendChild(divParrafo2);
        m.appendChild(divParrafo3);
        $("#" + prod.id).children().addClass("divImg m-3 bordeTarjeta");
        $(".divImg").children("img").addClass("img-fluid mt-3 border bordeTarjeta imgProd");
        $(".imgProd").next().addClass("parrafoPrecio mt-1");
        $(".parrafoPrecio").next().addClass("parrafoDescripcion");
        $(".parrafoDescripcion").next().addClass("parrafoLLegada");
        $(".parrafoLLegada").next().addClass("parrafoCuotas mb-1");

    }

    insertarNav();




});


function insertarNav() {

    var unaBarra = "../";

    var dosBarras = "../../";

    var linkConsulta = "Consulta.aspx";

    var linkTrabaja = "TrabajaConNosotros.aspx";

    var linkIngresa = "Ingresa.aspx";

    var linkPrincipal = "Principal/principal.html";

    var linkBarraMbs = "mbs/sobreMBS.html";

    var linkEnvio = "servicios/envio.html";

    var linkVenta = "servicios/venta.html";

    var linkAtencion = "ayuda/atencion.html";

    var linkOpinion = "ayuda/opinion.html";

    var linkTrabaja = "trabajaConNosotros.aspx";

    var html = "html/";

    var retorno = "";

    if (document.getElementById("barraCamas") != null && document.getElementById("pieCamas") != null) {
        navEditado("barraCamas", dosBarras + linkPrincipal, dosBarras + linkBarraMbs, dosBarras + linkConsulta, unaBarra + dosBarras + linkIngresa);
        pieEditado("pieCamas", dosBarras + linkEnvio, dosBarras + linkVenta, dosBarras + linkAtencion, dosBarras + linkOpinion, unaBarra + dosBarras + linkTrabaja);
    }
    if (document.getElementById("barraAtencion") != null && document.getElementById("pieAtencion") != null) {
        navEditado("barraAtencion", unaBarra + linkPrincipal, unaBarra + linkBarraMbs, dosBarras + linkConsulta, dosBarras + linkIngresa);
        pieEditado("pieAtencion", unaBarra + linkEnvio, unaBarra + linkVenta, retorno, unaBarra + linkOpinion, unaBarra + unaBarra + linkTrabaja);
    }
    if (document.getElementById("barraOpinion") != null && document.getElementById("pieOpinion") != null) {
        navEditado("barraOpinion", unaBarra + linkPrincipal, unaBarra + linkBarraMbs, dosBarras + linkConsulta, dosBarras + linkIngresa);
        pieEditado("pieOpinion", unaBarra + linkEnvio, unaBarra + linkVenta, unaBarra + linkAtencion, retorno, unaBarra + unaBarra + linkTrabaja);
    }
    if (document.getElementById("barraMBS") != null && document.getElementById("pieSobre") != null) {
        navEditado("barraMBS", unaBarra + linkPrincipal, retorno, dosBarras + linkConsulta, dosBarras + linkIngresa);
        pieEditado("pieSobre", unaBarra + linkEnvio, unaBarra + linkVenta, unaBarra + linkAtencion, unaBarra + linkOpinion, unaBarra + unaBarra + linkTrabaja);
    }
    if (document.getElementById("barraAlacena") != null && document.getElementById("pieAlacena") != null) {
        navEditado("barraAlacena", dosBarras + linkPrincipal, dosBarras + linkBarraMbs, dosBarras + linkConsulta, unaBarra + dosBarras + linkIngresa);
        pieEditado("pieAlacena", dosBarras + linkEnvio, dosBarras + linkVenta, dosBarras + linkAtencion, dosBarras + linkOpinion, unaBarra + dosBarras + linkTrabaja);
    }
    if (document.getElementById("barraMesada") != null && document.getElementById("pieMesada") != null) {
        navEditado("barraMesada", dosBarras + linkPrincipal, dosBarras + linkBarraMbs, dosBarras + linkConsulta, unaBarra + dosBarras + linkIngresa);
        pieEditado("pieMesada", dosBarras + linkEnvio, dosBarras + linkVenta, dosBarras + linkAtencion, dosBarras + linkOpinion, unaBarra + dosBarras + linkTrabaja);
    }
    if (document.getElementById("barraCocina") != null && document.getElementById("pieCocina") != null) {
        navEditado("barraCocina", dosBarras + linkPrincipal, dosBarras + linkBarraMbs, dosBarras + linkConsulta, unaBarra + dosBarras + linkIngresa);
        pieEditado("pieCocina", dosBarras + linkEnvio, dosBarras + linkVenta, dosBarras + linkAtencion, dosBarras + linkOpinion, unaBarra + dosBarras + linkTrabaja);
    }
    if (document.getElementById("barraDespensero") != null && document.getElementById("pieDespensero") != null) {
        navEditado("barraDespensero", dosBarras + linkPrincipal, dosBarras + linkBarraMbs, dosBarras + linkConsulta, unaBarra + dosBarras + linkIngresa);
        pieEditado("pieDespensero", dosBarras + linkEnvio, dosBarras + linkVenta, dosBarras + linkAtencion, dosBarras + linkOpinion, unaBarra + dosBarras + linkTrabaja);
    }
    if (document.getElementById("barraDormitorio") != null && document.getElementById("pieDormitorio") != null) {
        navEditado("barraDormitorio", dosBarras + linkPrincipal, dosBarras + linkBarraMbs, dosBarras + linkConsulta, unaBarra + dosBarras + linkIngresa);
        pieEditado("pieDormitorio", dosBarras + linkEnvio, dosBarras + linkVenta, dosBarras + linkAtencion, dosBarras + linkOpinion, unaBarra + dosBarras + linkTrabaja);
    }
    if (document.getElementById("barraMesas") != null && document.getElementById("pieMesas") != null) {
        navEditado("barraMesas", dosBarras + linkPrincipal, dosBarras + linkBarraMbs, dosBarras + linkConsulta, unaBarra + dosBarras + linkIngresa);
        pieEditado("pieMesas", dosBarras + linkEnvio, dosBarras + linkVenta, dosBarras + linkAtencion, dosBarras + linkOpinion, unaBarra + dosBarras + linkTrabaja);
    }
    if (document.getElementById("barraPlacares") != null && document.getElementById("piePlacares") != null) {
        navEditado("barraPlacares", dosBarras + linkPrincipal, dosBarras + linkBarraMbs, dosBarras + linkConsulta, unaBarra + dosBarras + linkIngresa);
        pieEditado("piePlacares", dosBarras + linkEnvio, dosBarras + linkVenta, dosBarras + linkAtencion, dosBarras + linkOpinion, unaBarra + dosBarras + linkTrabaja);
    }
    if (document.getElementById("barraBibliotecas") != null && document.getElementById("pieBibliotecas") != null) {
        navEditado("barraBibliotecas", dosBarras + linkPrincipal, dosBarras + linkBarraMbs, dosBarras + linkConsulta, unaBarra + dosBarras + linkIngresa);
        pieEditado("pieBibliotecas", dosBarras + linkEnvio, dosBarras + linkVenta, dosBarras + linkAtencion, dosBarras + linkOpinion, unaBarra + dosBarras + linkTrabaja);
    }
    if (document.getElementById("barraEscritorio") != null && document.getElementById("pieEscritorio") != null) {
        navEditado("barraEscritorio", dosBarras + linkPrincipal, dosBarras + linkBarraMbs, dosBarras + linkConsulta, unaBarra + dosBarras + linkIngresa);
        pieEditado("pieEscritorio", dosBarras + linkEnvio, dosBarras + linkVenta, dosBarras + linkAtencion, dosBarras + linkOpinion, unaBarra + dosBarras + linkTrabaja);
    }
    if (document.getElementById("barraOficina") != null && document.getElementById("pieOficina") != null) {
        navEditado("barraOficina", dosBarras + linkPrincipal, dosBarras + linkBarraMbs, dosBarras + linkConsulta, unaBarra + dosBarras + linkIngresa);
        pieEditado("pieOficina", dosBarras + linkEnvio, dosBarras + linkVenta, dosBarras + linkAtencion, dosBarras + linkOpinion, unaBarra + dosBarras + linkTrabaja);
    }
    if (document.getElementById("barraSillas") != null && document.getElementById("pieSillas") != null) {
        navEditado("barraSillas", dosBarras + linkPrincipal, dosBarras + linkBarraMbs, dosBarras + linkConsulta, unaBarra + dosBarras + linkIngresa);
        pieEditado("pieSillas", dosBarras + linkEnvio, dosBarras + linkVenta, dosBarras + linkAtencion, dosBarras + linkOpinion, unaBarra + dosBarras + linkTrabaja);
    }
    if (document.getElementById("barraEnvio") != null && document.getElementById("pieEnvio") != null) {
        navEditado("barraEnvio", unaBarra + linkPrincipal, unaBarra + linkBarraMbs, dosBarras + linkConsulta, dosBarras + linkIngresa);
        pieEditado("pieEnvio", retorno, unaBarra + linkVenta, unaBarra + linkAtencion, unaBarra + linkOpinion, unaBarra + unaBarra + linkTrabaja);
    }
    if (document.getElementById("barraVenta") != null && document.getElementById("pieVenta") != null) {
        navEditado("barraVenta", unaBarra + linkPrincipal, unaBarra + linkBarraMbs, dosBarras + linkConsulta, dosBarras + linkIngresa);
        pieEditado("pieVenta", unaBarra + linkEnvio, retorno, unaBarra + linkAtencion, unaBarra + linkOpinion, unaBarra + unaBarra + linkTrabaja);
    }
    if (document.getElementById("barraPrincipal") != null && document.getElementById("piePrincipal") != null) {
        navEditado("barraPrincipal", retorno, unaBarra + linkBarraMbs, dosBarras + linkConsulta, dosBarras + linkIngresa);
        pieEditado("piePrincipal", unaBarra + linkEnvio, unaBarra + linkVenta, unaBarra + linkAtencion, unaBarra + linkOpinion, unaBarra + unaBarra + linkTrabaja);
    }
    if (document.getElementById("barraConsulta") != null && document.getElementById("pieConsulta") != null) {
        navEditado("barraConsulta", html + linkPrincipal, html + linkBarraMbs, retorno, linkIngresa);
        pieEditado("pieConsulta", html + linkEnvio, html + linkVenta, html + linkAtencion, html + linkOpinion, html + linkTrabaja);
    }
    if (document.getElementById("barraIngresa") != null && document.getElementById("pieIngresa") != null) {
        navEditado("barraIngresa", html + linkPrincipal, html + linkBarraMbs, linkConsulta, retorno);
        pieEditado("pieIngresa", html + linkEnvio, html + linkVenta, html + linkAtencion, html + linkOpinion, linkTrabaja);
    }
    if (document.getElementById("barraTrabaja") != null && document.getElementById("pieTrabaja") != null) {
        navEditado("barraTrabaja", html + linkPrincipal, html + linkBarraMbs, linkConsulta, linkIngresa);
        pieEditado("pieTrabaja", html + linkEnvio, html + linkVenta, html + linkAtencion, html + linkOpinion, retorno);
    }
}






function opinion() {
    let opinion = document.getElementById('inOpinion').value;
    let nombre = document.getElementById('inNombre').value;
    if (opinion != "" && nombre != "") {
        const b = document.createElement("b");
        const p = document.createElement("p");
        const nueva = document.createTextNode(opinion);
        const nu = document.createTextNode(nombre);
        b.appendChild(nu);
        p.appendChild(nueva);
        const element = document.getElementById("parrafoOpinion");
        element.appendChild(b);
        element.appendChild(p);

    } else {
        alert("No ingreso los valores requeridos");
    }

}

function navEditado(barra, link1, link2, link3, link4) {
    document.getElementById(barra).innerHTML = '<nav class="navbar navbar-expand-md colorMadera container-fluid bordeTarjeta">' +
        '<b class="navbar-brand MBS fuenteTitulo vw4">MBS</b>' +
        '<button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">' +
        '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse" id="collapsibleNavbar">' +
        '<ul class="navbar-nav fuenteParrafo">' +
        '<li class="nav-item">' +
        '<a class="nav-link text-white vw3" href="' + link1 + '">Principal</a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link  text-white vw3" href="' + link2 + '">Sobre MBS</a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link  text-white vw3" href="' + link3 + '">Contacto</a>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '<div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">' +
        '<div class="nav-item  icono-usuario">' +
        '<a href="' + link4 + '" ><i class="fas fa-user MBS vw4"></i></a>' +
        '</div>' +
        '</div>' +
        '</nav>';
}

function pieEditado(pie, link1, link2, link3, link4, link5) {
    document.getElementById(pie).innerHTML = '<footer class="colorMadera pie bordeTarjeta">' +
        ' <div class="row d-flex">' +

        '<div class="col-sm-12 col-md-12 col-lg col-xl mt-3">' +
        '<ul class="listasPie fuenteParrafo">' +
        '<b class="text-light fuenteTitulo vw3">Servicios</b>' +
        '<li>' +
        '<div class="vw3"><a href="' + link1 + '">Envío a domicilio</a></div>' +
        '</li>' +
        '<li>' +
        '<div class="vw3"><a href="' + link2 + '">Venta telefónica</a></div>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '<div class="col-sm-12 col-md-12 col-lg col-xl mt-3">' +
        '<ul class="listasPie fuenteParrafo">' +
        '<b class="text-light fuenteTitulo vw3">Ayuda</b>' +
        '<li>' +
        '<div class="vw3"><a href="' + link3 + '">Venta telefónica</a></div>' +
        '</li>' +
        '<li>' +
        '<div class="vw3"><a href="' + link4 + '">Deja tu opinion</a></div>' +
        '</li>' +
        '<li>' +
        '<div class="vw3"><a href="' + link5 + '">Trabaja con nosotros</a></div>' +
        '</li>' +
        '</ul>' +
        '</div>' +

        '<div class="col-sm-12 col-md-12 col-lg col-xl mt-3 mr-3 icono-usuario d-flex justify-content-end vw3">' +
        '<a href=""><i class="fab fa-facebook mr-2"></i></a>' +
        '<a href=""><i class="fab fa-instagram mr-2"></i></a>' +
        '<a href=""><i class="fab fa-youtube mr-2"></i></a>' +
        '<a href=""><i class="fab fa-twitter"></i></a>' +
        '</div>' +

        '</div>' +
        '</footer>'
}



var Productos = [

    {
        'Categoria': 'Cocina',
        'Nombre': "Alacena",
        'Marca': "Mosconi",
        'Precio': 12000,
        'Imagen': "../../../img/Cocina/Alacena/alacena1.webp",
        'Descripcion': 'Alacena 1.60 Mts. Color blanco',
        'Cuotas': 'Hasta 12 cuotas sin interes',
        'llegada': 'llega mañana'
    },

    {
        'Categoria': 'Cocina',
        'Nombre': "Despensero",
        'Marca': "Mosconi",
        'Precio': 12000,
        'Imagen': "../../../img/Cocina/Despensero/despensero1.jpg",
        'Descripcion': 'Alacena 1.60 Mts. Color marron',
        'Cuotas': 'hasta 12 cuotas sin interes',
        'llegada': 'llega el lunes'
    },

    {
        'Categoria': 'Cocina',
        'Nombre': "Bajo-mesada",
        'Marca': "Mosconi",
        'Precio': 6000,
        'Imagen': "../../../img/Cocina/Bajo mesada/mesada2.jpg",
        'Descripcion': 'Alacena 40 Cts. Color blanco',
        'Cuotas': 'hasta 12 cuotas sin interes',
        'llegada': 'llega el lunes'
    },

    {
        'Categoria': 'Cocina',
        'Nombre': "Alacena",
        'Marca': "Mosconi",
        'Precio': 9000,
        'Imagen': "../../../img/Cocina/Alacena/alacena3.jpg",
        'Descripcion': 'Alacena 1.20 Mts. Color blanco',
        'Cuotas': 'hasta 6 cuotas sin interes',
        'llegada': 'llega mañana'
    },

    {
        'Categoria': 'Cocina',
        'Nombre': "Bajo-mesada",
        'Marca': "Mosconi",
        'Precio': 12000,
        'Imagen': "../../../img/Cocina/Bajo mesada/mesada1.jpg",
        'Descripcion': 'Alacena 1.60 Mts. Color blanco',
        'Cuotas': 'Hasta 12 cuotas sin interes',
        'llegada': 'llega mañana'
    },

    {
        'Categoria': 'Cocina',
        'Nombre': "Despensero",
        'Marca': "Mosconi",
        'Precio': 12000,
        'Imagen': "../../../img/Cocina/Despensero/despensero4.jpg",
        'Descripcion': 'Alacena 1.60 Mts. Color marron',
        'Cuotas': 'hasta 12 cuotas sin interes',
        'llegada': 'llega el lunes'
    },

    {
        'Categoria': 'Cocina',
        'Nombre': "Bajo-mesada",
        'Marca': "Mosconi",
        'Precio': 6000,
        'Imagen': "../../../img/Cocina/Bajo mesada/mesada3.jpg",
        'Descripcion': 'Alacena 40 Cts. Color blanco',
        'Cuotas': 'hasta 12 cuotas sin interes',
        'llegada': 'llega el lunes'
    },

    {
        'Categoria': 'Cocina',
        'Nombre': "Alacena",
        'Marca': "Mosconi",
        'Precio': 9000,
        'Imagen': "../../../img/Cocina/Alacena/alacena4.jpg",
        'Descripcion': 'Alacena 1.20 Mts. Color blanco',
        'Cuotas': 'hasta 6 cuotas sin interes',
        'llegada': 'llega mañana'
    },

    {
        'Categoria': 'Cocina',
        'Nombre': "Despensero",
        'Marca': "Mosconi",
        'Precio': 12000,
        'Imagen': "../../../img/Cocina/Despensero/despensero3.jpg",
        'Descripcion': 'Alacena 1.60 Mts. Color blanco',
        'Cuotas': 'Hasta 12 cuotas sin interes',
        'llegada': 'llega mañana'
    },

    {
        'Categoria': 'Cocina',
        'Nombre': "Despensero",
        'Marca': "Mosconi",
        'Precio': 12000,
        'Imagen': "../../../img/Cocina/Despensero/despensero2.jpg",
        'Descripcion': 'Alacena 1.60 Mts. Color marron',
        'Cuotas': 'hasta 12 cuotas sin interes',
        'llegada': 'llega el lunes'
    },

    {
        'Categoria': 'Cocina',
        'Nombre': "Alacena",
        'Marca': "Mosconi",
        'Precio': 6000,
        'Imagen': "../../../img/Cocina/Alacena/alacena2.jpg",
        'Descripcion': 'Alacena 40 Cts. Color blanco',
        'Cuotas': 'hasta 12 cuotas sin interes',
        'llegada': 'llega el lunes'
    },

    {
        'Categoria': 'Cocina',
        'Nombre': "Bajo-mesada",
        'Marca': "Mosconi",
        'Precio': 9000,
        'Imagen': "../../../img/Cocina/Bajo mesada/mesada4.jpg",
        'Descripcion': 'Alacena 1.20 Mts. Color blanco',
        'Cuotas': 'hasta 6 cuotas sin interes',
        'llegada': 'llega mañana'
    }

]