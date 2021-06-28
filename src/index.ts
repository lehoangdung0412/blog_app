import app from "./server";
const port = 3001;

app.listen( port, () => {
  // tslint:disable-next-line:no-console
  console.log( `Server started at http://localhost:${ port }` );
} );