self.addEventListener('push', function(event) {
    const options = {
      body: event.data.text(),
      icon: '/icono.png',
      badge: '/badge.png',
      data: { url: event.data.json().url } // Agrega la URL o cualquier dato necesario
    };
    event.waitUntil(
      self.registration.showNotification('Título de la Notificación', options)
    );
  });
 
self.addEventListener('notificationclick', function(event) {
  event.notification.close(); // Cierra la notificación
  
  // Abre una nueva ventana o pestaña con la URL especificada en la notificación
  const url = event.notification.data && event.notification.data.url ? event.notificacion.data.url : 'https://github.com';
  if (url) { 
    event.waitUntil(      
      clients.openWindow(url)
  );
  } else {
      console.log('No se encontró la url en la data de la notificación');
  }
});
