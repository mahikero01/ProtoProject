using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ProjectWorkplace.Models;

namespace ProjectWorkplace.Controllers
{
    public class LeadersController : ApiController
    {
        private ProjectWorkplaceContext db = new ProjectWorkplaceContext();

        // GET api/Leaders
        public IQueryable<PW_Leaders> GetPW_Leaders()
        {
            return db.PW_Leaders.OrderBy(x=>x.LeaderName);
        }

        // GET api/Leaders/5
        [ResponseType(typeof(PW_Leaders))]
        public IHttpActionResult GetPW_Leaders(int id)
        {
            PW_Leaders pw_leaders = db.PW_Leaders.Find(id);
            if (pw_leaders == null)
            {
                return NotFound();
            }

            return Ok(pw_leaders);
        }

        // PUT api/Leaders/5
        public IHttpActionResult PutPW_Leaders(int id, PW_Leaders pw_leaders)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pw_leaders.LeaderID)
            {
                return BadRequest();
            }

            db.Entry(pw_leaders).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PW_LeadersExists(id))
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

        // POST api/Leaders
        [ResponseType(typeof(PW_Leaders))]
        public IHttpActionResult PostPW_Leaders(PW_Leaders pw_leaders)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PW_Leaders.Add(pw_leaders);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = pw_leaders.LeaderID }, pw_leaders);
        }

        // DELETE api/Leaders/5
        [ResponseType(typeof(PW_Leaders))]
        public IHttpActionResult DeletePW_Leaders(int id)
        {
            PW_Leaders pw_leaders = db.PW_Leaders.Find(id);
            if (pw_leaders == null)
            {
                return NotFound();
            }

            db.PW_Leaders.Remove(pw_leaders);
            db.SaveChanges();

            return Ok(pw_leaders);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PW_LeadersExists(int id)
        {
            return db.PW_Leaders.Count(e => e.LeaderID == id) > 0;
        }
    }
}