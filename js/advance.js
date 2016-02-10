/**
 * Created by david_000 on 2/8/2016.
 */

function advance() {
    // fire a laser
    var length = tank01.bullets.length;
    if (tank01.bullets[0] != undefined) {
        for (var i = 0; i < length; i++) {
            var tmp = scene.getObjectByName(tank01.bullets[i].model.name);
            if (tmp != undefined) {
                tank01.bullets[i].advance();
            }
            //tank01.bullets[i].model.updateMatrix();
        }
    }
}