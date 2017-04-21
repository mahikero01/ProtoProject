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
    public class RandQuestionsController : ApiController
    {
        private ProjectWorkplaceContext db = new ProjectWorkplaceContext();

        // GET api/RandQuestions
        public IQueryable<PW_Questions_DTO> GetPW_VW_QUESTIONS()
        {
            //return db.PW_VW_QUESTIONS;
            return from i in db.PW_VW_QUESTIONS
                   select new PW_Questions_DTO
                   {
                       IsActive = i.IsActive,
                       IsCommon = i.IsCommon,
                       IsMultipleAns = i.IsMultipleAns,
                       QuestionDesc = i.QuestionDesc,
                       QuestionID = i.QuestionID
                   };
        }

        // GET api/RandQuestions/5
        [ResponseType(typeof(PW_VW_QUESTIONS))]
        public IHttpActionResult GetPW_VW_QUESTIONS(Guid id)
        {
            PW_VW_QUESTIONS pw_vw_questions = db.PW_VW_QUESTIONS.Find(id);
            if (pw_vw_questions == null)
            {
                return NotFound();
            }

            return Ok(pw_vw_questions);
        }

        // PUT api/RandQuestions/5
        public IHttpActionResult PutPW_VW_QUESTIONS(Guid id, PW_VW_QUESTIONS pw_vw_questions)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pw_vw_questions.QuestionID)
            {
                return BadRequest();
            }

            db.Entry(pw_vw_questions).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PW_VW_QUESTIONSExists(id))
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

        // POST api/RandQuestions
        [ResponseType(typeof(PW_VW_QUESTIONS))]
        public IHttpActionResult PostPW_VW_QUESTIONS(PW_VW_QUESTIONS pw_vw_questions)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PW_VW_QUESTIONS.Add(pw_vw_questions);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (PW_VW_QUESTIONSExists(pw_vw_questions.QuestionID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pw_vw_questions.QuestionID }, pw_vw_questions);
        }

        // DELETE api/RandQuestions/5
        [ResponseType(typeof(PW_VW_QUESTIONS))]
        public IHttpActionResult DeletePW_VW_QUESTIONS(Guid id)
        {
            PW_VW_QUESTIONS pw_vw_questions = db.PW_VW_QUESTIONS.Find(id);
            if (pw_vw_questions == null)
            {
                return NotFound();
            }

            db.PW_VW_QUESTIONS.Remove(pw_vw_questions);
            db.SaveChanges();

            return Ok(pw_vw_questions);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PW_VW_QUESTIONSExists(Guid id)
        {
            return db.PW_VW_QUESTIONS.Count(e => e.QuestionID == id) > 0;
        }
    }
}