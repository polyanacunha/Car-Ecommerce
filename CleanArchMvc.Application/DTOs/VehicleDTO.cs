using CleanArchMvc.Domain.Entities;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CleanArchMvc.Application.DTOs;

public class VehicleDTO
{
    public int Id { get; set; }

    [Required(ErrorMessage = "O nome é um campo obrigatório")]
    [MinLength(3)]
    [MaxLength(100)]
    [DisplayName("Name")]
    public string? Nome { get; set; }

    [Required(ErrorMessage = "A marca é um campo obrigatório")]
    [MaxLength(50)]
    [DisplayName("Marca")]
    public string? Marca { get; set; }

    [Required(ErrorMessage = "O valor é um campo obrigatório")]
    [Column(TypeName = "decimal(18,2)")]
    [DisplayFormat(DataFormatString = "{0:C2}")]
    [DataType(DataType.Currency)]
    [DisplayName("Valor")]
    public decimal Valor { get; set; }

    [Required(ErrorMessage = "O modelo é um campo obrigatório")]
    [MaxLength(50)]
    [DisplayName("Modelo")]
    public string Modelo { get; set; }

    [MaxLength(250)]
    [DisplayName("Foto do veiculo")]
    public string? Foto { get; set; }
}
