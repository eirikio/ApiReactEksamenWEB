namespace Formel1API.Interfaces;

public interface IRace
{
    public int Id {get; set;}
    public string? WinnerName {get; set;}
    public TimeSpan WinnerTime {get; set;}
    public string? GrandPrix {get; set;}
}