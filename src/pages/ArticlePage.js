import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import bookData from "../data/bookData";
import RenderContent from "../components/RenderContent";

const ArticlePage = () => {
  const { articleId } = useParams();

  let selectedArticle = null;

  for (const subject of bookData) { // ✅ Agora iteramos corretamente sobre todos os subjects
    for (const part of subject.parts) {
      for (const chapter of part.chapters) {
        selectedArticle = chapter.articles.find((article) => article.id === articleId) || selectedArticle;
      }
    }
  }

  if (!selectedArticle) {
    return <Typography variant="h6" sx={{ p: 4, color: "red" }}>⚠️ Article not found.</Typography>;
  }

  return (
    <Container maxWidth="false" sx={{ 
      width: "80ch",
      mt: 4,
      ml: 4,
      mr: 12 }}>
      <RenderContent content={selectedArticle.content} />
    </Container>
  );
};

export default ArticlePage;
