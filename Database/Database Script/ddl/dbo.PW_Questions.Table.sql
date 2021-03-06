USE [dbbtVulTstp1]
GO
/****** Object:  Table [dbo].[PW_Questions]    Script Date: 3/24/2017 12:54:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[PW_Questions](
	[QuestionID] [uniqueidentifier] NOT NULL,
	[QuestionDesc] [varchar](max) NOT NULL,
	[IsCommon] [bit] NOT NULL,
	[IsMultipleAns] [bit] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_PW_Questions] PRIMARY KEY CLUSTERED 
(
	[QuestionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [dbo].[PW_Questions] ADD  CONSTRAINT [DF_PW_Questions_IsCommon]  DEFAULT ((0)) FOR [IsCommon]
GO
ALTER TABLE [dbo].[PW_Questions] ADD  CONSTRAINT [DF_PW_Questions_IsMultipleAns]  DEFAULT ((0)) FOR [IsMultipleAns]
GO
ALTER TABLE [dbo].[PW_Questions] ADD  CONSTRAINT [DF_PW_Questions_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
