FusionScene = class FusionScene extends React.Component {
  // Start with two hydrogen atoms
  render() {
    return (
      <a-scene>
        <a-camera position="0 1.8 4" cursor-visible="true" cursor-scale="2" cursor-color="#4CC3D9"
                  cursor-offset="2" cursor-maxdistance="100" cursor-opacity="0.5"></a-camera>

        <ElectricRepulsion>
          <Atom numElectrons={1} position="-4 1 -2.5" />
          <Atom numElectrons={1} position="4 1 -2.5" />
        </ElectricRepulsion>

        <a-sky color="#FFFDF6"></a-sky>
      </a-scene>
    );
  }
}
