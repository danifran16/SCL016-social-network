// importamos la funcion que vamos a testear
<<<<<<< HEAD
import { userNew } from '../src/lib/firebase.js';
=======
// import { myFunction } from '../src/lib/index';
>>>>>>> e1352f31ca3d6de193665ba389722e7a119daaa8

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });
<<<<<<< HEAD

=======
>>>>>>> e1352f31ca3d6de193665ba389722e7a119daaa8
import { userNew } from '../src/lib/firebase.js';
    describe('creacion usuario', () => {
    it('creacion usuario exitoso', () => {
    global.firebase = jest.fn( ........ )
    userNew('rudihmar@gmail.com', '123456');
    });
<<<<<<< HEAD
  });
=======
  });
>>>>>>> e1352f31ca3d6de193665ba389722e7a119daaa8
