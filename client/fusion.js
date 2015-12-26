Template.orbital.helpers({
  electrons: function () {
    if (this.numElectrons < 1) return [];

    const spacing = 360 / this.numElectrons;

    const electrons = [];

    for (let i = 0; i < this.numElectrons; i++) {
      electrons.push({ rotation: `0 0 ${spacing * i}` });
    }

    return electrons;
  }
});
