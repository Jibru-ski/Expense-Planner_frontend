import api from './api'

export const getAccounts = async () => {
  const storedUser = JSON.parse(localStorage.getItem("user"))

  try {
    var id = storedUser.user.userId;
    const response = await api.get(`/accounts?userId=${id}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
}

// export const createAccount = async (accountData) => {
//   try {
//     const response = await api.post(`/accounts`, accountData);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating account:", error);
//     throw error;
//   }
// }

// export const deleteAccount = async (accountId) => {
//   try {
//     const response = await api.delete(`/accounts/${accountId}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error deleting account:", error);
//     throw error;
//   }
// }