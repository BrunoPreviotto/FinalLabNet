$(document).ready(function(){
    
    $(".listaLado").hide();

    $(".envioMedianoTexto").hide();

    $(".envioGrandeTexto").hide();

    $(".envioPequeñoTexto").hide();
    
    $(".listasProductos").click(function(){
        $(".listaLado").toggle(1000);
    });

    

    $(".envioGrande").click(function(){
        $(".envioGrandeTexto").fadeToggle();
    });

    $(".envioMediano").click(function(){
        $(".envioMedianoTexto").fadeToggle();
    });

    $(".envioPequeño").click(function(){
        $(".envioPequeñoTexto").fadeToggle();
    });

    
    
    for(x of Productos){
         


        if(x.Nombre == "Bajo-mesada" && document.getElementById("productosBajo-mesada")  != null){
            carga(x, document.getElementById("productosBajo-mesada"));
               
        }
        if(x.Nombre == "Alacena" && document.getElementById("productosAlacena")  != null){
            carga(x, document.getElementById("productosAlacena"));
        }
        if(x.Nombre == "Despensero" && document.getElementById("productosDespensero")  != null){
            carga(x, document.getElementById("productosDespensero"));
        }
        if(x.Categoria == "Cocina" && document.getElementById("productosCocina")  != null){
            carga(x, document.getElementById("productosCocina"));
        }

        
    }

    function carga(x, prod){
            b = document.createElement("b");
            b = "$ " + x.Precio;
            
            p1 = document.createElement("p");
            p1 =  x.Descripcion;
            
            p2 = document.createElement("p");
            p2 =  x.llegada;

            p3 = document.createElement("p");
            p3 =  x.Cuotas;
            
            
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


function insertarNav(){

    var unaBarra = "../";

    var dosBarras = "../../";
    
    if(document.getElementById("barraCamas") != null){
        navEditado("barraCamas", dosBarras);
    }
    if(document.getElementById("barraAtencion") != null){
         navEditado("barraAtencion", unaBarra);
    }
    if(document.getElementById("barraOpinion") != null){
         navEditado("barraOpinion", unaBarra);
    }
    if(document.getElementById("barraMBS") != null){
         navEditado("barraMBS", unaBarra);
    }
    if(document.getElementById("barraAlacena") != null){
         navEditado("barraAlacena", dosBarras);
    }
    if(document.getElementById("barraMesada") != null){
         navEditado("barraMesada", dosBarras);
    }
    if(document.getElementById("barraCocina") != null){
         navEditado("barraCocina", dosBarras);
    }
    if(document.getElementById("barraDespensero") != null){
         navEditado("barraDespensero", dosBarras);
    }
    if(document.getElementById("barraDormitorio") != null){
         navEditado("barraDormitorio", dosBarras);
    }
    if(document.getElementById("barraMesas") != null){
         navEditado("barraMesas", dosBarras);
    }
    if(document.getElementById("barraPlacares") != null){
         navEditado("barraPlacares", dosBarras);
    }
    if(document.getElementById("barraBibliotecas") != null){
         navEditado("barraBibliotecas", dosBarras);
    }
    if(document.getElementById("barraEscritorio") != null){
         navEditado("barraEscritorio", dosBarras);
    }
    if(document.getElementById("barraOficina") != null){
         navEditado("barraOficina", dosBarras);
    }
    if(document.getElementById("barraSillas") != null){
         navEditado("barraSillas", dosBarras);
    }
    if(document.getElementById("barraEnvio") != null){
         navEditado("barraEnvio", unaBarra);
    }
    if(document.getElementById("barraVenta") != null){
         navEditado("barraVenta", unaBarra);
    }
}






function opinion(){
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
          
    }else{
        alert("No ingreso los valores requeridos");
    }

}

function navEditado(barra, barra1){
    document.getElementById(barra).innerHTML = '<nav class="navbar navbar-expand-md colorMadera container-fluid bordeTarjeta">' +
                '<b class="navbar-brand MBS">MBS</b>' +
                '<button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">' +
                        '<span class="navbar-toggler-icon"></span>' +
                '</button>' +
                '<div class="collapse navbar-collapse navbar-dark" id="collapsibleNavbar">' +
                        '<ul class="navbar-nav">' +
                            '<li class="nav-item">' +
                                    '<a class="nav-link" href="' + barra1 + 'principal.html">Principal</a>' +
                            '</li>'+
                            '<li class="nav-item">' +
                                    '<a class="nav-link" href=" ' + barra1 + 'mbs/sobreMBS.html">Sobre MBS</a>' +
                            '</li>' +
                            '<li class="nav-item">' +
                                    '<a class="nav-link" href="#">Contacto</a>' +
                            '</li>' +
                        '</ul>' +
                '</div>' +
                '<div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">' +
                    '<div class="nav-item  icono-usuario">' +
                        '<a href="" ><i class="fas fa-user MBS"></i></a>' +
                    '</div>' +
                '</div>' +
            '</nav>';
}



var Productos = [
        
            {
             'Categoria' : 'Cocina',
             'Nombre' : "Alacena",
             'Marca' : "Mosconi",
             'Precio' : 12000,
             'Imagen' : "../../../img/Cocina/Alacena/alacena1.webp",
             'Descripcion' : 'Alacena 1.60 Mts. Color blanco',
             'Cuotas' : 'Hasta 12 cuotas sin interes',
             'llegada': 'llega mañana'
             },

             {
             'Categoria' : 'Cocina',
             'Nombre' : "Despensero",
             'Marca' : "Mosconi",
             'Precio' : 12000,
             'Imagen' : "../../../img/Cocina/Despensero/despensero1.jpg",
             'Descripcion' : 'Alacena 1.60 Mts. Color marron',
             'Cuotas' : 'hasta 12 cuotas sin interes',
             'llegada': 'llega el lunes'
             },

             {
             'Categoria' : 'Cocina',
             'Nombre' : "Bajo-mesada",
             'Marca' : "Mosconi",
             'Precio' : 6000,
             'Imagen' : "../../../img/Cocina/Bajo mesada/mesada2.jpg",
             'Descripcion' : 'Alacena 40 Cts. Color blanco',
             'Cuotas' : 'hasta 12 cuotas sin interes',
             'llegada': 'llega el lunes'
             },

             {
             'Categoria' : 'Cocina',
             'Nombre' : "Alacena",
             'Marca' : "Mosconi",
             'Precio' : 9000,
             'Imagen' : "../../../img/Cocina/Alacena/alacena3.jpg",
             'Descripcion' : 'Alacena 1.20 Mts. Color blanco',
             'Cuotas' : 'hasta 6 cuotas sin interes',
             'llegada': 'llega mañana'
             },

              {
             'Categoria' : 'Cocina',
             'Nombre' : "Bajo-mesada",
             'Marca' : "Mosconi",
             'Precio' : 12000,
             'Imagen' : "../../../img/Cocina/Bajo mesada/mesada1.jpg",
             'Descripcion' : 'Alacena 1.60 Mts. Color blanco',
             'Cuotas' : 'Hasta 12 cuotas sin interes',
             'llegada': 'llega mañana'
             },

             {
             'Categoria' : 'Cocina',
             'Nombre' : "Despensero",
             'Marca' : "Mosconi",
             'Precio' : 12000,
             'Imagen' : "../../../img/Cocina/Despensero/despensero4.jpg",
             'Descripcion' : 'Alacena 1.60 Mts. Color marron',
             'Cuotas' : 'hasta 12 cuotas sin interes',
             'llegada': 'llega el lunes'
             },

             {
             'Categoria' : 'Cocina',
             'Nombre' : "Bajo-mesada",
             'Marca' : "Mosconi",
             'Precio' : 6000,
             'Imagen' : "../../../img/Cocina/Bajo mesada/mesada3.jpg",
             'Descripcion' : 'Alacena 40 Cts. Color blanco',
             'Cuotas' : 'hasta 12 cuotas sin interes',
             'llegada': 'llega el lunes'
             },

             {
             'Categoria' : 'Cocina',
             'Nombre' : "Alacena",
             'Marca' : "Mosconi",
             'Precio' : 9000,
             'Imagen' : "../../../img/Cocina/Alacena/alacena4.jpg",
             'Descripcion' : 'Alacena 1.20 Mts. Color blanco',
             'Cuotas' : 'hasta 6 cuotas sin interes',
             'llegada': 'llega mañana'
             },

              {
             'Categoria' : 'Cocina',
             'Nombre' : "Despensero",
             'Marca' : "Mosconi",
             'Precio' : 12000,
             'Imagen' : "../../../img/Cocina/Despensero/despensero3.jpg",
             'Descripcion' : 'Alacena 1.60 Mts. Color blanco',
             'Cuotas' : 'Hasta 12 cuotas sin interes',
             'llegada': 'llega mañana'
             },

             {
             'Categoria' : 'Cocina',
             'Nombre' : "Despensero",
             'Marca' : "Mosconi",
             'Precio' : 12000,
             'Imagen' : "../../../img/Cocina/Despensero/despensero2.jpg",
             'Descripcion' : 'Alacena 1.60 Mts. Color marron',
             'Cuotas' : 'hasta 12 cuotas sin interes',
             'llegada': 'llega el lunes'
             },

             {
             'Categoria' : 'Cocina',
             'Nombre' : "Alacena",
             'Marca' : "Mosconi",
             'Precio' : 6000,
             'Imagen' : "../../../img/Cocina/Alacena/alacena2.jpg",
             'Descripcion' : 'Alacena 40 Cts. Color blanco',
             'Cuotas' : 'hasta 12 cuotas sin interes',
             'llegada': 'llega el lunes'
             },

             {
             'Categoria' : 'Cocina',
             'Nombre' : "Bajo-mesada",
             'Marca' : "Mosconi",
             'Precio' : 9000,
             'Imagen' : "../../../img/Cocina/Bajo mesada/mesada4.jpg",
             'Descripcion' : 'Alacena 1.20 Mts. Color blanco',
             'Cuotas' : 'hasta 6 cuotas sin interes',
             'llegada': 'llega mañana'
             }

    ]