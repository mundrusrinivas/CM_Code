using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CapacityManagement.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Weekly()
        {
            return View();
        }

        public ActionResult Dialy()
        {
            return View();
        }

        public ActionResult AddOffice()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult AddSite()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
    }
}