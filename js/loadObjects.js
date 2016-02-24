function loadObjects() {

    var loader = new THREE.ObjectLoader();
    loader.load("/webgl/objects/tank/tank.json",function ( obj ) {
        obj.position.z = -20;
        scene.add( obj );
        tank01 = obj;
        
        tank01.bullets = [];
        tank01.bulletsRemoved = 0;
        tank01.health = 3;
        tank01.name = "Tank1";
        tank01.reload = false;
        tank01.isThirdPerson = true;
        tank01.canChangeCamera = true;
        tank01.shootSpeed = 8;
        tank01.reloadSpeed = 500;

        //Set the camera relative to this object
        tank01.add( camera );
        camera.position.set( 0, 25, -50 );  
        camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

        //Just for visual box
        //tank01.tank01BoxDisplay = new THREE.BoundingBoxHelper( tank01 );
        //scene.add(tank01.tank01BoxDisplay);

        //TODO why is this box different?
        tank01.tankBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
        tank01.tankBox.setFromObject(tank01);
        
    });   
    
    var loader = new THREE.ObjectLoader();
    loader.load("/webgl/objects/tank02/tank02.json",function ( obj ) {
        obj.scale.set(1.4, 1.4, 1.4);
        obj.position.z = -50;
        scene.add( obj );
        tank02 = obj;
        tank02.rotation.y = 180 * Math.PI/180;
        
        tank02.position.set(X_SIZE, 0, Z_SIZE);
        tank02.bullets = [];
        tank02.bulletsRemoved = 0;
        tank02.health = 3;
        tank02.name = "Tank2";
        tank02.reload = false;
        tank02.isThirdPerson = true;
        tank02.canChangeCamera = true;
        tank02.shootSpeed = 8;
        tank02.reloadSpeed = 500;
        
        tank02.add(camera2);
        camera2.position.set( 0, 25, 50 );    
        camera2.lookAt( new THREE.Vector3( 0, 0, 0 ) );
        
        tank02.tankBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
        tank02.tankBox.setFromObject(tank02);
    });   
      
}