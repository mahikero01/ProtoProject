﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectWorkplace.Models
{
    public class PW_Auth_DTO
    {
        public bool isAuthenticated { get; set; }
        public string domainName { get; set; }
        public string userName { get; set; }
    }
}