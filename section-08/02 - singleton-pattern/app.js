const Singleton = (function () {
  let instance;
  function createInstance() {
    // const object = new Object('Object instance!!!');
    const object = new Object({ name: 'Hudson' });
    return object;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);

// console.log(instanceB);
// console.log(instanceA);