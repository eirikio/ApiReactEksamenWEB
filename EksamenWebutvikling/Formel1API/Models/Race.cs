namespace Formel1API.Models;

using Formel1API.Interfaces;

public class Race : IRace
{
    public int Id {get; set;}
    public string? WinnerName {get; set;}
    public TimeSpan WinnerTime {get; set;}
    public string? GrandPrix {get; set;}
}