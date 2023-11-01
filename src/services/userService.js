const { use } = require('chai');
const { User } = require('../models');

const findAll = async () => {
  try {
    const users = await User.findAll();
    // const messageContent = { message: 'Ocorreu um erro' };
    return {
      status: 200,
      data: users,
    };
  } catch (error) {
    return {
      status: 500,
      data: { message: error.message },
    };
  }
};

const findById = async (id) => {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return {
        status: 404,
        data: { message: 'Usuario não encontrado' },
      };
    }

    return {
      status: 200,
      data: use,
    };
  } catch (error) { 
    return {
      status: 500,
      data: { message: 'Ocorreu um erro' },
    };
  }
};

const create = async (displayName, email, password, image) => {
  try {
    const user = await User.create({ displayName, email, password, image });
    return {
      status: 201,
      data: user,
    };  
  } catch (error) { 
    return {    
      status: 500,
      data: { message: 'Ocorreu um erro' },
    };
  }
};    

// const updateUser = async (id, displayName, email, password, image) => {
//   try {
//     const [updatedUser] = await User
//       .update({ displayName, email, password, image }, { where: { id } });
//     if (!updatedUser) {
//       return {
//         status: 404,
//         data: { message: 'Usuario não encontrado' },
//       };
//     }
//     return {
//       status: 200,
//       data: updatedUser,
//     };
//   } catch (error) { 
//     return {
//       status: 500,
//       data: { message: 'Ocorreu um erro' },
//     }; 
//   }
// };
const deleteUser = async (id) => {
  try {
    const user = await User.destroy({ where: { id } });

    if (!user) {
      return {
        status: 404,
        data: { message: 'Usuario não encontrado' },
      };
    }
  } catch (error) { 
    return {
      status: 500,
      data: { message: 'Ocorreu um erro' },
    };
  }
};

module.exports = {
  findAll,
  findById,
  create,
  deleteUser,
};
