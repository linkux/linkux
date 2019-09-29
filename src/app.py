#!/usr/bin/env python

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)

'''import http.server
import socketserver

cert_folder = "~/"

from http.server import HTTPServer,SimpleHTTPRequestHandler,BaseHTTPRequestHandler
import ssl

if __name__ == '__main__':
    PORT = 1443
    httpd = HTTPServer(('localhost', PORT), SimpleHTTPRequestHandler)
    httpd.socket = ssl.wrap_socket (httpd.socket, certfile='fullchain.pem', keyfile='privkey.pem', server_side=True)
    print("serving at port", PORT)
    httpd.serve_forever()'''

'''PORT = 80
Handler = http.server.SimpleHTTPRequestHandler

if __name__ == '__main__':
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("serving at port", PORT)
        httpd.serve_forever()'''