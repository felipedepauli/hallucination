import React, { useState } from "react";
import { Drawer, List, ListItemButton, ListItemText, Collapse, Typography } from "@mui/material";
import { ExpandLess, ExpandMore, Book, Subject, MenuBook, Article } from "@mui/icons-material";
import { Link } from "react-router-dom";
import bookData from "../data/bookData";

const Sidebar = () => {
  const [openParts, setOpenParts] = useState({});
  const [openChapters, setOpenChapters] = useState({});

  const handleTogglePart = (index) => {
    setOpenParts((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleToggleChapter = (index) => {
    setOpenChapters((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 280,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: 280, boxSizing: "border-box", bgcolor: "#f5f5f5" },
      }}
    >
      <List>
        {bookData.map((subject, subjectIndex) => (
          <div key={subjectIndex}>
            {/* Subject - Fundo escuro */}
            <Typography
              variant="h6"
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "#333",
                color: "white",
              }}
            >
              <Book /> {subject.subject}
            </Typography>

            {subject.parts.map((part, partIndex) => (
              <div key={`${subjectIndex}-${partIndex}`}>
                {/* Part - Cinza claro */}
                <ListItemButton onClick={() => handleTogglePart(`${subjectIndex}-${partIndex}`)} sx={{ bgcolor: "#f0f0f0" }}>
                  <MenuBook sx={{ color: "#555" }} />
                  <ListItemText primary={part.name} sx={{ pl: 2 }} />
                  {openParts[`${subjectIndex}-${partIndex}`] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openParts[`${subjectIndex}-${partIndex}`]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {part.chapters.map((chapter, chapterIndex) => (
                      <div key={`${subjectIndex}-${partIndex}-${chapterIndex}`}>
                        {/* Chapter - Cinza médio */}
                        <ListItemButton
                          sx={{ pl: 4, bgcolor: "#ddd" }}
                          onClick={() => handleToggleChapter(`${subjectIndex}-${partIndex}-${chapterIndex}`)}
                        >
                          <Subject sx={{ color: "#777" }} />
                          <ListItemText primary={chapter.name} sx={{ pl: 2 }} />
                          {openChapters[`${subjectIndex}-${partIndex}-${chapterIndex}`] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse in={openChapters[`${subjectIndex}-${partIndex}-${chapterIndex}`]} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            {chapter.articles.map((article, articleIndex) => (
                              <ListItemButton key={articleIndex} sx={{ pl: 6 }} component={Link} to={`/article/${article.id}`}>
                                <Article sx={{ color: "#999" }} />
                                <ListItemText primary={article.title} sx={{ pl: 2 }} />
                              </ListItemButton>
                            ))}
                          </List>
                        </Collapse>
                      </div>
                    ))}
                  </List>
                </Collapse>
              </div>
            ))}
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
