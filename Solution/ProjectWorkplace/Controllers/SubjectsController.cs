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
    public class SubjectsController : ApiController
    {
        private ProjectWorkplaceContext db = new ProjectWorkplaceContext();

        // GET: api/Subjects
        public IQueryable<PW_Subjects> GetPW_Subjects()
        {
            return db.PW_Subjects;
        }

        // GET: api/Subjects/5
        [ResponseType(typeof(PW_Subjects))]
        public async Task<IHttpActionResult> GetPW_Subjects(Guid id)
        {
            PW_Subjects pW_Subjects = await db.PW_Subjects.FindAsync(id);
            if (pW_Subjects == null)
            {
                return NotFound();
            }

            return Ok(pW_Subjects);
        }

        // PUT: api/Subjects/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPW_Subjects(Guid id, PW_Subjects pW_Subjects)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pW_Subjects.SubjectID)
            {
                return BadRequest();
            }

            db.Entry(pW_Subjects).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PW_SubjectsExists(id))
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

        // POST: api/Subjects
        [ResponseType(typeof(PW_Subjects))]
        public async Task<IHttpActionResult> PostPW_Subjects(PW_Subjects pW_Subjects)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PW_Subjects.Add(pW_Subjects);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PW_SubjectsExists(pW_Subjects.SubjectID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pW_Subjects.SubjectID }, pW_Subjects);
        }

        // DELETE: api/Subjects/5
        [ResponseType(typeof(PW_Subjects))]
        public async Task<IHttpActionResult> DeletePW_Subjects(Guid id)
        {
            PW_Subjects pW_Subjects = await db.PW_Subjects.FindAsync(id);
            if (pW_Subjects == null)
            {
                return NotFound();
            }

            db.PW_Subjects.Remove(pW_Subjects);
            await db.SaveChangesAsync();

            return Ok(pW_Subjects);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PW_SubjectsExists(Guid id)
        {
            return db.PW_Subjects.Count(e => e.SubjectID == id) > 0;
        }
    }
}