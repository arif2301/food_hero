
//Request Permission//main.js/client
Notification.requestPermission(function(status) {
  console.log('Notification permission status:', status);
});


// TO DO: Get event handler (when food is listed, should trigger this function)

// main.js Notifications API: Function configures notification options and actions/client
function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        title: "New Mission", 
        body: 'Show what the pick up/drop off details are', /* How do I get location data to display? or do we link them to another page */
        icon: 'images/superhero.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [
          {action: 'explore', title: 'Accept',
            icon: 'images/checkmark.png'},
          {action: 'close', title: 'Not this time',
            icon: 'images/xmark.jpg'},
        ]
      };
      reg.showNotification('Hello, Food Hero!', options);
    });
  }
}

// TO DO: when accept clicked by food hero - should trigger following function to two different users


//Close notification event listener//serviceworker.js
self.addEventListener('notificationclose', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;

  console.log('Closed notification: ' + primaryKey);
});


//notification click event/serviceworker.js

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

//continual check for permissions

if (Notification.permission === "granted") {
  
} else if (Notification.permission === "blocked") {
 //the user has previously denied push. Can't reprompt/
} else {
  // show a prompt to the user... this also could be where text integration //
}



//push api
 // handling the push event in the server//service worker//what makes this different??? than the display

self.addEventListener('push', function(e) {
  var options = {
    title: "New Mission",
    body: 'Show what the pick up/drop off details are',
    icon: 'images/superhero.png',
    renotify: true,
    tag: 'id1',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'explore', title: 'Accept',
        icon: 'images/checkmark.png'},
      {action: 'close', title: 'Not this time',
        icon: 'images/xmark.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Hello Food Hero!', options)
  );
});


//subscribing to push event //main.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(reg) {
    console.log('Service Worker Registered!', reg);

    reg.pushManager.getSubscription().then(function(sub) {
      if (sub === null) {
        // Update UI to ask user to register for Push
        console.log('Not subscribed to push service!');
      } else {
        // We have a subscription, update the database
        console.log('Subscription object: ', sub);
      }
    });
  })
   .catch(function(err) {
    console.log('Service Worker registration failed: ', err);
  });
}
  //main.js//call the subscribe method on the pushManager and log the subscription object to the console.
  function subscribeUser() {
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(function(reg) {
  
        reg.pushManager.subscribe({
          userVisibleOnly: true
        }).then(function(sub) {
          console.log('Endpoint URL: ', sub.endpoint);
        }).catch(function(e) {
          if (Notification.permission === 'denied') {
            console.warn('Permission for notifications was denied');
          } else {
            console.error('Unable to subscribe to push', e);
          }
        });
      })
    }
  }
//receiving data in service worker/server.js

self.addEventListener('push', function(e) {
  var body;

  if (e.data) {
    body = e.data.text();
  } else {
    body = 'Push message no payload';
  }

  var options = {
    body: body,
    icon: 'images/notification-flat.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {action: 'explore', title: 'Explore this new world',
        icon: 'images/checkmark.png'},
      {action: 'close', title: 'I don\'t want any of this',
        icon: 'images/xmark.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

// sending the message from the Server
webpush.sendNotification(pushSubscription, payload, options)



//node/main.js

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



//Identifying Your Service with VAPID Auth. node/main.js
  //create public/private key pair


function generateVAPIDKeys() {
  const vapidKeys = webpush.generateVAPIDKeys();

  return {
    publicKey: vapidKeys.publicKey,
    privateKey: vapidKeys.privateKey,
  };
}


//Subscribing with the public key

const publicKey = new Uint8Array([0x4, 0x37, 0x77, 0xfe, .... ]);
serviceWorkerRegistration.pushManager.subscribe(
{
  userVisibleOnly: true,
  applicationServerKey: publicKey
}
);



//authorizatrion header ---confused


// managing notifications on server

{
  "collapse_key" : "demo",
  "delay_while_idle" : true,
  "to" : "xyz",
  "data" : {
    "key1" : "value1",
    "key2" : "value2",
  },
  "time_to_live" : 360
},