This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.













//must read



Good news first: because your next.config.ts has output: "export", npm run build produces a 100% static site (plain HTML/CSS/JS). Your server does not need Node.js, and you do not run npm start on it. Any normal web host (Apache/cPanel, Nginx, etc.) serves it like any static website.

Let me confirm exactly what the build produces so I give you accurate paths.

Bash Inspect the out/ export folder structure
IN
cd "c:/Users/palani.k/Desktop/palani/Sneha-prod/sneha-enterprises" && echo "=== top level of out/ ===" && ls -la out/ && echo "" && echo "=== example route folders ===" && ls out/about out/products 2>/dev/null && echo "" && echo "=== total size to upload ===" && du -sh out/

OUT
=== top level of out/ ===
total 1037
drwxr-xr-x 1 palani.k 1049089      0 Jun 20 00:32 .
drwxr-xr-x 1 palani.k 1049089      0 Jun 20 00:32 ..
-rw-r--r-- 1 palani.k 1049089  34341 Jun 20 00:32 404.html
-rw-r--r-- 1 palani.k 1049089   1693 Jun 20 00:32 __next.__PAGE__.txt
-rw-r--r-- 1 palani.k 1049089  10425 Jun 20 00:32 __next._full.txt
-rw-r--r-- 1 palani.k 1049089   3248 Jun 20 00:32 __next._head.txt
-rw-r--r-- 1 palani.k 1049089   5112 Jun 20 00:32 __next._index.txt
-rw-r--r-- 1 palani.k 1049089    349 Jun 20 00:32 __next._tree.txt
drwxr-xr-x 1 palani.k 1049089      0 Jun 20 00:32 _next
drwxr-xr-x 1 palani.k 1049089      0 Jun 20 00:32 _not-found
-rw-r--r-- 1 palani.k 1049089  34341 Jun 20 00:32 _not-found.html
-rw-r--r-- 1 palani.k 1049089  10924 Jun 20 00:32 _not-found.txt
drwxr-xr-x 1 palani.k 1049089      0 Jun 20 00:32 about
-rw-r--r-- 1 palani.k 1049089  86706 Jun 20 00:32 about.html
-rw-r--r-- 1 palani.k 1049089   9781 Jun 20 00:32 about.txt
drwxr-xr-x 1 palani.k 1049089      0 Jun 20 00:32 clients
-rw-r--r-- 1 palani.k 1049089 159729 Jun 20 00:32 clients.html
-rw-r--r-- 1 palani.k 1049089   9566 Jun 20 00:32 clients.txt
drwxr-xr-x 1 palani.k 1049089      0 Jun 20 00:32 contact
-rw-r--r-- 1 palani.k 1049089  35226 Jun 20 00:32 contact.html
-rw-r--r-- 1 palani.k 1049089   9639 Jun 20 00:32 contact.txt
-rw-r--r-- 1 palani.k 1049089  20507 Jun 20 00:32 favicon.ico
-rw-r--r-- 1 palani.k 1049089  20507 May  4 10:39 favicon.png
-rw-r--r-- 1 palani.k 1049089    391 Jan 28 14:49 file.svg
drwxr-xr-x 1 palani.k 1049089      0 Jun 20 00:32 gallery
-rw-r--r-- 1 palani.k 1049089  78175 Jun 20 00:32 gallery.html
-rw-r--r-- 1 palani.k 1049089   9681 Jun 20 00:32 gallery.txt
-rw-r--r-- 1 palani.k 1049089   1035 Jan 28 14:49 globe.svg
-rw-r--r-- 1 palani.k 1049089  20507 Jun 20 00:32 icon.png
drwxr-xr-x 1 palani.k 1049089      0 Jun 20 00:32 img
-rw-r--r-- 1 palani.k 1049089 143016 Jun 20 00:32 index.html
-rw-r--r-- 1 palani.k 1049089  10425 Jun 20 00:32 index.txt
-rw-r--r-- 1 palani.k 1049089  29501 Sep 29  2021 logo3.png
-rw-r--r-- 1 palani.k 1049089   1375 Jan 28 14:49 next.svg
drwxr-xr-x 1 palani.k 1049089      0 Jun 20 00:32 products
-rw-r--r-- 1 palani.k 1049089  66089 Jun 20 00:32 products.html
-rw-r--r-- 1 palani.k 1049089   9776 Jun 20 00:32 products.txt
-rw-r--r-- 1 palani.k 1049089    171 Apr  6 14:50 robots.txt
drwxr-xr-x 1 palani.k 1049089      0 Jun 20 00:32 services
-rw-r--r-- 1 palani.k 1049089 107428 Jun 20 00:32 services.html
-rw-r--r-- 1 palani.k 1049089   9763 Jun 20 00:32 services.txt
-rw-r--r-- 1 palani.k 1049089   1274 Jun 20 00:32 sitemap.xml
-rw-r--r-- 1 palani.k 1049089    128 Jan 28 14:49 vercel.svg
-rw-r--r-- 1 palani.k 1049089    385 Jan 28 14:49 window.svg

=== example route folders ===
out/about:
__next._full.txt
__next._head.txt
__next._index.txt
__next._tree.txt
__next.about
__next.about.txt

out/products:
__next._full.txt
__next._head.txt
__next._index.txt
__next._tree.txt
__next.products
__next.products.txt
cassette
cassette.html
cassette.txt
chiller
chiller.html
chiller.txt
package
package.html
package.txt
screw
screw.html
screw.txt
split
split.html
split.txt
vrf
vrf.html
vrf.txt

=== total size to upload ===
197M	out/
Here's everything you need. Your out/ folder is the entire website — flat HTML files (index.html, about.html, …) plus a _next/ folder with all the JS/CSS/assets.

Step-by-step: build → FileZilla → live
1. Build the static site

npm run build
This regenerates the out/ folder. That folder is your website. (Ignore npm start / Node — you don't need them on a static host.)

2. Know what to upload
Upload the contents of out/ (everything inside it), into your server's web root — usually public_html (cPanel/Apache) or htdocs/www.

✅ Must include:

index.html, about.html, services.html, contact.html, etc.
products/, gallery/, clients/ folders
_next/ ← ⚠️ most commonly forgotten. It holds all your JS/CSS. Miss it and the site loads unstyled/broken. FileZilla sometimes hides folders starting with special chars — make sure _next actually transfers.
img/, favicon.png, favicon.ico, robots.txt, sitemap.xml
🗑️ Safe to skip (optional cleanup, harmless if left): the *.txt files and __next.* files (internal navigation payloads), and the unused sample SVGs (file.svg, globe.svg, next.svg, vercel.svg, window.svg).

⚠️ Don't upload the out folder itself — upload what's inside it. You want yoursite.com/index.html, not yoursite.com/out/index.html.

3. FileZilla transfer
Connect (Host = your server, Port 21 FTP or 22 SFTP, your user/pass).
Right pane (server): open your web root, e.g. public_html.
Left pane (local): go into …\sneha-enterprises\out.
Select all items inside out/ → right-click → Upload.
Set transfer type to Binary (FileZilla → Transfer menu → "Binary") so images/JS aren't corrupted. "Auto" is normally fine too.
⚠️ Your out/ is ~197 MB (mostly large images) — the upload will take a while. See the note at the bottom about shrinking this.
4. Add an .htaccess (Apache/cPanel hosts) — important
Your export uses flat files like about.html, so a visit to yoursite.com/about (no .html) can 404 on some servers. This .htaccess fixes clean URLs, the 404 page, and adds the long cache headers Lighthouse asked for. Create it in the web root (same folder as index.html):


# Clean URLs: serve /about -> about.html
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+?)/?$ $1.html [L]

# Custom 404
ErrorDocument 404 /404.html

# Long cache for hashed static assets (the Lighthouse "cache lifetime" fix)
<IfModule mod_headers.c>
  <FilesMatch "\.(js|css|woff2?|jpg|jpeg|png|webp|avif|svg|ico)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  # Don't cache HTML so content updates show immediately
  <FilesMatch "\.html$">
    Header set Cache-Control "public, max-age=0, must-revalidate"
  </FilesMatch>
</IfModule>

# Enable gzip/brotli compression if available
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml
</IfModule>
If your server is Nginx, you can't use .htaccess — tell me and I'll give you the equivalent location block to hand to your host.

5. Verify it's live
Visit https://yoursite.com/ → home loads with styles ✅
Click into /products, /about, /contact → no 404 ✅
Hard-refresh a deep page like yoursite.com/products/vrf directly → loads ✅ (this is what the .htaccess rewrite protects)
Two things to check before you go live
Domain in your SEO config. Open app/lib/seo.config.ts and confirm SITE.url is your real domain (https://...). It feeds your canonical tags, sitemap.xml, and robots.txt. If it's still a placeholder/localhost, fix it and rebuild before uploading, or Google will index the wrong URLs.

Root vs subfolder. These instructions assume the site lives at the domain root (yoursite.com). If you must host it in a subfolder (yoursite.com/site/), you'll need basePath: '/site' in next.config.ts and a rebuild — tell me and I'll set it up.

One recommendation
That 197 MB is almost entirely uncompressed source images (img/gallry ≈ 114 MB, img/mainphoto ≈ 34 MB). It'll make the FTP upload slow and hurt the gallery/about page speed for visitors. Worth compressing those to WebP before a future build — I can walk you through that separately.

Want the Nginx config instead of .htaccess, or help wiring up SITE.url / a subfolder basePath?