﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Simulados.EF
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class LocalDBEntities : DbContext
    {
        public LocalDBEntities()
            : base("name=LocalDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Categoria> Categorias { get; set; }
        public virtual DbSet<Subcategoria> Subcategorias { get; set; }
        public virtual DbSet<Usuario> AspNetUsers { get; set; }
        public virtual DbSet<Alternativa> Alternativas { get; set; }
        public virtual DbSet<Questao> Questoes { get; set; }
        public virtual DbSet<Simulados_Questoes> Simulados_Questoes { get; set; }
        public virtual DbSet<Simulado> Simulados { get; set; }
    
        public virtual int GeraSimulado(string usuario, Nullable<int> categoria, ObjectParameter idSimulado)
        {
            var usuarioParameter = usuario != null ?
                new ObjectParameter("usuario", usuario) :
                new ObjectParameter("usuario", typeof(string));
    
            var categoriaParameter = categoria.HasValue ?
                new ObjectParameter("categoria", categoria) :
                new ObjectParameter("categoria", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("GeraSimulado", usuarioParameter, categoriaParameter, idSimulado);
        }
    }
}
