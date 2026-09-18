const baseUrl = process.env.MASTODON_BASE_URL?.replace(/\/$/, '');
const accessToken = process.env.MASTODON_ACCESS_TOKEN;

if (!baseUrl || !accessToken) {
  throw new Error('MASTODON_BASE_URL ou MASTODON_ACCESS_TOKEN est absent des paramètres GitHub.');
}

const response = await fetch(`${baseUrl}/api/v1/statuses`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'Idempotency-Key': 'verification-sans-publication',
  },
  body: JSON.stringify({ status: '' }),
});

if (response.status !== 422) {
  const error = await response.text();
  throw new Error(`Vérification Mastodon refusée (${response.status}) : ${error}`);
}

console.log('Connexion Mastodon validée. Aucun message n’a été publié.');
