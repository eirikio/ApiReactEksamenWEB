namespace Formel1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formel1API.Contexts;
using Formel1API.Models;

[ApiController]
[Route("api/[controller]")]
public class TeamsController : ControllerBase
{
    private readonly Formel1Context formel1Context;

    public TeamsController(Formel1Context _formel1Context)
    {
        formel1Context = _formel1Context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Team>>> Get()
    {
        try
        {
            List<Team> teams = await formel1Context.Teams.ToListAsync();
            return teams;
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Team>> Get(int id)
    {
        try
        {
            Team? team = await formel1Context.Teams.FindAsync(id);
            if (team != null)
            {
                return Ok(team);
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
    public async Task<ActionResult<Team>> Post(Team newTeam)
    {
        try
        {
            formel1Context.Teams.Add(newTeam);
            await formel1Context.SaveChangesAsync();
            return CreatedAtAction("Get", new { id = newTeam.Id }, newTeam);
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
            Team? team = await formel1Context.Teams.FindAsync(id);
            if (team != null)
            {
                formel1Context.Teams.Remove(team);
                await formel1Context.SaveChangesAsync();
            }
            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut]
    public async Task<IActionResult> Put(Team editedTeam)
    {
        try
        {
            formel1Context.Entry(editedTeam).State = EntityState.Modified;
            await formel1Context.SaveChangesAsync();
            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
    }
}
