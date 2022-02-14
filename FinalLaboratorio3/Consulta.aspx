<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Consulta.aspx.cs" Inherits="FinalLaboratorio3.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    
        <link rel="stylesheet" href="principal.css"/>


        <title> MBS </title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
		<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
		
		<script src="jquery-3.5.1.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="../js/principal.js"></script>
		<script src="https://kit.fontawesome.com/702052ce2d.js" crossorigin="anonymous"></script>
</head>
<body>
       
    
    <h1>
        Contacto
    </h1>
    
	<div class="d-flex justify-content-center colorMadera bordeTarjeta MBS text-center">

		    <form id="form1" runat="server" >
            <br /><br />
            
            <div>
                <asp:Label CssClass="MBS" ID="lnombre" runat="server" Text="Nombre"></asp:Label>
            </div>
            <asp:TextBox ID="tbnombre" runat="server" Height="22px" Width="128px"></asp:TextBox>
            
            <br /><br />
            <div>
                <asp:Label CssClass="MBS" ID="lemail" runat="server" Text="E-mail"></asp:Label>
            </div>
            <asp:TextBox ID="tbEmail" TextMode="Email" runat="server" Height="22px" Width="128px"></asp:TextBox>
        
            <br /><br />
            <div>
                <asp:Label CssClass="MBS" ID="ltelefono" runat="server" Text="Telefono"></asp:Label>
            </div>
            <asp:DropDownList  ID="ddlNumero" runat="server">
            </asp:DropDownList>
            <asp:TextBox ID="tbtelefono" TextMode="Phone" runat="server" Height="22px" Width="128px"></asp:TextBox>
        
            <br /><br />
            <div>
                <asp:Label CssClass="MBS" ID="lasunto" runat="server" Text="Asunto"></asp:Label>
            </div>
            <asp:TextBox ID="tbasunto" runat="server" Height="22px" Width="128px"></asp:TextBox>
        
            <br /><br />
            <asp:Label ID="lMayor" runat="server" Text="Sos mayor de edad?"></asp:Label> 
            <asp:RadioButtonList ID="rbEdad" runat="server" CssClass="col" AutoPostBack="true" OnSelectedIndexChanged="rbEdad_SelectedIndexChanged" RepeatDirection="Horizontal">
                <asp:ListItem Text="Si" Selected="True" Value="1"></asp:ListItem>
                <asp:ListItem Text="No" Value="2"></asp:ListItem>
            </asp:RadioButtonList>
        
            
            <asp:Label CssClass="MBS" ID="lEdad" runat="server" Text="Edad: "></asp:Label>
            <asp:TextBox ID="tbEdad" runat="server"></asp:TextBox>
        
            <br /><br />
            <div>
                <asp:Label CssClass="MBS" ID="lconsulta" runat="server" Text="Consulta"></asp:Label>
            </div>
            <asp:TextBox ID="tbconsulta" TextMode="MultiLine" runat="server" Height="97px" Width="198px"></asp:TextBox>

            <br /><br />
            <asp:Button CssClass="MBS bordeTarjeta colorMadera" ID="btconsulta" runat="server" Text="Enviar Consulta" OnClick="btconsulta_Click" />
            <p>&nbsp;</p>
        </form>

	</>
    
</body>
</html>
