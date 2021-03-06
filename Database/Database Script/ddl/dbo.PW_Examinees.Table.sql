USE [dbbtVulTstp1]
GO
/****** Object:  Table [dbo].[PW_Examinees]    Script Date: 3/24/2017 12:54:44 PM ******/
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
	[Items] [int] NOT NULL,
 CONSTRAINT [PK_PW_Examinees] PRIMARY KEY CLUSTERED 
(
	[ExamineeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[PW_Examinees] ADD  CONSTRAINT [DF_PW_Examinees_Items]  DEFAULT ((0)) FOR [Items]
GO
ALTER TABLE [dbo].[PW_Examinees]  WITH CHECK ADD  CONSTRAINT [FK_PW_Examinees_PW_Persons] FOREIGN KEY([PersonID])
REFERENCES [dbo].[PW_Persons] ([PersonID])
GO
ALTER TABLE [dbo].[PW_Examinees] CHECK CONSTRAINT [FK_PW_Examinees_PW_Persons]
GO
