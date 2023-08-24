using System.ComponentModel.DataAnnotations.Schema;
using CleanArchMvc.Domain.Validation;

namespace CleanArchMvc.Domain.Entities;

[Table("vehicle")]
public sealed class Vehicle : Entity
{
    public string Nome { get; private set; }
    public string Marca { get; private set; }
    public decimal Valor { get; private set; }
    public string Modelo { get; private set; }
    public string Foto { get; private set; }
    private void ValidateDomain(string nome, string marca, decimal valor, string modelo, string foto)
    {
        DomainExceptionValidation.When(string.IsNullOrEmpty(nome),
            "Invalid name. Name is required");

        DomainExceptionValidation.When(nome.Length < 3,
            "Invalid name, too short, minimum 3 characters");

        DomainExceptionValidation.When(string.IsNullOrEmpty(marca),
            "Invalid brand. Brand is required");

        DomainExceptionValidation.When(string.IsNullOrEmpty(modelo),
            "Invalid description. Model is required");

        DomainExceptionValidation.When(modelo.Length < 5,
            "Invalid model, too short, minimum 5 characters");

        DomainExceptionValidation.When(valor < 0, "Invalid price value");


        Nome = nome;
        Marca = marca;
        Modelo = modelo;
        Valor = valor;
        Foto = foto;

    }
}