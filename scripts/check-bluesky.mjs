const handle = process.env.BLUESKY_HANDLE;
const appPassword = process.env.BLUESKY_APP_PASSWORD;

if (!handle || !appPassword) {
  throw new Error('BLUESKY_HANDLE ou BLUESKY_APP_PASSWORD est absent des paramètres GitHub.');
}

const response = await fetch(
  'https://bsky.social/xrpc/com.atproto.server.createSession',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identifier: handle, password: appPassword }),
  },
);

if (!response.ok) {
  throw new Error(`Connexion Bluesky refusée (${response.status}).`);
}

const session = await response.json();
console.log(`Connexion Bluesky confirmée pour ${session.handle}. Aucun message n'a été publié.`);
