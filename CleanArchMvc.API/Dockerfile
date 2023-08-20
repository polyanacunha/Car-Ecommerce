# Estágio 1: Compilar e publicar o aplicativo .NET
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /app
COPY ["CleanArchMvc.API/CleanArchMvc.API.csproj", "./"]
RUN dotnet restore "CleanArchMvc.API.csproj"
COPY /CleanArchMvc.API .
RUN dotnet build "CleanArchMvc.API.csproj" -c Release -o /app/build

# Estágio 2: Criar imagem final otimizada
FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS final
WORKDIR /app
COPY --from=build /app/build .
ENTRYPOINT ["dotnet", "CleanArchMvc.API.dll"]
