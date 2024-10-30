self.addEventListener('push', function(event) {
    const options = {
      body: event.data.text(),
      icon: '/icono.png',
      badge: '/badge.png'
    };
    event.waitUntil(
      self.registration.showNotification('Título de la Notificación', options)
    );
  });
 
