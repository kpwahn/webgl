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

function updateBullet() {
    if (tank01.bullets[0] != undefined) {
        //goes through the entire array of bullets
        for (var i = tank01.bulletsRemoved; i < tank01.bullets.length; i++) {

            tank01.bullets[i].bulletBox.setFromObject(tank01.bullets[i].model);


            //Removes the bullet if there is a collision with a wall.
//            if(tank01.bullets[i].bulletBox.intersectsBox(wallBox)){
//                console.log("I HIT IT! I HIT IT!!");
//                var tmp = tank01.bullets[i];
//                //increment my bulletsRemoved to know where to start next time in the array.
//                tank01.bulletsRemoved++;
//                scene.remove(tmp.model);
//            }

            //If bullet distance is farther than 1000, remove it from the scene
            if (tank01.bullets[i].distance > 1000) {
                console.log("TOO FAR AWAY");
                var tmp = tank01.bullets[i];
                //increment my bulletsRemoved to know where to start next time in the array.
                tank01.bulletsRemoved++;
                scene.remove(tmp.model);
            }
        }
    }
}
