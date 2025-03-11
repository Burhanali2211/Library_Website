@echo off
mkdir Islamic-Knowledge-Hub
cd Islamic-Knowledge-Hub

:: Creating HTML files
echo. > index.html
echo. > books.html
echo. > qna.html
echo. > references.html
echo. > admin.html
echo. > login.html

:: Creating assets directories
mkdir assets
mkdir assets\css
mkdir assets\js
mkdir assets\images

echo. > assets\css\style.css
echo. > assets\js\script.js

:: Creating backend directories
mkdir backend
echo. > backend\db.sqlite
echo. > backend\api.php

echo. > README.md

echo Project structure created successfully!
pause
