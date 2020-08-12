import { ipcMain } from 'electron';

export default async function({ eventName, functionExec }) {
  if (!eventName) {
    throw new Error('eventName is required');
  }

  if (!functionExec) {
    throw new Error('functionExec is required');
  }

  ipcMain.on(eventName, async (event, arg) => {
    const response = await functionExec(arg);

    event.reply(eventName, response);
  });
}
