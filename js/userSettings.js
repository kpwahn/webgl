/**
 * Created by david_000 on 3/16/2016.
 */


function gameSettings() {
    fogOn = $("#FogOn:checked").length > 0;
    fogIntensity = $("#FogInt")[0].value;
    if(fogIntensity == "") {
        console.log(fogIntensity);
        fogIntensity = 1;
    }
    lightIntensity = $("#lightInt")[0].value;
    healthPackOn = $("#health:checked").length > 0;
    speedBoostOn = $("#speed:checked").length > 0;
    bulletBoostOn = $("#bullet:checked").length > 0;
    ultPowerOn = $("#ult:checked").length > 0;

}