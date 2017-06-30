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
    public class TemporaryUsersController : ApiController
    {
        private ProjectWorkplaceContext db = new ProjectWorkplaceContext();

        // GET api/TemporaryUsers
        public IQueryable<PW_TemporaryUsers> GetPW_TemporaryUsers()
        {
            return db.PW_TemporaryUsers;
        }

        // GET api/TemporaryUsers/5
        [ResponseType(typeof(PW_TemporaryUsers))]
        public IHttpActionResult GetPW_TemporaryUsers(int id)
        {
            PW_TemporaryUsers pw_temporaryusers = db.PW_TemporaryUsers.Find(id);
            if (pw_temporaryusers == null)
            {
                return NotFound();
            }

            return Ok(pw_temporaryusers);
        }
        //ONLY TRIGGER THIS FUNCTION WHEN CLICKS LOGOUT
        // PUT api/TemporaryUsers/5
        public IHttpActionResult PutPW_TemporaryUsers(int id, PW_TemporaryUsers pw_temporaryusers)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pw_temporaryusers.ID)
            {
                return BadRequest();
            }
            
            db.Entry(pw_temporaryusers).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PW_TemporaryUsersExists(id))
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

        // POST api/TemporaryUsers
        [ResponseType(typeof(PW_TemporaryUsers))]
        public IHttpActionResult PostPW_TemporaryUsers(PW_TemporaryUsers pw_temporaryusers)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PW_TemporaryUsers.Add(pw_temporaryusers);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = pw_temporaryusers.ID }, pw_temporaryusers);
        }

        //NOT NECESSARY
        // DELETE api/TemporaryUsers/5
        [ResponseType(typeof(PW_TemporaryUsers))]
        public IHttpActionResult DeletePW_TemporaryUsers(int id)
        {
            PW_TemporaryUsers pw_temporaryusers = db.PW_TemporaryUsers.Find(id);
            if (pw_temporaryusers == null)
            {
                return NotFound();
            }

            db.PW_TemporaryUsers.Remove(pw_temporaryusers);
            db.SaveChanges();

            return Ok(pw_temporaryusers);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PW_TemporaryUsersExists(int id)
        {
            return db.PW_TemporaryUsers.Count(e => e.ID == id) > 0;
        }
    }
}