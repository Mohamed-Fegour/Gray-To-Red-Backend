-- GrayToRed-2nd Year Project Database Script
-- Updated with constraints and auto-increment

CREATE DATABASE IF NOT EXISTS GrayToRedDB;
USE GrayToRedDB;

-- 1. Create Tables
CREATE TABLE IF NOT EXISTS Professor (
    ProfessorID BIGINT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(30) NOT NULL,
    LastName VARCHAR(30) NOT NULL,
    Email VARCHAR(50) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS ProblemSet (
    ProblemSetID BIGINT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(100),
    Description VARCHAR(300),
    DifficultyLevel VARCHAR(10),
    TimeLimit INT,
    MemoryLimit INT,
    CreatedDate DATE,
    ProfessorID BIGINT,
    FOREIGN KEY (ProfessorID) REFERENCES Professor(ProfessorID)
);

CREATE TABLE IF NOT EXISTS Section (
    SectionCode VARCHAR(10) PRIMARY KEY,
    SectionName VARCHAR(50) NOT NULL,
    SchoolYear VARCHAR(10) NOT NULL,
    Semester VARCHAR(10) NOT NULL,
    ProfessorID BIGINT NOT NULL,
    FOREIGN KEY (ProfessorID) REFERENCES Professor(ProfessorID)
);

CREATE TABLE IF NOT EXISTS SectionProblemSet (
    SectionCode VARCHAR(10) NOT NULL,
    ProblemSetID BIGINT NOT NULL,
    PRIMARY KEY (SectionCode, ProblemSetID),
    FOREIGN KEY (SectionCode) REFERENCES Section(SectionCode),
    FOREIGN KEY (ProblemSetID) REFERENCES ProblemSet(ProblemSetID)
);

CREATE TABLE IF NOT EXISTS Student (
    StudentID BIGINT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(30) NOT NULL,
    LastName VARCHAR(30) NOT NULL,
    Email VARCHAR(50) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    SectionCode VARCHAR(10) NOT NULL,
    FOREIGN KEY (SectionCode) REFERENCES Section(SectionCode)
);

CREATE TABLE IF NOT EXISTS CompletedProblemSets (
    CompletionID BIGINT AUTO_INCREMENT PRIMARY KEY,
    StudentID BIGINT NOT NULL,
    ProblemSetID BIGINT NOT NULL,
    SubmittedCode LONGTEXT,
    CompileTime DECIMAL(6,2),
    ExecutionTime DECIMAL(6,2),
    SubmissionDateTime DATETIME,
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
    FOREIGN KEY (ProblemSetID) REFERENCES ProblemSet(ProblemSetID)
);

CREATE TABLE IF NOT EXISTS Score (
    ScoreID BIGINT AUTO_INCREMENT PRIMARY KEY,
    CompletionID BIGINT NOT NULL,
    ScoreValue INT,
    Status CHAR(1),
    FOREIGN KEY (CompletionID) REFERENCES CompletedProblemSets(CompletionID)
);

CREATE TABLE IF NOT EXISTS Leaderboard (
    LeaderboardID BIGINT AUTO_INCREMENT PRIMARY KEY,
    StudentID BIGINT NOT NULL,
    ProblemSetID BIGINT NOT NULL,
    TotalScore INT,
    Rank INT,
    CompletionTime DECIMAL(8,2),
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
    FOREIGN KEY (ProblemSetID) REFERENCES ProblemSet(ProblemSetID)
);
