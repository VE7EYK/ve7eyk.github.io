# ve7eyk.github.io
static site

https://ve7eyk.github.io/

GITHUB PAGES UPLOAD INSTRUCTIONS
================================

1. Go to https://github.com and log in.

2. Create a new repository.
   - Name it: yourusername.github.io
  

3. Download all website files exactly as provided:
   index.html
   blog.html
   repeater.html
   /assets/ (entire folder)
   /posts/ (entire folder)

4. Drag and drop all files into the GitHub repository.

5. Commit the changes.

6. Enable GitHub Pages:
   - Go to: Settings → Pages
   - Under “Build and Deployment”
   - Set: Source = “Deploy from branch”
   - Branch = “main”
   - Folder = “/ (root)”
   - Save

7. Your website will be available at:
   https://yourusername.github.io
   (example: https://ve7eyk.github.io)

8. To add new blog posts:
   - Create a new Markdown file inside /posts/
     Example: post3.md
   - Add a new entry in blog.json:

     {
       "title": "New Post Title",
       "file": "post3.md",
       "date": "2025-03-01"
     }

9. To update the repeater image:
   Replace the file:
     /assets/img/repeater-diagram.png

10. To update APRS map:
    Edit the iframe URL in repeater.html

You're done!
