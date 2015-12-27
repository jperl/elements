window.WebVRConfig = {
  FORCE_ENABLE_VR: true,
};

Meteor.startup(function init() {
  // Setup three.js WebGL renderer. Note: Antialiasing is a big performance hit.
  // Only enable it if you actually need to.
  var renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);

  // Append the canvas element created by the renderer to document body element.
  document.body.appendChild(renderer.domElement);

  // Create a three.js scene.
  var scene = new THREE.Scene();

  // Create a three.js camera.
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

  // Apply VR headset positional data to camera.
  var controls = new THREE.VRControls(camera);

  // Apply VR stereo rendering to renderer.
  var effect = new THREE.VREffect(renderer);
  effect.setSize(window.innerWidth, window.innerHeight);

  // Add a repeating grid as a skybox.
  var boxWidth = 5;
  var loader = new THREE.TextureLoader();
  loader.load('img/box.png', onTextureLoaded);

  function onTextureLoaded(texture) {
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
  }

  // Create a VR manager helper to enter and exit VR mode.
  var params = {
    hideButton: false, // Default: false.
    isUndistorted: false // Default: false.
  };
  var manager = new WebVRManager(renderer, effect, params);

  // Create 3D objects.
  var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  var material = new THREE.MeshNormalMaterial();
  var cube = new THREE.Mesh(geometry, material);

  // Position cube mesh
  cube.position.z = -1;

  // Add cube mesh to your three.js scene
  scene.add(cube);

  // Request animation frame loop function
  function animate(timestamp) {
    // Apply rotation to cube mesh
    cube.rotation.y += 0.01;

    // Update VR headset position and apply to camera.
    controls.update();

    // Render the scene through the manager.
    manager.render(scene, camera, timestamp);

    requestAnimationFrame(animate);
  }

  // Kick off animation loop
  animate();

  // Reset the position sensor when 'z' pressed.
  function onKey(event) {
    if (event.keyCode == 90) { // z
      controls.resetSensor();
    }
  }

  window.addEventListener('keydown', onKey, true);
});
