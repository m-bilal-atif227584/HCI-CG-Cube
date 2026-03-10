# Interactive 3D Cube Controller

This project is an interactive 3D cube scene built using **React** and **React Three Fiber**.
It demonstrates basic concepts of **3D interaction**, **user interface controls**, and **real-time object manipulation** in a web environment.

The application allows users to control a rotating 3D cube using UI elements such as buttons and sliders.

---

## Features

* Start and stop cube rotation
* Control cube rotation speed using a slider
* Dynamically change cube size using a slider
* Hover interaction that changes the cube color randomly
* Right-click interaction to toggle cube rotation
* Smooth animation using frame-based updates
* Modern glassmorphism control panel UI

---

## Technologies Used

* React
* React Three Fiber
* Drei

---

## Project Structure

```
src/
 ├─ Scene.jsx
 ├─ components/
 │   └─ Box.jsx
 ├─ App.jsx
 └─ main.jsx
```

---

## Installation

Clone the repository and install dependencies.

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
npm install
```

---

## Running the Project

Start the development server:

```bash
npm run dev
```

Then open the browser at:

```
http://localhost:5173
```

---

## How It Works

The cube animation is handled using the `useFrame` hook from React Three Fiber, which updates the cube rotation on every rendered frame.

Users can interact with the cube through:

* UI controls (buttons and sliders)
* Pointer hover events
* Right-click interaction

These interactions demonstrate basic **Human Computer Interaction (HCI)** principles such as direct manipulation, feedback, and interactive control.

---

## Controls

| Control      | Function               |
| ------------ | ---------------------- |
| Start Button | Starts cube rotation   |
| Stop Button  | Stops cube rotation    |
| Speed Slider | Adjusts rotation speed |
| Size Slider  | Changes cube scale     |
| Mouse Hover  | Changes cube color     |
| Right Click  | Toggle cube rotation   |

---

## Learning Objectives

This project demonstrates:

* Basic 3D scene rendering
* Interactive UI control for 3D objects
* Event handling in 3D environments
* Real-time animation using frame updates

---

## Future Improvements

Possible enhancements for this project include:

* Drag and drop cube interaction
* Multiple cube spawning
* Keyboard controls
* Lighting controls
* Object placement using mouse clicks

---

## Author

M Bilal Atif Usmani

