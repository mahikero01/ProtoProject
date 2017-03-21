namespace ProjectWorkplace.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class PW_Resources
    {
        [Key]
        public Guid ResourceID { get; set; }

        [Required]
        [StringLength(150)]
        public string ResourceName { get; set; }

        [Required]
        [StringLength(150)]
        public string ResourcePath { get; set; }

        [Required]
        [StringLength(150)]
        public string ResourceCategory { get; set; }

        public bool IsUrl { get; set; }
    }
}
