# 🔑 API Key Setup Instructions

## Quick Start

To use the NewsHub application, you need a free API key from NewsAPI.

### Step 1: Get Your API Key

1. Go to https://newsapi.org/register
2. Fill out the registration form
3. Verify your email
4. Copy your API key from the dashboard

### Step 2: Add API Key to App

1. Open the file: `src/App.jsx`
2. Find line 18 which says:
   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```
3. Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const API_KEY = 'abc123your-actual-key-here';
   ```
4. Save the file

The app will automatically reload with your API key!

### Alternative: Use Demo Data

If you want to test the app without an API key, the app will show an error message but you can still see the UI design and layout.

## Important Notes

- **Free Tier Limits**: 100 requests per day
- **Development Only**: Free keys work only on localhost
- **No Credit Card Required**: The free tier is completely free
- **Rate Limiting**: Don't make too many requests in a short time

## Troubleshooting

### "Invalid API key" error:
- Make sure you copied the entire key
- Check for extra spaces
- Verify your email with NewsAPI

### No articles showing:
- Check your internet connection
- Verify the API key is correct
- Check the browser console for errors

### CORS errors:
- These are normal on localhost with the free tier
- The app is designed to handle them gracefully

---

**Need Help?** Visit [NewsAPI Documentation](https://newsapi.org/docs)
