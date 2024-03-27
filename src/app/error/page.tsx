'use client'
import React from "react";
import { Button } from "@nextui-org/react";

function Error() {
  
  return (
    <div>
      About Page
      <Button color="primary" onClick={throwError()}>
        Error Button
      </Button>
    </div>
  );
};

export default Error;
