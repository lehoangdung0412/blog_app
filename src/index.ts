import express from "express";
const app = express();
const port = 3000;

app.listen( port, () => {
  // tslint:disable-next-line:no-console
  console.log( `Server started at http://localhost:${ port }` );
} );