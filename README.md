# 🏓 3D Ping Pong Game

A beautifully crafted, interactive 3D table tennis experience built with modern web technologies. Challenge an AI opponent in a visually stunning, physics-driven ping pong game featuring authentic competition gear and dynamic visual themes!

## ✨ Features

- 🏸 **Realistic Physics & Gameplay**: Fluid ball physics, momentum conservation, and an intelligent AI opponent that scales in difficulty.
- 🎨 **Dynamic Visual Themes**: Switch seamlessly between unique environments (Classic, 🔥 Inferno, 🪩 Party, 👾 Retro, and 🌊 Zen) with smooth, interpolated transitions.
- 🏓 **Authentic Paddle Models**: High-quality 3D paddle models featuring competition red/black rubbers, striped flared wood handles, and professional edge tape.
- 💻 **Intuitive Controls**: Move your paddle seamlessly with the mouse, or use the keyboard (W/A/S/D or Arrow keys). Includes a free-orbit camera mode (press `F`) to explore the environment.
- 🏆 **Score & Stats Tracking**: Play a "Best of 5" tournament format (first to 11 points wins a set). Detailed game stats (longest rally, top speed, etc.) are tracked automatically.

## 🚀 Setup & Installation

Make sure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the local URL provided in your terminal to start playing!

## 🛠️ Build for Production

To create an optimized production build, run:
```bash
npm run build
```

## 💻 Tech Stack

- **[Three.js](https://threejs.org/)** (WebGPU / WebGL rendering)
- **Vanilla JavaScript** (Game logic, physics, and state management)
- **HTML5 & CSS3** (UI overlays and styling)
- **Vite** (Build tool & development server)
