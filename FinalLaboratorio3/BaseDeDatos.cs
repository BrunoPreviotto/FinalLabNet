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

        //GUARDAR USUARIOS
        public void guardar()
        {

            try
            {
                //SI EXISTE EL ARCHIVO NO LO CREA Y GUARDA EL USUARIO
                if (File.Exists(ruta))
                {
                    
                    File.Delete(ruta);
                    string texto = JsonConvert.SerializeObject(Valores);
                    File.WriteAllText(ruta, texto);

                }
                else
                {
                    //SI NO EXISTE EL ARCHIVO LO CREA Y GUARDA EL USUARIO
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

        public bool buscar(string nombre, string contraseña)
        {
            
            foreach (Usuarios li in valores)
            {
                if (li.Nombre.Equals(nombre) && li.Contraseña.Equals(contraseña))
                {
                    return true;
                }

            }
            return false;
            
        }
    }
}