@echo off
echo --- Initializing Git ---
git init
echo --- Adding Files ---
git add .
echo --- Committing ---
git commit -m "Upload everything"
echo --- Setting Branch to main ---
git branch -M main
echo --- Removing old origin ---
git remote remove origin 2>nul
echo --- Adding new origin ---
git remote add origin https://github.com/Dimanoid-IV/lend.git
echo --- Pushing to GitHub (Force) ---
echo IF YOU SEE A PROMPT, PLEASE LOGIN IN THE POPUP WINDOW
git push -u origin main --force
pause
