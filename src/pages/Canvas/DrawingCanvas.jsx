import React, { useEffect, useRef, useState } from "react";
import "./DrawingCanvas.css";
import { FaEraser, FaPaintBrush, FaDownload } from "react-icons/fa";
import { GrClear, GrUndo, GrRedo } from "react-icons/gr";


const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState("gray");
  const [brushWidth, setBrushWidth] = useState(5);
  const [canvasStates, setCanvasStates] = useState([]);
  const [currentStateIndex, setCurrentStateIndex] = useState(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 1000;
    canvas.height = 500;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    contextRef.current = context;

    // Initialize canvasStates with the initial state
    setCanvasStates([canvas.toDataURL()]);
  }, []);

  useEffect(() => {
    // Update canvas state when drawing
    if (isDrawing) {
      setCanvasStates((prevState) => [
        ...prevState.slice(0, currentStateIndex + 1),
        canvasRef.current.toDataURL(),
      ]);
      setCurrentStateIndex((prevState) => prevState + 1);
    }
  }, [isDrawing]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
    nativeEvent.preventDefault();
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.strokeStyle = currentColor;
    contextRef.current.lineWidth = brushWidth;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    nativeEvent.preventDefault();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const setToDraw = () => {
    contextRef.current.globalCompositeOperation = "source-over";
  };

  const setToErase = () => {
    contextRef.current.globalCompositeOperation = "destination-out";
  };

  const saveImageToLocal = (event) => {
    let link = event.currentTarget;
    link.setAttribute("download", "canvas.png");
    let image = canvasRef.current.toDataURL("image/png");
    link.setAttribute("href", image);
  };

  const handleBrushWidthChange = (event) => {
    const newWidth = parseInt(event.target.value);
    setBrushWidth(newWidth);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const undo = () => {
    if (currentStateIndex > 0) {
      setCurrentStateIndex(currentStateIndex - 1);
      const image = new Image();
      image.src = canvasStates[currentStateIndex - 1];
      image.onload = () => {
        contextRef.current.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        contextRef.current.drawImage(image, 0, 0);
      };
    }
  };

  const redo = () => {
    if (currentStateIndex < canvasStates.length - 1) {
      setCurrentStateIndex(currentStateIndex + 1);
      const image = new Image();
      image.src = canvasStates[currentStateIndex + 1];
      image.onload = () => {
        contextRef.current.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        contextRef.current.drawImage(image, 0, 0);
      };
    }
  };

  return (
    <div className="w-full h-[700px]">

      <div className="flex justify-center gap-2 h-[700px] bg-[#555] ">
        <div className="flex flex-col h-[500px] p-3 my-5 mt-6 bg-slate-800  ">
         <div className="grid grid-cols md:grid-cols-2 gap-5 p-4 ">
         <button
  title="Draw"
  className={`btn btn-outline mx-auto cursor-pointer border-2 hover:w-12 hover:duration-1000 ${
    activeButton === "draw" ? "active-button" : ""
  }`}
  onClick={() => {
    setToDraw();
    setActiveButton("draw");
  }}
>
  <FaPaintBrush></FaPaintBrush>
</button>
<button
  title="Erase"
  className={`btn btn-outline mx-auto cursor-pointer border-2 hover:w-12 hover:duration-1000 ${
    activeButton === "erase" ? "active-button" : ""
  }`}
  onClick={() => {
    setToErase();
    setActiveButton("erase");
  }}
>
  <FaEraser></FaEraser>
</button>
          <input
            type="color"
            value={currentColor}
            onChange={(e) => setCurrentColor(e.target.value)}
            className="w-[50px] h-[50px] mx-auto btn-outline border-2 border-green-400 hover:border-2 hover:border-green-700 hover:duration-1000 "
            title="Pick a Color"
          />
          <button
            title="Clear Canvas"
            className="btn btn-outline btn-error text-gray mx-auto cursor-pointer border-2  hover:w-12 hover:duration-1000"
            onClick={clearCanvas}
          >
            <GrClear></GrClear>
          </button>
          <button
          title="Undo"
          className="btn btn-outline btn-accent mx-auto cursor-pointer border-2 hover:w-12 hover:duration-1000"
          onClick={undo}
        >
          <GrUndo></GrUndo>
        </button>
        <button
          title="Redo"
          className="btn btn-outline btn-accent mx-auto cursor-pointer border-2 hover:w-12 hover:duration-1000"
          onClick={redo}
        >
          <GrRedo></GrRedo>
        </button>
         </div>

          <div className="brush-width p-1 my-2 btn-outline rounded-full mx-auto hover:btn-info hover:py-2 hover:duration-500">
            <input
              type="range"
              id="brushWidth"
              min="1"
              max="50"
              value={brushWidth}
              onChange={handleBrushWidthChange}
            />
          </div>

          <a
            title="Save"
            className="btn btn-active btn-accent mt-7"
            id="download_image_link"
            href="download_link"
            onClick={saveImageToLocal}
          >
            <FaDownload></FaDownload>
          </a>
        </div>
        <div className="drawing-board flex-grow-1">
          <canvas
            className="canvas-container"
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          ></canvas>
        </div>
      </div>
    </div>
  );
};

export default DrawingCanvas;
