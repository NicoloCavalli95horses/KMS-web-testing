| ID       | 2024-07-26-17:18      |
| -------- | --------------------- |
| **Tags** | #issues #HTML #canvas |
## Main concepts

The [[canvas DOM element]] is widely used to develop web applications such as data visualizations, animations, and web games
- Lack of documentation of the Canvas API
- Not testable as other DOM elements because a \<canvas> is a bitmap (raster image)
- typically web developers test the UI by analyzing the DOM using Cypress, Selenium or Playwright but the \<canvas> DOM element does not change after every canvas update so this method is not eligible
## \<canvas> related [[error]] retrieved from >2000+ issue reports in GitHub

```dataviewjs
const values = [35, 29, 17, 14, 5];
const labels = ['Visual', 'Integration', 'Web Architecture', 'UX', 'Performance'];
const canvasWidth = 500;
const canvasHeight = 200;
const barWidth = canvasWidth / values.length;

const chartContainer = document.createElement("div");
chartContainer.className = "chart-container";
chartContainer.style.position = "relative";
chartContainer.style.height = `${canvasHeight}px`;
chartContainer.style.width = `${canvasWidth}px`;

const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
chartContainer.appendChild(canvas);
this.container.appendChild(chartContainer);


function drawHistogram(ctx, values, labels) {
    values.forEach((value, index) => {
        const x = index * barWidth;
        const y = canvasHeight - (value / 100 * canvasHeight);
        const height = (value / 100 * canvasHeight);
        ctx.fillStyle = 'purple';
        ctx.fillRect(x, y, barWidth - 10, height);
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(labels[index], x + barWidth / 2 - 5, canvasHeight - 10);
    });

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, canvasHeight);
    ctx.strokeStyle = 'white';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, canvasHeight);
    ctx.lineTo(canvasWidth, canvasHeight);
    ctx.stroke();
}

drawHistogram(ctx, values, labels);

```


==**Visual issues (35%):**== problems in the presentation of objects on the bitmap
- **Rendering** → incorrect scaling of objects or images (distortion o blurriness, differences in devices resolution, changes in the \<canvas> dimension, outdated graphics drivers)
- **Layout** → issues related to incorrect positioning and sizing of objects on the \<canvas> (misaligned objects, incorrect coordinates x,y, incorrect z layering)
- **State** → issues related to an object that is displayed in a different state than it should be (invisible or visible objects)
- **Appearance** → issues related to incorrect aesthetics of objects displayed on the \<canvas> (incorrect color, font or transparency)

==**Integration issues (29%)==:** issues related the connection of the \<canvas> to the other parts of a web application
- **Saving issues** → issues relating to exporting the \<canvas> bitmap (downloading it as PNG using getImageData, toBlob or toDataURL)
- **Browser runtime error** → referencing an HTML \<canvas> that had not been created or using incorrect syntax for JavaScript libraries methods

==**Web architecture issues (17%)==:** issues related to different behavior across browsers and cross-origin resource sharing
- **Different behavior across browsers** → issues related to unexpected behavior while using different browsers
- **Cross-origin resource sharing issues** → issues related to incorrect use of [[CORS (Cross-Origin Resource Sharing)]] with \<canvas>

==**User interaction issues (14%)==:** issues related to DOM events that are triggered from the
\<canvas> element
- **Action** → issues related to the fail of a single action (click-dragging the cursor to zoom does not work when the cursor moves outside the bounds of the canvas, tooltip not showing when mouse hovering over a graph)
- **Behavior** _→_ issues related to multiple actions that together provide an incorrect result (drawing functionality does not work correctly while simultaneously scrolling within the canvas)

==**Performance issues (5%)==:** issues related to inefficient memory usage (rendering too often, memory not emptied correctly)

## Notes
- More of these issues could occur together
- Testing has additional complexities that are not seen in desktop GUIs

## References
[[ref_taxonomy_of_testable_html5_canvas_issues]]