@echo off

:: Type 'push' to push into github with deafult commit name
:: Type 'push "custom commit name"' to push into github with custom commit name

if "%~1"=="" (
    git add .
    git commit -m "pussy was too lazy to name the commit"
    git push -u origin main
) else (
    git add .
    git commit -m %1
    git push -u origin main
)