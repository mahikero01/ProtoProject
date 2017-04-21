using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectWorkplace.Models
{
    public class PW_Questions_DTO
    {
        public System.Guid QuestionID { get; set; }
        public string QuestionDesc { get; set; }
        public bool IsCommon { get; set; }
        public bool IsMultipleAns { get; set; }
        public bool IsActive { get; set; }
        public int Answer { get; set; }
    }
}