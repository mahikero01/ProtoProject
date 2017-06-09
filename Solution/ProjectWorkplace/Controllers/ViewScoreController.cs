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
using System.Web;

namespace ProjectWorkplace.Controllers
{
    public class ViewScoreController : ApiController
    {
        private ProjectWorkplaceContext db = new ProjectWorkplaceContext();

        // GET api/ViewScore
        public PW_ViewEmployeeScore GetPW_ViewEmployeeScore()
        {
            //return db.PW_ViewEmployeeScore;
            string username=getMyuserName();
            var score = db.PW_ViewEmployeeScore.Where(x => x.Username == username);
            if (score.Count() == 0)
            {
                return null;
            }
            return score.OrderByDescending(z => z.DateCompleted).First();
        }

        // GET api/ViewScore/5
        [ResponseType(typeof(PW_ViewEmployeeScore))]
        public IHttpActionResult GetPW_ViewEmployeeScore(int id)
        {
            PW_ViewEmployeeScore pw_viewemployeescore = db.PW_ViewEmployeeScore.Find(id);
            if (pw_viewemployeescore == null)
            {
                return NotFound();
            }

            return Ok(pw_viewemployeescore);
        }

        // PUT api/ViewScore/5
        public IHttpActionResult PutPW_ViewEmployeeScore(int id, PW_ViewEmployeeScore pw_viewemployeescore)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pw_viewemployeescore.Score)
            {
                return BadRequest();
            }

            db.Entry(pw_viewemployeescore).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PW_ViewEmployeeScoreExists(id))
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

        // POST api/ViewScore
        [ResponseType(typeof(PW_ViewEmployeeScore))]
        public IHttpActionResult PostPW_ViewEmployeeScore(PW_ViewEmployeeScore pw_viewemployeescore)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PW_ViewEmployeeScore.Add(pw_viewemployeescore);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (PW_ViewEmployeeScoreExists(pw_viewemployeescore.Score))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pw_viewemployeescore.Score }, pw_viewemployeescore);
        }

        // DELETE api/ViewScore/5
        [ResponseType(typeof(PW_ViewEmployeeScore))]
        public IHttpActionResult DeletePW_ViewEmployeeScore(int id)
        {
            PW_ViewEmployeeScore pw_viewemployeescore = db.PW_ViewEmployeeScore.Find(id);
            if (pw_viewemployeescore == null)
            {
                return NotFound();
            }

            db.PW_ViewEmployeeScore.Remove(pw_viewemployeescore);
            db.SaveChanges();

            return Ok(pw_viewemployeescore);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PW_ViewEmployeeScoreExists(int id)
        {
            return db.PW_ViewEmployeeScore.Count(e => e.Score == id) > 0;
        }

        private string getMyuserName()
        {
            string currentDomainUser = HttpContext.Current.User.Identity.Name.ToString();
            //username only
            string currentUsername = currentDomainUser.Remove(0, currentDomainUser.IndexOf('\\') + 1);
            return currentUsername;
        }
    }
}