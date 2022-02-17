using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Collections;

namespace FinalLaboratorio3
{
    public partial class Ingresa : System.Web.UI.Page
    {

        private ArrayList usuarios = new ArrayList();
        protected void Page_Load(object sender, EventArgs e)
        {
            

        }

        protected void btEntrar_Click(object sender, EventArgs e)
        {
            llenarUsuarios();

            foreach (string u in usuarios)
            {
                string[] us = u.Split(' ');
                if (tbUsuario.Text.ToLower().Trim() == us[0] && tbContraseña.Text.ToLower().Trim() == us[1])
                {
                    
                    lIncorrecto.Text = "Bienvenido " + tbUsuario.Text;
                    tbUsuario.Text = "";
                    
                    
                    
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
            usuarios.Add("usuario 123");
        }
    }
}