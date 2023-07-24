using CleanArchMvc.Domain.Entities;
using CleanArchMvc.Domain.Interfaces;
using CleanArchMvc.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace CleanArchMvc.Infra.Data.Repositories;

public class VehicleRepository : IVehicleRepository
{
    private ApplicationDbContext _vehicleContext;
    public VehicleRepository(ApplicationDbContext context)
    {
        _vehicleContext = context;
    }

    public async Task<Vehicle> CreateAsync(Vehicle vehicle)
    {
        _vehicleContext.Add(vehicle);
        await _vehicleContext.SaveChangesAsync();
        return vehicle;
    }

    public async Task<Vehicle> GetByIdAsync(int? id)
    {
       
        return await _vehicleContext.Vehicles.FindAsync(id);
        
    }

    public async Task<IEnumerable<Vehicle>> GetVehiclesAsync()
    {
        return await _vehicleContext.Vehicles.ToListAsync();
    }

    public async Task<Vehicle> RemoveAsync(Vehicle vehicle)
    {
        _vehicleContext.Remove(vehicle);
        await _vehicleContext.SaveChangesAsync();
        return vehicle;
    }

    public async Task<Vehicle> UpdateAsync(Vehicle vehicle)
    {
        _vehicleContext.Update(vehicle);
        await _vehicleContext.SaveChangesAsync();
        return vehicle;
    }
}
