Skybox = class Skybox {
  constructor(scene) {
    // Add a repeating grid as a skybox.
    var boxWidth = 5;
    var loader = new THREE.TextureLoader();
    loader.load('img/box.png', function onTextureLoaded(texture) {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(boxWidth, boxWidth);

      var geometry = new THREE.BoxGeometry(boxWidth, boxWidth, boxWidth);
      var material = new THREE.MeshBasicMaterial({
        map: texture,
        color: 0x01BE00,
        side: THREE.BackSide
      });

      var skybox = new THREE.Mesh(geometry, material);
      scene.add(skybox);
    });
  }
}
