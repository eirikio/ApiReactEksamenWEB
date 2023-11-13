namespace Formel1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formel1API.Contexts;
using Formel1API.Models;

[ApiController]
[Route("api/[controller]")]

public class RacesController : ControllerBase
{
    private readonly Formel1Context formel1Context;

    public RacesController(Formel1Context _formel1Context)
    {
        formel1Context = _formel1Context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Race>>> Get()
    {
        List<Race> races = await formel1Context.Races.ToListAsync();
        return races;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Race>> Get(int id)
    {
        try
        {
            Race? race = await formel1Context.Races.FindAsync(id);
            if (race != null)
            {
                return Ok(race);
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
    public async Task<ActionResult<Race>> Post(Race newRace)
    {
        formel1Context.Races.Add(newRace);
        await formel1Context.SaveChangesAsync();
        return CreatedAtAction("Get", new {id = newRace.Id}, newRace);
    }

    [HttpDelete]
    public async Task<IActionResult> Delete(int id)
    {
        Race? race = await formel1Context.Races.FindAsync(id);
        if (race != null) {
            formel1Context.Races.Remove(race);
            await formel1Context.SaveChangesAsync();
        }
        return NoContent();
    }

    [HttpPut]
    public async Task<IActionResult> Put(Race editedRace)
    {
        formel1Context.Entry(editedRace).State = EntityState.Modified;
        await formel1Context.SaveChangesAsync();
        return NoContent();
    }
}