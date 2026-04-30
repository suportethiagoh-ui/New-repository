const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  // Criar a janela do navegador
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 800,
    minHeight: 600,
    icon: path.join(__dirname, 'assets/icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Carregar a aplicação
  const startUrl = isDev
    ? 'http://localhost:5173' // Desenvolvimento
    : `file://${path.join(__dirname, '../dist/public/index.html')}`; // Produção

  mainWindow.loadURL(startUrl);

  // Abrir ferramentas de desenvolvimento em dev
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  // Lidar com fechamento da janela
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Criar janela quando o app está pronto
app.on('ready', createWindow);

// Sair quando todas as janelas estão fechadas (exceto no macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Re-criar janela quando app é ativado (macOS)
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// Menu
const menu = [
  {
    label: 'Arquivo',
    submenu: [
      {
        label: 'Sair',
        accelerator: 'CmdOrCtrl+Q',
        click: () => {
          app.quit();
        },
      },
    ],
  },
  {
    label: 'Editar',
    submenu: [
      { label: 'Desfazer', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
      { label: 'Refazer', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' },
      { type: 'separator' },
      { label: 'Cortar', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
      { label: 'Copiar', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
      { label: 'Colar', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
    ],
  },
  {
    label: 'Exibir',
    submenu: [
      {
        label: 'Recarregar',
        accelerator: 'CmdOrCtrl+R',
        click: () => {
          mainWindow.webContents.reload();
        },
      },
      {
        label: 'Alternar Ferramentas de Desenvolvimento',
        accelerator: 'F12',
        click: () => {
          mainWindow.webContents.toggleDevTools();
        },
      },
    ],
  },
];

Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
