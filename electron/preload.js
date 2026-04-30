const { contextBridge, ipcMain } = require('electron');

// Expor APIs seguras para o renderer process
contextBridge.exposeInMainWorld('electron', {
  platform: process.platform,
});
