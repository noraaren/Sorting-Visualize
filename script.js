const container = document.getElementById("container");


function generateBars(num = 20) {
    container.innerHTML = ""; 
    for (let i = 0; i < num; i++) {
        const value = Math.floor(Math.random() * 100) + 1;
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`; 
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
            
            await new Promise((resolve) => setTimeout(resolve, 400)); // Delay for visualization
            
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

async function binarySearch(target) {

    let left = 0
    let right = bars.length -1 

    while (left <= right) {
        mid = Math.floor((left + right)/2)

        if (mid > target){
            right = mid -1
            
        } else if (mid < target){
            left = mid + 1
        } else{
            return target
        }

    }

    
}


async function insertionSort() {
    let bars = document.querySelectorAll(".bar");

    for (let i = 1; i < bars.length; i++) { 
        let keyHeight = bars[i].style.height;
        let keyValue = bars[i].getAttribute("data-value");
        let j = i - 1;

        bars[i].style.backgroundColor = "red"; 

        while (j >= 0 && parseInt(bars[j].getAttribute("data-value")) > parseInt(keyValue)) {
            bars[j + 1].style.height = bars[j].style.height;
            bars[j + 1].setAttribute("data-value", bars[j].getAttribute("data-value"));
            
            bars[j].style.backgroundColor = "yellow"; // Highlight comparison
            await new Promise((resolve) => setTimeout(resolve, 400)); // Delay for visualization
            
            bars[j].style.backgroundColor = "steelblue"; // Reset color
            j = j - 1;
        }

        bars[j + 1].style.height = keyHeight;
        bars[j + 1].setAttribute("data-value", keyValue);

        bars[i].style.backgroundColor = "steelblue"; // Reset key color
    }
}



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
