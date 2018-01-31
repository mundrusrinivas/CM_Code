using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CapacityManagement.Startup))]
namespace CapacityManagement
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
