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
        List<Team> teams = await formel1Context.Teams.ToListAsync();
        return teams;
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
        formel1Context.Teams.Add(newTeam);
        await formel1Context.SaveChangesAsync();
        return CreatedAtAction("Get", new {id = newTeam.Id}, newTeam);
    }

    [HttpDelete]
    public async Task<IActionResult> Delete(int id)
    {
        Team? team = await formel1Context.Teams.FindAsync(id);
        if (team != null) {
            formel1Context.Teams.Remove(team);
            await formel1Context.SaveChangesAsync();
        }
        return NoContent();
    }

    [HttpPut]
    public async Task<IActionResult> Put(Team editedTeam)
    {
        formel1Context.Entry(editedTeam).State = EntityState.Modified;
        await formel1Context.SaveChangesAsync();
        return NoContent();
    }

}