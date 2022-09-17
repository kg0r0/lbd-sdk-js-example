const devSdk = require('@line/lbd-sdk-js');
const BASE_URL = 'https://test-api.blockchain.line.me';
const SERVICE_API_KEY = '<SERVICE_API_KEY>';
const SERVICE_API_SECRET = '<SERVICE_API_SECRET>';
const httpClient = new devSdk.HttpClient(BASE_URL, SERVICE_API_KEY, SERVICE_API_SECRET);

(async () => {
  const response = await httpClient.time();
  console.log(response['statusCode']);
})().catch(err => console.log(err));
