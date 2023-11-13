namespace Formel1API.Contexts;

using Formel1API.Models;
using Microsoft.EntityFrameworkCore;

public class Formel1Context : DbContext
{
    public Formel1Context(DbContextOptions<Formel1Context> options): base(options) {}

    public DbSet<Driver> Drivers {get; set;}
    public DbSet<Race> Races {get; set;}
    public DbSet<Team> Teams {get; set;}

}