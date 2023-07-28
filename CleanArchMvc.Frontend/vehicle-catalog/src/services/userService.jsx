import { VEHICLES_ENDPOINT } from "./apiConfig";

const userService = {

    createNewUser: async (newUser) => {
        const response = await fetch(VEHICLES_ENDPOINT, {
          method: "POST",
         
          credentials: "include",
          body: JSON.stringify(newUser),
        });
        if (!response.ok) {
    
          console.log({ newUser: newUser });
    
          throw new Error("Falha ao criar novo usuário");
        }
    
        console.log({ createSucced: "usuário criado com sucesso" });
    
        const data = await response.json();
        return data;
      }
};

export default userService;