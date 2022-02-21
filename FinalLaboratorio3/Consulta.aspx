<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Consulta.aspx.cs" Inherits="FinalLaboratorio3.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    
        <title> Contancto </title>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		
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
	<div id="barraConsulta">
   	</div>
       
    
    
    <!-- TITULO -->
    <div class="container text-center mt-5">
        <h1 class="bordeTarjeta colorMadera MBS vw4 fuenteTitulo">
            Contacto
        </h1>
    </div>
    
    <!-- CUERPO -->
	<div class="mb-5 container d-flex justify-content-center colorMadera bordeTarjeta MBS text-center">
            
        <form id="form1" runat="server" >
            <!-- LABEL EXITO ENVIAR -->
            <asp:Label CssClass="text-success vw4 fuenteParrafo" ID="lenvio" runat="server" Text="" Font-Size="10pt"></asp:Label>   
		    
            <br /><br />
            <!-- NOMBRE -->
            <div class="bordeTarjeta p-2">
                <asp:Label CssClass="MBS vw3 fuenteParrafo" ID="lnombre" runat="server" Text="Nombre"></asp:Label>
                <br />
                <asp:TextBox ID="tbnombre"  runat="server" Height="22px" Width="128px"></asp:TextBox>
                <br />
                <asp:RequiredFieldValidator  CssClass="text-danger" ControlToValidate="tbnombre" runat="server" ID="rnombre" ErrorMessage="No se ingreso nombre o es incorrecto" Display="Dynamic"></asp:RequiredFieldValidator>            
            </div>
            
            <br />
            <!-- E-MAIL -->
            <div class="bordeTarjeta p-2">
                <asp:Label CssClass="MBS vw3 fuenteParrafo" ID="lemail" runat="server" Text="E-mail"></asp:Label>
                <br />
                <asp:TextBox ID="tbEmail" TextMode="Email" runat="server" Height="22px" Width="128px"></asp:TextBox>
                <br />
                <asp:RequiredFieldValidator  CssClass="text-danger" ControlToValidate="tbEmail" runat="server" ID="remail" ErrorMessage="No se ingreso mail o es incorrecto" Display="Dynamic"></asp:RequiredFieldValidator>
            </div>
            
            <br />
            <!-- TELEFONO -->
            <div class="bordeTarjeta p-2">
                 <asp:Label CssClass="MBS vw3 fuenteParrafo" ID="ltelefono" runat="server" Text="Telefono"></asp:Label>
                 <br />
                 <asp:DropDownList  ID="ddlNumero" runat="server">
                 </asp:DropDownList>
                 <asp:TextBox ID="tbtelefono" TextMode="Phone" runat="server" Height="22px" Width="128px"></asp:TextBox>
                <br />
                <asp:RequiredFieldValidator  CssClass="text-danger" ControlToValidate="tbtelefono" runat="server" ID="rtelefono" ErrorMessage="No se ingreso telefono o es incorrecto" Display="Dynamic"></asp:RequiredFieldValidator>
            </div>
           
            <br />
            <!-- ASUNTO -->
            <div class="bordeTarjeta p-2">
                <asp:Label CssClass="MBS vw3 fuenteParrafo" ID="lasunto" runat="server" Text="Asunto"></asp:Label>
                <br />
                <asp:TextBox ID="tbasunto" runat="server" Height="22px" Width="128px"></asp:TextBox>
                <br />
                <asp:RequiredFieldValidator  CssClass="text-danger" ControlToValidate="tbasunto" runat="server" ID="rasunto" ErrorMessage="No se ingreso asunto" Display="Dynamic"></asp:RequiredFieldValidator>
            </div>
           
            <br />
            <!-- EDAD -->
            <div class="bordeTarjeta p-2">
                <asp:Label ID="lMayor" CssClass="vw3 fuenteParrafo" runat="server" Text="Sos mayor de edad?"></asp:Label> 
                <asp:RadioButtonList ID="rbEdad" runat="server" CssClass="col vw3" AutoPostBack="true" OnSelectedIndexChanged="rbEdad_SelectedIndexChanged" RepeatDirection="Horizontal">
                    <asp:ListItem Text="Si" Selected="True" Value="1"></asp:ListItem>
                    <asp:ListItem Text="No" Value="2"></asp:ListItem>
                </asp:RadioButtonList>
        
                <asp:Label CssClass="MBS fuenteParrafo" ID="lEdad" runat="server" Text="Edad"></asp:Label>
                <br />
                <asp:TextBox TextMode="Number" step="1" ID="tbEdad" runat="server"></asp:TextBox>
               <br />
                <asp:RequiredFieldValidator  CssClass="text-danger" ControlToValidate="tbedad" runat="server" ID="redad" ErrorMessage="Ingresar edad" Display="Dynamic"></asp:RequiredFieldValidator>
           </div>
        
            <br />
            <!-- CONSULTA -->
            <div class="bordeTarjeta p-2">
                <asp:Label CssClass="MBS vw3 fuenteParrafo" ID="lconsulta" runat="server" Text="Consulta"></asp:Label>
                <br />
                <asp:TextBox ID="tbconsulta" TextMode="MultiLine" runat="server" Height="97px" Width="198px"></asp:TextBox>
                <br />
                <asp:RequiredFieldValidator  CssClass="text-danger" ControlToValidate="tbconsulta" runat="server" ID="rconsulta" ErrorMessage="No se ingreso consulta" Display="Dynamic"></asp:RequiredFieldValidator>
            </div>
            
            <br />
            <!-- BOTON -->
            <asp:Button CssClass="MBS bordeTarjeta colorMadera vw3 fuenteParrafo" ID="btconsulta" runat="server" Text="Enviar Consulta" OnClick="btconsulta_Click" />
               
             
            <p>&nbsp;</p>
        </form>

	
    </div>

        <!--PIE-->
    	<div id="pieConsulta">
    	</div>
    
</body>
</html>
