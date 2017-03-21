namespace ProjectWorkplace.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class ProjectWorkplaceContext : DbContext
    {
        public ProjectWorkplaceContext()
            : base("name=ProjectWorkplaceContext")
        {
        }

        public virtual DbSet<PW_Answers> PW_Answers { get; set; }
        public virtual DbSet<PW_Examinees> PW_Examinees { get; set; }
        public virtual DbSet<PW_Persons> PW_Persons { get; set; }
        public virtual DbSet<PW_PersonTeams> PW_PersonTeams { get; set; }
        public virtual DbSet<PW_Questions> PW_Questions { get; set; }
        public virtual DbSet<PW_Resources> PW_Resources { get; set; }
        public virtual DbSet<PW_Roles> PW_Roles { get; set; }
        public virtual DbSet<PW_Teams> PW_Teams { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PW_Answers>()
                .Property(e => e.AnswerDesc)
                .IsUnicode(false);

            modelBuilder.Entity<PW_Persons>()
                .Property(e => e.FirstName)
                .IsUnicode(false);

            modelBuilder.Entity<PW_Persons>()
                .Property(e => e.Lastname)
                .IsUnicode(false);

            modelBuilder.Entity<PW_Persons>()
                .Property(e => e.Username)
                .IsUnicode(false);

            modelBuilder.Entity<PW_Persons>()
                .Property(e => e.WorkDayNum)
                .IsUnicode(false);

            modelBuilder.Entity<PW_Persons>()
                .HasMany(e => e.PW_Examinees)
                .WithRequired(e => e.PW_Persons)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<PW_Persons>()
                .HasMany(e => e.PW_PersonTeams)
                .WithRequired(e => e.PW_Persons)
                .HasForeignKey(e => e.PersonID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<PW_Persons>()
                .HasMany(e => e.PW_PersonTeams1)
                .WithRequired(e => e.PW_Persons1)
                .HasForeignKey(e => e.LeaderID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<PW_Questions>()
                .Property(e => e.QuestionDesc)
                .IsUnicode(false);

            modelBuilder.Entity<PW_Questions>()
                .HasMany(e => e.PW_Answers)
                .WithRequired(e => e.PW_Questions)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<PW_Resources>()
                .Property(e => e.ResourceName)
                .IsUnicode(false);

            modelBuilder.Entity<PW_Resources>()
                .Property(e => e.ResourcePath)
                .IsUnicode(false);

            modelBuilder.Entity<PW_Resources>()
                .Property(e => e.ResourceCategory)
                .IsUnicode(false);

            modelBuilder.Entity<PW_Roles>()
                .Property(e => e.RoleDesc)
                .IsUnicode(false);

            modelBuilder.Entity<PW_Roles>()
                .HasMany(e => e.PW_Persons)
                .WithRequired(e => e.PW_Roles)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<PW_Teams>()
                .Property(e => e.TeamDesc)
                .IsUnicode(false);

            modelBuilder.Entity<PW_Teams>()
                .HasMany(e => e.PW_PersonTeams)
                .WithRequired(e => e.PW_Teams)
                .WillCascadeOnDelete(false);
        }
    }
}
