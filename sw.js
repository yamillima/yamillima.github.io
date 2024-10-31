self.addEventListener('push', function(event) {
    const options = {
      body: event.data.text(),
      icon: '/icono.png',
      badge: '/badge.png',
      data: event.data ? event.data.json() : {} // Agrega la URL o cualquier dato necesario
    };
    event.waitUntil(
      console.log(event.data || 'No se envió data desde el frontend');
      console.log(event.data.url || 'No se envió url de destino desde el frontend');
      self.registration.showNotification('Título de la Notificación', options)
    );
  });
 
self.addEventListener('notificationclick', function(event) {
  event.notification.close(); // Cierra la notificación
  
  // Abre una nueva ventana o pestaña con la URL especificada en la notificación
  const url = event.notification.data.url || 'https://github.com';
  if (url) { 
    event.waitUntil(      
      clients.openWindow(url)
  );
  } else {
      console.log('No se encontró la url en la data de la notificación');
  }
});
