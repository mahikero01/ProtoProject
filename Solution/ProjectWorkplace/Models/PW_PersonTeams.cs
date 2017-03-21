namespace ProjectWorkplace.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class PW_PersonTeams
    {
        [Key]
        public Guid PersonTeamID { get; set; }

        public Guid PersonID { get; set; }

        public Guid TeamID { get; set; }

        public Guid LeaderID { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime EffectiveDate { get; set; }

        public bool IsActive { get; set; }

        public virtual PW_Persons PW_Persons { get; set; }

        public virtual PW_Persons PW_Persons1 { get; set; }

        public virtual PW_Teams PW_Teams { get; set; }
    }
}
