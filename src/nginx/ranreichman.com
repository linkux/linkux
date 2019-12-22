server {

  root /var/www/ranreichman.com;

  index index.html;

  server_name ranreichman.com www.ranreichman.com;

  location ~* \.api$ {
    proxy_pass http://localhost:3001;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_cache_bypass $http_upgrade;
  }

  location / {
    proxy_pass http://localhost:3001;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_cache_bypass $http_upgrade;
    try_files $uri $uri/ =404;
  }

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/ranreichman.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/ranreichman.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}
server {
    if ($host = www.ranreichman.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = ranreichman.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


  listen 80 default_server;
  listen [::]:80 default_server;

  server_name ranreichman.com www.ranreichman.com;
    return 404; # managed by Certbot




}
