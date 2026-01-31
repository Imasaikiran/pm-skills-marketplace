#!/bin/bash

# Automated GitHub Push Script
# This script will push your code to GitHub

echo "🚀 PM Skills Marketplace - Auto Push Script"
echo "==========================================="
echo ""

# Get GitHub username
echo "Please enter your GitHub username:"
read -r GITHUB_USERNAME

# Construct repository URL
REPO_URL="https://github.com/$GITHUB_USERNAME/pm-skills-marketplace.git"

echo ""
echo "Repository URL: $REPO_URL"
echo ""

# Navigate to project directory
cd "/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace" || exit

# Remove existing remote if it exists
git remote remove origin 2>/dev/null

# Add new remote
echo "Adding GitHub remote..."
git remote add origin "$REPO_URL"

# Push to GitHub
echo ""
echo "Pushing code to GitHub..."
echo "You may be asked for your GitHub credentials."
echo "(Use your Personal Access Token as password, not your GitHub password!)"
echo ""

git branch -M main
git push -u origin main

echo ""
echo "==========================================="
echo "✅ Code pushed successfully to GitHub!"
echo ""
echo "View your repository at:"
echo "https://github.com/$GITHUB_USERNAME/pm-skills-marketplace"
echo ""
echo "Next step: Deploy to Vercel"
echo "See DEPLOYMENT_GUIDE.md for instructions"
echo "==========================================="
