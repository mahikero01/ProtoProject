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
    public class TeamsController : ApiController
    {
        private ProjectWorkplaceContext db = new ProjectWorkplaceContext();

        // GET: api/Teams
        public IQueryable<PW_Teams_DTO> GetPW_Teams()
        {
            return (from l in db.PW_Teams
                   where l.IsActive == true
                   select new PW_Teams_DTO
                   {
                       IsActive=l.IsActive,
                       TeamDesc=l.TeamDesc,
                       TeamID=l.TeamID
                   }).OrderBy(x=>x.TeamDesc);
        }

        // GET: api/Teams/5
        [ResponseType(typeof(PW_Teams))]
        public async Task<IHttpActionResult> GetPW_Teams(Guid id)
        {
            PW_Teams pW_Teams = await db.PW_Teams.FindAsync(id);
            if (pW_Teams == null)
            {
                return NotFound();
            }

            return Ok(pW_Teams);
        }

        // PUT: api/Teams/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPW_Teams(Guid id, PW_Teams pW_Teams)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pW_Teams.TeamID)
            {
                return BadRequest();
            }

            db.Entry(pW_Teams).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PW_TeamsExists(id))
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

        // POST: api/Teams
        [ResponseType(typeof(PW_Teams))]
        public async Task<IHttpActionResult> PostPW_Teams(PW_Teams pW_Teams)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PW_Teams.Add(pW_Teams);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PW_TeamsExists(pW_Teams.TeamID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pW_Teams.TeamID }, pW_Teams);
        }

        // DELETE: api/Teams/5
        [ResponseType(typeof(PW_Teams))]
        public async Task<IHttpActionResult> DeletePW_Teams(Guid id)
        {
            PW_Teams pW_Teams = await db.PW_Teams.FindAsync(id);
            if (pW_Teams == null)
            {
                return NotFound();
            }

            db.PW_Teams.Remove(pW_Teams);
            await db.SaveChangesAsync();

            return Ok(pW_Teams);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PW_TeamsExists(Guid id)
        {
            return db.PW_Teams.Count(e => e.TeamID == id) > 0;
        }
    }
}