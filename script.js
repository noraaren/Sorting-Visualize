const container = document.getElementById("container");

// Generate an array of bars
function generateBars(num = 20) {
    container.innerHTML = ""; // Clear previous bars
    for (let i = 0; i < num; i++) {
        const value = Math.floor(Math.random() * 100) + 1;
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`; // Scale for better visibility
        bar.setAttribute("data-value", value);
        container.appendChild(bar);
    }
}

// Bubble Sort Visualization
async function bubbleSort() {
    let bars = document.querySelectorAll(".bar");
    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";
            
            await new Promise((resolve) => setTimeout(resolve, 200)); // Delay for visualization
            
            let value1 = parseInt(bars[j].getAttribute("data-value"));
            let value2 = parseInt(bars[j + 1].getAttribute("data-value"));

            if (value1 > value2) {
                swap(bars[j], bars[j + 1]);
                bars = document.querySelectorAll(".bar"); // Refresh bars
            }

            bars[j].style.backgroundColor = "steelblue";
            bars[j + 1].style.backgroundColor = "steelblue";
        }
    }
}

// Swap function
function swap(bar1, bar2) {
    let tempHeight = bar1.style.height;
    let tempValue = bar1.getAttribute("data-value");
    
    bar1.style.height = bar2.style.height;
    bar1.setAttribute("data-value", bar2.getAttribute("data-value"));
    
    bar2.style.height = tempHeight;
    bar2.setAttribute("data-value", tempValue);
}

// Initialize
generateBars();
