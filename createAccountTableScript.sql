USE [hk_db_dev]
GO

/****** Object:  Table [dbo].[hk_accounts]    Script Date: 21/08/2022 5:25:07 am ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[hk_accounts](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[account_id] [bigint] NULL,
	[consumer_id] [bigint] NULL,
	[account_nature] [nvarchar](255) NULL,
	[account_type] [nvarchar](255) NULL,
	[active] [int] NULL,
	[balance_amount] [decimal](19, 2) NULL,
	[box_color] [nvarchar](255) NULL,
	[box_icon] [nvarchar](255) NULL,
	[description] [nvarchar](255) NULL,
	[flex1] [nvarchar](255) NULL,
	[flex2] [nvarchar](255) NULL,
	[flex3] [nvarchar](255) NULL,
	[flex4] [nvarchar](255) NULL,
	[flex5] [nvarchar](255) NULL,
	[flex6] [nvarchar](255) NULL,
	[gl_account_no] [nvarchar](255) NULL,
	[title] [nvarchar](255) NULL,
	[opening_balance] [decimal](19, 2) NULL,
	[bank_name] [nvarchar](255) NULL,
	[record_created_on] [datetime] NULL,
	[is_sync] [int] NULL,
	[device_type] [nvarchar](255) NULL,
	[sys_defined] [int] NULL,
	[net_amount_total] [decimal](19, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[hk_accounts] ADD  DEFAULT ((0.00)) FOR [balance_amount]
GO

ALTER TABLE [dbo].[hk_accounts] ADD  DEFAULT ((0.00)) FOR [opening_balance]
GO

ALTER TABLE [dbo].[hk_accounts] ADD  DEFAULT ((0.00)) FOR [is_sync]
GO

ALTER TABLE [dbo].[hk_accounts] ADD  DEFAULT ((0.00)) FOR [sys_defined]
GO

ALTER TABLE [dbo].[hk_accounts] ADD  DEFAULT ((0.00)) FOR [net_amount_total]
GO


