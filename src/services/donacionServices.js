export default {
  listar() {
    return new Promise(resolve => {
      resolve([
        {
          id: 1,
          nombre: "Donacion 1"
        },
        {
          id: 2,
          nombre: "Donacion 2"
        }
      ]);
    });
  }
};
