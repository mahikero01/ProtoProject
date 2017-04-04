using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectWorkplace.Models
{
    public class PW_Answers_DTO
    {
        public System.Guid AnswerID { get; set; }
        public System.Guid QuestionID { get; set; }
        public string AnswerDesc { get; set; }
        public bool IsActive { get; set; }
        public bool IsCorrect { get; set; }
    }
}