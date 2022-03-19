// init ipc log
import { initIPCLog } from 'qiao-electron';

// ipc log channel
import { ipcLogChannel } from '../electron.config.js';

// init
initIPCLog(ipcLogChannel);