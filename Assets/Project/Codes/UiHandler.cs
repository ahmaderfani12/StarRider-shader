using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class UiHandler : MonoBehaviour
{
    [SerializeField] Slider sizeSlider;
    [SerializeField] Slider randomSlider;
    [SerializeField] Slider speedSlider;
    [SerializeField] Slider shadowSlider;
    [SerializeField] Slider directionSlider;

    [SerializeField] GameObject Sculpture;

    [SerializeField] Text fpsText;
    private Material mat;
    private GameObject lightObject;
   

    private void Start()
    {
        mat = Sculpture.GetComponent<Renderer>().material;
        lightObject = GameObject.FindObjectOfType<Light>().gameObject;
        InitialUIValues();
        Application.targetFrameRate = -1;
    }
 
    void InitialUIValues()
    {
        sizeSlider.value = mat.GetFloat("_size");
        randomSlider.value = mat.GetFloat("_random");
        speedSlider.value = mat.GetFloat("_speed");
        shadowSlider.value = mat.GetFloat("_shadow");
        directionSlider.value = lightObject.transform.localEulerAngles.x;
    }

    public void SliderOnValueChange(string sliderName)
    {
        switch (sliderName)
        {
            case "size":
                mat.SetFloat("_size", sizeSlider.value);
                break;
            case "random":
                mat.SetFloat("_random", randomSlider.value);
                break;
            case "speed":
                mat.SetFloat("_speed", speedSlider.value);
                break;
            case "shadow":
                mat.SetFloat("_shadow", shadowSlider.value);
                break;
            case "direction":
                lightObject.transform.rotation = Quaternion.Euler(directionSlider.value, 0, 0);
                break;



        }
    }

    
}
