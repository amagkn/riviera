"use client";

import React, { useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.core.css";

interface EditorProps {}

export const Editor: React.FC<EditorProps> = () => {
  useEffect(() => {
    new Quill("#editor", {
      theme: "snow",
    });
  }, []);

  return <div id="editor"></div>;
};
