CREATE DATABASE IF NOT EXISTS blogDB;
USE blogDB;

DROP TABLE `Users`;
CREATE TABLE IF NOT EXISTS Users(
    id VARCHAR(60) PRIMARY KEY, 
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    bio TEXT,
    profile_pic VARCHAR(255),
    role VARCHAR(10),
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);
