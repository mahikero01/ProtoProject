using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using ProjectWorkplace.Models;
using System.Web;

namespace ProjectWorkplace.Controllers
{
    public class ResourcesController : ApiController
    {
        private ProjectWorkplaceContext db = new ProjectWorkplaceContext();

        // GET: api/Resources
        public IQueryable<PW_Resources> GetPW_Resources()
        {
            return db.PW_Resources;
        }

        [Route("api/Resources/GetResourcePath")]
        public PW_TeamResource_DTO GetResourcePath(string resourceCategory)
        {
            string currentDomainUser = HttpContext.Current.User.Identity.Name.ToString();
            //username only
            string currentUsername = currentDomainUser.Remove(0, currentDomainUser.IndexOf('\\') + 1);

            var a = db.PW_GetResourcePath(currentUsername, resourceCategory);
            
            return (a.Count() > 0) ?
                new PW_TeamResource_DTO { ResourcePath = a.First() } :
                new PW_TeamResource_DTO { ResourcePath = "" };
                
        }
        
        // GET: api/Resources/5
        [ResponseType(typeof(PW_Resources))]
        public async Task<IHttpActionResult> GetPW_Resources(Guid id)
        {
            PW_Resources pW_Resources = await db.PW_Resources.FindAsync(id);
            if (pW_Resources == null)
            {
                return NotFound();
            }

            return Ok(pW_Resources);
        }
        
        // PUT: api/Resources/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPW_Resources(Guid id, PW_Resources pW_Resources)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pW_Resources.ResourceID)
            {
                return BadRequest();
            }

            db.Entry(pW_Resources).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PW_ResourcesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Resources
        [ResponseType(typeof(PW_Resources))]
        public async Task<IHttpActionResult> PostPW_Resources(PW_Resources pW_Resources)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PW_Resources.Add(pW_Resources);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PW_ResourcesExists(pW_Resources.ResourceID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pW_Resources.ResourceID }, pW_Resources);
        }

        // DELETE: api/Resources/5
        [ResponseType(typeof(PW_Resources))]
        public async Task<IHttpActionResult> DeletePW_Resources(Guid id)
        {
            PW_Resources pW_Resources = await db.PW_Resources.FindAsync(id);
            if (pW_Resources == null)
            {
                return NotFound();
            }

            db.PW_Resources.Remove(pW_Resources);
            await db.SaveChangesAsync();

            return Ok(pW_Resources);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PW_ResourcesExists(Guid id)
        {
            return db.PW_Resources.Count(e => e.ResourceID == id) > 0;
        }
    }
}