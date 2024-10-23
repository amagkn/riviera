"use client";

import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Button } from "@nextui-org/react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface NoteEditorProps {}

export const NoteEditor: React.FC<NoteEditorProps> = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />

      <Button onClick={() => console.log(value)} className="mt-5">
        Отправить
      </Button>
    </div>
  );
};
