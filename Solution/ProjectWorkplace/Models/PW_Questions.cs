//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ProjectWorkplace.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class PW_Questions
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public PW_Questions()
        {
            this.PW_Answers = new HashSet<PW_Answers>();
            this.PW_QuizTags = new HashSet<PW_QuizTags>();
        }
    
        public System.Guid QuestionID { get; set; }
        public string QuestionDesc { get; set; }
        public bool IsCommon { get; set; }
        public bool IsMultipleAns { get; set; }
        public bool IsActive { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PW_Answers> PW_Answers { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PW_QuizTags> PW_QuizTags { get; set; }
    }
}
