using ProjectWorkplace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace ProjectWorkplace.Controllers
{
    public class UserAuthController : ApiController
    {
        private ProjectWorkplaceContext db = new ProjectWorkplaceContext();
        // GET api/userauth
        public PW_Auth_DTO Get()
        {   
            //withDomain
            string currentDomainUser = HttpContext.Current.User.Identity.Name.ToString();
            //username only
            string currentUsername = currentDomainUser.Remove(0,currentDomainUser.IndexOf('\\')+1);
            int index = currentDomainUser.IndexOf("\\"+currentUsername);
            //Domain Name only
            string currentDomainname = (index < 0) ? currentDomainUser : currentDomainUser.Remove(index, currentUsername.Length+1);
            var a = from i in db.PW_Persons
                    where i.Username == currentUsername
                    select i;

            if (a.Count() == 0)
            {
                return new PW_Auth_DTO
                {
                    isAuthenticated=false,
                    userName=currentUsername,
                    domainName=currentDomainname
                };
            }
            else
            {
                return new PW_Auth_DTO
                {
                    isAuthenticated = true,
                    userName=currentUsername,
                    domainName=currentDomainname,
                    displayName=a.First().FirstName.Trim(),
                    fullName=a.First().FirstName.Trim() + " "+a.First().Lastname.Trim(),
                    role=a.First().PW_Roles.RoleDesc
                };
            }
        }
    }
}
