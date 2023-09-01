import React, { useEffect, useRef, useState } from 'react';
import './DrawingCanvas.css';
import { FaEraser, FaPaintBrush,FaDownload } from 'react-icons/fa';
import { GrClear } from "react-icons/gr";


const DrawingCanvas = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);
    const [currentColor, setCurrentColor] = useState('gray');
    const [brushWidth, setBrushWidth] = useState(5);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 1000;
        canvas.height = 500;

        const context = canvas.getContext("2d");
        context.lineCap = "round";
        contextRef.current = context;
    }, []);

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
        contextRef.current.lineWidth = brushWidth; // Set brush width for each draw
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        nativeEvent.preventDefault();
    };

    const stopDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const setToDraw = () => {
        contextRef.current.globalCompositeOperation = 'source-over';
    };

    const setToErase = () => {
        contextRef.current.globalCompositeOperation = 'destination-out';
    };

    const saveImageToLocal = (event) => {
        let link = event.currentTarget;
        link.setAttribute('download', 'canvas.png');
        let image = canvasRef.current.toDataURL('image/png');
        link.setAttribute('href', image);
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

    return (
        <div className='w-full h-[700px]'>
            <div className='flex justify-around w-full h-[700px] bg-[#555] ' >
            <div className='flex flex-col h-[500px] p-3 my-5 mt-6 bg-slate-800  '>
                
                   
                    <button title='Draw'  className='btn btn-outline btn-accent text-orange-500 mx-auto cursor-pointer border-2 mt-10 rounded-[50%] hover:w-12 hover:duration-1000' onClick={setToDraw}><FaPaintBrush></FaPaintBrush></button>
               
          
                   
                    <button title='Erase'  className='btn btn-outline btn-error text-green-500 mx-auto my-4 cursor-pointer border-2 rounded-[50%] hover:w-12 hover:duration-1000' onClick={setToErase}> <FaEraser></FaEraser> </button>
                
              
                    <input
                        type="color"
                        value={currentColor}
                        onChange={(e) => setCurrentColor(e.target.value)}
                        className='w-[50px] h-[50px] mx-auto btn-outline border-2 border-green-400 p-3 rounded-[50%] hover:border-2 hover:border-green-700 hover:duration-1000 '
                        title='Pick a Color'
                    />
                      <button title='Clear Canvas' className='btn btn-outline btn-error text-gray mx-auto my-4 cursor-pointer border-2 rounded-[50%] hover:w-12 hover:duration-1000' onClick={clearCanvas}> <GrClear></GrClear> </button>
               
                <div className='brush-width p-1 my-2 btn-outline rounded-full mx-auto hover:btn-info hover:py-2 hover:duration-500'>
                    <input
                        type="range"
                        id="brushWidth"
                        min="1"
                        max="50"
                        value={brushWidth}
                        onChange={handleBrushWidthChange}
                    />
                </div>

                

                <a title='Save' className='btn btn-active btn-accent mt-7' id="download_image_link" href="download_link" onClick={saveImageToLocal}><FaDownload></FaDownload></a>
              
            </div>
            <div className='drawing-board flex-grow-1'>
                <canvas className="canvas-container"
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}>
                </canvas>
            </div>
        </div>
        </div>
    );
};

export default DrawingCanvas;
