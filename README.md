Struktur

Postman / Client

↓

app.js

↓

logger.js

↓

personRoutes.js

↓
POST / PUT
← ──────────────┘
validateBody.js 

↑

personSchema.js (Joi)

↓

personController.js

↓

personService.js

↓

personModel.js (Mongoose)

↓

MongoDB

- Controlleren taler direkte med Mongoose-modellen, og hver controller håndterer typisk sine egne fejl.

success -flowet

MongoDB → personModel → personService → personController → Postman

Fejl-flowet

Joi / Controller / Service / Mongoose

↓

Express 5 sender fejlen videre

↓

errorHandler.js

↓

Postman / Client

app.js indlæser logger, routeren og errorHandler.

personRoutes.js vælger controller-funktion og sætter validateBody på POST og PUT.

validateBody.js bruger personSchema.js til at kontrollere req.body, før controlleren rammes.

personController.js håndterer kun HTTP: req, res og status som 200 eller 201.

personService.js udfører databaseoperationerne og afgør fx, om en manglende person skal blive til en 404.

personModel.js beskriver MongoDB-dokumentets felter og er den eneste fil, der kommunikerer med 
Mongoose/MongoDB.

errorHandler.js gør alle fejl til ens JSON-svar.

vigtigste nye princip

Controller → Service → Model





