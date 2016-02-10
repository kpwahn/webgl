var brickWall = new THREE.Object3D();
var brickWalls = [];
var brickWallsDisplay = [];

//Material for the brick walls
var texture = THREE.ImageUtils.loadTexture('images/brick.jpg', {}, function() {console.log("image loaded"), {}});
var material = new THREE.MeshBasicMaterial( {map: texture} );


for (var i = 0; i < 35; i++) {
    geometry = new THREE.BoxGeometry( Math.random() * 20, 60, Math.random() * 120 );
    var brick = new THREE.Mesh( geometry, material );
    
    brick.position.set(Math.random() * 400, 30, Math.random() * 400);
    brick.rotation.y = (Math.floor(Math.random() * 4)) * 90 * Math.PI/180;
    
    var brickWallBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
    brickWallBox.setFromObject(brick);
    brickWalls.push(brickWallBox);
    
    brickWall.add(brick);
}
