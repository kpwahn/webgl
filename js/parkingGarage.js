var parkingGarage = new THREE.Object3D();
var parkingGarages = [];
        
var texture = THREE.ImageUtils.loadTexture('images/concrete.jpg', {}, {}, {});
var material = new THREE.MeshBasicMaterial( {map: texture} );

var geometry = new THREE.BoxGeometry( 5, 20, 5 );

//pillars in the y direction (UP)
for (var i = 0; i < 6; i++){
    //pillars in the x direction (LEFT)
    for (var j = 0; j < 4; j++){
        //pillars in the z direction (BACK);
        for ( var k = 0; k < 4; k++) {
            var pillar = new THREE.Mesh( geometry, material );
            pillar.position.set(j * 25, 21 * i, k * 25);
            
            //Only create the bounding boxes for the first floor
            if (i == 0) {
                pillarBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
                pillarBox.setFromObject(pillar);
                parkingGarages.push(pillarBox);
            }
            
            parkingGarage.add(pillar);
        }
    }
}

for(var l = 0; l < 6; l++){
    geometry = new THREE.BoxGeometry(5, 1, 80);
    var floor = new THREE.Mesh( geometry, material );

    floor.scale.x = 16;
    floor.position.set(37.5, (10.5 * 2 * l) + 10.5 , 37.5);
    parkingGarage.add(floor);
}

parkingGarage.position.y = 10;