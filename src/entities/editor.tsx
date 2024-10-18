"use client";

import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Button } from "@/shared/components";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface EditorProps {}

export const Editor: React.FC<EditorProps> = () => {
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
