#!/usr/bin/env python

import http.server
import socketserver

cert_folder = "~/"

from http.server import HTTPServer,SimpleHTTPRequestHandler,BaseHTTPRequestHandler
import ssl

if __name__ == '__main__':
    PORT = 1443
    httpd = HTTPServer(('localhost', PORT), SimpleHTTPRequestHandler)
    httpd.socket = ssl.wrap_socket (httpd.socket, certfile='fullchain.pem', keyfile='privkey.pem', server_side=True)
    print("serving at port", PORT)
    httpd.serve_forever()

'''PORT = 80
Handler = http.server.SimpleHTTPRequestHandler

if __name__ == '__main__':
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("serving at port", PORT)
        httpd.serve_forever()'''