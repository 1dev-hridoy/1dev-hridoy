# 🚀 BuyMeACha: Deployment & Rollback Guide

This document acts as your **Deployment Command Center**.\
Save this file as **DEPLOY_COMMANDS.md** inside your VPS project folder.

------------------------------------------------------------------------

# 1. Check Current Deployment Status

Before updating, check what code is currently running on the server.

### View current commit

``` bash
git log -n 1
```

### Check API status

``` bash
pm2 describe buymeacha-api
```

------------------------------------------------------------------------

# 2. Deploy Latest Changes

Run these commands when new updates exist in your GitHub repository.

``` bash
# Pull latest code
git fetch origin
git reset --hard origin/main

# Install dependencies
npm install

# Rebuild frontend
rm -rf dist
npm run build

# Restart services
pm2 restart buymeacha-api --update-env
sudo systemctl restart nginx
```

------------------------------------------------------------------------

# 3. Emergency Rollback

If the latest deployment breaks your site, revert to the previous
working version.

## Step A: Find previous stable commit

``` bash
git log --oneline -n 5
```

Example:

    798dcce Fixed login bug
    352a56c Initial working version  <-- target commit

## Step B: Reset to that commit

Replace `[COMMIT_HASH]` with the commit you want to restore.

``` bash
git reset --hard [COMMIT_HASH]

npm install
rm -rf dist
npm run build

pm2 restart buymeacha-api --update-env
sudo systemctl restart nginx
```

------------------------------------------------------------------------

# 4. Troubleshooting Checklist

If something looks wrong after deployment:

### Check backend logs

``` bash
pm2 logs buymeacha-api --lines 50
```

### Check disk space

``` bash
df -h
```

### Verify environment variables

``` bash
cat .env
```

### Browser issue

Try: - Incognito Mode - Hard refresh **Ctrl + F5**

------------------------------------------------------------------------

# ⚡ Automated Deploy Script

Create a file called **deploy.sh**

``` bash
#!/bin/bash

echo "Starting deployment..."

git fetch origin
git reset --hard origin/main

npm install

rm -rf dist
npm run build

pm2 restart buymeacha-api --update-env
sudo systemctl restart nginx

echo "🚀 Deployment Successful!"
```

Make it executable:

``` bash
chmod +x deploy.sh
```

Run it:

``` bash
./deploy.sh
```
