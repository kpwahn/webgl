/*******************************************************************************************************************************
* Space
*
*
*******************************************************************************************************************************/  
    function keyboardShoot(tank, tankMovement) {
        if (!tank.reload) {
            var bullet = new Bullet(mainBullet.model);

            //Sets the bullet Angle
            bulletAngle = tankMovement.shootAngle;

            //Sets the position of the bullet to fire from where the tank is
            bullet.model.position.set(tank.position.x, tank.position.y + 2.5, tank.position.z);
            //console.log("BULLET ANGLE -- " + bulletAngle);
            bullet.model.rotation.y = bulletAngle;
            //sets the name of the bullet to its spot in the array
            bullet.model.name = tank.bullets.length;

            //Set the bounding box tied to the given bullet
            bullet.bulletBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
            bullet.bulletBox.setFromObject(bullet.model);

            //Add to the Array on tank01
            tank.bullets.push(bullet);

            //Sets reload to true to make the shooting slower
            tank.reload = true;

            scene.add(bullet.model);

            setTimeout(function(){
                tank.reload = false;
            }, 500);
            //scene.add(bullet.model);
        }
    }

/*******************************************************************************************************************************
* Up
*
*
*******************************************************************************************************************************/  
      function keyboardUp(tank, tankBox, tankMovement) {
          
        for (var a = 0; a < parkingGarages.length; a++){  
            if(tankBox.intersectsBox(parkingGarages[a])){return;}
        }
        for ( var b = 0; b < brickWalls.length; b++){
            if(tankBox.intersectsBox(brickWalls[b])){return;}
        }
          
        //Health Pack  
        if(tankBox.intersectsBox(cubeBox)){ 
            
            if(tank.health < 3){
                tank.health += 1;
                document.getElementById("tank01Health").innerHTML = tank01.health;
                document.getElementById("tank02Health").innerHTML = tank02.health;
                
                //Remove from scene
                scene.remove(cube);
                scene.remove(cubeBox);
            }
        
        }  
          
        tank.position.x += Math.sin(-tankMovement.driveAngle) * tankMovement.speed; 
        tank.position.z += Math.cos(-tankMovement.driveAngle) * tankMovement.speed;  
      }

/*******************************************************************************************************************************
* Down
*
*
*******************************************************************************************************************************/  
    function keyboardDown(tank, tankBox, tankMovement) {
        
        tank.position.x -= Math.sin(-tankMovement.driveAngle) * tankMovement.speed; 
        tank.position.z -= Math.cos(-tankMovement.driveAngle) * tankMovement.speed; 
    }

/*******************************************************************************************************************************
* Left
*
*
*******************************************************************************************************************************/  
      function keyboardLeft(tank, tankBox, tankMovement) {
        tank.rotation.y += tankMovement.turnSpeed; 
        tankMovement.driveAngle -= tankMovement.turnSpeed;
        tankMovement.shootAngle -= tankMovement.turnSpeed;  
      }

/*******************************************************************************************************************************
* Right
*
*
*******************************************************************************************************************************/    
    function keyboardRight(tank, tankBox, tankMovement) {
        tank.rotation.y -= tankMovement.turnSpeed; 
        tankMovement.driveAngle += tankMovement.turnSpeed; 
        tankMovement.shootAngle += tankMovement.turnSpeed;
    }

/*******************************************************************************************************************************
* a
*   Rotates the tanks barrel
*   Adjusts the shoot angle
*
*******************************************************************************************************************************/  
    function keyboardA() {
        tank01.traverse( function ( child )
            {
                child.children[6].rotation.z += 2 * Math.PI/180;
                tank01Movement.shootAngle -= 2 * Math.PI/180;
                tank01Box.setFromObject(tank01);
            });
    }
    
/*******************************************************************************************************************************
* d
*   Rotates the tanks barrel
*   Adjusts the shoot angle
*
*******************************************************************************************************************************/  
    function keyboardD() {
        tank01.traverse( function ( child )
            {
                child.children[6].rotation.z -= 2 * Math.PI/180;
                tank01Movement.shootAngle += 2 * Math.PI/180;
                tank01Box.setFromObject(tank01);
            });
    }

/*******************************************************************************************************************************
* Extra Code Snippets
*
******************************************************************************************************************************/
//        tank01.traverseVisible( function ( child )
//            {
//                bullet = tank01.getObjectByName("bullet").clone();
//                bullet.visible = true;
//                scene.add(bullet);
//                
//            });

//Keyboard up
//         if(tank01Box.isIntersectionBox(wallBox)){
//             // Dont drive forward if you hit the wall
//            console.log("INTERSECTION!"); return;
//        };