# EN-US
## <u>TO START OR INSTALL FOLLOW THE STEPS BELOW.</u>
** NODE MODULES ALREDY INCLUDE **
<br/><br/>

// In the .ENV document, make the following changes:
Change the port to HTTPS the service or application will run on.
Then change the values ​​of the properties [CERT_PEM & KEY_PEM] to the path where the certificate and key .PEM are located
</Br></br>

// In case of doubts related to the certificate not being found in .pem, consult:
https://serverfault.com/questions/254627/how-do-i-convert-a-cer-certificate-to-pem

</Br></br>
// After that do this:
Start the .BAT "Start - Service" to leave the API service running [ I recommend running as a service so you don't need to start again in case of server restart ]
Or start the .BAT "Just - Application" to start the API application only.

</Br></br>
// DEFINITION OF THIS APPLICATION:
This api is a service or application that will run on the port the user defines and must be published so that it is possible to contact it from Google's servers.
It has an initial authentication in basic in which the credentials are defined in the .env file, basically serves as a middleware that will receive the user's request
and will pass to the URL that is also defined in the .env file.

It will then return to the user the same return as the final URL returns.

</Br></br>
//PARAMETERS REQUIRED FOR THE REQUEST:
</br>https://[host]:[Port]/[URL]
</br>Header: Must contain the credentials used in the second API.
</br>Body: Must contain the body you want to pass to the second API.



</br></br>
# PT_BR
## <u>PARA INICIAR OU INSTALAR SIGA OS PASSOS ABAIXO.</u>
** NODE MODULES JÁ INCLUSO**
<br/><br/>
// No documento .ENV realize as seguintes mudanças:
Altere a porta para a HTTPS em que o serviço ou aplicação irá rodar.
Em seguida altere os valores das propiedades [CERT_PEM & KEY_PEM] para o caminho onde se encontram o certificado e chave .PEM

</Br></br>
// Em caso de dúvidas relacionadas ao certificado não se encontrar em .pem consulte:
https://serverfault.com/questions/254627/how-do-i-convert-a-cer-certificate-to-pem

</Br></br>
// Após isso faça isto:
Inicie o .BAT "Start - Service" para deixar o serviço de API rodando [ Recomendo rodar como serviço para não precisar startar novamente em caso de reinicio do servidor ]
Ou inicie o .BAT "Just - Application" para iniciar somente a aplicação da API.

</Br></br>
// DEFINIÇÃO DESTA APLICAÇÃO:
Esta api é um serviço ou aplicação que irá rodar na porta em que o usuário definir e deverá ser publicada para que seja possível contata-la dos servidores da Google.
A mesma consta com uma autenticação inicial em basic no qual as credenciais estão definidas no arquivo .env, basicamente serve como um middleware que receberá a request do usuário
e passará para a URL que está definida também no arquivo .env . 
Em seguida irá retornar para o usuário o mesmo retorno que a URL final retorna.

</Br></br>
//PARAMÊTROS NECESSÁRIOS PARA A REQUISIÇÃO:
</br>https://[host]:[Port]/[URL]
</br>Header: Deverá conter as credenciais utilizadas na segunda API.
</br>Body: Deverá conter o body que deseja passar para a segunda API. 