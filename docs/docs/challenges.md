# Challenges & Solutions

During the development of the Crypto Price Tracker, I encountered several challenges and implemented solutions to address them. This document outlines these challenges and how I overcame them.

## API Rate Limiting

### Challenge

The CoinGecko API has rate limits on its free tier (approximately 10-50 calls per minute). Exceeding these limits results in 429 (Too Many Requests) errors, which can disrupt the user experience.

### Solution

I implemented several strategies to handle rate limiting:

1. **Caching with React Query**: I configured React Query with a stale time of 60 seconds to prevent excessive API calls:

2. **Specific Error Handling**: I added specific error handling for rate limit errors to provide clear feedback to users:

3. **Manual Refresh Control**: I provided a manual refresh button instead of automatic refreshing to give users control over when to fetch new data.

## Responsive Design

### Challenge

Creating a responsive design that works well on both desktop and mobile devices while displaying data-rich cryptocurrency information.

### Solution

I used Tailwind CSS with a mobile-first approach:

1. **Grid Layout with Responsive Breakpoints**:

2. **Responsive Search and Controls**:

3. **Compact Card Design**: I designed cryptocurrency cards to display essential information in a compact, readable format that works well on smaller screens.
