using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectWorkplace.Models
{
    public class PW_Persons_DTO
    {
        public System.Guid PersonID { get; set; }
        public string FirstName { get; set; }
        public string Lastname { get; set; }
        public string Username { get; set; }
        public string WorkDayNum { get; set; }
        public int RoleID { get; set; }
        public bool IsActive { get; set; }
    }
}