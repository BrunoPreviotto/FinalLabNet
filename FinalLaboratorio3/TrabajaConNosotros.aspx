<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="TrabajaConNosotros.aspx.cs" Inherits="FinalLaboratorio3.TrbajaConNosotros" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
		<title> Trabaja con nosotros </title>
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
	<div id="barraTrabaja">
	</div>
	
	<!-- CUERPO -->
	<div class="container">

		<!-- TITULO -->
		<div class="container d-flex justify-content-center mt-5 mb-5">
			<div class="text-center colorMadera bordeTarjeta MBS">
				<h1 class="fuenteTitulo">
					Trabaja con nosotoros
				</h1>
				<p class="fuenteParrafo">
					Si te gusta trabajar en equipo, tenés actitud de servicio, sos apasionado en 
					lo que te gusta y sabés hacer, y asumís tus desafíos laborales con 
					responsabilidad, compromiso, honestidad y muchas ganas, ¡sumate a nuestro 
					equipo!

					Somos una compañía en constante crecimiento, por eso queremos sumar
					valor a nuestro staff. Actualmente estamos presentes en puntos 
					estratégicos de Rafaela 
					con nuestros locales.
				</p>
			</div>
		</div>
	
		<!-- SUBIR ARCHIVO -->
		<div class="container mt-5 mb-5">
			<div class="d-flex justify-content-center text-center">
				<form id="form1" runat="server">
				   <div class="bordeTarjeta MBS colorMadera p-5">
						<asp:Label ID="lSubirCv" runat="server" Text="Subir CV"></asp:Label>
						<br/><br/>
						<asp:FileUpload ID="fuCv" runat="server" Height="28px" Width="234px" />
						<asp:Label ID="lPdf"  runat="server" Text="(Solo pdf)"></asp:Label>
							<br /><br/>
						<asp:Button CssClass="bordeTarjeta colorMadera MBS"  ID="btSubirCv" runat="server" Text="Subir" OnClick="bSubirCv_Click"/>
					   <br />
					   <asp:Label ID="lArchivo" CssClass="text-white" runat="server" Text=""></asp:Label>
					</div>
				</form>
			 </div>
		  </div>

	</div>
		
		
	<!--PIE-->
    <div id="pieTrabaja" class="mt-5">
    </div> 

</body>
</html>
