Cube = class Cube {
  constructor(scene) {
    // Create 3D objects.
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshNormalMaterial();

    this.cube = new THREE.Mesh(geometry, material);

    // Position cube mesh
    this.cube.position.z = -1;

    // Add cube mesh to your three.js scene
    scene.add(this.cube);
  }

  render() {
    // Apply rotation to cube mesh
    this.cube.rotation.y += 0.01;
  }
}
