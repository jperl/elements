Orbital = class Orbital extends React.Component {
  render() {
    return (
      <a-entity>
        {this.props.children}
        <a-entity geometry="primitive: torus; radius: 2.5; radiusTubular: 0.01; segmentsTubular: 100;" material="color: #868988;"></a-entity>
        <a-animation attribute="rotation" to="0 0 360" dur="20000" easing="linear" repeat="indefinite"></a-animation>
      </a-entity>
    );
  }
}

// Template.orbital.helpers({
//   electrons: function () {
//     if (this.numElectrons < 1) return [];
//     const spacing = 360 / this.numElectrons;
//     const electrons = [];
//     for (let i = 0; i < this.numElectrons; i++) {
//       electrons.push({ rotation: `0 0 ${spacing * i}` });
//     }
//     return electrons;
//   }
// });
