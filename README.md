# BLOG API 
This repository houses the backend code for a lightweight, user-friendly blog platform built with NodeJS and express.This project allows users to:<br>
 &emsp; ⚪ <strong>Create and manage blog posts:</strong> Write, edit, add titles, bodies, and categories.<br>
 &emsp; ⚪ <strong>Comment on blog posts:</strong> Leave comments on a post.<br>
 &emsp; ⚪ <strong>User roles and permissions:</strong> Differentiate between admins, authors, and readers with varying access levels.


## FEATURES IMPLEMENTED
✔️ User signup and login with secure hashing and jwt authentication<br>
✔️ Users with Author permissions can create posts<br>
✔️ Users with admin permissions can create / delete categories<br>
✔️ Users can comment on a blog posts<br>

## TECHNOLOGIES USED
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

## GETTING STARTED
1. Clone the project
 
   ```
   git clone https://github.com/Ayine-nongre/Blog-API.git
   ```
2. Change to project directory

    ```
    cd Blog-API/
    ```
3. Set up enviroment variables in env file

   ```
   DB_USER, DB_PASSWD, PRIVATEKEY
   ```
4. Install packages used in project

   ```
   npm install
   ```
5. Start server

    ```
    nodemon app.js
    ```

## DISCLAIMER
This project is a basic implementation and lacks some advanced features like search, analytics, or social integrations. Feel free to extend its functionalities and tailor it to your specific needs.

I hope you find this project useful 😄





