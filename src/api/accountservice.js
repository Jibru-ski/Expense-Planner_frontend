import api from "./api"

export const getAccounts = async () => {
  try {
    const response = await api.get(`${API_BASE_URL}/accounts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
}

export const createAccount = async (accountData) => {
  try {
    const response = await api.post(`${API_BASE_URL}/accounts`, accountData);
    return response.data;
  } catch (error) {
    console.error("Error creating account:", error);
    throw error;
  }
}

export const deleteAccount = async (accountId) => {
  try {
    const response = await api.delete(`${API_BASE_URL}/accounts/${accountId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting account:", error);
    throw error;
  }
}