const helmet = require("helmet");
const express = require("express");

const app = express();

app.use(helmet());

app.get('/', (req, res) => {
  res.send();
});

app.listen(3000);


// ╰─➤  curl -D - localhost:3000/
// HTTP/1.1 200 OK
// Content-Security-Policy: default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests
// X-DNS-Prefetch-Control: off
// Expect-CT: max-age=0
// X-Frame-Options: SAMEORIGIN
// Strict-Transport-Security: max-age=15552000; includeSubDomains
// X-Download-Options: noopen
// X-Content-Type-Options: nosniff
// X-Permitted-Cross-Domain-Policies: none
// Referrer-Policy: no-referrer
// X-XSS-Protection: 0
// Date: Wed, 26 May 2021 09:47:26 GMT
// Connection: keep-alive
// Keep-Alive: timeout=5
// Content-Length: 0
