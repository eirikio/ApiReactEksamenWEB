namespace Formel1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formel1API.Contexts;
using Formel1API.Models;
using Microsoft.AspNetCore.Http.HttpResults;

[ApiController]
[Route("api/[controller]")]
public class DriversController : ControllerBase
{
    private readonly Formel1Context formel1Context;

    public DriversController(Formel1Context _formel1Context)
    {
        formel1Context = _formel1Context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Driver>>> Get()
    {
        try
        {
            List<Driver> drivers = await formel1Context.Drivers.ToListAsync();
            return drivers;
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Driver>> Get(int id)
    {
        try
        {
            Driver? driver = await formel1Context.Drivers.FindAsync(id);
            if (driver != null)
            {
                return Ok(driver);
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }


[HttpGet]
[Route("[action]/{name}")]
public async Task<ActionResult<Driver>> GetByName(string name)
{
    try
    {
        string encodedName = Uri.EscapeDataString(name);
        Driver? driver = await formel1Context.Drivers.FirstOrDefaultAsync(d => d.Name == name);
        if (driver != null)
        {
            return Ok(driver);
        }
        else
        {
            return NotFound();
        }
    }
    catch
    {
        return StatusCode(500);
    }
}


    [HttpPost]
    public async Task<ActionResult<Driver>> Post(Driver newDriver)
    {
        try
        {
            formel1Context.Drivers.Add(newDriver);
            await formel1Context.SaveChangesAsync();
            return CreatedAtAction("Get", new { id = newDriver.Id }, newDriver);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut]
    public async Task<IActionResult> Put(Driver editedDriver)
    {
        try
        {
            formel1Context.Entry(editedDriver).State = EntityState.Modified;
            await formel1Context.SaveChangesAsync();
            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try
        {
            Driver? driver = await formel1Context.Drivers.FindAsync(id);
            if (driver != null)
            {
                formel1Context.Drivers.Remove(driver);
                await formel1Context.SaveChangesAsync();
                return NoContent();
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }
}
