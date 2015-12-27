// FusionScene = class FusionScene extends React.Component {
//   atoms() {
//     const atoms = [];

//     for (let i = 0; i < 100; i++) {
//       const position = `${-500 + (5 * i)} 1 -100`
//       atoms.push(<Atom numElectrons={1} position={position} />)
//     }

//     return atoms;
//   }

//   // Start with two hydrogen atoms
//   render() {
//     return (
//       <a-scene>
//         <a-camera position="0 1.8 4" cursor-visible="true" cursor-scale="2" cursor-color="#4CC3D9"
//                   cursor-offset="2" cursor-maxdistance="100" cursor-opacity="0.5"></a-camera>

//         <ElectricRepulsion>
//           {this.atoms()}
//         </ElectricRepulsion>

//         <a-sky color="#FFFDF6"></a-sky>
//       </a-scene>
//     );
//   }
// }
