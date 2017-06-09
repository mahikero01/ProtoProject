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
    public class ExamineesController : ApiController
    {
        private ProjectWorkplaceContext db = new ProjectWorkplaceContext();

        // GET: api/Examinees
        public IQueryable<PW_Examinees> GetPW_Examinees()
        {
            return db.PW_Examinees;
        }

        // GET: api/Examinees/5
        [ResponseType(typeof(PW_Examinees))]
        public async Task<IHttpActionResult> GetPW_Examinees(Guid id)
        {
            PW_Examinees pW_Examinees = await db.PW_Examinees.FindAsync(id);
            if (pW_Examinees == null)
            {
                return NotFound();
            }

            return Ok(pW_Examinees);
        }

        // PUT: api/Examinees/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPW_Examinees(Guid id, PW_Examinees pW_Examinees)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pW_Examinees.ExamineeID)
            {
                return BadRequest();
            }

            db.Entry(pW_Examinees).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PW_ExamineesExists(id))
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

        // POST: api/Examinees
        [ResponseType(typeof(PW_Examinees))]
        public async Task<IHttpActionResult> PostPW_Examinees(PW_Examinees pW_Examinees)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PW_Examinees.Add(pW_Examinees);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PW_ExamineesExists(pW_Examinees.ExamineeID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pW_Examinees.ExamineeID }, pW_Examinees);
        }

        // DELETE: api/Examinees/5
        [ResponseType(typeof(PW_Examinees))]
        public async Task<IHttpActionResult> DeletePW_Examinees(Guid id)
        {
            PW_Examinees pW_Examinees = await db.PW_Examinees.FindAsync(id);
            if (pW_Examinees == null)
            {
                return NotFound();
            }

            db.PW_Examinees.Remove(pW_Examinees);
            await db.SaveChangesAsync();

            return Ok(pW_Examinees);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PW_ExamineesExists(Guid id)
        {
            return db.PW_Examinees.Count(e => e.ExamineeID == id) > 0;
        }
    }
}