body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.controls {
    text-align: center;
    margin-bottom: 20px;
}

button {
    padding: 8px 15px;
    margin: 0 5px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #2980b9;
}

#malla-container {
    width: 100%;
    height: 600px;
    border: 1px solid #ddd;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

#malla-svg {
    width: 100%;
    height: 100%;
}

.node {
    cursor: pointer;
    transition: all 0.3s;
}

.node:hover {
    filter: brightness(1.1);
}

.node text {
    font-size: 12px;
    fill: #333;
    text-anchor: middle;
    pointer-events: none;
}

.link {
    stroke: #95a5a6;
    stroke-width: 2px;
    fill: none;
}

#course-info {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

#course-info h2 {
    margin-top: 0;
    color: #2c3e50;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
}

.course-detail {
    margin-bottom: 10px;
}

.course-detail strong {
    color: #2c3e50;
}

.cycle-title {
    font-weight: bold;
    fill: #2c3e50;
    font-size: 14px;
}

.cycle-line {
    stroke: #bdc3c7;
    stroke-width: 2;
    stroke-dasharray: 5,5;
}
