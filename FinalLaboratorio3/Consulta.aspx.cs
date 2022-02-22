using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net.Mail;
using System.Net;
using System.Text.RegularExpressions;

namespace FinalLaboratorio3
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
            if (!IsPostBack)
            {
                rellenarDropDownList();
            }
        }

        protected void btconsulta_Click(object sender, EventArgs e)
        {
            switch (ValidarDatos())
            {
                case 1:
                    //VALIDA TELEFONO
                    rtelefono.IsValid = false;
                    break;
                case 2:
                    //VALIDA NOMBRE
                    rnombre.IsValid = false;
                    break;
                case 3:
                    //VALIDA EDAD
                    redad.IsValid = false;
                    break;
                default:
                    //ENVIA MAIL
                    EnviarMail(tbEmail.Text, tbnombre.Text, tbasunto.Text);
                    lenvio.Text = $"Consulta enviada con éxito!";
                    borrarDatos();
                    break;
            }

        }

        public int ValidarDatos()
        {

            
            //EXPRESION REGULAR TELEFONO
            Regex regexTelefono = new Regex("^[0-9]{6}$");

            //EXPRESION REGULAR NOMBRE
            Regex regexNombre = new Regex("^[A-Z]{1}[a-z]{1,50}[' ']{1}[A-Z]{1}[a-z]{1,50}");


            if(!(regexTelefono.IsMatch(tbtelefono.Text.Trim())))
            {
                //VALIDA TELEFONO
                return 1;
            }
            else if(!(regexNombre.IsMatch(tbnombre.Text.Trim())))
            {
                //VALIDA NOMBRE
                return 2;
            }
            else if(Convert.ToInt32(tbEdad.Text) < 18)
            {
                //VALIDA EDAD
                return 3;
            }
            else
            {
                return 4;
            }
        }

        public void EnviarMail(String correo, String nombre, String asunto)
        {
            //ENVIAR MAIL
            //CREAR MAIL
            MailMessage mail = new MailMessage();
            //AGREGAR DIRECCION EMISOR
            mail.From = new MailAddress("brunopreviotto@zohomail.com");
            //AGREGAR DIRECCION RECEPTOR
            mail.To.Add(correo);
            //AGREGAR ASUNTO
            mail.Subject = asunto;
            //AGREGAR CUERPO MAIL
            mail.Body = "Gracias " + nombre  + " por su consulta!";
            
            //CONFIGURAR SMTP
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.zoho.com";
            smtp.Port = 587;
            smtp.Credentials = new NetworkCredential("brunopreviotto@zoho.com", "finallaboratorio3");
            smtp.EnableSsl = true;
            
            try
            {
                //ENVIO
                smtp.Send(mail);
            }
            catch (Exception e)
            {
                Response.Write($"<script> alert('Mail {tbEmail.Text} no valido') </script>");
            }
        }

        public void borrarDatos()
        {
            //BORRAR TODOS LOS DATOS INGRESADOS
            tbasunto.Text = "";
            tbconsulta.Text = "";
            tbEmail.Text = "";
            tbnombre.Text = "";
            tbasunto.Text = "";
            tbtelefono.Text = "";
            tbEdad.Text = "";
        }

        public void rellenarDropDownList()
        {
            //RRELLENAR DROPDOWNLIST
            int s= 0;
            for (int i=3000; i <= 4000; i++)
            {
                ddlNumero.Items.Insert(s, Convert.ToString(i));
                s++;
            }
           
        }

        protected void rbEdad_SelectedIndexChanged(object sender, EventArgs e)
        {
            //AL SELECCIONAR NO EN MAYOR DE EDAD DESACTIVAR COMENTARIOS
            string curItem = rbEdad.SelectedItem.Value.ToString();
            if (curItem.Equals("2"))
            {
                tbEdad.Enabled = false;
            }
            else
            {
                tbEdad.Enabled = true;
            }
        }
    }
}