<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Consulta.aspx.cs" Inherits="FinalLaboratorio3.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    
        <link rel="stylesheet" href="css/principal.css"/>


        <title> Contancto </title>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>
		<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
		
		<script src="jquery-3.5.1.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="../js/principal.js"></script>
		<script src="https://kit.fontawesome.com/702052ce2d.js" crossorigin="anonymous"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Luxurious+Roman&display=swap" rel="stylesheet"/>

        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Graduate&display=swap" rel="stylesheet"/>

        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"/>

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
</head>
<body>

    <!-- Barra de navegacion --> 
		 <div id="barraConsulta">
   		 </div>
       
    
    

    <div class="container text-center mt-3">
        <h1 class="bordeTarjeta colorMadera MBS vw4 fuenteTitulo">
            Contacto
        </h1>
    </div>
    
	<div class="container d-flex justify-content-center colorMadera bordeTarjeta MBS text-center">

		    <form id="form1" runat="server" >
            <br /><br />
            
            <div class="bordeTarjeta p-2">
                <asp:Label CssClass="MBS vw3 fuenteParrafo" ID="lnombre" runat="server" Text="Nombre"></asp:Label>
                <br />
                <asp:TextBox ID="tbnombre"  runat="server" Height="22px" Width="128px"></asp:TextBox>
            </div>
            
           <br />
            <div class="bordeTarjeta p-2">
                <asp:Label CssClass="MBS vw3 fuenteParrafo" ID="lemail" runat="server" Text="E-mail"></asp:Label>
                <br />
                <asp:TextBox ID="tbEmail" TextMode="Email" runat="server" Height="22px" Width="128px"></asp:TextBox>
            </div>
            
            <br />
            <div class="bordeTarjeta p-2">
                 <asp:Label CssClass="MBS vw3 fuenteParrafo" ID="ltelefono" runat="server" Text="Telefono"></asp:Label>
                 <br />
                 <asp:DropDownList  ID="ddlNumero" runat="server">
                 </asp:DropDownList>
                 <asp:TextBox ID="tbtelefono" TextMode="Phone" runat="server" Height="22px" Width="128px"></asp:TextBox>
            </div>
           
            <br />
            <div class="bordeTarjeta p-2">
                <asp:Label CssClass="MBS vw3 fuenteParrafo" ID="lasunto" runat="server" Text="Asunto"></asp:Label>
                <br />
                <asp:TextBox ID="tbasunto" runat="server" Height="22px" Width="128px"></asp:TextBox>
            </div>
           
            <br />
           <div class="bordeTarjeta p-2">

                <asp:Label ID="lMayor" CssClass="vw3 fuenteParrafo" runat="server" Text="Sos mayor de edad?"></asp:Label> 
                <asp:RadioButtonList ID="rbEdad" runat="server" CssClass="col vw3" AutoPostBack="true" OnSelectedIndexChanged="rbEdad_SelectedIndexChanged" RepeatDirection="Horizontal">
                    <asp:ListItem Text="Si" Selected="True" Value="1"></asp:ListItem>
                    <asp:ListItem Text="No" Value="2"></asp:ListItem>
                </asp:RadioButtonList>
        
                <asp:Label CssClass="MBS fuenteParrafo" ID="lEdad" runat="server" Text="Edad"></asp:Label>
                <br />
                <asp:TextBox ID="tbEdad" runat="server"></asp:TextBox>

           </div>
        
            <br />
            <div class="bordeTarjeta p-2">
                <asp:Label CssClass="MBS vw3 fuenteParrafo" ID="lconsulta" runat="server" Text="Consulta"></asp:Label>
                <br />
                <asp:TextBox ID="tbconsulta" TextMode="MultiLine" runat="server" Height="97px" Width="198px"></asp:TextBox>
            </div>
            
            <br />
            <asp:Button CssClass="MBS bordeTarjeta colorMadera vw3 fuenteParrafo" ID="btconsulta" runat="server" Text="Enviar Consulta" OnClick="btconsulta_Click" />
            <p>&nbsp;</p>
        </form>

	
    </div>

        <!--PIE-->
    	<div id="pieConsulta">
    	</div>
    
</body>
</html>
