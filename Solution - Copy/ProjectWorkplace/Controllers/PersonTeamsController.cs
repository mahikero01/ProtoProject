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
    public class PersonTeamsController : ApiController
    {
        private ProjectWorkplaceContext db = new ProjectWorkplaceContext();

        // GET: api/PersonTeams
        public IQueryable<PW_PersonTeams> GetPW_PersonTeams()
        {
            return db.PW_PersonTeams;
        }

        // GET: api/PersonTeams/5
        [ResponseType(typeof(PW_PersonTeams))]
        public async Task<IHttpActionResult> GetPW_PersonTeams(Guid id)
        {
            PW_PersonTeams pW_PersonTeams = await db.PW_PersonTeams.FindAsync(id);
            if (pW_PersonTeams == null)
            {
                return NotFound();
            }

            return Ok(pW_PersonTeams);
        }

        // PUT: api/PersonTeams/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPW_PersonTeams(Guid id, PW_PersonTeams pW_PersonTeams)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pW_PersonTeams.PersonTeamID)
            {
                return BadRequest();
            }

            db.Entry(pW_PersonTeams).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PW_PersonTeamsExists(id))
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

        // POST: api/PersonTeams
        [ResponseType(typeof(PW_PersonTeams))]
        public async Task<IHttpActionResult> PostPW_PersonTeams(PW_PersonTeams pW_PersonTeams)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PW_PersonTeams.Add(pW_PersonTeams);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PW_PersonTeamsExists(pW_PersonTeams.PersonTeamID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pW_PersonTeams.PersonTeamID }, pW_PersonTeams);
        }

        // DELETE: api/PersonTeams/5
        [ResponseType(typeof(PW_PersonTeams))]
        public async Task<IHttpActionResult> DeletePW_PersonTeams(Guid id)
        {
            PW_PersonTeams pW_PersonTeams = await db.PW_PersonTeams.FindAsync(id);
            if (pW_PersonTeams == null)
            {
                return NotFound();
            }

            db.PW_PersonTeams.Remove(pW_PersonTeams);
            await db.SaveChangesAsync();

            return Ok(pW_PersonTeams);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PW_PersonTeamsExists(Guid id)
        {
            return db.PW_PersonTeams.Count(e => e.PersonTeamID == id) > 0;
        }
    }
}