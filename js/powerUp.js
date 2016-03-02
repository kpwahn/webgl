var healthPack, healthPackBox;
var healthPackReload = true;

var speedBoost, speedBoostBox;
var speedBoostReload = true;

var bulletSpeedBoost, bulletSpeedBoostBox;
var bulletSpeedBoostReload = true;


//Health pack
var loader = new THREE.TextureLoader();

loader.load(
    // resource URL
    'images/health.png',
    // Function when resource is loaded
    function ( texture ) {
        // do something with the texture
        var material = new THREE.MeshBasicMaterial( {
            map: texture
         } );

        var g = new THREE.CubeGeometry(5, 2.5, 5, 1,1,1);
        healthPack = new THREE.Mesh(g, material);
        healthPack.position.y = 5;
        healthPack.position.set(Math.random() * X_SIZE, 2.5, Math.random() * Z_SIZE);
        scene.add(healthPack);

        healthPackBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
        healthPackBox.setFromObject(healthPack);
    },
    // Function called when download progresses
    function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    // Function called when download errors
    function ( xhr ) {
        console.log( 'An error happened' );
    }
);

//speedboost
var loader = new THREE.TextureLoader();

loader.load(
    // resource URL
    'images/speed.jpg',
    // Function when resource is loaded
    function ( texture ) {
        // do something with the texture
        var material = new THREE.MeshBasicMaterial( {
            map: texture
         } );

        var g = new THREE.CubeGeometry(5, 2.5, 5, 1,1,1);
        speedBoost = new THREE.Mesh(g, material);
        speedBoost.position.y = 5;
        speedBoost.position.set(Math.random() * X_SIZE, 2.5, Math.random() * Z_SIZE);
        scene.add(speedBoost);

        speedBoostBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
        speedBoostBox.setFromObject(speedBoost);
    },
    // Function called when download progresses
    function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    // Function called when download errors
    function ( xhr ) {
        console.log( 'An error happened' );
    }
);

//bullet speedboost
var loader = new THREE.TextureLoader();

loader.load(
    // resource URL
    'images/bulletSpeed.jpg',
    // Function when resource is loaded
    function ( texture ) {
        // do something with the texture
        var material = new THREE.MeshBasicMaterial( {
            map: texture
         } );

        var g = new THREE.CubeGeometry(5, 2.5, 5, 1,1,1);
        bulletSpeedBoost = new THREE.Mesh(g, material);
        bulletSpeedBoost.position.y = 5;
        bulletSpeedBoost.position.set(Math.random() * X_SIZE, 2.5, Math.random() * Z_SIZE);
        scene.add(bulletSpeedBoost);

        bulletSpeedBoostBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
        bulletSpeedBoostBox.setFromObject(bulletSpeedBoost);
    },
    // Function called when download progresses
    function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    // Function called when download errors
    function ( xhr ) {
        console.log( 'An error happened' );
    }
);