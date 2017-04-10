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
    public class QuestionsController : ApiController
    {
        private ProjectWorkplaceContext db = new ProjectWorkplaceContext();

        // GET: api/Questions
        public IQueryable<PW_Questions> GetPW_Questions()
        {
            return db.PW_Questions;
        }

        // GET: api/Questions/5
        [ResponseType(typeof(PW_Questions))]
        public async Task<IHttpActionResult> GetPW_Questions(Guid id)
        {
            PW_Questions pW_Questions = await db.PW_Questions.FindAsync(id);
            if (pW_Questions == null)
            {
                return NotFound();
            }

            return Ok(pW_Questions);
        }

        // PUT: api/Questions/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPW_Questions(Guid id, PW_Questions pW_Questions)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pW_Questions.QuestionID)
            {
                return BadRequest();
            }

            db.Entry(pW_Questions).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PW_QuestionsExists(id))
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

        // POST: api/Questions
        [ResponseType(typeof(PW_Questions))]
        public async Task<IHttpActionResult> PostPW_Questions(PW_Questions pW_Questions)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PW_Questions.Add(pW_Questions);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PW_QuestionsExists(pW_Questions.QuestionID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pW_Questions.QuestionID }, pW_Questions);
        }

        // DELETE: api/Questions/5
        [ResponseType(typeof(PW_Questions))]
        public async Task<IHttpActionResult> DeletePW_Questions(Guid id)
        {
            PW_Questions pW_Questions = await db.PW_Questions.FindAsync(id);
            if (pW_Questions == null)
            {
                return NotFound();
            }

            db.PW_Questions.Remove(pW_Questions);
            await db.SaveChangesAsync();

            return Ok(pW_Questions);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PW_QuestionsExists(Guid id)
        {
            return db.PW_Questions.Count(e => e.QuestionID == id) > 0;
        }
    }
}