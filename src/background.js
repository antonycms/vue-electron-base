import { app, protocol, Menu, BrowserWindow, globalShortcut } from 'electron';
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib';
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer';
import path from 'path';
import os from 'os';

const isDevelopment = process.env.NODE_ENV !== 'production';
const iconExtension = os.platform === 'win32' ? 'ico' : 'png';

import './backend/database';

let win;

app.allowRendererProcessReuse = true;
Menu.setApplicationMenu(null);
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }]);

function createWindow() {
  process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

  win = new BrowserWindow({
    icon: path.resolve(__static, 'icons', `icon.${iconExtension}`), // eslint-disable-line no-undef
    width: 1000,
    height: 700,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);

    if (!process.env.IS_TEST) {
      win.webContents.openDevTools();
      globalShortcut.register('f5', () => win.reload());
      globalShortcut.register('f12', () => win.toggleDevTools());
    }
  } //
  else {
    win.maximize();
    createProtocol('app');
    win.loadURL('app://./index.html');
  }

  win.on('closed', () => {
    win = null;
  });
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

app.on('ready', async () => {
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit();
      }
    });
  } //
  else {
    process.on('SIGTERM', () => {
      app.quit();
    });
  }
}

app.whenReady().then(() => {
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    installExtension(VUEJS_DEVTOOLS)
      .then(name => console.log(`Added Extension:  ${name}`))
      .catch(err => console.log('An error occurred: ', err.message));
  }
});
