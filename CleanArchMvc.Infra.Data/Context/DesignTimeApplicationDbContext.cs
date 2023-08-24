using CleanArchMvc.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using Microsoft.EntityFrameworkCore.Design;
using CleanArchMvc.Domain.Entities;

namespace CleanArchMvc.Infra.Data.Context

{
    public class DesignTimeApplicationDbContext : IDesignTimeDbContextFactory<ApplicationDbContext>
    {

        public ApplicationDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
            // pass your design time connection string here
            optionsBuilder.UseNpgsql("Server=localhost:5432;Database=postgres;User Id=postgres;Password=changeme;TrustServerCertificate=True");
            return new ApplicationDbContext(optionsBuilder.Options);
        }


    }
}