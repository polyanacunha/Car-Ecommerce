using AutoMapper;
using CleanArchMvc.Application.DTOs;
using CleanArchMvc.Application.Interfaces;
using CleanArchMvc.Domain.Entities;
using CleanArchMvc.Domain.Interfaces;

namespace CleanArchMvc.Application.Services;

public class VehicleService : IVehicleService
{
    private IVehicleRepository _vehicleRepository;
    private readonly IMapper _mapper;
    public VehicleService(IVehicleRepository vehicleRepository, IMapper mapper)
    {
        _vehicleRepository = vehicleRepository;
        _mapper = mapper;
    }

    public async Task<IEnumerable<VehicleDTO>> GetVehicles()
    {
        var vehiclesEntity = await _vehicleRepository.GetVehiclesAsync();
        return _mapper.Map<IEnumerable<VehicleDTO>>(vehiclesEntity);
    }

    public async Task<VehicleDTO> GetById(int? id)
    {
        var vehicleEntity = await _vehicleRepository.GetByIdAsync(id);
        return _mapper.Map<VehicleDTO>(vehicleEntity);
    }

    public async Task Add(VehicleDTO vehicleDto)
    {
        var vehicleEntity = _mapper.Map<Vehicle>(vehicleDto);
        await _vehicleRepository.CreateAsync(vehicleEntity);
        vehicleDto.Id = vehicleEntity.Id;
    }

    public async Task Update(VehicleDTO vehicleDto)
    {
        var vehicleEntity = _mapper.Map<Vehicle>(vehicleDto);
        await _vehicleRepository.UpdateAsync(vehicleEntity);
    }

    public async Task Remove(int? id)
    {
        var vehicleEntity = _vehicleRepository.GetByIdAsync(id).Result;
        await _vehicleRepository.RemoveAsync(vehicleEntity);
    }
}
