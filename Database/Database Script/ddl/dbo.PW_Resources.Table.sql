USE [dbbtVulTstp1]
GO
/****** Object:  Table [dbo].[PW_Resources]    Script Date: 3/24/2017 12:54:44 PM ******/
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
