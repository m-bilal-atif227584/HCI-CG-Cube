/*
  Control Panel
  -------------
  UI panel containing:

  - Start button
  - Stop button
  - Speed slider
  - Size slider
*/

export default function ControlPanel({
  speed,
  setSpeed,
  size,
  setSize,
  setIsRotating,
}) {

  return (
    <div className="panel">

      {/* Start rotation button */}
      <button
        onClick={() => setIsRotating(true)}
      >
        Start
      </button>

      {/* Speed Controller */}
      <div style={{ display: "flex", flexDirection: "column" }}>

        <label style={{ color: "white" }} htmlFor="speed">
          Speed : {speed}
        </label>

        <input
          style={{ cursor: "pointer" }}
          type="range"
          min="0"
          max="5"
          step="0.1"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>

      {/* Size Controller */}
      <div style={{ display: "flex", flexDirection: "column" }}>

        <label style={{ color: "white" }} htmlFor="size">
          Size : {size}
        </label>

        <input
          style={{ cursor: "pointer" }}
          type="range"
          min="0.1"
          max="3"
          step="0.1"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
        />
      </div>

      {/* Stop rotation button */}
      <button
        onClick={() => setIsRotating(false)}
      >
        Stop
      </button>
    </div>
  )
}