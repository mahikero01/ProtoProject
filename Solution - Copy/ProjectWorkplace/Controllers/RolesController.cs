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

namespace ProjectWorkplace.Controllers
{
    public class RolesController : ApiController
    {
        private ProjectWorkplaceContext db = new ProjectWorkplaceContext();

        // GET: api/Roles
        public IQueryable<PW_Roles> GetPW_Roles()
        {
            return db.PW_Roles;
        }

        // GET: api/Roles/5
        [ResponseType(typeof(PW_Roles))]
        public async Task<IHttpActionResult> GetPW_Roles(int id)
        {
            PW_Roles pW_Roles = await db.PW_Roles.FindAsync(id);
            if (pW_Roles == null)
            {
                return NotFound();
            }

            return Ok(pW_Roles);
        }

        // PUT: api/Roles/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPW_Roles(int id, PW_Roles pW_Roles)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pW_Roles.RoleID)
            {
                return BadRequest();
            }

            db.Entry(pW_Roles).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PW_RolesExists(id))
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

        // POST: api/Roles
        [ResponseType(typeof(PW_Roles))]
        public async Task<IHttpActionResult> PostPW_Roles(PW_Roles pW_Roles)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PW_Roles.Add(pW_Roles);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = pW_Roles.RoleID }, pW_Roles);
        }

        // DELETE: api/Roles/5
        [ResponseType(typeof(PW_Roles))]
        public async Task<IHttpActionResult> DeletePW_Roles(int id)
        {
            PW_Roles pW_Roles = await db.PW_Roles.FindAsync(id);
            if (pW_Roles == null)
            {
                return NotFound();
            }

            db.PW_Roles.Remove(pW_Roles);
            await db.SaveChangesAsync();

            return Ok(pW_Roles);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PW_RolesExists(int id)
        {
            return db.PW_Roles.Count(e => e.RoleID == id) > 0;
        }
    }
}