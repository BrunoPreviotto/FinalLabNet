<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Ingresa.aspx.cs" Inherits="FinalLaboratorio3.Ingresa" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <h1>
        Ingresar
    </h1>
    <form id="form1" runat="server">
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
        <asp:Button ID="btEntrar" runat="server" Text="Entrar" OnClick="btEntrar_Click" />
    </form>
</body>
</html>
