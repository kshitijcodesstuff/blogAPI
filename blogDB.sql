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

DROP TABLE `Categories`;
CREATE TABLE IF NOT EXISTS Categories(
    id VARCHAR(60) PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT
);

DROP TABLE `Posts`;
CREATE TABLE IF NOT EXISTS Posts(
    id VARCHAR(60) PRIMARY KEY,
    title VARCHAR(255),
    body TEXT NOT NULL,
    author_id VARCHAR(60) NOT NULL,
    category_id VARCHAR(60) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    published_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    image_url VARCHAR(255),
    comments_count INT,
    likes_count INT,
    FOREIGN KEY (author_id) REFERENCES Users (id),
    FOREIGN KEY (category_id) REFERENCES Categories (id)
);

DROP TABLE `Comments`;
CREATE TABLE IF NOT EXISTS Comments(
    id VARCHAR(60) PRIMARY KEY,
    post_id VARCHAR(60) NOT NULL,
    user_id VARCHAR(60) NOT NULL,
    content TEXT,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    likes_count INT,
    FOREIGN KEY (post_id) REFERENCES Posts (id),
    FOREIGN KEY (user_id) REFERENCES Users (id)
);
