using CleanArchMvc.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CleanArchMvc.Infra.Data.EntitiesConfiguration;

public class VehicleConfiguration : IEntityTypeConfiguration<Vehicle>
{
    public void Configure(EntityTypeBuilder<Vehicle> builder)
    {
        builder.HasKey(t => t.Id);
        builder.Property(p => p.Nome).HasMaxLength(50).IsRequired();
        builder.Property(p => p.Marca).HasMaxLength(50).IsRequired();
        builder.Property(p => p.Modelo).HasMaxLength(50).IsRequired();
        builder.Property(p => p.Foto).HasMaxLength(250).IsRequired();

        builder.Property(p => p.Valor).HasPrecision(10, 2);

    }
}