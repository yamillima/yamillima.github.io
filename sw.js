self.addEventListener('push', function(event) {
    const options = {
      body: event.data.text(),
      icon: '/icono.png',
      badge: '/badge.png',
      data: event.data ? event.data.json() : {} // Agrega la URL o cualquier dato necesario
    };
    console.log('Se enviará notificación');
    event.waitUntil(
      self.registration.showNotification('Título de la Notificación', options)
    );
  });
 
self.addEventListener('notificationclick', function(event) {
  event.notification.close(); // Cierra la notificación
  
  // Abre una nueva ventana o pestaña con la URL especificada en la notificación
  console.log(event.notification.data.url || 'No se envió url de destino desde el frontend');
  const url = event.notification.data.url || 'https://github.com';
  event.waitUntil(      
    clients.openWindow(url)
  );
});
