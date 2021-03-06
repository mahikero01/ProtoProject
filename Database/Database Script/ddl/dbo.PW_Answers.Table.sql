USE [dbbtVulTstp1]
GO
/****** Object:  Table [dbo].[PW_Answers]    Script Date: 3/24/2017 12:54:44 PM ******/
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
ALTER TABLE [dbo].[PW_Answers]  WITH CHECK ADD  CONSTRAINT [FK_PW_Answers_PW_Questions] FOREIGN KEY([QuestionID])
REFERENCES [dbo].[PW_Questions] ([QuestionID])
GO
ALTER TABLE [dbo].[PW_Answers] CHECK CONSTRAINT [FK_PW_Answers_PW_Questions]
GO
