# WordPress Headless CMS Setup

This project uses WordPress as a headless CMS. The frontend (Next.js) fetches content from WordPress via the REST API.

## 1. Install WordPress

### Option A: Local (Development)
```bash
# Using Local WP (recommended for Mac/Win)
# Download from https://localwp.com
# Create a new site → set PHP 8.1+, MySQL 8.0
```

### Option B: Live Server
Deploy WordPress on any host that meets the minimum requirements (PHP 8.0+, MySQL 8.0+).

## 2. Required Plugins

Install and activate these plugins:

| Plugin | Purpose |
|--------|---------|
| **Advanced Custom Fields (ACF)** | Custom fields for events, projects, sermons |
| **Custom Post Type UI (CPT UI)** | Register custom post types |
| **WPGraphQL** (optional) | Alternative GraphQL API |
| **JWT Authentication** (optional) | For authenticated requests |

## 3. Custom Post Types

Register these post types using CPT UI or code:

### Events (`events`)
- Slug: `events`
- Supports: title, editor, excerpt, thumbnail
- ACF Fields:
  - `event_date` (date picker)
  - `event_time` (text)
  - `location` (text)
  - `category` (text)
  - `status` (select: upcoming, past)
  - `schedule` (repeater: time, activity)

### Projects (`projects`)
- Slug: `projects`
- Supports: title, editor, excerpt, thumbnail
- ACF Fields:
  - `goal` (number)
  - `raised` (number)
  - `partners` (number)
  - `category` (text)
  - `status` (select: active, completed)
  - `gallery` (gallery)
  - `video_url` (url)

### Sermons (`sermons`)
- Slug: `sermons`
- Supports: title, editor, thumbnail
- ACF Fields:
  - `sermon_date` (date picker)
  - `excerpt` (textarea)
  - `youtube_url` (url)
  - `duration` (text)

## 4. Categories

Create these blog categories:
- Faith, Prayer, Prophecy, Finances, Family

## 5. Permalinks

Go to Settings → Permalinks → Select "Post name"

## 6. Environment Variable

Add to `.env.local`:

```
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
```

## 7. CORS (if needed)

If WordPress is on a different domain, add this to `wp-config.php`:

```php
header("Access-Control-Allow-Origin: *");
```

## 8. Sync Process

Once WordPress is set up:
1. Create events, projects, sermons, and posts in WordPress
2. Add featured images to each
3. The Next.js frontend will automatically fetch the content
4. If `NEXT_PUBLIC_WORDPRESS_URL` is not set, the site falls back to static data files

## 9. Static Data Fallback

The `/src/data/` files serve as static fallback. When WordPress is connected, update components to use the WordPress API instead.
