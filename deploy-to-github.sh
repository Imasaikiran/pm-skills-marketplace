#!/bin/bash

echo "🚀 Slashworks - Deploy to GitHub & Vercel"
echo "=========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ] && [ ! -d "website" ]; then
    echo "❌ Error: Not in project root directory"
    exit 1
fi

# Step 1: GitHub Push
echo "📤 Step 1: Pushing to GitHub..."
echo ""
echo "Your git remote is currently set to:"
git remote -v
echo ""
read -p "Do you want to update the GitHub repo URL? (y/n): " update_remote

if [ "$update_remote" = "y" ]; then
    read -p "Enter your GitHub username: " github_user
    read -p "Enter repository name (e.g., slashworks): " repo_name

    echo "Removing old remote..."
    git remote remove origin 2>/dev/null

    echo "Adding new remote..."
    git remote add origin "https://github.com/$github_user/$repo_name.git"

    echo "✅ Remote updated to: https://github.com/$github_user/$repo_name.git"
fi

echo ""
echo "Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
else
    echo "❌ Failed to push to GitHub"
    echo "💡 You may need to:"
    echo "   1. Create the repo on GitHub first"
    echo "   2. Authenticate with GitHub"
    exit 1
fi

echo ""
echo "=========================================="
echo "✅ GitHub Push Complete!"
echo ""
echo "🌐 Next Steps:"
echo "   1. Install Vercel CLI: npm install -g vercel"
echo "   2. Deploy: cd website && vercel --prod"
echo "   3. Add environment variables in Vercel dashboard"
echo "   4. Connect domain: slashworks.biz"
echo ""
echo "📚 See DEPLOY_TO_VERCEL.md for detailed instructions"
echo ""
