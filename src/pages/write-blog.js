import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import Layout from "@theme/Layout";

export default function WriteBlog() {
  const [content, setContent] = useState("# Tiêu đề bài viết\n\nViết nội dung tại đây...");

  const handleSave = async () => {
    const title = prompt("Nhập tiêu đề bài viết:");
    if (!title) return;

    try {
      const response = await fetch("http://localhost:3001/save-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        alert("Lưu bài viết thành công!");
        window.location.href = "/blog"; //navigate
      } else {
        alert("Lỗi khi lưu bài viết!");
      }
    } catch (error) {
      alert("Không thể kết nối đến máy chủ!");
    }
  };

  return (
    <Layout title="Viết Blog">
      <div style={{ display: "flex", flexDirection: "column", height: "80vh" }}>
        <h1 style={{ textAlign: "center" }}>Viết bài blog</h1>
        <div style={{ flex: 1 }}>
          <Editor
            height="100%"
            width="100%"
            defaultLanguage="markdown"
            value={content}
            onChange={(value) => setContent(value || "")}
            theme="vs-dark"
            options={{
              minimap: { enabled: false }, 
            }}
          />
        </div>
        <button
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#0078D4",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            alignSelf: "center",
          }}
          onClick={handleSave}
        >
          Lưu bài viết
        </button>
      </div>
    </Layout>
  );
}
