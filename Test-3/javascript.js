const svg = document.getElementById('board');

let count = 100;
for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
        let x = (row % 2 === 0) ? col * 120 : (9 - col) * 120;
        let y = row * 56;

        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", "120");
        rect.setAttribute("height", "56");
        rect.setAttribute("stroke", "black");

        if ([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97].includes(count)) {
            rect.setAttribute("fill", "aqua");
        } else if ([2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98].includes(count)) {
            rect.setAttribute("fill", "turquoise");
        } else if ([3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 83, 87, 91, 95, 99].includes(count)) {
            rect.setAttribute("fill", "yellow");
        } else if ([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100].includes(count)) {
            rect.setAttribute("fill", "pink");
        } else {
            rect.setAttribute("fill", "none");
        }

        svg.appendChild(rect);

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", x + 60);
        text.setAttribute("y", y + 30);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("dominant-baseline", "middle");
        text.setAttribute("font-size", "22");
        text.setAttribute("font-weight", "800");
        text.textContent = count;
        svg.appendChild(text);

        count--;
    }
}