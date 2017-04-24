using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProjectWorkplace.Controllers
{
    public class UserInitController : ApiController
    {
        // GET api/userinit
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/userinit/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/userinit
        public void Post([FromBody]string value)
        {
        }

        // PUT api/userinit/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/userinit/5
        public void Delete(int id)
        {
        }
    }
}
