using CleanArchMvc.Application.DTOs;

namespace CleanArchMvc.Application.Interfaces;

public interface IVehicleService
{
    Task<IEnumerable<VehicleDTO>> GetVehicles();
    Task<VehicleDTO> GetById(int? id);
    Task Add(VehicleDTO VehicleDTO);
    Task Update(VehicleDTO VehicleDTO);
    Task Remove(int? id);
}