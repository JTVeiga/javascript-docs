# body-parser

- `body-parser` is a middleware
- Inspects the request received via POST
- Parses the information and creates a BODY property with that information
- By default a Request does not have a 'Body' property! (bodyParser adds it!)

```js
import express from "express";
import bodyParser from "body-parser";

// API configuration
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
```
