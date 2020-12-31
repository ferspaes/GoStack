import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.0.2.2:3333'
});

export default api;

/**
 * iOS com emulador: localhost
 * iOS com físico: IP da máquina
 * Android com emulador: localhost (com adb reverse) 
 * Android com emulador: 10.0.2.2 (Android Studio)
 * Android com emulador: 10.0.2.2 (Genymotion)
 * Android físico: Ip da máquina
 */