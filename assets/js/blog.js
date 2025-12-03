function loadMarkdown(url) {
  return fetch(url).then(r => r.text());
}

function mdToHtml(md) {
  return md
    .replace(/^# (.*$)/gim, "<h2>$1</h2>")
    .replace(/^## (.*$)/gim, "<h3>$1</h3>")
    .replace(/\!\[(.*?)\]\((.*?)\)/gim, `<img src="$2" class="img-fluid my-2">`)
    .replace(/\[(.*?)\]\((.*?)\)/gim, `<a href="$2" target="_blank">$1</a>`)
    .replace(/\n$/gim, "<br>");
}

fetch("posts/blog.json")
  .then(r => r.json())
  .then(async posts => {
    const container = document.getElementById("blog-container");

    for (const post of posts) {
      const md = await loadMarkdown("posts/" + post.file);
      const html = mdToHtml(md);

      container.innerHTML += `
        <div class="mb-4 p-3 border rounded bg-light">
          <h3>${post.title}</h3>
          <small class="text-muted">${post.date}</small>
          <div class="mt-3">${html}</div>
        </div>
      `;
    }
  });
