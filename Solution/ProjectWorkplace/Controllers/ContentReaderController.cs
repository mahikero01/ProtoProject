using ProjectWorkplace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.IO;
using System.Text;
namespace ProjectWorkplace.Controllers
{
    public class ContentReaderController : ApiController
    {
        private ProjectWorkplaceContext db = new ProjectWorkplaceContext();
        private ResourcesController rc = new ResourcesController();
        // GET api/contentreader
        public PW_ContentReader Get(string category)
        {
            PW_GetResourcePath_Result htmlPath = rc.GetResourcePath(category);
            string text = File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath("~/"+@htmlPath.ResourcePath));
            return new PW_ContentReader
            {
                MyProperty=0,
                ResourceContent=text.Replace("\r\n", string.Empty);
            };
        }

        // GET api/contentreader/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/contentreader
        public void Post([FromBody]string value)
        {
        }

        // PUT api/contentreader/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/contentreader/5
        public void Delete(int id)
        {
        }
    }
}
