using CleanArchMvc.Application.DTOs;
using CleanArchMvc.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace CleanArchMvc.API.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class VehiclesController : ControllerBase
{
    private readonly IVehicleService _vehicleService;
    public VehiclesController(IVehicleService vehicleService)
    {
        _vehicleService = vehicleService;
    }
    [EnableCors("AllowOrigin")]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<VehicleDTO>>> Get()
    {
        var vehicles = await _vehicleService.GetVehicles();
        if (vehicles == null)
        {
            return NotFound("Vehicles not found");
        }
        return Ok(vehicles);
    }
    [EnableCors("AllowOrigin")]
    [HttpGet("{id:int}", Name = "GetVehicle")]
    public async Task<ActionResult<VehicleDTO>> Get(int id)
    {
        var vehicle = await _vehicleService.GetById(id);
        if (vehicle == null)
        {
            return NotFound("Vehicle not found");
        }
        return Ok(vehicle);
    }
    [EnableCors("AllowOrigin")]
    [HttpPost]
    public async Task<ActionResult> Post([FromBody] VehicleDTO vehicleDto)
    {
        if (vehicleDto == null)
            return BadRequest("Invalid Data");

        await _vehicleService.Add(vehicleDto);

        return new CreatedAtRouteResult("GetVehicle", new { id = vehicleDto.Id },
            vehicleDto);
    }
    [EnableCors("AllowOrigin")]
    [HttpPut]
    public async Task<ActionResult> Put(int id, [FromBody] VehicleDTO vehicleDto)
    {
        if (id != vehicleDto.Id)
            return BadRequest();

        if (vehicleDto == null)
            return BadRequest();

        await _vehicleService.Update(vehicleDto);

        return Ok(vehicleDto);
    }
    [EnableCors("AllowOrigin")]
    [HttpDelete("{id:int}")]
    public async Task<ActionResult<VehicleDTO>> Delete(int id)
    {
        var vehicle = await _vehicleService.GetById(id);
        if (vehicle == null)
        {
            return NotFound("Vehicle not found");
        }

        await _vehicleService.Remove(id);

        return Ok(vehicle);

    }
}
