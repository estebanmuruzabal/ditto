# ditto

### Ports

- Server API Port: 7000
- Client SHOP Port: 9000
- Client SHOP API Port: 8000
- Client ADMIN Port: 5000 (3000)
- Client ADMIN API Port: 4000


# Ditto Fashion Documentation


here are all the tabs and language settings: client/packages/shop/src/site-settings/site-navigation.ts
<!-- "ecoDescription": "EcoCompra: pagás ${packageDiscount} menos si tenés envases/bolsas de este art. para devolvernos.", -->
# To do SHOP:



- poner mejores datos en los cards de las tasks (start, end time).
- better ui in task listing edit staff modal

# To do VENTAS:
poner  numeros
1️⃣ Compra tu AssistCard 💳
2️⃣ Asistencia en viaje 🩺
3️⃣ Reintegros 💲
4️⃣ Modificación de voucher ✏️
5️⃣ Sugerencias y otras consultas 🧔🏽💻
6️⃣ Cancelar❌(Puedes escribirlo en cualquier momento para finalizar o volver al inicio).
7️⃣ Change my language / Mudar meu idioma 🔁

- agregar flow venta rapida para SELLER_POSITION, /grower
- chequear flujo compras web.
 - chechear flujo compra whatsapp
 - hacer flujo juan para actualizar huevos y stock de frutillas por ej. (lunes y miercoles) (para hacer ventas martes y jueves) (check)
 - chequear automatizacion de pickup de stock y publicacion en IG.
 - automatizar aviso a DITTO_SELLER de lista de pedidos y flujo de contacto con el cliente (marcarlos como entregados e identificar pedidos que juan le lleva, con cuando llega el cliente)
 - chequear a juan que le falta para ahcer para hcer mermelada (envases, azucar, olla y elementos de limpieza)
 - Ver listado con precios mayorista de frutas/verduras.


# ----- Ditto controller ---------------------

# ONGOING
- Arreglar y testear distancia

# BUGS
- los soil moister sensor 1 y 2 del [0] arduino, se esta copiando al [1] arduino sensores moiister 1 y 2 tmb
- arreglar fecha si o si , que sea la del front, y un bug que dejas el browsser quieto 2 min, el online se vuelve offline, y das f5 y realmente esta online
- jugar con el agregado de SOIL_HUMIDITY_3, se agregan mal entonces las lecturas son erroneas
- hacemos fetch cada 2 seg 
- agregar warning de vuelta para enchufes ya usados, pero poner confirmar o cancelar.
- calendario modal para soil moister muestra smart lighting, hay que sacarlo
- calendario modal nuevo, sale con el toogle disabled en on, deberia ser off
- la hora del calendar de currentTime is la hora del servidor, tiene que ser la hora del cliente!!! (fixed creo, testear)
- agregar cable del 4to enchufe
- if you add a module (like light or soil) when its already conected, it shows disconeccted/no reading, (we should refresh with the actual value). and make sure it updates if the value changes
- fix timestamp from general values in plant object: timestamp: '10/29/2023, 5:50:56 PM',
- make check to not colapse when no whatsapp is linked when shuting a warning for instance.
- Arreglar logs un poco


# Improvements/features todo
- agregar funcion pausar (disabled/enabled) para soil al menos y bot, luz y dist. todos
- timeZone should be stored in user info (somewhere), so we pull it from the front client where the users is, so we reflect every timezone with the right information and also it works well
- agregar textbox para ingresar user id y controller id
- agregar boton y logica para reiniciar wifi config
- Agregar DittoBot SHOULD BE A MODAL, ADD BUTTON ON TOP
- agregar UI y logica de backend para enchufe inteligente
- agregar UI y logica de backend para humedad y temperatura
- mover las fotos a otro lugar, no en el server
- arreglar alertas (en un nuevo server?)
- testear cuanta agua para en 1 minuto de la manguera y poner metodo aca para en plants.ts decir cuanta agua utilizo.
- para hacer mi sistema de agua de casa, voy a tener que agregar una logica a los sensores para que tengan un array con modos para ir saltando de modo en modo (stack).
- agregar a que numbero avisar. al del user o otro
- hacer super dinamico el campo: encendido/apagado y el reading!!
- Arreglar wording de whatsapp para plants.ts
- agregar warnings en el front a soil: No relayOneIdRelated, or no minWarning setted: [please set one]  



# Tests
- Soil Moist module:
  calendar (done)
  calendar double action (done)
  demanda cantidad exacta (done)
  demanda cantidad exacta double (done) 
- Distance module: 
 accion custom en minimos (done)
 accion automatico en minimos (done)
- Light module :
  calendar (done)
  calendar, smart (done)
  manual (done)

# DONE


# PRODUCTS
- arduino box (esp32), cable usb, cargador/enchufe.

- zapatilla (con 1, 2, 3, 4 enchufes/relays), una entrada usb para arduino y con su debida cantidad de cables hasta el arduino (todos unidos) (metros a seleccionar). 
- Sensor de humedad (mts, cms de cable a seleccionar) (add on: mas metros)
- Sensor de luz y mts, cm de cable a seleccionar (add on: palito para sujetarlo)
- Sensor de moviemiento con su cable(add on: palito para sujetarloy mts, cm de cable a seleccionar)
- Sensor de distancia (cajita) con su cable, (add on: mas metros)

# TO PRINT:
- arduino box (esp32) --- 
- box for 1 releay, 2 , 3 or 4 or 8 (tienen que ser zapatillas, con 1 usb)
- cajitas para module de humedad
- distribuidor de agua para maceta(ver cuanto sale de china)
- palito para module de luz y cajita
- palito para module de movimiento y cajita
- cajita para module de distancia, con tornillitos

# Features: 
 - Sensor distancia: 
   Modos:
   - Quizas agregar 5 medidas (tiempos de agua para imersion) para el pool irrigation, ya que dependiendo de la cantidad de trays que pongas, va a variar, y agregar en el front un input de esas cantidades (pensar como serian las pruebas del usuario para que sea sensillo saber que cantidades usar)
  - Accion vacio custom: avisa cuando esta vacio y activa relay asociado x cantidad de tiempo
  - Accion vacio automatico: avisa cuando esta vacio y activa relay asociado hasta llegar al maximo
  - Accion lleno custom: avisa cuando esta lleno y activa relay asociado x cantidad de tiempo
  - Accion lleno automatico: avisa cuando esta lleno y activa relay asociado hasta llegar al minimo
  - Aviso vacio: avisa cuando esta vacio.
  - Aviso lleno: avisa cuando esta lleno.

  Sensor humedad suelo:
# Improvements: 
- add delete user func in staffmembers.tsx
- add comment on tasks for feedback.

-- IDEAS

# GreenMarket:
- puede ser como marketplace, puede ser como un mapa, con buen filtro,
- cada sub/brand que tengo, puede ser un ditto cell, acceso admin,
- necesitaria servidores, devops, 
- fullstack dev
- door to door service/installation team, 0800 operation/complains person, 
alguien para la estrategia de branding (pueden ser door to door seller, try to register a market square, by telling/showing how others neibors are signing in)

# Bugs:
0- se puede agregar mas cant de productos de la que hay en stock. El error recien salta en el pago (unhandled: This product do not have enough product quantity. Available quantity: 3)
!!!!! se muestra el error de token expirado todo "GraphQL error: E ", buscar "GraphQL error: useQuery(GET_LOGGED_IN_USER);" en el proyectop y agregar handler para el error asi como esta en checkout:
/Users/estebanmuruzabal/work/Mahdi-Fashion/client/packages/shop/src/pages/checkout.tsx

1- clear session, login, logout, crash on src/pages/index.tsx (63:12) @ IndexPage


# Introduction

This is a ecommerce script devided with two parts; one is `Client` and another one is `Server`. In the `Client` we have shop script template develop with `Next.js` and admin script that develop with `React.js`. In the `Server` we have graphql api that develop with `Typescript`, `Apollo Server`, and `MongoDB` as database.

# Tech We Have Used For Client

We have used monorepo folder structure with Yarn Workspace. In our template we have three different part Admin Dashboard, Shop and API. Tech specification for specific part is given below

## Admin Dashboard

- CRA
- Apollo
- BaseUI
- Typescript
- React Hook Form

## Shop

- NextJs
- Apollo
- Typescript
- Styled Components
- Stripe Integration
- Formik

## Dummy API

- GraphQL
- Type GraphQL

# Getting Started & Installation

For getting started with the template you have to follow the below procedure. First navigate to the `client` directory. Then run below command for getting started with specific part.

```bash
# on client directory
yarn
```

<br><br><br>

## Admin
### Configuration

1. Go to `/packages/admin` folder.
1. Copy the contents of `.env.sample` into a new file called `.env`
1. Put Your Graphql api endpoint in the `/packages/admin/.env` file's `REACT_APP_API_URL` key.

For starting the admin dashboard part with corresponding api data run below commands.

```bash
# for dev mode run below command
yarn dev:admin

```

## Shop

### Configuration

1. Go to `/packages/shop` folder.
1. Copy the contents of `.env.local.sample` into a new file called `.env.local`
1. Put Your Stripe public api key in the `/packages/shop/.env.local` file's `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` key.

For starting the shop part with corresponding api run below commands.

```bash
# for dev mode run below command
yarn dev:shop

```

### If you want to test your production build admin or shop in local environment then run the below commands.

## Admin

```bash
# build admin for production
yarn build:admin => port: 5000

# build api which in needed for local testing
yarn build:api => port: 4000

#start admin in production mode
yarn serve:admin
```

<br><br><br><br><br><br><br>

## Shop

```bash
# build shop for production
yarn build:shop => port: 9000

# build api which in needed for local testing
yarn build:api => port: 8000

# start shop in production mode
yarn serve:shop
```

# Folder Structure & Customization

`/packages/admin` : In this portion all the admin dashboard related coding and functions.

`/packages/shop` : All the shop related coding and functions.

`/packages/api` : API related code for both admin and shop section.

admin related api codes are in `admin` folder

shop related codes are in `shop` folder


### Admin

- After deploying the api you will get the api endpoint url. Put that url in the `packages/admin/.env`

```
REACT_APP_API_URL={put_your_api_url_here}/admin/graphql;
```

### Shop

- After deploying the api you will get the api endpoint url. Put that url in the `packages/shop/.env.local`.

```.env.local
NEXT_PUBLIC_STRIPE_PUBLIC_KEY= 'put_your_stripe_public_key'

NEXT_PUBLIC_GRAPHQL_API_ENDPOINT= '{put_your_api_url_here.}/shop/graphql'
```

<br><br><br><br>
<br><br><br><br>

# Tech We Have Used For Server
We develop our graphql api server with NPM workspace. Tech specification for specific part is given below

## API Server
- Typescript (Node.js)
- Express
- Apollo Server Express
- Cors
- Graphql
- Mongodb

# Getting Started & Installation

For getting started with the api server you have to follow the below procedure. First navigate to the `server` directory. Then run below command for getting started with specific part.

```bash
# on server directory
npm install
```


## API Server
### Configuration

1. Go to `server` folder.
1. Copy the contents of `.env.example` into a new file called `.env`
1. Put Your configuration in the `server/.env` file's.
   1. `PORT=` Give port as `7000`. The server will run on this port.
   1. `APP_ENV=` Set environment `local` if you have `MongoDB` on your local machine. If you have `MongoDB Atlas` then set environment as `production`.
   1. `JWT_SECRET=` Give random string here to setup JWT secret key.
### Configure environment with MongoDB Atlas
If you wish you can also use this configuration for development envoirment.
```
PORT=7000
APP_ENV=production
DB_NAME=pickbazar
DB_USER=pickbazar
DB_USER_PASSWORD=58iqLgIruPZpNG5s
DB_CLUSTER=cluster0.nneth
JWT_SECRET=welkrjewrrkjdsfdk
```
### Configure environment with local MongoDB
Please be sure you already create the database on your local mongodb server.
```
PORT=7000
APP_ENV=local
DB_NAME=pickbazar
DB_URL=mongodb://localhost:27017
JWT_SECRET=welkrjewrrkjdsfdk
```


For starting the api server run below commands. The api server will run on `http://localhost:7000` and you will find the graphql api on this url `http://localhost:7000/api`. 

**You will find API Specification on Graphql playground docs.** 

```bash
# for dev mode run below command
npm run start

```

### Backlog:
Connect ALL app features to backend (shop and admin)

ADMIN
  Products page

	delete products

	update/delete categories

 update/delete/create categories-types

Customers page

 update/delete/create customers

 add primary delivery address field
  
Dashboard

 make it show real data

 Settings

  members:
  
 delete/edit permissions or role site settings:
  
 make logo/site name (PickBazar should be a dynamic variable)/site description and status work correctly 
  
 a plus if you can define theme colors and different website settings 

Coupons
  
 add/edit coupon
add not working actually


Cool features:
 - Add feature to edit your homepage background banner image. And what does ads banners hyperlinks takes you to
- products page: ability to change display options (listing view, add products with excel file, show products out of stock, set new price for a number of products selected)
- a new tab to set marketing campaigns (hit instagram api and upload stuff maybe?)
- Send email capabilities (special emails form specific buyers) (maaaybe)
-SUPERADMIN: (new app) to be able for us to control bugs (from logs maybe), up/down statuses from all mango sites being sold.

SHOP

 Checkout Page

 Add sign up to save your delivery information

 Add countries payment methods (stripe, Apple Pay, PayPal in usa, mercadopago argentina)

Cool features:

 Delivery app (login as delivery boy) and the user can accept a delivery on real time (would include to add a view to admin panel and clients app to see the delivery status)

 Add address checker to get the delivery fee or if you qualify as free delivery (check LocationModal)
