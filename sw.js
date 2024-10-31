self.addEventListener('push', function(event) {
    const options = {
      body: event.data.text(),
      icon: 'https://img.icons8.com/?size=100&id=4Pf07kGssW9W&format=png&color=000000',
      badge: 'https://img.icons8.com/?size=100&id=38583&format=png&color=40C057',
      image: 'https://casanarino.presidencia.gov.co/img/hero.png',
      data: {url : 'https://github.com'} // Agrega la URL o cualquier dato necesario
    };
    event.waitUntil(
      self.registration.showNotification('Título de la Notificación', options)
    );
  });
 
self.addEventListener('notificationclick', function(event) {
  event.notification.close(); // Cierra la notificación

  // Abre una nueva ventana o pestaña con la URL especificada en la notificación
  let url = 'https://github.com';
  try {
    url = event.notification.data.url;
    console.log(url);
  } catch (error) {
    console.error(error)
  }
  if (event.action === 'Open') {
    event.waitUntil(
      clients.openWindow(url)
    );
  } else {
    event.waitUntil(
      clients.openWindow(url)
    );
  }
});
