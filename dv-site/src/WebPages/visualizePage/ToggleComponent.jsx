import { react, forwardRef } from "react";
import "./Togglecomponent.css";

export default function Toggle((props, forwardRef)) {
  return (
    <label className="cursor-pointer">
        <input type="checkbox" className="hidden" ref={forwardRef} {...props}></input>
        <div className=""></div>
    </label>
  );
}
