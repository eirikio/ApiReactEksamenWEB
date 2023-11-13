namespace Formel1API.Interfaces;

public interface ITeam
{
    public int Id {get; set;}
    public string? Manufacturer {get; set;}
    public string? Image {get; set;}
    public string? Driver1 {get; set;}
    public string? Driver2 {get; set;}
}