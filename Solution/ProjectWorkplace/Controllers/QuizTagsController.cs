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
    public class QuizTagsController : ApiController
    {
        private ProjectWorkplaceContext db = new ProjectWorkplaceContext();

        // GET: api/QuizTags
        public IQueryable<PW_QuizTags> GetPW_QuizTags()
        {
            return db.PW_QuizTags;
        }

        // GET: api/QuizTags/5
        [ResponseType(typeof(PW_QuizTags))]
        public async Task<IHttpActionResult> GetPW_QuizTags(Guid id)
        {
            PW_QuizTags pW_QuizTags = await db.PW_QuizTags.FindAsync(id);
            if (pW_QuizTags == null)
            {
                return NotFound();
            }

            return Ok(pW_QuizTags);
        }

        // PUT: api/QuizTags/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPW_QuizTags(Guid id, PW_QuizTags pW_QuizTags)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pW_QuizTags.QuizTagID)
            {
                return BadRequest();
            }

            db.Entry(pW_QuizTags).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PW_QuizTagsExists(id))
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

        // POST: api/QuizTags
        [ResponseType(typeof(PW_QuizTags))]
        public async Task<IHttpActionResult> PostPW_QuizTags(PW_QuizTags pW_QuizTags)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PW_QuizTags.Add(pW_QuizTags);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PW_QuizTagsExists(pW_QuizTags.QuizTagID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pW_QuizTags.QuizTagID }, pW_QuizTags);
        }

        // DELETE: api/QuizTags/5
        [ResponseType(typeof(PW_QuizTags))]
        public async Task<IHttpActionResult> DeletePW_QuizTags(Guid id)
        {
            PW_QuizTags pW_QuizTags = await db.PW_QuizTags.FindAsync(id);
            if (pW_QuizTags == null)
            {
                return NotFound();
            }

            db.PW_QuizTags.Remove(pW_QuizTags);
            await db.SaveChangesAsync();

            return Ok(pW_QuizTags);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PW_QuizTagsExists(Guid id)
        {
            return db.PW_QuizTags.Count(e => e.QuizTagID == id) > 0;
        }
    }
}