const { app, BrowserWindow, Menu, Tray } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.webContents.openDevTools();

  win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
}

app.whenReady().then(()=> {
    window = createWindow();
    const iconPath = path.join(__dirname, 'icon.png');
    console.log(iconPath);
    const tray = new Tray(iconPath);
    const contextMenu = Menu.buildFromTemplate([
        {
          label: "Abrir",
          click: () => {
            createWindow();
          },
        },
        { type: "separator" },
        {
          label: "Salir",
          role: "quit",
        },
      ]);
    
    tray.setToolTip("Mi Aplicación Electron");
    tray.setContextMenu(contextMenu);
    console.log('App is ready');

    //   tray.on("click", () => {
    //     createWindow();
    //   });
});