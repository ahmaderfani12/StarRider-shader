//you can run this code on https://www.shadertoy.com/
// https://www.shadertoy.com/view/fsfGWM

float remap(float s, float a1, float a2, float b1, float b2)
{
    return b1 + (s-a1)*(b2-b1)/(a2-a1);
}

float random (in float x) {
    return fract(sin(x)*1e4);
}

float random (in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}

vec3 stars(vec2 uv, float radious , vec3 shineColor , float power,float isVisible){
    vec3 color=vec3(0.0);
      if(isVisible>=0.65){
      
    float dis = distance(uv,vec2(0.5));
    float circle  = smoothstep(radious,radious+0.01,dis);
    float light = distance(uv-vec2(0.5),normalize(uv-vec2(0.5))*radious)*step(radious,circle)*3.0;
	light =(1. - clamp(light,0.0,1.0));
    
     color = mix(vec3(1.),(shineColor*light),vec3(circle))*power;
    }
    
    return color;
}



void mainImage( out vec4 fragColor, in vec2 fragCoord )
{  
    //adjust uv
    vec2 uv = fragCoord/iResolution.xy;
    uv.x *=  iResolution.x/iResolution.y;
     
     vec3 starsCol = vec3(0.0);
                
     //scale uv
     uv *=vec2(30.);
     //move star rows
    uv.x += iTime*(random(floor(uv.y))+0.1)*20.;
    vec2 ipos = floor(uv);  
    vec2 fpos = fract(uv);
     
    float cellSize = random(ipos);
    cellSize=remap(cellSize,0.0,1.0,0.0,0.3);
    
    starsCol=stars(fpos,cellSize,vec3(0.190,0.283,0.770),1.,random(ipos*100.));
    
 
    
    fragColor = vec4(starsCol,1.0);
}