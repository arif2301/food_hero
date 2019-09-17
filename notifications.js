//Request Permission//
Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});


// TO DO: Get event handler (when food is listed, should trigger this function)

// Notifications API: Function configures notification options and actions
function displayNotification() {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        var options = {
          title: "New Mission", 
          body: 'Show what the pick up/drop off details', /* How do I get location data to display? or do we link them to another page */
          icon: 'images/example.png',
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          },
          actions: [
            {action: 'explore', title: 'Accept',
              icon: 'images/checkmark.png'},
            {action: 'close', title: 'Not this time',
              icon: 'images/xmark.png'},
          ]
        };
        reg.showNotification('Food Hero', options);
      });
    }
  }

  // TO DO: when accept clicked by food hero - should trigger following function to two different users

  //continual check for permissions

  if (Notification.permission === "granted") {
    
  } else if (Notification.permission === "blocked") {
   //the user has previously denied push. Can't reprompt/
  } else {
    // show a prompt to the user //
  }


// Interactions API: service worker


self.addEventListener('notificationclose', function(e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;
  
    console.log('Closed notification: ' + primaryKey);
  });
  

  self.addEventListener('notificationclick', function(e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;
    var action = e.action;
  
    if (action === 'close') {
      notification.close();
    } else {
      clients.openWindow('http://foodhero.com');/* deployed site name */
      notification.close();
    }
  });


  //push api





  //node
var webPush = require('web-push');

var pushSubscription = {"endpoint":"https://android.googleapis.com/gcm/send/f1LsxkKphfQ:APA91bFUx7ja4BK4JVrNgVjpg1cs9lGSGI6IMNL4mQ3Xe6mDGxvt_C_gItKYJI9CAx5i_Ss6cmDxdWZoLyhS2RJhkcv7LeE6hkiOsK6oBzbyifvKCdUYU7ADIRBiYNxIVpLIYeZ8kq_A",
"keys":{"p256dh":"BLc4xRzKlKORKWlbdgFaBrrPK3ydWAHo4M0gs0i1oEKgPpWC5cW8OCzVrOQRv-1npXRWk8udnW3oYhIO4475rds=", "auth":"5I2Bu2oKdyy9CwL8QVF0NQ=="}};

var payload = 'Here is a payload!';

var options = {
  gcmAPIKey: 'AIzaSyD1JcZ8WM1vTtH6Y0tXq_Pnuw4jgj_92yg',
  TTL: 60
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);