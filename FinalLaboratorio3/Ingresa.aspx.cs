using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Collections;
using System.IO;

namespace FinalLaboratorio3
{
    public partial class Ingresa : System.Web.UI.Page
    {
        public static BaseDeDatos bd = new BaseDeDatos(@"C:\Users\previotto\Source\Repos\FinalLaboratorio3\FinalLaboratorio3\js\bdjson.json");
        
        protected void Page_Load(object sender, EventArgs e)
        {

            
            llenarUsuarios();
            

        }

        protected void btEntrar_Click(object sender, EventArgs e)
        {

            bd.cargar();
            foreach (Usuarios u in bd.Valores)
            {
                
                if (u.Nombre.Equals(tbUsuario.Text) && u.Contraseña.Equals(tbContraseña.Text))
                {
                    lIncorrecto.Text = "Bienvenido " + tbUsuario.Text;
                    tbUsuario.Text = "";
                    break;
                }
                else
                {
                    tbUsuario.Text = "";
                    lIncorrecto.Text = "";
                    lIncorrecto.Text = "Usuario o contraseña incorrecto";
                }
            }
            
        }

        public void llenarUsuarios()
        {
            List<String> lista = new List<string>();
            lista.Add("usuario 123");
            lista.Add("us 1234");
            lista.Add("usuarios 12345");
            Usuarios us;
            bd.cargar();
            if (bd.buscar(lista))
            {
                foreach (string l in lista)
                {
                    string[] xusuario = l.Split(' ');
                    us = new Usuarios(xusuario[0], xusuario[1]);
                    bd.Insertar(us);
                    bd.guardar();
                }
            }
                
            
            
        }

        
    }
}