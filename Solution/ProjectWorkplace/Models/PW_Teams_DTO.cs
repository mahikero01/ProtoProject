using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectWorkplace.Models
{
    public class PW_Teams_DTO
    {
        public System.Guid TeamID { get; set; }
        public string TeamDesc { get; set; }
        public bool IsActive { get; set; }
    }
}