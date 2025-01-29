---
ID: 2025-01-29-10:33
tags:
  - "#definition"
  - regressionTesting
  - softwareEngineering
  - imageComparison
---
## Definition

The structural similarity index measure (SSIM) is a method for predicting the perceived quality of digital television and cinematic pictures, as well as other kinds of digital images and videos.

It is also ==used for measuring the similarity between two images.==
The SSIM index is a full reference metric; in other words, the measurement or prediction of image quality is based on an initial uncompressed or distortion-free image as reference.

SSIM is a perception-based model that considers image degradation as perceived change in structural information, while also incorporating important perceptual phenomena, including both luminance masking and contrast masking terms.

This distinguishes SSIM from other techniques such as mean squared error (MSE) or Peak signal-to-noise ratio (PSNR) that instead estimate absolute errors.

Structural information is the idea that the pixels have strong inter-dependencies especially when they are spatially close. These dependencies carry important information about the structure of the objects in the visual scene. 

Luminance masking is a phenomenon whereby image distortions (in this context) tend to be less visible in bright regions, while contrast masking is a phenomenon whereby distortions become less visible where there is significant activity or "texture" in the image.

## References
https://en.wikipedia.org/wiki/Structural_similarity_index_measure#:~:text=SSIM%20is%20a%20perception%2Dbased,masking%20and%20contrast%20masking%20terms.