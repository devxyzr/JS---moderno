// Cacheando archivos para la APP online
const nombreCache = "apv-v1";

const archivos = [
  "/",
  "/index.html",
  "/error.html",
  "/css/bootstrap.css",
  "/css/styles.css",
  "/js/app.js",
  "/js/apv.js",
];

//Cuando se isntala el service Worker
// Se ejecuta una vez
self.addEventListener("install", (e) => {
  console.log("Instalando el Service Worker");

  e.waitUntil(
    caches.open(nombreCache).then((cache) => {
      console.log("cacheando");
      cache.addAll(archivos);
    })
  );
});

// Activar el Service worker
// Se ejecuta cuando se activa el service worker
self.addEventListener("activate", (e) => {
  console.log("Service Worker Activado");

  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(ke !== nombreCache).map((key) => caches.delete(key))
      );
    })
  );
});

// Evento fetch para descargar archivos estaticos

self.addEventListener("fetch", (e) => {
  console.log("Fetch...", e);
  e.respondWhith(
    caches
      .match(e.request)
      .then((respuestaCache) => {
        return respuestaCache;
      })
      .catch(() => caches.match("/error.html"))
  );
});
