USE [dbbtVulTstp1]
GO
/****** Object:  Table [dbo].[PW_Persons]    Script Date: 3/24/2017 12:54:44 PM ******/
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
ALTER TABLE [dbo].[PW_Persons]  WITH CHECK ADD  CONSTRAINT [FK_PW_Persons_PW_Roles] FOREIGN KEY([RoleID])
REFERENCES [dbo].[PW_Roles] ([RoleID])
GO
ALTER TABLE [dbo].[PW_Persons] CHECK CONSTRAINT [FK_PW_Persons_PW_Roles]
GO
