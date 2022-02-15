<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Ingresa.aspx.cs" Inherits="FinalLaboratorio3.Ingresa" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link rel="stylesheet" href="principal.css"/>


        <title> Contancto </title>
		
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>
		<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
		
		<script src="jquery-3.5.1.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="../js/principal.js"></script>
		<script src="https://kit.fontawesome.com/702052ce2d.js" crossorigin="anonymous"></script>
</head>
<body>

    <!-- Barra de navegacion --> 
		 <div id="barraIngresa">
   		 </div>
    
    <div class="container">
        <h1 class="bordeTarjeta colorMadera MBS  text-center fuenteTitulo">
            Bienvenido! Ingresa tu usuario y contraseña.
        </h1>
    </div>

    <div class="container d-flex justify-content-center align-items-center text-center">

        <form id="form1" runat="server" >
            <div class="bordeTarjeta colorMadera MBS pb-5 pl-5 pr-5">
                <asp:Label ID="lIncorrecto" runat="server" Text="" ></asp:Label>
                <br/>
                <br/>
                <asp:Label ID="lUsuario" runat="server" Text="Usuario"></asp:Label>
                <br/>
                <asp:TextBox ID="tbUsuario"  runat="server"></asp:TextBox>
                <br/>
                <br/>
                <asp:Label ID="lContraseña" runat="server" Text="Contraseña"></asp:Label>
                <br/>
                <asp:TextBox ID="tbContraseña" TextMode="Password" runat="server"></asp:TextBox>
                <br/>
                <br/>
                <asp:Button ID="btEntrar" CssClass="col colorMadera bordeTarjeta MBS" runat="server" Text="Entrar" OnClick="btEntrar_Click" />
            </div>
        </form>

    </div>

    <!--PIE-->
    	<div id="pieIngresa">
    	</div>
</body>
</html>
