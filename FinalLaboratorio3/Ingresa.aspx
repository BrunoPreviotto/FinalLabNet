<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Ingresa.aspx.cs" Inherits="FinalLaboratorio3.Ingresa" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
        <meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title> Contancto </title>
		
		<!-- CSS PRINCIPAL -->
        <link rel="stylesheet" href="css/principal.css"/>

        <!-- BOOTSTRAP -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>
		<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
		
        <!-- JQUERY -->
		<script src="jquery-3.5.1.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		
        <!-- SCRIPT PRINCIPAL -->
        <script src="js/mbs.js"></script>
		
        <!-- ICONOS FONT AWESOME -->
        <script src="https://kit.fontawesome.com/702052ce2d.js" crossorigin="anonymous"></script>
        
        <!-- FUENTES DE GOOGLE -->
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Luxurious+Roman&display=swap" rel="stylesheet"/>

        <link href="https://fonts.googleapis.com/css2?family=Graduate&display=swap" rel="stylesheet"/>

        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"/>

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
</head>
<body>

    <!-- Barra de navegacion --> 
	<div id="barraIngresa">
   	</div>
    
    <!-- TITULO -->
    <div class="container mt-5">
        <h1 class="vw4 bordeTarjeta colorMadera MBS  text-center fuenteTitulo">
            Bienvenido! Ingresa tu usuario y contraseña.
        </h1>
    </div>

    <!-- INGRESAR -->
    <div class="container d-flex justify-content-center align-items-center text-center mt-5">

        <form class="mb-5 mt-5" id="form1" runat="server">
            <div class="bordeTarjeta colorMadera MBS pb-5 pl-5 pr-5">
                
                <!-- LABEL VALIDAR INGRESO -->
                <asp:Label ID="lIncorrecto" CssClass="text-white" runat="server" Text="" ></asp:Label>
                <br/>
                <br/>

                <!-- USUARIO -->
                <asp:Label ID="lUsuario" runat="server" Text="Usuario"></asp:Label>
                <br/>
                <asp:TextBox ID="tbUsuario"  runat="server"></asp:TextBox>
                <br/>
                <br/>

                <!-- CONTRASEÑA -->
                <asp:Label ID="lContraseña" runat="server" Text="Contraseña"></asp:Label>
                <br/>
                <asp:TextBox ID="tbContraseña" TextMode="Password" runat="server"></asp:TextBox>
                <br/>
                <br/>

                <!-- BOTON -->
                <asp:Button ID="btEntrar" CssClass="col colorMadera bordeTarjeta MBS" runat="server" Text="Entrar" OnClick="btEntrar_Click" />
            </div>
        </form>

    </div>

    <!--PIE-->
    	<div id="pieIngresa" class="mt-5">
    	</div>
</body>
</html>
