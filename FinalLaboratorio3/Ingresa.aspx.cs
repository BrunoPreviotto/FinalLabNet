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
            //CARGA USUARIOS DESDE UN JSON
            if (!IsPostBack)
            {
                llenarUsuarios();
            }
            
        }

        protected void btEntrar_Click(object sender, EventArgs e)
        {
            //VALIDAR USUARIO
            bd.cargar();
            foreach (Usuarios u in bd.Valores)
            {
                //SI EXISTE EL USUARIO INGRESADO ACTIVA LA BIENVENIDA
                if (u.Nombre.Equals(tbUsuario.Text) && u.Contraseña.Equals(tbContraseña.Text))
                {
                    lIncorrecto.Text = "Bienvenido " + tbUsuario.Text;
                    tbUsuario.Text = "";
                    break;
                }
                //SI NO EXISTE USUARIO ACTIVA UDUARIO INCORRECTO
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
            //AÑADE USUARIOS A UNA LISTA (SOLO AÑADE, NO ELIMINA)
            List<String> lista = new List<string>();
            lista.Add("usuario 123");
            lista.Add("us 1234");
            lista.Add("usuarios 12345");
            lista.Add("usuario1 12");
            lista.Add("usuario2 222");
            Usuarios us;
            bd.cargar();
            
            
            

            //ENTRA SI NO EXISTEN LOS USUARIOS
            
            //RECORRE CADA UNO DE LA LISTA Y COMPARA LOS USUARIOS ACTUALES SI NO ESTA LO AGREGA
            foreach (string l in lista)
            {
                string[] s = l.Split(' ');
                    
                if (!(bd.buscar(s[0], s[1])))
                {
                    us = new Usuarios(s[0], s[1]);
                    bd.Insertar(us);
                }
                    
            }

            bd.guardar();
            
                
            
            
        }

        
    }
}