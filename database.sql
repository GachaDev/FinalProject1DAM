-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         Microsoft SQL Server 2022 (RTM-GDR) (KB5021522) - 16.0.1050.5
-- SO del servidor:              Windows 10 Home 10.0 <X64> (Build 19045: )
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para proyectoJacobo
CREATE DATABASE IF NOT EXISTS "proyectoJacobo";
USE "proyectoJacobo";

-- Volcando estructura para tabla proyectoJacobo.TJornada
CREATE TABLE IF NOT EXISTS "TJornada" (
	"id" INT NOT NULL,
	"fecha" DATE NULL DEFAULT NULL,
	PRIMARY KEY ("id")
);

-- Volcando datos para la tabla proyectoJacobo.TJornada: 0 rows
/*!40000 ALTER TABLE "TJornada" DISABLE KEYS */;
/*!40000 ALTER TABLE "TJornada" ENABLE KEYS */;

-- Volcando estructura para tabla proyectoJacobo.TJugador
CREATE TABLE IF NOT EXISTS "TJugador" (
	"id" INT NOT NULL,
	"nombre" VARCHAR(50) NULL DEFAULT 'NULL' COLLATE 'Modern_Spanish_CI_AS',
	"posicion" VARCHAR(50) NULL DEFAULT 'NULL' COLLATE 'Modern_Spanish_CI_AS',
	"imagen" VARCHAR(50) NULL DEFAULT 'NULL' COLLATE 'Modern_Spanish_CI_AS',
	"equipo" VARCHAR(50) NULL DEFAULT 'NULL' COLLATE 'Modern_Spanish_CI_AS',
	FOREIGN KEY INDEX "FK_TJugador_TTeam" ("equipo"),
	PRIMARY KEY ("id"),
	CONSTRAINT "FK_TJugador_TTeam" FOREIGN KEY ("equipo") REFERENCES "TTeam" ("name") ON UPDATE CASCADE ON DELETE CASCADE
);

-- Volcando datos para la tabla proyectoJacobo.TJugador: 0 rows
/*!40000 ALTER TABLE "TJugador" DISABLE KEYS */;
/*!40000 ALTER TABLE "TJugador" ENABLE KEYS */;

-- Volcando estructura para tabla proyectoJacobo.TPartido
CREATE TABLE IF NOT EXISTS "TPartido" (
	"id" INT NOT NULL,
	"jornada" INT NULL DEFAULT NULL,
	"hour" TIME NULL DEFAULT NULL,
	FOREIGN KEY INDEX "FK_TPartido_TJornada" ("jornada"),
	PRIMARY KEY ("id"),
	CONSTRAINT "FK_TPartido_TJornada" FOREIGN KEY ("jornada") REFERENCES "TJornada" ("id") ON UPDATE CASCADE ON DELETE CASCADE
);

-- Volcando datos para la tabla proyectoJacobo.TPartido: 0 rows
/*!40000 ALTER TABLE "TPartido" DISABLE KEYS */;
/*!40000 ALTER TABLE "TPartido" ENABLE KEYS */;

-- Volcando estructura para tabla proyectoJacobo.TPartidoScore
CREATE TABLE IF NOT EXISTS "TPartidoScore" (
	"id" INT NOT NULL,
	"partido" INT NULL DEFAULT NULL,
	"equipo" VARCHAR(50) NULL DEFAULT 'NULL' COLLATE 'Modern_Spanish_CI_AS',
	FOREIGN KEY INDEX "FK_TPartidoScore_TPartido" ("partido"),
	FOREIGN KEY INDEX "FK_TPartidoScore_TTeam" ("equipo"),
	PRIMARY KEY ("id"),
	CONSTRAINT "FK_TPartidoScore_TTeam" FOREIGN KEY ("equipo") REFERENCES "TTeam" ("name") ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT "FK_TPartidoScore_TPartido" FOREIGN KEY ("partido") REFERENCES "TPartido" ("id") ON UPDATE CASCADE ON DELETE CASCADE
);

-- Volcando datos para la tabla proyectoJacobo.TPartidoScore: 0 rows
/*!40000 ALTER TABLE "TPartidoScore" DISABLE KEYS */;
/*!40000 ALTER TABLE "TPartidoScore" ENABLE KEYS */;

-- Volcando estructura para tabla proyectoJacobo.TPartidoScoreGoals
CREATE TABLE IF NOT EXISTS "TPartidoScoreGoals" (
	"id" INT NOT NULL,
	"partido" INT NULL DEFAULT NULL,
	"jugador" INT NULL DEFAULT NULL,
	"equipo" VARCHAR(50) NULL DEFAULT 'NULL' COLLATE 'Modern_Spanish_CI_AS',
	FOREIGN KEY INDEX "FK_TPartidoScoreGoals_TJugador" ("jugador"),
	FOREIGN KEY INDEX "FK_TPartidoScoreGoals_TPartido" ("partido"),
	FOREIGN KEY INDEX "FK_TPartidoScoreGoals_TTeam" ("equipo"),
	PRIMARY KEY ("id"),
	CONSTRAINT "FK_TPartidoScoreGoals_TTeam" FOREIGN KEY ("equipo") REFERENCES "TTeam" ("name") ON UPDATE NO_ACTION ON DELETE NO_ACTION,
	CONSTRAINT "FK_TPartidoScoreGoals_TJugador" FOREIGN KEY ("jugador") REFERENCES "TJugador" ("id") ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT "FK_TPartidoScoreGoals_TPartido" FOREIGN KEY ("partido") REFERENCES "TPartido" ("id") ON UPDATE CASCADE ON DELETE CASCADE
);

-- Volcando datos para la tabla proyectoJacobo.TPartidoScoreGoals: 0 rows
/*!40000 ALTER TABLE "TPartidoScoreGoals" DISABLE KEYS */;
/*!40000 ALTER TABLE "TPartidoScoreGoals" ENABLE KEYS */;

-- Volcando estructura para tabla proyectoJacobo.TTeam
CREATE TABLE IF NOT EXISTS "TTeam" (
	"name" VARCHAR(50) NOT NULL DEFAULT 'NULL' COLLATE 'Modern_Spanish_CI_AS',
	"logo" VARCHAR(50) NOT NULL DEFAULT 'NULL' COLLATE 'Modern_Spanish_CI_AS',
	"iniciales" VARCHAR(50) NOT NULL DEFAULT 'NULL' COLLATE 'Modern_Spanish_CI_AS',
	"background" VARCHAR(50) NOT NULL DEFAULT 'NULL' COLLATE 'Modern_Spanish_CI_AS',
	PRIMARY KEY ("name")
);

-- Volcando datos para la tabla proyectoJacobo.TTeam: 0 rows
/*!40000 ALTER TABLE "TTeam" DISABLE KEYS */;
/*!40000 ALTER TABLE "TTeam" ENABLE KEYS */;

-- Volcando estructura para tabla proyectoJacobo.usuarios
CREATE TABLE IF NOT EXISTS "usuarios" (
	"id" INT NOT NULL,
	"name" VARCHAR(55) NULL DEFAULT NULL COLLATE 'Modern_Spanish_CI_AS',
	"mail" VARCHAR(55) NULL DEFAULT NULL COLLATE 'Modern_Spanish_CI_AS',
	"password" VARCHAR(55) NULL DEFAULT NULL COLLATE 'Modern_Spanish_CI_AS',
	PRIMARY KEY ("id")
);

-- Volcando datos para la tabla proyectoJacobo.usuarios: 4 rows
/*!40000 ALTER TABLE "usuarios" DISABLE KEYS */;
INSERT INTO "usuarios" ("id", "name", "mail", "password") VALUES
	(1, 'Juan Pérez', 'juan@example.com', 'password123'),
	(2, 'admin', 'admin', '1'),
	(3, 'pepe90', 'pepe', '1'),
	(4, 'chipilin', 'fran', '1');
/*!40000 ALTER TABLE "usuarios" ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
