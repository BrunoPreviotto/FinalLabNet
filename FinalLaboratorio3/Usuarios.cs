using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.IO;


namespace FinalLaboratorio3
{
    public class Usuarios
    {
        private string nombre;
        private string contraseña;
        
        
        public Usuarios(string nombre, string contraseña)
        {
            this.nombre = nombre;
            this.Contraseña = contraseña;
        }

        public string Contraseña { get => contraseña; set => contraseña = value; }
        public string Nombre { get => nombre; set => nombre = value; }

        
    }
}