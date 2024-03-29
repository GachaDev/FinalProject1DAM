USE [master]
GO
/****** Object:  Database [proyectoJacobo]    Script Date: 01/06/2023 21:17:15 ******/
CREATE DATABASE [proyectoJacobo]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'proyectoJacobo', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\proyectoJacobo.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'proyectoJacobo_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\proyectoJacobo_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [proyectoJacobo] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [proyectoJacobo].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [proyectoJacobo] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [proyectoJacobo] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [proyectoJacobo] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [proyectoJacobo] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [proyectoJacobo] SET ARITHABORT OFF 
GO
ALTER DATABASE [proyectoJacobo] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [proyectoJacobo] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [proyectoJacobo] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [proyectoJacobo] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [proyectoJacobo] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [proyectoJacobo] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [proyectoJacobo] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [proyectoJacobo] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [proyectoJacobo] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [proyectoJacobo] SET  ENABLE_BROKER 
GO
ALTER DATABASE [proyectoJacobo] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [proyectoJacobo] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [proyectoJacobo] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [proyectoJacobo] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [proyectoJacobo] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [proyectoJacobo] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [proyectoJacobo] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [proyectoJacobo] SET RECOVERY FULL 
GO
ALTER DATABASE [proyectoJacobo] SET  MULTI_USER 
GO
ALTER DATABASE [proyectoJacobo] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [proyectoJacobo] SET DB_CHAINING OFF 
GO
ALTER DATABASE [proyectoJacobo] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [proyectoJacobo] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [proyectoJacobo] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [proyectoJacobo] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'proyectoJacobo', N'ON'
GO
ALTER DATABASE [proyectoJacobo] SET QUERY_STORE = ON
GO
ALTER DATABASE [proyectoJacobo] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [proyectoJacobo]
GO
/****** Object:  Table [dbo].[TJornada]    Script Date: 01/06/2023 21:17:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TJornada](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[fecha] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TJugador]    Script Date: 01/06/2023 21:17:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TJugador](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[posicion] [varchar](50) NULL,
	[imagen] [varchar](350) NULL,
	[equipo] [varchar](50) NULL,
	[tipo] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TPartido]    Script Date: 01/06/2023 21:17:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TPartido](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[jornada] [int] NULL,
	[hour] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TPartidoScore]    Script Date: 01/06/2023 21:17:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TPartidoScore](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[partido] [int] NULL,
	[equipo] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TPartidoScoreGoals]    Script Date: 01/06/2023 21:17:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TPartidoScoreGoals](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[partido] [int] NULL,
	[jugador] [int] NULL,
	[equipo] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TTeam]    Script Date: 01/06/2023 21:17:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TTeam](
	[name] [varchar](50) NOT NULL,
	[logo] [varchar](300) NULL,
	[iniciales] [varchar](50) NOT NULL,
	[background] [varchar](300) NULL,
PRIMARY KEY CLUSTERED 
(
	[name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuarios]    Script Date: 01/06/2023 21:17:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuarios](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](55) NULL,
	[mail] [varchar](55) NULL,
	[password] [varchar](55) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[mail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TJugador] ADD  DEFAULT (NULL) FOR [nombre]
GO
ALTER TABLE [dbo].[TJugador] ADD  DEFAULT (NULL) FOR [posicion]
GO
ALTER TABLE [dbo].[TJugador] ADD  DEFAULT (NULL) FOR [imagen]
GO
ALTER TABLE [dbo].[TJugador] ADD  DEFAULT (NULL) FOR [equipo]
GO
ALTER TABLE [dbo].[TJugador] ADD  DEFAULT ('draft') FOR [tipo]
GO
ALTER TABLE [dbo].[TPartidoScore] ADD  DEFAULT (NULL) FOR [equipo]
GO
ALTER TABLE [dbo].[TPartidoScoreGoals] ADD  DEFAULT (NULL) FOR [equipo]
GO
ALTER TABLE [dbo].[TTeam] ADD  DEFAULT (NULL) FOR [name]
GO
ALTER TABLE [dbo].[TTeam] ADD  DEFAULT (NULL) FOR [logo]
GO
ALTER TABLE [dbo].[TTeam] ADD  DEFAULT (NULL) FOR [iniciales]
GO
ALTER TABLE [dbo].[TTeam] ADD  DEFAULT (NULL) FOR [background]
GO
ALTER TABLE [dbo].[usuarios] ADD  DEFAULT (NULL) FOR [name]
GO
ALTER TABLE [dbo].[usuarios] ADD  DEFAULT (NULL) FOR [mail]
GO
ALTER TABLE [dbo].[usuarios] ADD  DEFAULT (NULL) FOR [password]
GO
ALTER TABLE [dbo].[TJugador]  WITH CHECK ADD  CONSTRAINT [FK_TJugador_TTeam] FOREIGN KEY([equipo])
REFERENCES [dbo].[TTeam] ([name])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TJugador] CHECK CONSTRAINT [FK_TJugador_TTeam]
GO
ALTER TABLE [dbo].[TPartido]  WITH CHECK ADD  CONSTRAINT [FK_TPartido_TJornada] FOREIGN KEY([jornada])
REFERENCES [dbo].[TJornada] ([id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TPartido] CHECK CONSTRAINT [FK_TPartido_TJornada]
GO
ALTER TABLE [dbo].[TPartidoScore]  WITH CHECK ADD  CONSTRAINT [FK_TPartidoScore_TPartido] FOREIGN KEY([partido])
REFERENCES [dbo].[TPartido] ([id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TPartidoScore] CHECK CONSTRAINT [FK_TPartidoScore_TPartido]
GO
ALTER TABLE [dbo].[TPartidoScore]  WITH CHECK ADD  CONSTRAINT [FK_TPartidoScore_TTeam] FOREIGN KEY([equipo])
REFERENCES [dbo].[TTeam] ([name])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TPartidoScore] CHECK CONSTRAINT [FK_TPartidoScore_TTeam]
GO
ALTER TABLE [dbo].[TPartidoScoreGoals]  WITH CHECK ADD  CONSTRAINT [FK_TPartidoScoreGoals_TJugador] FOREIGN KEY([jugador])
REFERENCES [dbo].[TJugador] ([id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TPartidoScoreGoals] CHECK CONSTRAINT [FK_TPartidoScoreGoals_TJugador]
GO
ALTER TABLE [dbo].[TPartidoScoreGoals]  WITH CHECK ADD  CONSTRAINT [FK_TPartidoScoreGoals_TPartido] FOREIGN KEY([partido])
REFERENCES [dbo].[TPartido] ([id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TPartidoScoreGoals] CHECK CONSTRAINT [FK_TPartidoScoreGoals_TPartido]
GO
ALTER TABLE [dbo].[TPartidoScoreGoals]  WITH CHECK ADD  CONSTRAINT [FK_TPartidoScoreGoals_TTeam] FOREIGN KEY([equipo])
REFERENCES [dbo].[TTeam] ([name])
GO
ALTER TABLE [dbo].[TPartidoScoreGoals] CHECK CONSTRAINT [FK_TPartidoScoreGoals_TTeam]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TJornada', @level2type=N'COLUMN',@level2name=N'fecha'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TJugador', @level2type=N'COLUMN',@level2name=N'nombre'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TJugador', @level2type=N'COLUMN',@level2name=N'posicion'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TJugador', @level2type=N'COLUMN',@level2name=N'imagen'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TJugador', @level2type=N'COLUMN',@level2name=N'equipo'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TJugador', @level2type=N'COLUMN',@level2name=N'tipo'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TPartido', @level2type=N'COLUMN',@level2name=N'jornada'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TPartido', @level2type=N'COLUMN',@level2name=N'hour'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TPartidoScore', @level2type=N'COLUMN',@level2name=N'partido'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TPartidoScore', @level2type=N'COLUMN',@level2name=N'equipo'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TPartidoScoreGoals', @level2type=N'COLUMN',@level2name=N'partido'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TPartidoScoreGoals', @level2type=N'COLUMN',@level2name=N'jugador'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TPartidoScoreGoals', @level2type=N'COLUMN',@level2name=N'equipo'
GO
USE [master]
GO
ALTER DATABASE [proyectoJacobo] SET  READ_WRITE 
GO
