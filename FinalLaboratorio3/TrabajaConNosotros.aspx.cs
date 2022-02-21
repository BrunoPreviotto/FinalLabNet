﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

namespace FinalLaboratorio3
{
    public partial class TrbajaConNosotros : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void bSubirCv_Click(object sender, EventArgs e)
        {
            string extension = Path.GetExtension(fuCv.FileName);

            if (extension == ".pdf")
            {
                if (fuCv.HasFile)
                {

                    if (!(File.Exists(Server.MapPath("~/Archivos/" + fuCv.FileName))))
                    {
                        fuCv.SaveAs(Server.MapPath("Archivos" + fuCv.FileName));
                        
                        lArchivo.Text = "Se subio tu cv";
                    }
                    else
                    {
                        lArchivo.Text = "Ya existe un archivo con ese nombre";
                    }
                }
                else
                {
                    lArchivo.Text = "Debes cargar un archivo";
                }
            }
            else
            {
                lArchivo.Text = "Solo cargar pdf";
            }
        }
    }
}