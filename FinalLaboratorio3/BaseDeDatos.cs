using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.IO;

namespace FinalLaboratorio3
{
    public class BaseDeDatos
    {
        private List<Usuarios> valores = new List<Usuarios>();
        private string ruta;

        public List<Usuarios> Valores { get => valores; set => valores = value; }

        public BaseDeDatos(string ruta)
        {
            this.ruta = ruta;
        }

        public void guardar()
        {

            try
            {
                if (File.Exists(ruta))
                {
                    string texto = JsonConvert.SerializeObject(Valores);
                    File.WriteAllText(ruta, texto);

                }
                else
                {
                    File.Create(ruta).Close();
                }
            }
            catch (Exception e)
            {

            }
            
        }

        public void cargar()
        {
            try
            {
                string archivo = File.ReadAllText(ruta);
                Valores = JsonConvert.DeserializeObject<List<Usuarios>>(archivo);
            }
            catch (Exception e)
            {

            }
            
        }

        public void Insertar(Usuarios nuevo)
        {
            Valores.Add(nuevo);
        }

        public bool buscar(List<string> l)
        {
            foreach (string li in l)
            {
                string[] listaxCargar = li.Split(' ');
                foreach (Usuarios u in valores)
                {
                    if (!(u.Nombre.Equals(listaxCargar[0]) && u.Contraseña.Equals(listaxCargar[1])))
                    {
                        return false;
                    }
                }
            }
            return true;
        }
    }
}