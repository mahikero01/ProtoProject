namespace ProjectWorkplace.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class PW_Examinees
    {
        [Key]
        public Guid ExamineeID { get; set; }

        public Guid PersonID { get; set; }

        public int CodeNum { get; set; }

        public Guid? SubjectID { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? DateCompleted { get; set; }

        public int Score { get; set; }

        public virtual PW_Persons PW_Persons { get; set; }
    }
}
