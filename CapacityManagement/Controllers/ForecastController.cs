using CapacityManagement.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;

namespace CapacityManagement.Controllers
{
    public class ForecastController : Controller
    {
        // GET: Forecast
        public ActionResult Index()
        {
            string path = Server.MapPath("~/Data/");
            string filePath = path + "prediction.csv";
           
            var assembly = Assembly.GetExecutingAssembly();
            var resourceName = "CapacityManagement.Data.prediction.csv";

           var epoch = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);

            using (Stream stream = assembly.GetManifestResourceStream(resourceName))
            {
                using (StreamReader reader = new StreamReader(stream))
                {
                    string csvData = reader.ReadToEnd();
                    bool bHeader = true;
                    List<ForecastModel> DataPoints1 = new List<ForecastModel>();
                    List<ForecastModel> DataPoints2 = new List<ForecastModel>();
                    List<ForecastModel> DataPoints3 = new List<ForecastModel>();
                    List<ForecastModel> DataPoints4 = new List<ForecastModel>();
                    //Execute a loop over the rows.
                    foreach (string row in csvData.Split('\n'))
                    {
                        if (!string.IsNullOrEmpty(row))
                        {
                            if (bHeader)
                            {
                                bHeader = false;
                                continue;
                            }
                            string[] elements = row.Split(',');

                            string[] dt = elements[1].Split('/');
                            var dateTime = String.Format("{0}-{1}-{2}", Convert.ToInt32( dt[2]),Convert.ToInt16(dt[0]), Convert.ToInt32( dt[1]));

                            DataPoints1.Add(
                                new ForecastModel() {
                                  label = dateTime,
                                    y = Convert.ToInt64(elements[2].Split('.')[0])
                                });
                            DataPoints2.Add(
                                new ForecastModel()
                                {
                                    label = dateTime,
                                    y = Convert.ToInt64(elements[3].Split('.')[0])
                                });
                            DataPoints3.Add(
                                new ForecastModel()
                                {
                                    label = dateTime,
                                    y = Convert.ToInt64(elements[4].Split('.')[0])
                                });
                            DataPoints4.Add(
                                new ForecastModel()
                                {
                                    label = dateTime,
                                    y = Convert.ToInt64(elements[5] != "\r" ? elements[5].Split('.')[0] : "0")
                                });
                        }
                    }
                    ViewBag.DataPoints1 = JsonConvert.SerializeObject(DataPoints1);
                    ViewBag.DataPoints2 = JsonConvert.SerializeObject(DataPoints2);
                    ViewBag.DataPoints3 = JsonConvert.SerializeObject(DataPoints3);
                    ViewBag.DataPoints4 = JsonConvert.SerializeObject(DataPoints4);
                    return View("Forecast");
                }
            }
        }
    }
}