self.addEventListener('push', function(event) {
    const options = {
      body: event.data.text(),
      icon: '/icono.png',
      badge: '/badge.png',
      data: event.data ? event.data.json() : {url : 'https://github.com'} // Agrega la URL o cualquier dato necesario
    };
    event.waitUntil(
      self.registration.showNotification('Título de la Notificación', options)
    );
  });
 
self.addEventListener('notificationclick', function(event) {
  event.notification.close(); // Cierra la notificación
  
  // Abre una nueva ventana o pestaña con la URL especificada en la notificación
  const url = event.notification.data.url;
  event.waitUntil(      
    clients.openWindow(url)
  );
});
