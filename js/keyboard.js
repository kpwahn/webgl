/*******************************************************************************************************************************
* Space
*
*
*******************************************************************************************************************************/  
    function keyboardSpace() {
        if (!reload) {
            var bullet = new Bullet(mainBullet.model);

            //Sets the bullet Angle
            bulletAngle = tank01Movement.shootAngle;

            //Sets the position of the bullet to fire from where the tank is
            bullet.model.position.set(tank01.position.x, tank01.position.y, tank01.position.z);
            //console.log("BULLET ANGLE -- " + bulletAngle);
            bullet.model.rotation.y = bulletAngle;
            //sets the name of the bullet to its spot in the array
            bullet.model.name = tank01.bullets.length;

            //Set the bounding box tied to the given bullet
            bullet.bulletBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
            bullet.bulletBox.setFromObject(bullet.model);

            //Add to the Array on tank01
            tank01.bullets.push(bullet);

            //Sets reload to true to make the shooting slower
            reload = true;

            setTimeout(function(){
                reload = false;
            }, 500);
            scene.add(bullet.model); 
        }
    }

/*******************************************************************************************************************************
* Up
*
*
*******************************************************************************************************************************/  
      function keyboardUp() {
          
        for (var a = 0; a < parkingGarages.length; a++){  
            if(tank01Box.intersectsBox(parkingGarages[a])){return;}
        }
        for ( var b = 0; b < brickWalls.length; b++){
            if(tank01Box.intersectsBox(brickWalls[b])){return;}
        }
          
        tank01.position.x += Math.sin(-tank01Movement.driveAngle) * tank01Movement.speed; 
        tank01.position.z += Math.cos(-tank01Movement.driveAngle) * tank01Movement.speed;  
      }

/*******************************************************************************************************************************
* Down
*
*
*******************************************************************************************************************************/  
    function keyboardDown() {
        tank01.position.x -= Math.sin(-tank01Movement.driveAngle) * tank01Movement.speed; 
        tank01.position.z -= Math.cos(-tank01Movement.driveAngle) * tank01Movement.speed; 
    }

/*******************************************************************************************************************************
* Left
*
*
*******************************************************************************************************************************/  
      function keyboardLeft() {
        tank01.rotation.y += tank01Movement.turnSpeed; 
        tank01Movement.driveAngle -= tank01Movement.turnSpeed;
        tank01Movement.shootAngle -= tank01Movement.turnSpeed;  
      }

/*******************************************************************************************************************************
* Right
*
*
*******************************************************************************************************************************/    
    function keyboardRight() {
        tank01.rotation.y -= tank01Movement.turnSpeed; 
        tank01Movement.driveAngle += tank01Movement.turnSpeed; 
        tank01Movement.shootAngle += tank01Movement.turnSpeed;
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