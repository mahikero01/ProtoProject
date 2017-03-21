USE [dbbtVulTstp1]
GO
/****** Object:  Table [dbo].[PW_Answers]    Script Date: 3/21/2017 12:30:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[PW_Answers](
	[AnswerID] [uniqueidentifier] NOT NULL,
	[QuestionID] [uniqueidentifier] NOT NULL,
	[AnswerDesc] [varchar](max) NOT NULL,
	[IsActive] [bit] NOT NULL,
	[IsCorrect] [bit] NOT NULL,
 CONSTRAINT [PK_PW_Answers] PRIMARY KEY CLUSTERED 
(
	[AnswerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[PW_Examinees]    Script Date: 3/21/2017 12:30:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PW_Examinees](
	[ExamineeID] [uniqueidentifier] NOT NULL,
	[PersonID] [uniqueidentifier] NOT NULL,
	[CodeNum] [int] NOT NULL,
	[SubjectID] [uniqueidentifier] NULL,
	[DateCompleted] [datetime2](7) NULL,
	[Score] [int] NOT NULL,
 CONSTRAINT [PK_PW_Examinees] PRIMARY KEY CLUSTERED 
(
	[ExamineeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[PW_Persons]    Script Date: 3/21/2017 12:30:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[PW_Persons](
	[PersonID] [uniqueidentifier] NOT NULL,
	[FirstName] [varchar](50) NOT NULL,
	[Lastname] [varchar](50) NOT NULL,
	[Username] [varchar](25) NOT NULL,
	[WorkDayNum] [varchar](15) NOT NULL,
	[RoleID] [int] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_PW_Persons] PRIMARY KEY CLUSTERED 
(
	[PersonID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[PW_PersonTeams]    Script Date: 3/21/2017 12:30:18 PM ******/
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
/****** Object:  Table [dbo].[PW_Questions]    Script Date: 3/21/2017 12:30:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[PW_Questions](
	[QuestionID] [uniqueidentifier] NOT NULL,
	[QuestionDesc] [varchar](max) NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_PW_Questions] PRIMARY KEY CLUSTERED 
(
	[QuestionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[PW_Resources]    Script Date: 3/21/2017 12:30:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[PW_Resources](
	[ResourceID] [uniqueidentifier] NOT NULL,
	[ResourceName] [varchar](150) NOT NULL,
	[ResourcePath] [varchar](150) NOT NULL,
	[ResourceCategory] [varchar](150) NOT NULL,
	[IsUrl] [bit] NOT NULL,
 CONSTRAINT [PK_PW_Resources] PRIMARY KEY CLUSTERED 
(
	[ResourceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[PW_Roles]    Script Date: 3/21/2017 12:30:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[PW_Roles](
	[RoleID] [int] IDENTITY(1,1) NOT NULL,
	[RoleDesc] [varchar](250) NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_PW_Roles] PRIMARY KEY CLUSTERED 
(
	[RoleID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[PW_Teams]    Script Date: 3/21/2017 12:30:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[PW_Teams](
	[TeamID] [uniqueidentifier] NOT NULL,
	[TeamDesc] [varchar](250) NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_PW_Teams] PRIMARY KEY CLUSTERED 
(
	[TeamID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [dbo].[PW_Answers]  WITH CHECK ADD  CONSTRAINT [FK_PW_Answers_PW_Questions] FOREIGN KEY([QuestionID])
REFERENCES [dbo].[PW_Questions] ([QuestionID])
GO
ALTER TABLE [dbo].[PW_Answers] CHECK CONSTRAINT [FK_PW_Answers_PW_Questions]
GO
ALTER TABLE [dbo].[PW_Examinees]  WITH CHECK ADD  CONSTRAINT [FK_PW_Examinees_PW_Persons] FOREIGN KEY([PersonID])
REFERENCES [dbo].[PW_Persons] ([PersonID])
GO
ALTER TABLE [dbo].[PW_Examinees] CHECK CONSTRAINT [FK_PW_Examinees_PW_Persons]
GO
ALTER TABLE [dbo].[PW_Persons]  WITH CHECK ADD  CONSTRAINT [FK_PW_Persons_PW_Roles] FOREIGN KEY([RoleID])
REFERENCES [dbo].[PW_Roles] ([RoleID])
GO
ALTER TABLE [dbo].[PW_Persons] CHECK CONSTRAINT [FK_PW_Persons_PW_Roles]
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
