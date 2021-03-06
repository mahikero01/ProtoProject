USE [dbbtVulTstp1]
GO
/****** Object:  Table [dbo].[PW_PersonTeams]    Script Date: 3/24/2017 12:54:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PW_PersonTeams](
	[PersonTeamID] [uniqueidentifier] NOT NULL,
	[PersonID] [uniqueidentifier] NOT NULL,
	[TeamID] [uniqueidentifier] NOT NULL,
	[LeaderID] [uniqueidentifier] NOT NULL,
	[EffectiveDate] [datetime2](7) NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_PW_PersonTeams] PRIMARY KEY CLUSTERED 
(
	[PersonTeamID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[PW_PersonTeams]  WITH CHECK ADD  CONSTRAINT [FK_PW_PersonTeams_PW_Persons] FOREIGN KEY([PersonID])
REFERENCES [dbo].[PW_Persons] ([PersonID])
GO
ALTER TABLE [dbo].[PW_PersonTeams] CHECK CONSTRAINT [FK_PW_PersonTeams_PW_Persons]
GO
ALTER TABLE [dbo].[PW_PersonTeams]  WITH CHECK ADD  CONSTRAINT [FK_PW_PersonTeams_PW_Persons1] FOREIGN KEY([LeaderID])
REFERENCES [dbo].[PW_Persons] ([PersonID])
GO
ALTER TABLE [dbo].[PW_PersonTeams] CHECK CONSTRAINT [FK_PW_PersonTeams_PW_Persons1]
GO
ALTER TABLE [dbo].[PW_PersonTeams]  WITH CHECK ADD  CONSTRAINT [FK_PW_PersonTeams_PW_Teams] FOREIGN KEY([TeamID])
REFERENCES [dbo].[PW_Teams] ([TeamID])
GO
ALTER TABLE [dbo].[PW_PersonTeams] CHECK CONSTRAINT [FK_PW_PersonTeams_PW_Teams]
GO
