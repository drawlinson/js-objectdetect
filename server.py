import BaseHTTPServer, SimpleHTTPServer
import ssl

# https://192.168.100.3:4443/examples/example_sunglasses.htm
# https://www.piware.de/2011/01/creating-an-https-server-in-python/
httpd = BaseHTTPServer.HTTPServer(('localhost', 4443), SimpleHTTPServer.SimpleHTTPRequestHandler)
#httpd = BaseHTTPServer.HTTPServer(('192.168.100.6', 4443), SimpleHTTPServer.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket (httpd.socket, certfile='/home/dave/workspace/js-face/js-objectdetect/server.pem', server_side=True)
httpd.serve_forever()
