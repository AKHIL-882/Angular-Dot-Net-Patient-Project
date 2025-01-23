using Microsoft.AspNetCore.Mvc;

namespace LoginAPI.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            if (request.Email == "test@example.com" && request.Password == "password123")
            {
                return Ok(new { Message = "Login Successful" });
            }
            return Unauthorized(new { Message = "Invalid credentials" });
        }
    }

    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
