
// Set up ParticleNetwork appropriately for the environment.
(function (factory) {

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = (typeof self === 'object' && self.self === self && self) || (typeof global === 'object' && global.global === global && global);

  // AMD.
  if (typeof define === 'function' && define.amd) {
    define(['exports'], function (exports) {
      root.ParticleNetwork = factory(root, exports);
    });
  }

  // Node.js or CommonJS.
  else if (typeof module === 'object' && module.exports) {
    module.exports = factory(root, {});
  }

  // Browser global.
  else {
    root.ParticleNetwork = factory(root, {});
  }

}(function (root, ParticleNetwork) {

  // Create Particle class
  var Particle_Re = function (parent) {

    this.canvas = parent.canvas;
    this.ctx = parent.ctx;
    this.particleColor = parent.options.particleColor;

    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.velocity = {
      x: (Math.random() - 0.5) * parent.options.velocity,
      y: (Math.random() - 0.5) * parent.options.velocity
    };
  };

  // Create Particle class
  var Particle = function (parent, x_c, y_c) {

    this.canvas = parent.canvas;
    this.ctx = parent.ctx;
    this.particleColor = parent.options.particleColor;

    this.x = x_c;
    this.y = y_c;

    this.velocity = {
      x: (Math.random() - 0.5) * parent.options.velocity,
      y: (Math.random() - 0.5) * parent.options.velocity
    };

    // console.log("velosity");
    // console.log(this.velocity);

  };

  Particle.prototype.update = function (butterflyCoordinate) {


    // for (let index = 0; index < butterflyCoordinate.length; index++) {
    //   const element = butterflyCoordinate[index];
    //   console.log(element);

    //   if (this.x > element[0] ) { this.velocity.x = -this.velocity.x; }
    //   if (this.y > element[1]) { this.velocity.y = -this.velocity.y; }

    // }



    if (this.x > 775 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 211 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 746 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 199 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 729 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 202 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 724 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 180 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 711 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 162 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 711 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 146 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 700 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 125 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 687 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 112 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 687 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 95 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 675 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 71 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 686 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 51 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 696 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 54 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 715 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 54 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 726 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 55 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 746 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 64 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 774 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 83 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 792 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 92 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 801 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 105 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 824 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 117 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 835 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 126 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 848 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 144 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 698 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 75 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 725 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 83 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 709 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 101 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 742 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 96 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 721 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 118 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 729 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 142 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 742 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 120 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 764 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 104 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 784 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 120 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 767 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 128 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 753 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 144 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 744 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 161 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 746 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 182 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 764 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 190 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 786 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 197 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 771 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 202 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 782 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 179 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 780 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 166 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 773 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 148 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 793 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 148 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 811 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 132 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 814 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 159 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 833 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 171 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 813 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 183 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 846 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 164 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 862 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 152 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 871 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 174 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 846 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 194 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 807 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 203 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 797 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 217 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 828 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 205 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 868 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 202 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 890 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 187 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 890 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 206 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 891 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 220 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 892 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 233 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 889 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 252 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 886 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 270 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 879 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 292 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 863 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 316 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 847 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 338 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 845 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 347 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 808 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 349 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 837 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 317 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 857 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 290 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 862 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 271 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 860 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 251 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 862 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 222 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 844 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 235 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 828 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 237 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 827 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 250 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 829 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 273 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 831 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 292 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 819 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 317 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 804 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 317 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 808 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 347 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 821 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 335 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 791 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 281 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 812 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 288 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 803 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 255 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 779 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 245 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 809 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 243 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 760 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 244 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 753 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 239 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 743 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 242 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 737 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 253 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 736 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 272 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 733 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 281 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 742 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 299 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 748 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 315 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 761 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 325 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 772 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 336 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 778 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 300 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 765 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 275 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 783 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 268 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 790 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 322 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 796 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 347 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 768 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 221 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1107 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 52 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1025 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 332 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1022 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 304 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1020 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 274 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1008 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 279 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1002 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 311 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1003 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 345 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1016 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 335 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 985 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 349 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 978 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 332 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 957 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 345 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 946 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 331 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 935 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 316 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 951 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 343 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 958 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 316 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 927 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 295 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 917 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 272 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 919 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 281 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 936 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 286 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 926 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 297 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 970 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 286 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 986 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 305 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1044 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 254 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1062 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 270 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1059 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 238 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1060 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 253 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1045 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 253 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1042 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 225 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1025 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 209 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1018 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 219 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1018 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 239 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1000 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 245 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 971 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 246 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 986 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 260 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 952 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 264 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 946 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 246 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 915 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 251 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 913 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 230 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 912 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 208 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 910 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 192 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 930 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 215 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 959 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 217 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1000 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 225 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 975 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 227 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 944 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 230 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 985 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 199 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1015 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 194 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1023 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 211 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1037 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 175 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1051 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 185 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1059 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 182 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1073 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 179 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1080 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 163 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1054 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 167 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1060 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 149 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1026 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 150 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1010 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 173 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 990 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 165 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 964 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 190 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 946 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 198 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 942 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 185 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 922 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 179 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 927 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 162 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 954 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 166 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 946 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 146 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 962 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 134 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 981 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 150 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 972 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 114 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 989 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 120 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1007 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 139 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1015 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 107 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1002 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 99 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1018 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 87 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1043 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 101 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1041 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 125 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1064 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 120 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1097 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 123 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1076 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 137 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1108 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 116 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1114 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 97 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1111 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 82 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1118 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 69 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1109 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 55 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1087 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 55 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1077 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 54 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1060 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 62 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1036 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 73 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1027 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 76 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1018 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 85 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1060 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 87 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1080 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 79 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1089 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 102 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1062 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 106 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 1019 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 128 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    if (this.x > 897 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 265 || this.y < -80) { this.velocity.y = -this.velocity.y; }


    if (this.x > 678 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 72 || this.y < -80) { this.velocity.y = -this.velocity.y; }
    if (this.x > 679 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 88 || this.y < -80) { this.velocity.y = -this.velocity.y; }
    if (this.x > 687 || this.x < -80) { this.velocity.x = -this.velocity.x; }
    if (this.y > 105 || this.y < -80) { this.velocity.y = -this.velocity.y; }

    this.x += this.velocity.x;
    this.y += this.velocity.y;


  };

  Particle.prototype.draw = function () {


    // this.ctx.beginPath();
    // this.ctx.fillStyle = this.particleColor;
    // this.ctx.globalAlpha = 0.7;
    // this.ctx.lineWidth = 1;

    // // Draw particle
    // this.ctx.beginPath();
    // this.ctx.fillStyle = this.particleColor;
    // this.ctx.globalAlpha = 0.7;
    // this.ctx.lineWidth = 1;
    // // this.ctx.arc(this.x, this.y, 1.5, 0, 2 * Math.PI);
    // this.ctx.moveTo(677, 71);
    // this.ctx.lineTo(677, 71);
    // this.ctx.lineTo(687, 53);
    // this.ctx.lineTo(707, 54);
    // this.ctx.lineTo(727, 55);
    // this.ctx.lineTo(743, 63);
    // this.ctx.lineTo(761, 73);
    // this.ctx.lineTo(791, 92);
    // this.ctx.lineTo(804, 107);
    // this.ctx.lineTo(822, 117);
    // this.ctx.lineTo(838, 130);
    // this.ctx.lineTo(850, 146);
    // this.ctx.lineTo(863, 150);
    // this.ctx.lineTo(873, 173);
    // this.ctx.lineTo(885, 185);
    // this.ctx.lineTo(894, 189);
    // this.ctx.lineTo(888, 176);
    // this.ctx.lineTo(899, 162);
    // this.ctx.lineTo(911, 173);
    // this.ctx.lineTo(904, 191);
    // this.ctx.lineTo(909, 186);
    // this.ctx.lineTo(921, 176);
    // this.ctx.lineTo(928, 160);
    // this.ctx.lineTo(942, 146);
    // this.ctx.lineTo(960, 132);
    // this.ctx.lineTo(969, 117);
    // this.ctx.lineTo(992, 102);
    // this.ctx.lineTo(1007, 91);
    // this.ctx.lineTo(1017, 85);
    // this.ctx.lineTo(1026, 76);
    // this.ctx.lineTo(1046, 66);
    // this.ctx.lineTo(1077, 54);
    // this.ctx.lineTo(1089, 54);
    // this.ctx.lineTo(1110, 52);
    // this.ctx.lineTo(1119, 72);
    // this.ctx.lineTo(1113, 83);
    // this.ctx.lineTo(1115, 102);
    // this.ctx.lineTo(1112, 115);
    // this.ctx.lineTo(1093, 127);
    // this.ctx.lineTo(1083, 133);
    // this.ctx.lineTo(1062, 149);
    // this.ctx.lineTo(1081, 162);
    // this.ctx.lineTo(1074, 178);
    // this.ctx.lineTo(1058, 183);
    // this.ctx.lineTo(1044, 195);
    // this.ctx.lineTo(1025, 208);
    // this.ctx.lineTo(1046, 224);
    // this.ctx.lineTo(1059, 235);
    // this.ctx.lineTo(1064, 258);
    // this.ctx.lineTo(1066, 273);
    // this.ctx.lineTo(1049, 273);
    // this.ctx.lineTo(1036, 273);
    // this.ctx.lineTo(1022, 274);
    // this.ctx.lineTo(1022, 294);
    // this.ctx.lineTo(1024, 313);
    // this.ctx.lineTo(1026, 335);
    // this.ctx.lineTo(1015, 339);
    // this.ctx.lineTo(1007, 344);
    // this.ctx.lineTo(991, 350);
    // this.ctx.lineTo(971, 348);
    // this.ctx.lineTo(952, 344);
    // this.ctx.lineTo(944, 328);
    // this.ctx.lineTo(932, 312);
    // this.ctx.lineTo(928, 298);
    // this.ctx.lineTo(922, 287);
    // this.ctx.lineTo(912, 274);
    // this.ctx.lineTo(909, 298);
    // this.ctx.lineTo(908, 325);
    // this.ctx.lineTo(899, 336);
    // this.ctx.lineTo(889, 327);
    // this.ctx.lineTo(888, 302);
    // this.ctx.lineTo(888, 264);
    // this.ctx.lineTo(885, 275);
    // this.ctx.lineTo(878, 294);
    // this.ctx.lineTo(862, 317);
    // this.ctx.lineTo(849, 333);
    // this.ctx.lineTo(844, 345);
    // this.ctx.lineTo(809, 350);
    // this.ctx.lineTo(805, 334);
    // this.ctx.lineTo(797, 347);
    // this.ctx.lineTo(775, 338);
    // this.ctx.lineTo(761, 326);
    // this.ctx.lineTo(746, 311);
    // this.ctx.lineTo(741, 297);
    // this.ctx.lineTo(730, 277);
    // this.ctx.lineTo(733, 256);
    // this.ctx.lineTo(738, 238);
    // this.ctx.lineTo(748, 232);
    // this.ctx.lineTo(765, 220);
    // this.ctx.lineTo(775, 213);
    // this.ctx.lineTo(747, 201);
    // this.ctx.lineTo(728, 203);
    // this.ctx.lineTo(724, 181);
    // this.ctx.lineTo(711, 161);
    // this.ctx.lineTo(711, 146);
    // this.ctx.lineTo(701, 126);
    // this.ctx.lineTo(689, 112);
    // this.ctx.lineTo(686, 95);
    // this.ctx.lineTo(676, 72);
    // this.ctx.lineTo(686, 53);
    // this.ctx.stroke();



    this.ctx.beginPath();
    this.ctx.globalAlpha = 0.7;
    this.ctx.lineWidth = 0.006;
    this.ctx.fillStyle = "#33FF6B";
    // this.ctx.lineTo(898, 333);
    // this.ctx.lineTo(909, 324);
    // this.ctx.lineTo(909, 303);
    // this.ctx.lineTo(909, 278);
    // this.ctx.lineTo(909, 234);
    // this.ctx.lineTo(909, 205);
    // this.ctx.lineTo(905, 180);
    // this.ctx.lineTo(911, 173);
    // this.ctx.lineTo(900, 161);
    // this.ctx.lineTo(887, 173);
    // this.ctx.lineTo(890, 188);
    // this.ctx.lineTo(900, 180);
    // this.ctx.lineTo(890, 187);
    // this.ctx.lineTo(889, 215);
    // this.ctx.lineTo(890, 245);
    // this.ctx.lineTo(888, 264);
    // this.ctx.lineTo(887, 291);
    // this.ctx.lineTo(888, 305);
    // this.ctx.lineTo(888, 318);
    // this.ctx.lineTo(887, 328);
    // this.ctx.lineTo(895, 320);
    // this.ctx.lineTo(906, 324);
    // this.ctx.lineTo(897, 324);
    // this.ctx.lineTo(897, 303);
    // this.ctx.lineTo(890, 285);
    // this.ctx.lineTo(912, 278);
    // this.ctx.lineTo(889, 274);
    // this.ctx.lineTo(911, 263);
    // this.ctx.lineTo(909, 173);
    // this.ctx.lineTo(900, 192);
    // this.ctx.lineTo(899, 183);
    // this.ctx.lineTo(907, 295);
    // this.ctx.lineTo(888, 303);
    // this.ctx.lineTo(888, 303);
    // this.ctx.lineTo(886, 327);
    // this.ctx.lineTo(900, 332);
    // this.ctx.lineTo(900, 332);
    // this.ctx.lineTo(906, 303);
    // this.ctx.lineTo(887, 313);
    // this.ctx.lineTo(898, 282);
    // this.ctx.lineTo(898, 282);
    // this.ctx.lineTo(906, 314);
    // this.ctx.lineTo(906, 314);
    // this.ctx.lineTo(906, 318);
    // this.ctx.lineTo(887, 173);
    // this.ctx.lineTo(887, 173);
    // this.ctx.lineTo(909, 174);
    // this.ctx.lineTo(886, 175);
    // this.ctx.lineTo(886, 175);
    // this.ctx.lineTo(899, 182);
    // this.ctx.lineTo(899, 163);
    // this.ctx.lineTo(908, 173);



    this.ctx.lineTo(895, 190);
    this.ctx.lineTo(888, 175);
    this.ctx.lineTo(898, 162);
    this.ctx.lineTo(910, 173);
    this.ctx.lineTo(905, 188);
    this.ctx.lineTo(899, 177);
    this.ctx.lineTo(899, 164);
    this.ctx.lineTo(900, 177);
    this.ctx.lineTo(900, 178);
    this.ctx.lineTo(909, 172);
    this.ctx.lineTo(899, 179);
    this.ctx.lineTo(904, 186);
    this.ctx.lineTo(898, 178);
    this.ctx.lineTo(894, 189);
    this.ctx.lineTo(899, 179);
    this.ctx.lineTo(888, 175);
    this.ctx.lineTo(899, 179);
    this.ctx.lineTo(899, 164);
    this.ctx.lineTo(910, 172);
    this.ctx.lineTo(911, 208);
    this.ctx.lineTo(911, 230);
    this.ctx.lineTo(913, 250);
    this.ctx.lineTo(914, 275);
    this.ctx.lineTo(911, 285);
    this.ctx.lineTo(909, 309);
    this.ctx.lineTo(908, 324);
    this.ctx.lineTo(899, 336);
    this.ctx.lineTo(888, 325);
    this.ctx.lineTo(888, 309);
    this.ctx.lineTo(887, 291);
    this.ctx.lineTo(887, 276);
    this.ctx.lineTo(888, 253);
    this.ctx.lineTo(889, 233);
    this.ctx.lineTo(891, 220);
    this.ctx.lineTo(891, 206);
    this.ctx.lineTo(891, 191);
    this.ctx.lineTo(901, 201);
    this.ctx.lineTo(907, 192);
    this.ctx.lineTo(911, 206);
    this.ctx.lineTo(890, 205);
    this.ctx.lineTo(913, 230);
    this.ctx.lineTo(894, 227);
    this.ctx.lineTo(912, 207);
    this.ctx.lineTo(891, 207);
    this.ctx.lineTo(888, 253);
    this.ctx.lineTo(914, 229);
    this.ctx.lineTo(888, 233);
    this.ctx.lineTo(914, 251);
    this.ctx.lineTo(914, 273);
    this.ctx.lineTo(885, 271);
    this.ctx.lineTo(889, 251);
    this.ctx.lineTo(907, 298);
    this.ctx.lineTo(889, 299);
    this.ctx.lineTo(889, 272);
    this.ctx.lineTo(908, 295);
    this.ctx.lineTo(888, 315);
    this.ctx.lineTo(905, 315);
    this.ctx.lineTo(888, 298);
    this.ctx.lineTo(890, 325);
    this.ctx.lineTo(906, 325);
    this.ctx.lineTo(898, 335);
    this.ctx.lineTo(890, 326);
    this.ctx.lineTo(912, 277);
    this.ctx.lineTo(890, 296);
    this.ctx.lineTo(906, 316);
    this.ctx.lineTo(890, 300);
    this.ctx.fillStyle = "#33FF6B";
    this.ctx.stroke();


  };

  // Create ParticleNetwork class
  ParticleNetwork = function (canvas, options, butterflyCoordinate) {

    // this.butterflyCoordinate = butterflyCoordinate;
    this.canvasDiv = canvas;
    this.canvasDiv.size = {
      'width': this.canvasDiv.offsetWidth,
      'height': this.canvasDiv.offsetHeight
    };

    // Set options
    options = options !== undefined ? options : {};
    this.options = {
      particleColor: (options.particleColor !== undefined) ? options.particleColor : '#fff',
      background: (options.background !== undefined) ? options.background : '#1a252f',
      interactive: (options.interactive !== undefined) ? options.interactive : true,
      velocity: this.setVelocity(options.speed),
      density: this.setDensity(options.density)
    };

    this.init(butterflyCoordinate);
  };
  ParticleNetwork.prototype.init = function (butterflyCoordinate) {

    // Create background div
    this.bgDiv = document.createElement('div');
    this.canvasDiv.appendChild(this.bgDiv);
    this.setStyles(this.bgDiv, {
      'position': 'absolute',
      'top': 0,
      'left': 0,
      'bottom': 0,
      'right': 0,
      'z-index': 1
    });

    // Check if valid background hex color
    if ((/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i).test(this.options.background)) {
      this.setStyles(this.bgDiv, {
        'background': this.options.background
      });
    }
    // Else check if valid image
    else if ((/\.(gif|jpg|jpeg|tiff|png)$/i).test(this.options.background)) {
      this.setStyles(this.bgDiv, {
        'background': 'url("' + this.options.background + '") no-repeat center',
        'background-size': 'cover'
      });
    }
    // Else throw error
    else {
      console.error('Please specify a valid background image or hexadecimal color');
      return false;
    }

    // Check if valid particleColor
    if (!(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i).test(this.options.particleColor)) {
      console.error('Please specify a valid particleColor hexadecimal color');
      return false;
    }

    // Create canvas & context
    this.canvas = document.createElement('canvas');
    this.canvasDiv.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.canvasDiv.size.width;
    this.canvas.height = this.canvasDiv.size.height;
    this.setStyles(this.canvasDiv, { 'position': 'relative' });
    this.setStyles(this.canvas, {
      'z-index': '20',
      'position': 'relative'
    });

    // Add resize listener to canvas
    window.addEventListener('resize', function () {

      // Check if div has changed size
      if (this.canvasDiv.offsetWidth === this.canvasDiv.size.width && this.canvasDiv.offsetHeight === this.canvasDiv.size.height) {
        return false;
      }

      // Scale canvas
      this.canvas.width = this.canvasDiv.size.width = this.canvasDiv.offsetWidth;
      this.canvas.height = this.canvasDiv.size.height = this.canvasDiv.offsetHeight;

      // Set timeout to wait until end of resize event
      clearTimeout(this.resetTimer);
      this.resetTimer = setTimeout(function () {

        // Reset particles
        this.particles = [];
        for (var i = 0; i < butterflyCoordinate.length; i++) {

          // this.particles.push(new Particle(this));
          this.particles.push(new Particle(this, butterflyCoordinate[i][0], butterflyCoordinate[i][1]));
        }
        if (this.options.interactive) {
          this.particles.push(this.mouseParticle);
        }

        // Update canvas
        requestAnimationFrame(this.update.bind(this));

      }.bind(this), 500);

    }.bind(this));

    // Initialise particles
    this.particles = [];

    for (var i = 0; i < butterflyCoordinate.length; i++) {

      this.particles.push(new Particle(this, butterflyCoordinate[i][0], butterflyCoordinate[i][1]));

    }

    if (this.options.interactive) {

      // Add mouse particle if interactive


      // for (var i = 0; i < butterflyCoordinate.length; i++) {

      //   this.particles.push(new Particle(this, butterflyCoordinate[i][0], butterflyCoordinate[i][1]));
  
      // }
      this.mouseParticle = new Particle(this);

      console.log(new Particle(this));
      this.mouseParticle.velocity = {
        x: 0,
        y: 0
      };
      this.particles.push(this.mouseParticle);

      // Mouse event listeners
      this.canvas.addEventListener('mousemove', function (e) {
        this.mouseParticle.x = e.clientX - this.canvas.offsetLeft;
        this.mouseParticle.y = e.clientY - this.canvas.offsetTop;
      }.bind(this));

      this.canvas.addEventListener('mouseup', function (e) {
        this.mouseParticle.velocity = {
          x: (Math.random() - 0.5) * this.options.velocity,
          y: (Math.random() - 0.5) * this.options.velocity
        };
        this.mouseParticle = new Particle(this);
        this.mouseParticle.velocity = {
          x: 0,
          y: 0
        };
        this.particles.push(this.mouseParticle);
      }.bind(this));
    }

    // Update canvas
    requestAnimationFrame(this.update.bind(this, butterflyCoordinate));
  }
  ParticleNetwork.prototype.update = function (butterflyCoordinate) {

    // console.log(butterflyCoordinate);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.globalAlpha = 1;


    // Draw particles
    for (var i = 0; i < this.particles.length; i++) {

      // console.log(butterflyCoordinate);

      this.particles[i].update(butterflyCoordinate);

      this.particles[i].draw();

      // Draw connections

      for (var j = this.particles.length - 1; j > i; j--) {

        var distance = Math.sqrt(
          Math.pow(this.particles[i].x - this.particles[j].x, 2)
          + Math.pow(this.particles[i].y - this.particles[j].y, 2)
        );

        this.ctx.beginPath();
        this.ctx.strokeStyle = this.options.particleColor;
        this.ctx.lineWidth = 0.7;
        this.ctx.globalAlpha = (60 - distance) / 60;

        if (distance > 40) {
          continue;
        }


        this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
        this.ctx.lineTo(this.particles[j].x, this.particles[j].y);


        this.ctx.stroke();


      }
      // break;
    }

    if (this.options.velocity !== 0) {
      requestAnimationFrame(this.update.bind(this));
    }
  };

  // Helper method to set velocity multiplier
  ParticleNetwork.prototype.setVelocity = function (speed) {
    if (speed === 'fast') {
      return 1.5;
    }
    else if (speed === 'slow') {
      return 0.33;
    }
    else if (speed === 'none') {
      return 0;
    }
    return 0.66;
  }
  // Helper method to set density multiplier
  ParticleNetwork.prototype.setDensity = function (density) {
    if (density === 'high') {
      return 500;
    }
    else if (density === 'low') {
      return 20000;
    }
    return !isNaN(parseInt(density, 10)) ? density : 10000;
  }
  // Helper method to set multiple styles
  ParticleNetwork.prototype.setStyles = function (div, styles) {
    for (var property in styles) {
      div.style[property] = styles[property];
    }
  }

  return ParticleNetwork;

}));
