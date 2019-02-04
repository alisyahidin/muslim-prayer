import notifOptions from '../constants/notification'

export const checkRequestPermission = () => {
  Notification.requestPermission()
}

export const showNotif = (title, options = notifOptions) => {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration()
      .then(registeredSW => {
        if (typeof registeredSW !== 'undefined') {
          registeredSW.showNotification(title, options)
        }
      });
  }
}