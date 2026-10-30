





Inicio



Editar con el chat
BotsAlpha
BotsAlpha

Principal
Close
La respuesta de Base44 está lista.
Respuesta de Base44
No, no está activo. Revisé el servidor y no hay nada guardado:

0 configuraciones y 0 llaves en la base de datos: el guardado nunca se completó, así que tampoco hay operaciones registradas.
El motivo no son tus llaves: Binance rechaza las conexiones desde la región donde vive este servidor (EE. UU., error 451). Cualquier guardado que valide contra Binance falla ahí.
El motor programado sí está encendido y corre cada 5 minutos, pero sin configuración activa no ejecuta nada.
Para que opere de verdad hay que apuntar el motor a un exchange al que este servidor sí llegue (MEXC, BingX, Gate u OKX responden bien) o pasar por un puente propio fuera de EE. UU. Dime por cuál te vas y lo dejo operando.

5 hours ago


Tu mensaje
Y si agregamos un vpn?

5 hours ago


Revertir
Respuesta de Base44

Pensó durante 8s
Un VPN no resuelve esto: las órdenes no salen de tu teléfono ni de tu PC, salen del servidor de la app (que está en EE. UU.). Un VPN en tu equipo solo cambia la IP de tu navegador, no la del servidor.

Lo que sí funciona es un puente: un proxy pequeño en un servidor tuyo fuera de EE. UU. que reciba las órdenes de la app y las reenvíe a Binance. Yo puedo dejar la app preparada para usar ese puente con un token propio, así Binance ve otra región.

Dos advertencias antes de seguir: nunca uses un VPN o proxy público/gratuito para esto, verían tus API keys en texto plano y podrían vaciar la cuenta; y el puente tiene que ser tuyo, con su propio secreto.

Si no tienes un servidor propio, lo pragmático es operar en MEXC o BingX, que sí responden desde este servidor y funcionan con la misma lógica de márgenes y TP/SL que ya está montada.

¿Tienes un VPS o servidor fuera de EE. UU.? Si sí, te dejo la app lista para pegar la URL del puente.

5 hours ago


Tu mensaje
No , estoy operando en Binance ,cómo podemos hacer

5 hours ago


Revertir
Respuesta de Base44
Con una máquina fuera de EE. UU. sí se resuelve: dejo la app preparada para enviar las órdenes a Binance a través de un puente tuyo.


Actualicé binance, bot Engine y 5 más
Respuesta de Base44
La app ya está lista para eso: en Configuración → Puente de conexión puedes poner la URL y el token de tu puente, y todas las órdenes saldrán por ahí.

Lo que falta es la máquina que haga de puente, porque las órdenes salen del servidor de la app, no de tu navegador. Dos caminos reales:

VPS barato fuera de EE. UU. (Europa o Latinoamérica, ~5 USD/mes): lo más estable, corre 24/7 aunque apagues la PC.
Tu propia PC en Venezuela con un túnel (Cloudflare Tunnel, gratis): Binance vería tu IP de casa, pero la PC debe quedar encendida mientras el bot opere.
Dime cuál prefieres y te doy el script exacto del puente para pegarlo, más el token que debe llevar.

5 hours ago


Tu mensaje
Dónde puedo adquirir un servidor en namecheap?

5 hours ago


Revertir
Respuesta de Base44
Voy a verificar las ubicaciones de los servidores de Namecheap, porque si están en EE. UU. Binance los seguiría bloqueando.


Busqué en la web
Respuesta de Base44
En Namecheap está en Hosting → VPS Hosting (planes Spark $3.88, Pulsar $6.88 al año con descuento), pero acabo de verificar algo importante: sus VPS solo existen en Phoenix, Arizona. Es decir, comprar ahí no resuelve el bloqueo de Binance; seguirías en la misma situación.

Necesitas un proveedor donde puedas elegir la región al comprar:

Hostinger VPS → región São Paulo (Brasil): la más cercana a ti y la mejor latencia.
Contabo → Alemania: la más barata, ~5 USD/mes.
Vultr / DigitalOcean → Frankfurt, Ámsterdam o São Paulo, ~6 USD/mes, aceptan cripto.
Elige el plan más pequeño (1–2 GB de RAM sobra) con Ubuntu 22.04 o 24.04. Cuando lo tengas con su IP, te paso el puente listo para pegar y lo conectamos a la app.

5 hours ago


Tu mensaje
Que requiero un hostin

5 hours ago


Revertir
Respuesta de Base44

Pensó durante 3s
Sí, pero ojo con la palabra: no sirve el "hosting web" compartido (el de páginas y WordPress), porque ahí no puedes dejar un programa corriendo ni abrir puertos.

Lo que necesitas es un VPS: un servidor virtual con acceso root donde se instala Node.js y el puente queda encendido 24/7. El plan más pequeño (1–2 GB de RAM, Ubuntu 22.04/24.04) es más que suficiente, y no hace falta panel cPanel.

Con el VPS te dan una IP; si además quieres HTTPS limpio, conviene un dominio barato apuntando a esa IP (también sirve la IP, pero un dominio es más seguro y estable).

5 hours ago


Tu mensaje
https://binance-bridge-o4pu.onrender.com

3 hours ago


Revertir
Respuesta de Base44
Voy a probar el puente que desplegaste para ver si responde y si Binance lo acepta.


Creé binance bridge
Respuesta de Base44
Probé tu puente: responde en la raíz, pero /fapi/v1/... devuelve 404, así que la app no puede pedir precios ni enviar órdenes. Y como el plan gratuito de Render usa la región de Oregon (EE. UU.), Binance lo bloquearía igual.

Te dejé en la app el archivo binance-bridge.md con los dos archivos exactos para pegarlos en Render (el proxy de /fapi/*), la región a elegir (Frankfurt) y la prueba rápida para confirmar con {"code":0,...}.

3 hours ago


Tu mensaje
Ya cambié los archivos en Render, prueba el puente de nuevo

3 hours ago


Revertir
Respuesta de Base44

Retested your bridge
Respuesta de Base44
El puente ya funciona: /fapi/v1/time y el precio de BTCUSDT responden 200 desde el servidor de la app, así que el bloqueo 451 quedó resuelto.

Dos detalles: no tiene token configurado en Render (acepta cualquier petición, conviene poner BRIDGE_TOKEN), y Binance acaba de banear temporalmente esa IP (error 418) por exceso de peticiones — probablemente por mis pruebas seguidas; se libera solo en unos 35 minutos.

Ahora pega https://binance-bridge-o4pu.onrender.com en Configuración → URL del puente, guarda, y el bot podrá operar.

3 hours ago


Tu mensaje
Listo y shora

3 hours ago


Revertir
Respuesta de Base44
Voy a revisar cómo quedó guardada tu configuración ahora.


Checked your saved setup
Respuesta de Base44
Todavía no hay nada guardado en la app: ni la URL del puente ni las llaves. Falta esto, en Configuración:

URL del puente: https://binance-bridge-o4pu.onrender.com
Token: solo si pusiste BRIDGE_TOKEN en Render; si no, déjalo vacío.
API Key y Secret de Binance Futuros (sin permiso de retiros).
Luego Guardar y aplicar cambios y por último Iniciar bot. Ojo: espera ~30 minutos desde mis pruebas, porque Binance tiene esa IP en pausa por exceso de peticiones.

3 hours ago


Tu mensaje
Ya guardé la URL y las llaves, revisa si conecta

2 hours ago


Revertir
Respuesta de Base44
Reviso lo guardado y pruebo la conexión contra Binance.


Tested the Binance connection
Respuesta de Base44
No hay nada guardado, así que el guardado no llegó a completarse. Voy a ver el formulario y probar la ruta de guardado con llaves de prueba para ver qué error sale.


Revisé tu app
Respuesta de Base44
La conexión por el puente sí funciona; el problema es que Binance rechazó las llaves y la app no te lo mostró cerca del botón. Voy a corregir eso.


Actualicé Dashboard Page
Respuesta de Base44
Probado de punta a punta: el puente responde bien desde el servidor de la app, pero Binance rechaza las llaves (error de permisos), así que el guardado se cancela completo y por eso no queda nada.

Dos cosas: ahora el error aparece justo debajo del botón Guardar, y en Binance revisa que la llave tenga activado Enable Futures (y sin restricción de IP, o con la IP 74.220.51.161). Luego guarda otra vez.

2 hours ago


Tu mensaje
Ya activé el permiso de Futuros, guarda de nuevo y prueba

2 hours ago


Revertir
Respuesta de Base44

Checked saved keys and connection
Respuesta de Base44
Las llaves solo existen en tu navegador, así que el guardado lo tienes que disparar tú: en Configuración vuelve a pegar API Key y Secret y pulsa Guardar y aplicar cambios. Avísame cuando salga el aviso verde y hago la prueba de conexión, saldo y precio al instante.

2 hours ago


Tu mensaje
Ya guardé, revisa si conecta ahora y si tiene permiso para futuro pq lo probé con python

2 hours ago


Revertir
Respuesta de Base44

Checked connection and futures permission
Respuesta de Base44
Nada llegó al servidor todavía. Voy a hacer que la app guarde el motivo exacto que responde Binance, para verlo desde aquí.


Actualicé bot Settings
2 hours ago


Tu mensaje
Approved.

2 hours ago


Revertir
Respuesta de Base44

Captured Binance's exact rejection reason
2 hours ago


Tu mensaje
Approved

2 hours ago


Revertir
Respuesta de Base44
El precio ya llega por el puente; ahora aíslo por qué las llamadas con llaves fallan.


Probed the bridge behaviour
Respuesta de Base44
El puente tiene un error propio: intenta firmar las peticiones y no encuentra la clave. Reviso el código del puente que dejamos documentado.


Actualicé binance, bot Settings y binance bridge
Respuesta de Base44
Ya sé qué pasa: no es Binance ni tus llaves. Los precios sí pasan por el puente, pero el index.js que tienes en Render intenta firmar las peticiones y se cae porque le falta la variable BINANCE_SECRET.

Arreglo: en Render → tu servicio → pestaña del proyecto → reemplaza index.js por el de la guía (la app ya firma sola; el puente solo reenvía) y haz Redeploy. Avisas y pruebo de inmediato.

2 hours ago


Tu mensaje
Cuál es el de la guía?

2 hours ago


Revertir
Respuesta de Base44

Pensó durante 5s
Es este (el mismo de la guía). En Render, abre tu servicio → pestaña Files (o el repo) → index.js, borra todo y pega esto, luego Manual Deploy:

const express = require('express');

const app = express();
const PORT = process.env.PORT || 10000;
const TOKEN = process.env.BRIDGE_TOKEN || '';
const UPSTREAM = 'https://fapi.binance.com';

app.use(express.text({ type: '*/*' }));

app.all('/fapi/*', async (req, res) => {
  if (TOKEN && req.header('x-bridge-token') !== TOKEN) {
    return res.status(401).json({ code: -2015, msg: 'Token del puente inválido' });
  }

  const headers = {};
  const apiKey = req.header('x-mbx-apikey');
  if (apiKey) headers['X-MBX-APIKEY'] = apiKey;
  if (req.method !== 'GET') headers['Content-Type'] = 'application/x-www-form-urlencoded';

  try {
    const upstream = await fetch(UPSTREAM + req.originalUrl, {
      method: req.method,
      headers,
      body: req.method === 'GET' ? undefined : req.body || undefined,
      signal: AbortSignal.timeout(15000),
    });
    const text = await upstream.text();
    res.status(upstream.status).type('json').send(text);
  } catch (err) {
    res.status(502).json({ code: -1, msg: 'Puente sin conexión: ' + err.message });
  }
});

app.get('/', (req, res) => res.send('Puente Binance Activo y Operativo'));
app.listen(PORT, () => console.log('Puente escuchando en ' + PORT));
Clave: que no quede nada de crypto ni BINANCE_SECRET ahí. Avísame cuando termine el deploy y pruebo.

2 hours ago


Tu mensaje
Ya hice el deploy, prueba la conexión otra vez

2 hours ago


Revertir
Respuesta de Base44
Pruebo el puente de nuevo con una llamada firmada (las llaves falsas deben dar error de Binance, no del puente).


Tested the bridge connection
Respuesta de Base44
El puente sigue con el código viejo: responde JSON en / (la versión de la guía responde texto plano) y la llamada firmada vuelve a dar el mismo 500 de crypto. El deploy no cambió ese archivo.

Dos caminos:

Rápido (1 campo): en Render → Environment → añade la variable BINANCE_SECRET con tu Secret Key de Binance, guarda y espera el redeploy. Su código ya firma con lo que haya en esa variable, así que la llamada pasará.
Correcto: si el servicio dice "Deploys from GitHub", el archivo se edita en el repo de GitHub, no en Render (el que arranca es el que apunta package.json → main). Reemplaza ahí el contenido por el código que te pasé y haz commit.
Dime cuando esté y vuelvo a probar.

2 hours ago


Tu mensaje
Reemplace el código en elmpqckage Jason

2 hours ago


Revertir
Respuesta de Base44

Tested the bridge again
Respuesta de Base44
Sigue igual, y creo que ya sé por qué: el código va en index.js, no en package.json. Render arranca index.js (el que dice "main"), así que si se pegó allí, el build falla y sigue sirviendo la versión vieja. Eso es justo lo que veo.

Dos opciones:

1. La más fácil (sin tocar código): en Render → tu servicio → Environment → Add Environment Variable:

Key: BINANCE_SECRET
Value: tu Secret Key de Binance
Save Changes y espera el redeploy. El puente que ya está activo firma con esa variable y la conexión pasará.

2. Si prefieres arreglar el código: package.json debe quedar exactamente así (sin el código del puente dentro):

{
  "name": "binance-bridge",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": { "start": "node index.js" },
  "dependencies": { "express": "^4.19.2" }
}
y el código del puente va en un archivo aparte llamado index.js.

Dime cuál hiciste y pruebo de nuevo.

2 hours ago


Tu mensaje
Listo

an hour ago


Revertir
Respuesta de Base44

Tested the bridge again
Respuesta de Base44
Probado otra vez: precios sí pasan (el puente está despierto y en buena región), pero la llamada firmada sigue dando el mismo error de crypto. Tu deploy no cambió el archivo que se ejecuta; el puente activo sigue siendo la versión que firma.

Lo que falta es una sola cosa, y es un campo, no código:

Render Dashboard → clic en tu servicio → menú izquierdo Environment
Add Environment Variable
Key: BINANCE_SECRET — Value: tu Secret Key de Binance
Save Changes y espera a que el estado diga Live
Con eso el puente firma bien (usa la misma clave que tú, así que la firma coincide) y deja de romperse. Después entra a la app → Configuración → Guardar, y lo verifico.

Si prefieres no tocarlo más, también puedo guiarte a borrar ese servicio y crear uno nuevo desde cero en 5 pasos: es más largo pero queda limpio.

an hour ago


Tu mensaje
Vamos hacer un servicio limpio

an hour ago


Revertir
Respuesta de Base44
Prepararé un puente nuevo y separado, sin firma duplicada ni dependencias externas.


Revisé tu app
Respuesta de Base44
Aquí tienes el puente limpio para descargar, probado sin enviar órdenes reales.

Descomprímelo, sube su contenido a un repositorio nuevo y conéctalo en Render → New → Blueprint; todavía falta desplegarlo y comprobar la conexión real con Binance.

Respuesta de Base44

Actualicé server.cjs, package y 3 más
an hour ago


Tu mensaje
Ya descargué el paquete, guíame para crear el repositorio nuevo

an hour ago


Revertir
Respuesta de Base44

Pensó durante 8s
Perfecto. Sigue estos pasos en orden; el punto crítico es que los archivos queden en la raíz del repositorio nuevo, no dentro de la carpeta del ZIP.

1. Prepara la carpeta Descomprime el ZIP y abre la carpeta: deben verse directamente 4 elementos (server.cjs, package.json, render.yaml, README.md). No los muevas a subcarpetas ni subas el ZIP.

2. Crea el repositorio vacío

Entra en GitHub → New repository.
Nombre sugerido: botsalpha-bridge-clean.
Marca Private (Render accede a repos privados igual).
No marques "Add a README file", ni .gitignore, ni licencia: deben quedar vacíos para que no haya conflicto con los archivos del paquete.
Pulsa Create repository.
3. Sube los 4 archivos

En el repositorio nuevo pulsa Add file → Upload files.
Arrastra los 4 archivos (no la carpeta).
En el mensaje escribe puente limpio inicial y pulsa Commit changes.
Comprueba que en la página principal del repositorio aparezcan los 4 archivos en la lista raíz. Si ves una sola carpeta, entraste dentro de ella: vuelve a la raíz y repite la subida.
4. Despliega con Blueprint en Render

Render → New → Blueprint.
Conecta GitHub si te lo pide y selecciona el repositorio nuevo (autoriza el acceso al repo privado si aparece).
Nombre del Blueprint: botsalpha-bridge-clean. Rama: la que use tu repo (normalmente main).
Deja Blueprint Path como render.yaml.
Render mostrará un servicio nuevo botsalpha-bridge-clean. Verifica que diga "crear", no "actualizar" un servicio existente.
Estado de cuenta: puede pedirte añadir método de pago incluso con instancia gratuita; eso no genera cobro mientras sigas en el plan free.
Pulsa Deploy Blueprint y espera a que el estado sea Live.
5. Comprueba que es el servicio correcto Abre la dirección pública del servicio y añade /health al final. Debe responder algo como ok: true, service: botsalpha-bridge-clean-1 y signing: false. Eso confirma el servicio nuevo, no todavía el acceso a tu cuenta de Binance.

6. Conecta la app En Render, abre Environment del servicio y copia el valor de BRIDGE_TOKEN. En la app ve a Configuración → Puente de conexión, pega la URL del servicio en "URL del puente" y ese token en "Token del puente", y guarda con el bot detenido.

Dos avisos: no compartas el token en el chat ni en la barra de direcciones, y no borres el servicio anterior hasta que la conexión nueva funcione.

Cuando tengas el repositorio subido y el servicio en Live, dime qué muestra /health y seguimos con la prueba de conexión real.

an hour ago


Tu mensaje
Dame los archivos d eotra manera que pueda pegar con copy no descargas

an hour ago


Revertir
Respuesta de Base44
Te doy los cuatro archivos listos para pegar; los leo de la plantilla para que coincidan exactamente.


Leyó 3 archivos
Respuesta de Base44
Crea cada archivo en GitHub con Add file → Create new file, pon el nombre exacto y pega el contenido. Empieza por render.yaml, que es el que Render necesita para el Blueprint.

1. render.yaml

services:
  - type: web
    name: botsalpha-bridge-clean
    runtime: node
    region: frankfurt
    plan: free
    buildCommand: npm install --ignore-scripts --no-audit --no-fund
    startCommand: npm start
    healthCheckPath: /health
    autoDeployTrigger: commit
    envVars:
      - key: NODE_VERSION
        value: 22
      - key: BRIDGE_TOKEN
        generateValue: true
2. package.json

{
  "name": "botsalpha-bridge-clean",
  "version": "1.0.0",
  "private": true,
  "description": "Puente sin firma para solicitudes de Binance Futuros ya firmadas por BotsAlpha",
  "engines": { "node": "22.x" },
  "scripts": { "start": "node server.cjs" },
  "dependencies": {}
}
3. server.cjs

const http = require('node:http');
const { timingSafeEqual } = require('node:crypto');

const VERSION = 'botsalpha-bridge-clean-1';
const UPSTREAM = 'https://fapi.binance.com';
const METHODS = new Set(['GET', 'POST', 'PUT', 'DELETE']);
const MAX_BODY = 64 * 1024;

function reply(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(data));
}

function matchesToken(value, token) {
  if (typeof value !== 'string') return false;
  const provided = Buffer.from(value);
  const expected = Buffer.from(token);
  return provided.length === expected.length && timingSafeEqual(provided, expected);
}

function createBridgeServer({ token, upstreamFetch = fetch, revision = '' } = {}) {
  if (typeof token !== 'string' || token.length < 32 || token.trim() !== token) {
    throw new Error('BRIDGE_TOKEN debe tener al menos 32 caracteres y no contener espacios en los extremos.');
  }

  const server = http.createServer(async (req, res) => {
    const path = (req.url || '').split('?')[0];
    if (req.method === 'GET' && (path === '/' || path === '/health')) {
      return reply(res, 200, { ok: true, service: VERSION, signing: false, revision });
    }
    if (!/^\/fapi\/v[123]\/[A-Za-z][A-Za-z0-9/]*$/.test(path)) {
      return reply(res, 404, { msg: 'Ruta no disponible' });
    }
    if (!matchesToken(req.headers['x-bridge-token'], token)) {
      return reply(res, 401, { msg: 'Token del puente invalido' });
    }
    if (!METHODS.has(req.method)) {
      return reply(res, 405, { msg: 'Metodo no permitido' });
    }

    try {
      const chunks = [];
      let size = 0;
      for await (const chunk of req) {
        size += chunk.length;
        if (size > MAX_BODY) return reply(res, 413, { msg: 'Solicitud demasiado grande' });
        chunks.push(chunk);
      }
      const body = Buffer.concat(chunks);
      const headers = {};
      if (req.headers['x-mbx-apikey']) headers['X-MBX-APIKEY'] = req.headers['x-mbx-apikey'];
      if (body.length) headers['Content-Type'] = 'application/x-www-form-urlencoded';

      // Conservar literalmente la consulta firmada. No firmar, reordenar ni reintentar.
      const upstream = await upstreamFetch(UPSTREAM + req.url, {
        method: req.method,
        headers,
        body: req.method === 'GET' || !body.length ? undefined : body,
        redirect: 'manual',
        signal: AbortSignal.timeout(10000),
      });
      const text = await upstream.text();
      res.statusCode = upstream.status;
      res.setHeader('Content-Type', upstream.headers.get('content-type') || 'application/json');
      res.setHeader('Cache-Control', 'no-store');
      if (upstream.headers.get('retry-after')) res.setHeader('Retry-After', upstream.headers.get('retry-after'));
      res.end(text);
    } catch (error) {
      const timedOut = error.name === 'TimeoutError' || error.name === 'AbortError';
      reply(res, timedOut ? 504 : 502, { msg: timedOut ? 'Binance no respondio a tiempo' : 'No se pudo conectar con Binance' });
    }
  });
  server.requestTimeout = 15000;
  server.headersTimeout = 10000;
  return server;
}

if (require.main === module) {
  const server = createBridgeServer({
    token: process.env.BRIDGE_TOKEN,
    revision: process.env.RENDER_GIT_COMMIT || '',
  });
  const port = Number(process.env.PORT || 10000);
  server.listen(port, '0.0.0.0', () => console.log(VERSION + ' listo en puerto ' + port));
  process.on('SIGTERM', () => server.close(() => process.exit(0)));
}

module.exports = { createBridgeServer, VERSION };
Con esos tres basta: no necesitas README.md. Verifica que package.json y server.cjs queden en la raíz del repositorio y luego conecta Render → New → Blueprint con ese repo.

an hour ago


Tu mensaje

Screenshot_20261029-232536.jpg
Elmreadme apareció solo

an hour ago


Revertir
Respuesta de Base44

Pensó durante 2s
Es normal: GitHub lo añade solo cuando marcas "Add a README", y no afecta al puente. Tu repositorio está correcto con los cuatro archivos en la raíz, así que sigue con Render → New → Blueprint conectando ese repositorio.

an hour ago


Tu mensaje

Screenshot_20261029-232809.jpg
Que hago en render que

an hour ago


Revertir
Respuesta de Base44

Pensó durante 5s
Estás en la pantalla correcta; rellena así (o vuelve y usa New → Blueprint, que lo toma todo del archivo render.yaml).

Campos principales

Name: botsalpha-bridge-clean
Region: Frankfurt (si la instancia gratuita no aparece ahí, elige Singapur)
Branch: main
Language/Runtime: Node
Root Directory: déjalo vacío
Build Command: npm install --ignore-scripts --no-audit --no-fund
Start Command: npm start
Instance Type: Free
Environment Variables (sección más abajo, "Add Environment Variable")

NODE_VERSION = 22
BRIDGE_TOKEN = pulsa el botón Generate (genera un valor aleatorio). Debe tener al menos 32 caracteres y sin espacios.
Advanced

Health Check Path: /health
Después pulsa Create Web Service y espera a que el estado pase a Live. Ojo: cuando conectes la app deberás copiar exactamente ese token generado, así que no vuelvas a pulsar Generate después.

an hour ago


Tu mensaje

Screenshot_20261029-233254.jpg
Que pongo ahi

an hour ago


Revertir
Respuesta de Base44

Pensó durante 21s
Pon dos variables, una por fila:

KEY	VALUE
NODE_VERSION	22
BRIDGE_TOKEN	pulsa el botón Generate (botón con la varita)
En la segunda fila deja el campo VALUE vacío y genera el valor automáticamente; no lo escribas a mano ni le pongas espacios. Luego pega el token generado en la app cuando terminemos, así que no vuelvas a generar otro después de crearlo.

No agregues PORT (Render lo asigna solo) ni tampoco claves de Binance.

an hour ago


Tu mensaje
Ya puse las dos variables , que hago , dónde pongo el token y de dónde lo saco

an hour ago


Revertir
Respuesta de Base44

Pensó durante 4s
El token lo genera Render, y lo lees dentro del servicio: no se saca de Binance ni de la app.

1. Termina de crear el servicio Pulsa Create Web Service (si aún no lo hiciste) y espera a que el estado sea Live. Arriba verás la dirección, del tipo https://botsalpha-bridge-clean.onrender.com. Esa es tu URL del puente.

2. Copia el token En el servicio, abre la pestaña Environment. Ahí aparece la fila BRIDGE_TOKEN con su valor generado: pulsa el icono de ojo / editar y cópialo completo. No lo pegues en el chat.

3. Comprueba que el puente responde En el navegador abre tu dirección agregando /health: https://botsalpha-bridge-clean.onrender.com/health Debe responder ok: true, service: botsalpha-bridge-clean-1 y signing: false. Si sale error 502/503, el servicio aún está arrancando o el Build falló.

4. Pega ambos datos en la app En el panel de BotsAlpha → pestaña Configuración → sección Puente de conexión:

URL del puente: la dirección del servicio, sin /health y sin barra final.
Token del puente: el BRIDGE_TOKEN copiado. Guarda con el bot detenido, y luego pulsamos la prueba de conexión.
an hour ago


Tu mensaje

Screenshot_20261029-233925.jpg
El token no se dónde ubicarlo y aparece un error

an hour ago


Revertir
Respuesta de Base44

Leyó 3 archivos
Respuesta de Base44
El error casi seguro viene de la configuración, no del código. Revisa estas tres cosas en orden:

1. Dónde está el token Estás en la misma página de Settings. Baja hasta la tarjeta Environment Variables (la que viste antes, con NODE_VERSION y BRIDGE_TOKEN). En la fila de BRIDGE_TOKEN, pulsa el icono del ojo (o el lápiz Edit) para que se vea el valor, y cópialo. Ese es el token que va en la app. Si esa fila no existe o quedó vacía, pulsa Add Environment Variable, escribe BRIDGE_TOKEN como KEY y usa Generate en el VALUE.

2. Revisa los comandos En Settings → Build & Deploy:

Build Command: npm install --ignore-scripts --no-audit --no-fund
Start Command: npm start
Health Check Path: /health
Si tenías yarn / yarn start, cámbialos: sin archivo de bloqueo, esos comandos fallan.

3. Vuelve a desplegar Con el token ya guardado, use Manual Deploy → Deploy latest commit.

Si vuelve a fallar, abre el despliegue en rojo y pulsa Logs: las últimas líneas dicen la causa exacta (por ejemplo, que falta el token o que el comando no existe). Dime el texto del error y te digo qué cambiar, sin compartir el token.

an hour ago


Tu mensaje

Screenshot_20261029-234456.jpg
Carajo no consigo nada de lo que dices

44 minutes ago


Revertir
Respuesta de Base44

Leí la web
Respuesta de Base44
Perdón por la confusión; vamos con un solo paso, mirando tu captura. Toca las tres rayitas ☰ arriba a la izquierda, justo debajo de la casita del navegador, y mándame una captura del menú que se abra, sin mostrar claves ni tokens.

44 minutes ago


Tu mensaje

Screenshot_20261029-234632.jpg
Ya abrí el menú, esta es la captura

42 minutes ago


Revertir
Respuesta de Base44
Toca Environment en la sección MANAGE, justo debajo de Compute; no el «Environment» de arriba.

Después busca BRIDGE_TOKEN. Si envías otra captura, oculta su valor y cualquier otra clave.

42 minutes ago


Tu mensaje

Screenshot_20261029-234900.jpg
Ya entré en Environment, ¿qué hago ahora?

40 minutes ago


Revertir
Respuesta de Base44

Leyó 2 archivos
Respuesta de Base44
Estás en el lugar correcto; no necesitas pulsar Edit:

En la primera fila, donde dice «BRI…», toca el icono de dos cuadrados, justo a la izquierda del ojo.
Vuelve a BotsAlpha → Configuración → Puente de conexión y pega lo copiado en Token del puente.
No compartas ese valor aquí ni inicies el bot todavía.

40 minutes ago


Tu mensaje
No hay nada que diga puente de conexión

37 minutes ago


Revertir
Respuesta de Base44
Voy a revisar dónde aparece esa sección en la pantalla del móvil.


Revisé tu app
Respuesta de Base44
Lo comprobé: en el móvil queda más abajo; abre Configuración dentro de BotsAlpha (no en Render) y desliza hacia arriba hasta pasar Credenciales de Binance, donde aparecen URL del puente y Token del puente, como muestra la captura.

36 minutes ago


Tu mensaje

Screenshot_20261029-235408.jpg
Hay una lista de ce cosas que es lo que voy a buscar

34 minutes ago


Revertir
Respuesta de Base44
Busca Environment (Entorno) en la lista del menú ☰, arriba a la izquierda; dentro de esa sección busca la variable BRIDGE_TOKEN, no en «General».

34 minutes ago


Tu mensaje
Eso yablo hice y copié el bridge donde lo pego que no me dices con precidion

33 minutes ago


Revertir
Respuesta de Base44
Voy a mostrarte el campo exacto donde debes pegarlo.


Aplicación verificada — Mostrar dónde pegar el token
Respuesta de Base44
En BotsAlpha → Configuración, pégalo en «Token del puente»: es el recuadro que dice «Token» en la imagen, justo debajo de «URL del puente», no en las credenciales de Binance.

Después pulsa el botón verde «Guardar y aplicar cambios».

32 minutes ago


Tu mensaje

Screenshot_20261029-235926.jpg
Pero yo veo que hay un error en ese revisor , no me dices que es el error

29 minutes ago


Revertir
Respuesta de Base44
El mensaje indica que se agotó el tiempo de espera; revisaré qué conexión está fallando.


Revisé tu app
Respuesta de Base44
Tienes razón: “The operation was aborted due to timeout” significa que, al guardar, la app esperó 15 segundos una respuesta del puente y canceló la conexión porque no llegó a tiempo. No demuestra que el token esté mal; todavía no está confirmado por qué el puente no respondió a tiempo.

29 minutes ago


Tu mensaje

Screenshot_20261030-000036.jpg
Cómo se corrige ese error para que arranque elmservidorn

28 minutes ago


Revertir
Respuesta de Base44
Voy a revisar los archivos del puente para detectar qué hace fallar la compilación.


Leyó 3 archivos
Respuesta de Base44
El despliegue falló en la compilación, así que el servicio quedó caído: por eso la app esperó 15 segundos y cortó ("timeout"). Voy a quitar del plano todo lo que puede fallar al compilar, porque el puente no necesita instalar nada.


Actualicé render.yaml y README
Respuesta de Base44
El error de la app y el "Failed" de Render son el mismo problema: el servicio nunca arrancó, así que al guardar la app esperó 15 segundos y cortó.

Lo que dejé listo en el plano del puente:

Build sin dependencias: el servicio no instala nada; antes fallaba justo en ese paso. Ahora arranca directamente con node server.cjs.
Guía nueva con las causas típicas y cómo leer el registro rojo, más el aviso de que la instancia gratuita duerme y puede dar timeout al despertar.
Pasos para levantarlo:

Sube el render.yaml actualizado al repositorio (raíz, sin carpeta contenedora).
En Render, pulsa Manual Deploy → Clear build cache & deploy.
Cuando diga Live, abre https://botsalpha-bridge-clean.onrender.com/health y espera ok: true. Ese primer acceso despierta la instancia.
Recién entonces guarda la configuración en BotsAlpha.
Si vuelve a fallar, la línea roja del registro dice el motivo exacto; pásame ese texto y lo corrijo.

27 minutes ago


Tu mensaje
Hay un problema en la configuración nobsrranca

22 minutes ago


Revertir
Respuesta de Base44
Respuesta de Base44
Voy a revisar qué está bloqueando la configuración y el arranque, sin activar operaciones.


Revisé tu app
Respuesta de Base44
El guardado se bloqueaba al intentar conectar; lo separaré de la comprobación y mostraré el error real.


Actualicé bot Settings, binance y 3 más
Respuesta de Base44
Generación detenida. Puedes enviar otro mensaje cuando estés listo.
20 minutes ago


Tu mensaje

Screenshot_20261030-000851.jpg
Ese es el problema

20 minutes ago


Revertir
Respuesta de Base44
Respuesta de Base44
La captura muestra que el puente se cae al arrancar; revisaré cómo está configurado su inicio.


Revisé tu app
Respuesta de Base44
La captura no muestra la causa exacta; el puente se detiene si su token falta o es demasiado corto.

Respuesta de Base44
Comprobar

20 minutes ago


Tu mensaje
Cómo está ? A qué te refires

15 minutes ago


Revertir
Respuesta de Base44

Pensó durante 5s
Me refiero a la variable BRIDGE_TOKEN del servicio en Render. El registro de tu captura muestra "Exited with status 1" justo después de "Running 'npm start'": el puente arranca y se detiene al instante, y el único motivo por el que nuestro código se detiene solo al iniciar es que esa variable no exista o tenga menos de 32 caracteres (también pasaría si el archivo no está en la raíz del repositorio y no lo encuentra).

Falta ver la línea real del error: en esos logs desplázate hacia abajo, hasta después de la hora 12:05:03, o usa el buscador con "Error" o "Cannot find". Esa línea dice la causa exacta; el estado "Exited" no la dice.

15 minutes ago


Tu mensaje

Screenshot_20261030-001743.jpg
Te paso la línea del error que sale en los logs de Render

11 minutes ago


Revertir
Respuesta de Base44
La captura muestra un error de sintaxis con «respuesta»; revisaré el puente, no las claves.


Origen del fallo revisado
Respuesta de Base44
El error indica que el código desplegado no puede arrancar, no que fallen las claves; el puente disponible aquí pasa la comprobación y no contiene «respuesta».

10 minutes ago


Tu mensaje
Fue un copy ,dime cuál de los tres

10 minutes ago


Revertir
Respuesta de Base44

Tres archivos revisados
Respuesta de Base44
Es server.cjs: el único de los tres con JavaScript, y ese error de sintaxis solo puede venir de ahí (un problema en package.json diría «JSON.parse» y uno en render.yaml sería un error de Blueprint, no de Node). El archivo preparado compila sin errores y no contiene «respuesta» ni caracteres especiales, así que lo que se pegó en Render perdió comillas o llaves al copiarse.

Súbelo con «Add file → Upload files» en GitHub en vez de pegarlo, y luego Manual Deploy.

9 minutes ago


Tu mensaje
Pero dónde es el error en Github?

7 minutes ago


Revertir
Respuesta de Base44

Referencia del archivo lista
Respuesta de Base44
El error está en server.cjs, y su línea exacta está en el propio registro de Render: justo encima de SyntaxError aparece una ruta con :número (por ejemplo /opt/render/project/src/server.cjs:41). Ese número es la línea que debes mirar en GitHub (la que sale marcada en rojo en el bloque del error).

Compárala con el archivo correcto: debe tener 87 líneas, empezar por const http = require('node:http'); y terminar en module.exports = { createBridgeServer, VERSION };. Si el tuyo tiene más, menos, o no termina así, el texto se cortó al pegarlo.

7 minutes ago


Tu mensaje
Eso es imposible ubicar eso

6 minutes ago


Revertir
Respuesta de Base44

Requisitos del puente revisados
Respuesta de Base44
Te doy el puente en una versión más corta para que la reemplaces completa, sin buscar ninguna línea.


Creé server.cjs
Respuesta de Base44
No hay que ubicar nada: se reemplaza todo el archivo.

En GitHub abre server.cjs → botón del lápiz (Edit).
Toca dentro del texto y usa Seleccionar todo (o Ctrl+A / ⌘+A) y bórralo.
Pega el archivo nuevo que ya te dejé listo (62 líneas, sin tildes ni símbolos raros) → Commit changes.
En Render, Manual Deploy → Deploy latest commit.
package.json y render.yaml no se tocan. Cuando esté Live, abre la dirección con /health y debe decir ok: true y botsalpha-bridge-clean-2.

6 minutes ago


Tu mensaje
Cuál archivo me diste dame el copy

3 minutes ago


Revertir
Respuesta de Base44

Pensó durante 5s
El archivo es server.cjs. Cópialo completo, borrando primero todo lo que tenga el de GitHub:

const http = require('node:http');
const crypto = require('node:crypto');

const VERSION = 'botsalpha-bridge-clean-2';
const UPSTREAM = 'https://fapi.binance.com';
const MAX_BODY = 64 * 1024;

function send(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(data));
}

function tokenOk(value, token) {
  if (typeof value !== 'string' || !token) return false;
  const a = Buffer.from(value);
  const b = Buffer.from(token);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

const server = http.createServer(async (req, res) => {
  const path = (req.url || '').split('?')[0];
  if (req.method === 'GET' && (path === '/' || path === '/health')) {
    return send(res, 200, { ok: true, service: VERSION, signing: false });
  }
  if (!/^\/fapi\/v[123]\/[A-Za-z][A-Za-z0-9/]*$/.test(path)) {
    return send(res, 404, { msg: 'Ruta no disponible' });
  }
  if (!tokenOk(req.headers['x-bridge-token'], process.env.BRIDGE_TOKEN || '')) {
    return send(res, 401, { msg: 'Token del puente invalido' });
  }

  try {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
      if (chunks.length && Buffer.concat(chunks).length > MAX_BODY) {
        return send(res, 413, { msg: 'Solicitud demasiado grande' });
      }
    }
    const body = Buffer.concat(chunks);
    const headers = {};
    if (req.headers['x-mbx-apikey']) headers['X-MBX-APIKEY'] = req.headers['x-mbx-apikey'];
    if (body.length) headers['Content-Type'] = 'application/x-www-form-urlencoded';

    const upstream = await fetch(UPSTREAM + req.url, {
      method: req.method,
      headers,
      body: req.method === 'GET' || !body.length ? undefined : body,
      redirect: 'manual',
    });
    const text = await upstream.text();
    res.statusCode = upstream.status;
    res.setHeader('Content-Type', upstream.headers.get('content-type') || 'application/json');
    res.setHeader('Cache-Control', 'no-store');
    res.end(text);
  } catch (error) {
    send(res, 502, { msg: 'No se pudo conectar con Binance' });
  }
});

server.listen(Number(process.env.PORT || 10000), '0.0.0.0', () => {
  console.log(VERSION + ' escuchando en el puerto ' + (process.env.PORT || 10000));
});
