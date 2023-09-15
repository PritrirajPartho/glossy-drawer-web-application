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
  const [activeButton, setActiveButton] = useState("draw");

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
      <div className="flex justify-center gap-2 sm:h-[300px] md:h-[700px] bg-[#555] ">
        <div className="flex sm:flex-col sm:h-[200px] md:h-[500px] p-3 my-5 mt-6 bg-slate-800  ">
          <div className="grid grid-cols md:grid-cols-2 gap-5 p-4 ">
            <div>
            <button
              title="Draw"
              className={`text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 ${
                activeButton === "draw" ? "active-button" : ""
              }`}
              onClick={() => {
                setToDraw();
                setActiveButton("draw");
              }}
            >
              <FaPaintBrush className="text-orange-700 text-xl"></FaPaintBrush>
            </button>
            <span className=" block font-sans italic font-semibold text-orange-700  my-2 ">Draw</span>
            </div>
                  

                  
            
            
           <div>
           <button
              title="Erase"
              className={`text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-block items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 ${
                activeButton === "erase" ? "active-button" : ""
              }`}
              onClick={() => {
                setToErase();
                setActiveButton("erase");
              }}
            >
              <FaEraser className="text-rose-300 text-xl"></FaEraser>
            
            </button>
            <span className="text-rose-300 block font-sans italic font-semibold my-2">Erase</span>
           </div>
          <div>
          <input
              type="color"
              value={currentColor}
              onChange={(e) => setCurrentColor(e.target.value)}
              className="w-[40px] h-[30px] p-2.5 mx-auto btn-outline border-2 border-green-400 hover:border-2 hover:border-green-700 hover:duration-1000 "
              title="Pick a Color"
            />
             <span className="text-white block font-sans italic font-semibold my-3">Color</span>
          </div>
           <div>
           <button
              title="Clear Canvas"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              onClick={clearCanvas}
            >
              <GrClear className=" text-base"></GrClear>
            </button>
            <span className="text-white block font-sans italic font-semibold my-2">Clear</span>
           </div>
          <div>
          <button
              title="Undo"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              onClick={undo}
            >
              <GrUndo className="text-orange-200 text-xl"></GrUndo>
            </button>
            <span className="text-orange-200 block font-sans italic font-semibold my-2">Undo</span>
          </div>
           <div>
           <button
              title="Redo"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              onClick={redo}
            >
              <GrRedo className="text-orange-200 text-xl"></GrRedo>
            </button>
            <span className="text-orange-200 block font-sans font-semibold italic my-2">Redo</span>
           </div>



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
            className="font-bold text-lg sm:text-xl md:text-xl py-4 flex items-center gap-5 mt-7 px-10 rounded-xl hover:bg-[#DE606B]"
            style={{ backgroundImage: " linear-gradient(to right, #de5c70 0%, #e98c5d 51%, #de5c70 100%)" }}
            id="download_image_link"
            href="download_link"
            onClick={saveImageToLocal}
          >
            
            Download
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
