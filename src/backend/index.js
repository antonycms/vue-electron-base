//import './database';
import callFront from '@/backend/utils/callFront';

async function funcExample(dataReceived) {
  const response = await new Promise(function(resolve, _) {
    setTimeout(function() {
      console.log(dataReceived);

      resolve('mensagem aqui');
    }, 2000);
  });

  return response;
}

callFront({ eventName: 'mensagem', functionExec: funcExample });
