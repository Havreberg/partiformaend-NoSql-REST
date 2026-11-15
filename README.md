![img.png](Billeder/Diagram/img.png)

Diagram oversigt

- Overvejlser af sruktur

  MVC-inspireret, 

app.js - Opsætter Express og middleware

logger.js, validateError.js - Logger og validerer requests

personRoutes.js - Bestemmer hvilket endpoint der kaldes

personController.js - Håndterer requests og responses

personModel.js - Definerer datastruktur og bruger Mongoose

MongoDB - Gemmer data

- Hvorfor ikke et service lag?

Ikke nok forretting at skulle lave validering på, personModel bruger required til at bestemme hvad databasen gerne vil modtage, resten tager personController med validateError.

CRUD test med Postman

GET / Person

200

![img.png](Billeder/Postman/img.png)

GET / Ministers

200

![img_1.png](Billeder/Postman/img_1.png)

GET / formand

200

![img_2.png](Billeder/Postman/img_2.png)

GET / id

200

![img_11.png](Billeder/Postman/img_11.png)

POST / 

400
![img_3.png](Billeder/Postman/img_3.png)

201

![img_4.png](Billeder/Postman/img_4.png)

PUT / id

Id ikke findes / 400

![img_5.png](Billeder/Postman/img_5.png)

400
![img_6.png](Billeder/Postman/img_6.png)

200

![img_7.png](Billeder/Postman/img_7.png)

DELETE / id

Id ikke findes / 400

![img_8.png](Billeder/Postman/img_8.png)

200

![img_9.png](Billeder/Postman/img_9.png)

Database

![img_10.png](Billeder/Postman/img_10.png)





