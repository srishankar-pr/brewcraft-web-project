# BrewCraft - Node.js Server

This project has been migrated from Python to Node.js.

## How to Run the Server

Due to PowerShell execution policies on your machine, it is best to run the server using `cmd` or directly via the `node` command.

### Option 1: Direct Command (Recommended)
Open your terminal (PowerShell or Command Prompt) and run:
```bash
node server.js
```
This will start the server on **http://localhost:3000**.

### Option 2: Using npm (If PowerShell blocks you)
If `npm start` gives you an error, use this command in PowerShell:
```powershell
cmd /c "npm start"
```

## How to Stop the Server
To stop the server, go to the terminal where it is running and press:
**Ctrl + C**
(You may need to press it twice or confirm with 'Y').

**If Ctrl + C doesn't work** (e.g. if the terminal is stuck):
Open a new terminal and run:
```cmd
taskkill /F /IM node.exe
```

## Key Files
- `server.js`: The main server logic (replaced `server.py`).
- `public/`: Contains your HTML, CSS, and JS frontend files.
- `data/`: Contains `users.txt`, `products.txt`, etc.

## Troubleshooting
If you see an error like `EADDRINUSE`, it means the server is already running. check if you have another terminal open, or use Task Manager to kill `node.exe`.
