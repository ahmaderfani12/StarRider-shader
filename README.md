## Star rider shader
--
I tried to use my GLSL fragment shader into unity and apply it to a model.
<br>
GLSL code:
<br>
https://www.shadertoy.com/view/fsfGWM
<br>
Most of the shader is by the random method with fraction of sin wave, and the rows move base on random(floor(UV.y)) to just move on the x-axis.
<br>
## Unity
<br>
![alt text](https://github.com/ahmaderfani12/StarRider-shader/blob/main/unity_preview.jpg?raw=true)
Project is on URP and i project the shader on model using world space position, and also add some bloom with HDR color.
