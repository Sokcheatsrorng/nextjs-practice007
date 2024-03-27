
import React from "react";
import { Button } from "@nextui-org/react";

function Error() {
  
  return (
   <>
 
      About Page
      <Button color="primary" onClick={throwError()}>
        Error Button
      </Button>
   </>
  );
};

export default Error;
