class Laptop {
  #hardDiskType = "HDD"; // protected property, meant to be internal
  #CpuFans = 4;
  constructor(brand) {
    this.brand = brand; // public property, can be used externally by instances
  }
  getHDiskType() {
    return this.#hardDiskType;
  } // public method to access protected property
  getCPUFans() {
    return this.#CpuFans;
  }
}
class GamingLaptop extends Laptop {
  graphicsCard = true;
  getDetailsOfGamingLaptop() {
    return `Card = ${this.graphicsCard}, CPU fans = ${this.#CpuFans}`;
  }
}

const macbook = new Laptop("Macbook Pro");
console.log(macbook.brand); // public property, accessed externally from any instance
// works, not recommended as it violates encapsulation principles
console.log(macbook.getHDiskType()); // recommended way to access protected property
macbook.brand = "Windows";
console.log(macbook.brand);
console.log(macbook.getHDiskType());
