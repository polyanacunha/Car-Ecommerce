import { VEHICLES_ENDPOINT } from "./apiConfig";

const vehicleService = {
  getVehicles: async () => {
    try {
      const response = await fetch(VEHICLES_ENDPOINT, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Falha ao obter os veículos");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao obter os veículos:", error);
      throw error; // Lança o erro novamente para que o componente que chama o serviço possa tratá-lo
    }
  },
  getVehicleById: async (id, token) => {
    console.log({ inside: "getVehicleById" });
    const response = await fetch(`${VEHICLES_ENDPOINT}/${id}`, {
      method: "GET",

      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Falha ao obter os veículos");
    }

    console.log({ getSucced: "getvehicle by id" });

    const data = await response.json();
    return data;
  },
  deleteVehicle: async (id, token) => {
    localStorage.setItem("token", token);

    const response = await fetch(`${VEHICLES_ENDPOINT}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    if (!response.ok) {
      console.log({ token: token });

      throw new Error("Falha ao deletar o veículo");
    }
    console.log({ token: token });

    console.log({ deleteSucced: "deletado com sucesso" });

    const data = await response.json();
    return data;
  },
  createNewVehicle: async (token, newVehicleData) => {
    localStorage.setItem("token", token);
    const response = await fetch(VEHICLES_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newVehicleData),
    });
    if (!response.ok) {
      console.log({ token: token });

      console.log({ newVehicleData: newVehicleData });

      throw new Error("Falha ao criar novo veículo");
    }
    console.log({ token: token });

    console.log({ createSucced: "veículo criado com sucesso" });

    const data = await response.json();
    return data;
  },
};

export default vehicleService;
