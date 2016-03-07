var brickWall = new THREE.Object3D();
var brickWalls = [];
var brickWallsDisplay = [];

var loader = new THREE.TextureLoader();

// load a resource
loader.load(
    // resource URL
    'images/brick.jpg',
    // Function when resource is loaded
    function ( texture ) {
        // do something with the texture
        var material = new THREE.MeshLambertMaterial( {
            map: texture
         } );

        for (var i = 0; i < 45; i++) {
            geometry = new THREE.BoxGeometry( Math.random() * 20, 60, Math.random() * 120 );
            var brick = new THREE.Mesh( geometry, material );

            brick.position.set(Math.random() * X_SIZE, 30, Math.random() * Z_SIZE);
            brick.rotation.y = (Math.floor(Math.random() * 4)) * 90 * Math.PI/180;

            var brickWallBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
            brickWallBox.setFromObject(brick);
            brickWalls.push(brickWallBox);

            brickWall.add(brick);
        }
        
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