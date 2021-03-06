USE [dbbtVulTstp1]
GO
/****** Object:  Table [dbo].[PW_Subjects]    Script Date: 3/24/2017 12:54:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[PW_Subjects](
	[SubjectID] [uniqueidentifier] NOT NULL,
	[SubjectName] [varchar](25) NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_PW_Subjects] PRIMARY KEY CLUSTERED 
(
	[SubjectID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [dbo].[PW_Subjects] ADD  CONSTRAINT [DF_PW_Subjects_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
