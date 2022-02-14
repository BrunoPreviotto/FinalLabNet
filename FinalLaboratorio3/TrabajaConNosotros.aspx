<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="TrabajaConNosotros.aspx.cs" Inherits="FinalLaboratorio3.TrbajaConNosotros" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Label ID="lSubirCv" runat="server" Text="Subir CV"></asp:Label>
            <br/>
            <asp:FileUpload ID="fuCv" runat="server" Height="28px" Width="234px"/>
            <asp:Label ID="lPdf" runat="server" Text="(Solo pdf)"></asp:Label>
             <br />
            <asp:Button ID="btSubirCv" runat="server" Text="Subir" OnClick="bSubirCv_Click" />
           
            
        </div>
    </form>
</body>
</html>
