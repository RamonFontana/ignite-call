import React from "react";

declare module "react" {
  interface HTMLAttributes {
    placeholder?: string;
    crossOrigin?: CrossOrigin;
    onPointerEnterCapture?: React.PointerEventHandler;
    onPointerLeaveCapture?: React.PointerEventHandler;
  }
}
