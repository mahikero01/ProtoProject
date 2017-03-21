namespace ProjectWorkplace.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class PW_Answers
    {
        [Key]
        public Guid AnswerID { get; set; }

        public Guid QuestionID { get; set; }

        [Required]
        public string AnswerDesc { get; set; }

        public bool IsActive { get; set; }

        public bool IsCorrect { get; set; }

        public virtual PW_Questions PW_Questions { get; set; }
    }
}
