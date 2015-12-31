window.WebVRConfig = {
  FORCE_ENABLE_VR: true,
};

// Camera, stereo rendering, and mode panel for VR
VR = class VR {
  constructor(scene, renderer) {
    this.scene = scene;

    // Create a three.js camera.
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

    // Apply VR headset positional data to camera.
    this.controls = new THREE.VRControls(this.camera);

    // Apply VR stereo rendering to renderer.
    const effect = new THREE.VREffect(renderer);
    effect.setSize(window.innerWidth, window.innerHeight);

    // Create a VR manager helper to enter and exit VR mode.
    this.manager = new WebVRManager(renderer, effect, {
      hideButton: false, // Default: false.
      isUndistorted: false // Default: false.
    });

    window.addEventListener('keydown', this.onKey.bind(this), true);
  }

  // Reset the position sensor when 'z' pressed.
  onKey() {
    if (event.keyCode == 90) { // z
      this.controls.resetSensor();
    }
  }

  render(timestamp) {
    // Update VR headset position and apply to camera.
    this.controls.update();

    // Render the scene through the manager.
    this.manager.render(this.scene, this.camera, timestamp);
  }
}
