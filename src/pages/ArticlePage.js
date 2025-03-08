import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import bookData from "../data/bookData";
import RenderContent from "../components/RenderContent";

const ArticlePage = () => {
  const { articleId } = useParams();

  // Procurando o artigo dentro do bookData
  let selectedArticle = null;
  for (const part of bookData.parts) {
    for (const chapter of part.chapters) {
      selectedArticle = chapter.articles.find((article) => article.id === articleId) || selectedArticle;
    }
  }

  if (!selectedArticle) {
    return <Typography variant="h6" sx={{ p: 4 }}>Article not found.</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <RenderContent content={selectedArticle.content} />
    </Container>
  );
};

export default ArticlePage;
