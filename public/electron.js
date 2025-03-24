const { app, BrowserWindow, Menu, Tray, nativeImage } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 700,
    height: 600,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.webContents.openDevTools();

  win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
}

app.whenReady().then(()=> {
    window = createWindow();
    let icon = nativeImage.createFromPath(path.join(__dirname, 'iconTemplate.png'));
    let dockIcon = nativeImage.createFromPath(path.join(__dirname, 'iconDock.png'));
    dockIcon = dockIcon.resize({ width: 32, height: 32 }); 
    app.dock.setIcon(dockIcon);
    icon = icon.resize({ width: 16, height: 12 });
    const tray = new Tray(icon);
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