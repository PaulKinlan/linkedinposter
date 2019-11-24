onfetch = async (event) => {
  const url = new URL(event.request.url);
  if (url.pathname !== '/share.html') return;

  const location = encodeURIComponent(url.searchParams.get('url') || url.searchParams.get('text'));
  const title = encodeURIComponent(url.searchParams.get('title'))
  const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${location}&title=${title}`;

  event.waitUntil(event.respondWith(Response.redirect(shareUrl)));
};

oninstall = () => {
  skipWaiting();
};

onactivate = () => {
  clients.claim();
};