namespace ProjectWorkplace.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class PW_Roles
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public PW_Roles()
        {
            PW_Persons = new HashSet<PW_Persons>();
        }

        [Key]
        public int RoleID { get; set; }

        [Required]
        [StringLength(250)]
        public string RoleDesc { get; set; }

        public bool IsActive { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PW_Persons> PW_Persons { get; set; }
    }
}
