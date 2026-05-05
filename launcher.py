import os
import shutil
import socket
import subprocess
import sys
import time
import webbrowser
from threading import Thread

LOG_FILE = os.path.join(os.getcwd(), "INFOGERAL_LOG.txt")
SERVER_PROCESS = None


def log_message(message):
    print(message)
    try:
        with open(LOG_FILE, "a", encoding="utf-8") as f:
            f.write(f"{time.strftime('%Y-%m-%d %H:%M:%S')} - {message}\n")
    except OSError:
        pass


def is_port_in_use(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(0.5)
        return s.connect_ex(("127.0.0.1", port)) == 0


def find_available_port(preferred_port=3000, attempts=50):
    for port in range(preferred_port, preferred_port + attempts):
        if not is_port_in_use(port):
            return port
    raise RuntimeError("Nenhuma porta local disponivel para iniciar o INFOGERAL.")


def get_node_path(base_path):
    bundled_node = os.path.join(base_path, "node.exe")
    if os.path.exists(bundled_node):
        return bundled_node
    return shutil.which("node")


def run_server(base_path, port):
    global SERVER_PROCESS

    node_path = get_node_path(base_path)
    if not node_path:
        log_message("ERRO: Node.js nao foi encontrado no pacote nem no PATH.")
        log_message("Gere novamente o executavel ou instale o Node.js LTS.")
        return

    env = os.environ.copy()
    env["NODE_ENV"] = "production"
    env["PORT"] = str(port)

    server_path = os.path.join(base_path, "index.js")
    log_message(f"Iniciando servidor: {server_path}")
    log_message(f"Node.js: {node_path}")

    if not os.path.exists(server_path):
        log_message(f"ERRO: Arquivo {server_path} nao encontrado.")
        return

    try:
        SERVER_PROCESS = subprocess.Popen(
            [node_path, server_path],
            env=env,
            cwd=base_path,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            shell=False,
        )

        if SERVER_PROCESS.stdout:
            for line in SERVER_PROCESS.stdout:
                log_message(f"SERVER: {line.strip()}")
    except Exception as exc:
        log_message(f"ERRO AO EXECUTAR NODE: {exc}")


def stop_server():
    global SERVER_PROCESS
    if SERVER_PROCESS and SERVER_PROCESS.poll() is None:
        log_message("Encerrando servidor local...")
        SERVER_PROCESS.terminate()
        try:
            SERVER_PROCESS.wait(timeout=5)
        except subprocess.TimeoutExpired:
            SERVER_PROCESS.kill()
    SERVER_PROCESS = None


def main():
    if os.path.exists(LOG_FILE):
        try:
            os.remove(LOG_FILE)
        except OSError:
            pass

    if getattr(sys, "frozen", False):
        base_path = sys._MEIPASS
    else:
        base_path = os.path.dirname(os.path.abspath(__file__))

    port = find_available_port(3000)
    url = f"http://localhost:{port}/"

    log_message("--- INFOGERAL Dashboard (Executavel Local) ---")
    log_message(f"Pasta temporaria: {base_path}")
    log_message(f"Pasta de execucao: {os.getcwd()}")
    log_message(f"URL local: {url}")

    server_thread = Thread(target=run_server, args=(base_path, port), daemon=True)
    server_thread.start()

    log_message(f"Aguardando porta {port} ficar ativa...")
    for attempt in range(1, 31):
        if is_port_in_use(port):
            log_message("Servidor OK. Abrindo navegador...")
            webbrowser.open(url)
            break
        time.sleep(1)
        log_message(f"Tentativa {attempt}/30...")
    else:
        log_message("ERRO: O servidor local nao iniciou no tempo esperado.")
        log_message("Verifique o INFOGERAL_LOG.txt para detalhes.")

    log_message("")
    log_message("--- MANTENHA ESTA JANELA ABERTA ---")
    log_message("Para fechar o sistema, feche esta janela.")

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        log_message("Encerrando...")
    finally:
        stop_server()


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        log_message(f"ERRO CRITICO: {exc}")
        stop_server()
        input("\nOcorreu um erro. Pressione Enter para fechar...")
