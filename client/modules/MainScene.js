MainScene = class MainScene {
  constructor(renderer) {
    // Create a three.js scene.
    const scene = new THREE.Scene();

    // Camera, stereo rendering, and mode panel for VR
    this.vr = new VR(scene, renderer);

    new Skybox(scene);

    // Rotating cube
    this.cube = new Cube(scene);

    // Kick off animation loop
    this.animate = this.animate.bind(this);
    this.animate();
  }

  animate(timestamp) {
    this.cube.render();
    this.vr.render(timestamp);

    // Request animation frame loop function
    requestAnimationFrame(this.animate);
  }
}
