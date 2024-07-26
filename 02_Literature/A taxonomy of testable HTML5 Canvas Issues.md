| ID       | 2024-07-26-17:18      |
| -------- | --------------------- |
| **Tags** | #issues #HTML #canvas |
## Main concepts

The \<canvas> is widely used to develop web applications such as data visualizations, animations, and web games
- Lack of documentation of the Canvas API
- Not testable as other DOM elements because a \<canvas> is a bitmap (raster image)
- tipically web developers test the UI by analyzing the DOM using Cypress, Selenium or Playwright but the \<canvas> DOM element does not change after every canvas update so this method is not eligible
## \<canvas> related issues retrived from >2000+ issue reports in GitHub

**Visual issues (35%):** problems in the presentation of objects on the bitmap
    - rendering → incorrect scaling of objects or images (distortion o blurriness, differences in devices resolution, changes in the \<canvas> dimension, outdated graphics drivers)
    - layout → issues related to incorrect positioning and sizing of objects on the \<canvas> (misaligned objects, incorrect coordiantes x,y, incorrect z layering)
    - state → issues related to an object that is displayed in a different state than it should be (invisible or visibile objects)
    - appearance → issues related to incorrect aesthetics of objects displayed on the \<canvas> (incorrect color, font or transparency)

**User interaction issues (14%):** issues related to DOM events that are triggered from the
\<canvas> element
    - action → issues related to the fail of a single action (click-dragging the cursor to zoom does not work when the cursor moves outside the bounds of the canvas, tooltip not showing when mouse hovering over a graph)
    - behaviour _→_ issues related to multiple actions that together provide an incorrect result (drawing functionality does not work correctly while simultaneously scrolling within the canvas)
    
- **Web architecture issues (17%):** issues related to different behaviour across browsers and cross-origin resource sharing
    - different behaviour across browsers → issues related to unexpected behaviour while using different browsers
    - cross-origin resource sharing issues → issues related to incorrect use of CORS policies with \<canvas>
    
- **Performance issues (5%):** issues related to inefficent memory usage (rendering too often, memory not emptied correctly)

- **Integration issues (29%):** issues related the connection of the \<canvas> to the other parts of a web application
    - saving issues → issues relating to exporting the \<canvas> bitmap (downloading it as PNG using getImageData, toBlob or toDataURL)
    - browser runtime error → referencing an HTML \<canvas> that had not been created or using incorrect syntax for JavaScript libraries methods

## Notes
- More of these issues could occur together
- Testing has additional complexities that are not seen in desktop GUIs