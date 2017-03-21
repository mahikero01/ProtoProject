namespace ProjectWorkplace.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class PW_Teams
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public PW_Teams()
        {
            PW_PersonTeams = new HashSet<PW_PersonTeams>();
        }

        [Key]
        public Guid TeamID { get; set; }

        [Required]
        [StringLength(250)]
        public string TeamDesc { get; set; }

        public bool IsActive { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PW_PersonTeams> PW_PersonTeams { get; set; }
    }
}
