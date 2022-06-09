// Notificacion API en JS

// Notificacion de forma nativa en JS
// Envia un notificacion a travez del envent listener

const notificarBtn = document.querySelector("#notificar");

notificarBtn.addEventListener("click", () => {
  Notification.requestPermission().then((resultado) =>
    console.log("El resultado es", resultado)
  );
});

const verNotificacion = document.querySelector("#verNotificacion");

verNotificacion.addEventListener("click", () => {
  if (Notification.permission === "granted") {
    const notificacion = new Notification("Esta es la notificacion", {
      Icon: "../img/ccj.png",
      body: "Codigo con juan nos vamos a ganar el hpta pan, hpta pobreza",
    });

    notificacion.onclick = function () {
      window.open("https://twitter.com/home");
    };
  }
});
