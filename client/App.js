Meteor.startup(function () {
  // Setup three.js WebGL renderer.
  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);

  // Append the canvas element created by the renderer to document body element.
  document.body.appendChild(renderer.domElement);

  // Create the main scene
  new MainScene(renderer);
});
