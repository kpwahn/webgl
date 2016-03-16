/**
 * Created by david_000 on 3/16/2016.
 */


function gameSettings() {
    fogOn = $("#FogOn:checked").length > 0;
    fogIntensity = $("#FogInt")[0].value;
    lightIntensity = $("#lightInt")[0].value;
    healthPackOn = $("#health:checked").length > 0;
    speedBoostOn = $("#speed:checked").length > 0;
    BulletBoostOn = $("#bullet:checked").length > 0;
    UltPowerOn = $("#ult:checked").length > 0;

}