USE [dbbtVulTstp1]
GO
/****** Object:  Table [dbo].[PW_QuizTags]    Script Date: 3/24/2017 12:54:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PW_QuizTags](
	[QuizTagID] [uniqueidentifier] NOT NULL,
	[QuestionID] [uniqueidentifier] NOT NULL,
	[SubjectID] [uniqueidentifier] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_PK_QuickTags] PRIMARY KEY CLUSTERED 
(
	[QuizTagID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[PW_QuizTags] ADD  CONSTRAINT [DF_PK_QuickTags_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[PW_QuizTags]  WITH CHECK ADD  CONSTRAINT [FK_PW_QuickTags_PW_Questions] FOREIGN KEY([QuestionID])
REFERENCES [dbo].[PW_Questions] ([QuestionID])
GO
ALTER TABLE [dbo].[PW_QuizTags] CHECK CONSTRAINT [FK_PW_QuickTags_PW_Questions]
GO
ALTER TABLE [dbo].[PW_QuizTags]  WITH CHECK ADD  CONSTRAINT [FK_PW_QuickTags_PW_Subjects] FOREIGN KEY([SubjectID])
REFERENCES [dbo].[PW_Subjects] ([SubjectID])
GO
ALTER TABLE [dbo].[PW_QuizTags] CHECK CONSTRAINT [FK_PW_QuickTags_PW_Subjects]
GO
