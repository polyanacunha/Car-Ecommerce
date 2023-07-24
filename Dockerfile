# Imagem base
FROM mcr.microsoft.com/mssql/server

# Variáveis de ambiente
ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=1YourStrong!Password

# Porta exposta
EXPOSE 1433

# Comando de inicialização
CMD ["/opt/mssql/bin/sqlservr"]
