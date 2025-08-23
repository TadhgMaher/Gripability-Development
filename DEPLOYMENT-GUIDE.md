# Deployment Guide: GitHub Pages → Gripability.com

## 🧪 **Current Setup (Testing Phase)**

### GitHub Pages Configuration

- **URL**: https://tadhgmaher.github.io/Gripability-Development/
- **Branch**: main
- **Build**: Automatic via GitHub Actions
- **TinaCMS**: Connected to GitHub Pages URL

### TinaCMS Project Setup

When creating your TinaCMS project, use these settings:

- **Site URL**: `https://tadhgmaher.github.io/Gripability-Development/`
- **Repository**: `TadhgMaher/Gripability-Development`
- **Branch**: `main`
- **Build Command**: `npm run build`
- **Build Directory**: `dist`

## 🚀 **Migration to Production (Gripability.com)**

### Step 1: Choose Hosting Provider

Popular options for static sites:

- **Netlify** (Recommended - free tier, automatic deployments)
- **Vercel** (Great for React, free tier)
- **Cloudflare Pages** (Fast global CDN, free tier)
- **AWS S3 + CloudFront** (More advanced setup)

### Step 2: Update TinaCMS Settings

1. Go to [app.tina.io](https://app.tina.io)
2. Select your project
3. Update "Site URL" to `https://gripability.com`
4. **Keep the same Client ID and Token** ✅

### Step 3: Domain Configuration

1. **Purchase/Configure Domain**: Point gripability.com to your hosting provider
2. **SSL Certificate**: Most providers handle this automatically
3. **Deploy**: Push your code to the new hosting platform

### Step 4: Update Environment (if needed)

Only change if moving to a different hosting provider:

```bash
# Update .env for production
VITE_BASE_URL=https://gripability.com
```

## 📋 **Migration Checklist**

### Before Migration:

- [ ] Test TinaCMS fully on GitHub Pages
- [ ] Ensure all content editing works
- [ ] Verify image uploads function
- [ ] Test both English/German content

### During Migration:

- [ ] Set up new hosting provider
- [ ] Configure custom domain (gripability.com)
- [ ] Update TinaCMS project URL
- [ ] Deploy and test

### After Migration:

- [ ] Verify TinaCMS editor works on new domain
- [ ] Test content editing on production
- [ ] Update any bookmarks/links
- [ ] Inform website owner of new admin URL

## 🔑 **Important Notes**

1. **Same Credentials**: Your TinaCMS Client ID and Token work across domains
2. **Content Preserved**: All content stays in your Git repository
3. **Zero Downtime**: You can test the new domain before switching
4. **Easy Rollback**: GitHub Pages remains as backup

## 🎯 **Recommended Approach**

1. **Phase 1** (Now): Test everything on GitHub Pages
2. **Phase 2**: Set up gripability.com hosting in parallel
3. **Phase 3**: Switch DNS and update TinaCMS URL
4. **Phase 4**: Deactivate GitHub Pages (optional)

This approach ensures a smooth transition with minimal risk! 🚀
