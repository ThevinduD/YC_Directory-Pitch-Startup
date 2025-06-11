"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

export default function TestEditor() {
  const [value, setValue] = useState("");
  return (
    <div>
      <MDEditor
        height={300}
        value={value}
        onChange={(value) => setValue(value as string)}
      />
    </div>
  );
}
