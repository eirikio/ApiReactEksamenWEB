namespace Formel1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;

[ApiController]
[Route("api/[controller]")]
public class ImageUploadController : ControllerBase
{
    public readonly IWebHostEnvironment environment;

    public ImageUploadController(IWebHostEnvironment _enviroment)
    {
        environment = _enviroment;
    }

    [HttpPost]
    public IActionResult PostImage(IFormFile formFile)
    {
        string webRootPath = environment.WebRootPath;
        string absolutePath = Path.Combine($"{webRootPath}/images/{formFile.FileName}");

        using (var fileStream = new FileStream(absolutePath, FileMode.Create))
        {
            formFile.CopyTo(fileStream);
        }
        return Ok();
    }

    [HttpGet]
    public string Get()
    {
        return "It works!";
    }
}