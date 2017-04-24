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
    public class PersonsController : ApiController
    {
        private ProjectWorkplaceContext db = new ProjectWorkplaceContext();

        // GET: api/Persons
        public IQueryable<PW_Persons> GetPW_Persons()
        {
            return db.PW_Persons;
        }

        // GET: api/Persons/5
        [ResponseType(typeof(PW_Persons))]
        public async Task<IHttpActionResult> GetPW_Persons(Guid id)
        {
            PW_Persons pW_Persons = await db.PW_Persons.FindAsync(id);
            if (pW_Persons == null)
            {
                return NotFound();
            }

            return Ok(pW_Persons);
        }

        [Route("api/Persons/GetPW_Person")]
        [ResponseType(typeof(PW_Persons_DTO))]
        public PW_Persons_DTO GetPW_Person(String username)
        {
            var a = from i in db.PW_Persons
                    where i.Username == username
                    select new PW_Persons_DTO
                    {
                        FirstName=i.FirstName,
                        IsActive=i.IsActive,
                        Lastname=i.Lastname,
                        PersonID=i.PersonID,
                        RoleID=i.RoleID,
                        Username=i.Username,
                        WorkDayNum=i.WorkDayNum
                    };

            if (a.Count() == 0 || a == null)
            {
                return null;
            }

            return a.First();
        }

        // PUT: api/Persons/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPW_Persons(Guid id, PW_Persons pW_Persons)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pW_Persons.PersonID)
            {
                return BadRequest();
            }

            db.Entry(pW_Persons).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PW_PersonsExists(id))
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

        // POST: api/Persons
        [ResponseType(typeof(PW_Persons))]
        public async Task<IHttpActionResult> PostPW_Persons(PW_Persons pW_Persons)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PW_Persons.Add(pW_Persons);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PW_PersonsExists(pW_Persons.PersonID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pW_Persons.PersonID }, pW_Persons);
        }

        // DELETE: api/Persons/5
        [ResponseType(typeof(PW_Persons))]
        public async Task<IHttpActionResult> DeletePW_Persons(Guid id)
        {
            PW_Persons pW_Persons = await db.PW_Persons.FindAsync(id);
            if (pW_Persons == null)
            {
                return NotFound();
            }

            db.PW_Persons.Remove(pW_Persons);
            await db.SaveChangesAsync();

            return Ok(pW_Persons);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PW_PersonsExists(Guid id)
        {
            return db.PW_Persons.Count(e => e.PersonID == id) > 0;
        }
    }
}