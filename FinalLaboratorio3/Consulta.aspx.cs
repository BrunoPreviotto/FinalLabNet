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
                case 0:
                    Response.Write("<script> alert('Campos vacios') </script>");
                    break;
                case 1:
                    Response.Write("<script> alert('Numero incorrecto') </script>");
                    break;
                case 2:
                    Response.Write("<script> alert('Nombre incorrecto incorrecto (debe tener un espacio y empezar con mayusculas)') </script>");
                    break;
                case 3:
                    Response.Write("<script> alert('Debes ser mayor de edad') </script>");
                    break;
                default:
                    //EnviarMail(tbEmail.Text, tbnombre.Text, tbasunto.Text);
                    Response.Write($"<script> alert('Consulta enviada con éxito! Enviamos un E-mail a {tbEmail.Text}') </script>");
                    borrarDatos();
                    break;
            }

        }

        public int ValidarDatos()
        {

            

            Regex regexTelefono = new Regex("^[0-9]{6}$");

            Regex regexNombre = new Regex("^[A-Z]{1}[a-z]{1,50}[' ']{1}[A-Z]{1}[a-z]{1,50}");



            if (tbnombre.Text == "" || tbtelefono.Text == "" || tbEmail.Text == "" || tbconsulta.Text == "" || tbasunto.Text == "")
            {
                return 0;
            }
            else if(!(regexTelefono.IsMatch(tbtelefono.Text.Trim())))
            {
                return 1;
            }
            else if(!(regexNombre.IsMatch(tbnombre.Text.Trim())))
            {
                return 2;
            }
            else if(Convert.ToInt32(tbEdad.Text) < 18)
            {
                return 3;
            }
            else
            {
                return 4;
            }
        }

        public void EnviarMail(String correo, String nombre, String asunto)
        {
            MailMessage mail = new MailMessage();
            mail.From = new MailAddress("brunopreviotto@zohomail.com");
            mail.To.Add(correo);
            mail.Subject = asunto;
            mail.Body = "Gracias" + nombre  + "por su consulta!";
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.zoho.com";
            smtp.Port = 587;
            smtp.Credentials = new NetworkCredential("brunopreviotto@zoho.com", "finallaboratorio3");
            smtp.EnableSsl = true;
            try
            {
                smtp.Send(mail);
            }
            catch (Exception e)
            {

            }
        }

        public void borrarDatos()
        {
            tbasunto.Text = "";
            tbconsulta.Text = "";
            tbEmail.Text = "";
            tbnombre.Text = "";
            tbasunto.Text = "";
            tbtelefono.Text = "";
        }

        public void rellenarDropDownList()
        {
            int s= 0;
            for (int i=3000; i <= 4000; i++)
            {
                ddlNumero.Items.Insert(s, Convert.ToString(i));
                s++;
            }
           
        }

        protected void rbEdad_SelectedIndexChanged(object sender, EventArgs e)
        {
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