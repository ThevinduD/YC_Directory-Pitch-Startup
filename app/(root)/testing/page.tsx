"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

export default function TestEditor() {
  const [value, setValue] = useState("");
  return (
    <div>
      <MDEditor value={value} onChange={(value) => setValue(value as string)} />
    </div>
  );
}
