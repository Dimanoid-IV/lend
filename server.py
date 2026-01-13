import http.server
import socketserver
import webbrowser
import os

PORT = 3000

# Change to the directory containing our files
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Сервер запущен на http://localhost:{PORT}")
        print("Нажмите Ctrl+C для остановки")
        webbrowser.open(f"http://localhost:{PORT}")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\nСервер остановлен")
except Exception as e:
    print(f"Ошибка: {e}")