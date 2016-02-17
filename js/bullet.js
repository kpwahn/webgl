/**
 * Created by david_000 on 2/8/2016.
 */
"use strict";

class Bullet {
    constructor(object) {
        this.model = object.clone();
        this.speed = 8;
        this.distance = 0;
    }

    advance() {
        this.model.translateZ(-this.speed);
        this.distance += this.speed;
        //this.model.updateMatrix();
    }

    remove(scene) {
        scene.remove(this.model);
    }
}

function updateBullet(tank, otherTankBox, otherTank) {
    //pass in bullet object
    
    if (tank.bullets[tank.bulletsRemoved] != undefined) {
        //goes through the entire array of bullets
        for (var i = tank.bulletsRemoved; i < tank.bullets.length; i++) {

            tank.bullets[i].bulletBox.setFromObject(tank.bullets[i].model);

            for (var a = 0; a < parkingGarages.length; a++){
                if(tank.bullets[i].bulletBox.intersectsBox(parkingGarages[a])){
                    console.log("I HIT IT!!!");
                    var tmp = tank.bullets[i];
                    //increment my bulletsRemoved to know where to start next time in the array.
                    tank.bulletsRemoved++;
                    scene.remove(tmp.model);
                }
            }
            //MODIFICATION
            for ( var b = 0; b < brickWalls.length; b++){
                if(tank.bullets[i].bulletBox.intersectsBox(brickWalls[b])){
                    console.log("I HIT IT!!!");
                    var tmp = tank.bullets[i];
                    //increment my bulletsRemoved to know where to start next time in the array.
                    tank.bulletsRemoved++;
                    scene.remove(tmp.model);
                }
            }
            
            if(tank.bullets[i].bulletBox.intersectsBox(otherTankBox)){

                console.log("You hit " + otherTank.name + "!");
                otherTank.health--;
                if (otherTank.health == 0) {
                    console.log(otherTank.name + "Died");
                    scene.remove(otherTank);
                    //scene.remove(otherTankBox);
                    //otherTankBox.set(0, 100000, 0);
                    tank01.tank01Box.setFromObject(theVoid);

                }
                
                var tmp = tank.bullets[i];
                //increment my bulletsRemoved to know where to start next time in the array.
                tank.bulletsRemoved++;
                scene.remove(tmp.model);       
            }

            //If bullet distance is farther than 1000, remove it from the scene
            if (tank.bullets[i].distance > 1000) {
                console.log("TOO FAR AWAY");
                var tmp = tank.bullets[i];
                //increment my bulletsRemoved to know where to start next time in the array.
                tank.bulletsRemoved++;
                scene.remove(tmp.model);
            }
        }
    }
}
