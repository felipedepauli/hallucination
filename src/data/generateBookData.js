import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, "content");
const OUTPUT_FILE = path.join(__dirname, "bookData.js");

// Função recursiva para parsing de listas aninhadas
function parseList(lines, startIndex = 0) {
  const items = [];
  let i = startIndex;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line.startsWith("::end")) {
      return { items, nextIndex: i + 1 };
    }

    if (line.startsWith("::list:item")) {
      const { items: subItems, nextIndex } = parseList(lines, i + 1);
      items.push(subItems);
      i = nextIndex;
      continue;
    }

    if (line.startsWith("-")) {
      items.push(line.slice(1).trim());
    }

    i++;
  }

  return { items, nextIndex: i };
}

function parseArticle(filePath) {
  const content = fs.readFileSync(filePath, "utf-8").split("\n");

  let parsedContent = [];
  let currentType = null;
  let currentData = [];
  let currentLevel = null;
  let noteType = null;
  let subtitle = null;

  let i = 0;
  while (i < content.length) {
    const line = content[i].trim();

    if (line.startsWith("::list")) {
      const { items, nextIndex } = parseList(content, i + 1);
      parsedContent.push({ type: "NestedList", items });
      i = nextIndex;
      continue;
    }

    if (line.startsWith("::")) {
      if (currentType) {
        if (currentType === "math") {
          const formulaLines = currentData.filter(line => !line.startsWith("sub:"));
          const formula = formulaLines.join(" ").trim();
          if (formula) parsedContent.push({ type: "Formulas", formula, subtitle });
        } else if (currentType === "note") {
          parsedContent.push({ type: "Notes", text: currentData.join("\n"), noteType });
        } else if (currentType === "title") {
          parsedContent.push({ type: "Title", level: currentLevel, text: currentData.join("\n") });
        } else if (currentType === "figure") {
          const [title, caption] = currentData.join("\n").split("\n");
          parsedContent.push({
            type: "Figure",
            src: "https://via.placeholder.com/400",
            alt: title.split(": ")[1],
            caption: caption.split(": ")[1]
          });
        } else {
          parsedContent.push({
            type: currentType.charAt(0).toUpperCase() + currentType.slice(1),
            text: currentData.join("\n")
          });
        }
      }

      const match = line.match(/^::(\w+)(?::([\w:]+))?/);
      if (match) {
        currentType = match[1];
        noteType = match[2] || null;
        currentLevel = match[2] || null;
        subtitle = null;
        currentData = [];
      }
    } else if (currentType === "math" && line.startsWith("sub:")) {
      subtitle = line.split("sub:")[1].trim();
    } else {
      currentData.push(line);
    }

    i++;
  }

  return parsedContent;
}

function loadBookData(contentDir) {
  const subjects = fs.readdirSync(contentDir).filter((subject) =>
    fs.statSync(path.join(contentDir, subject)).isDirectory()
  );

  return subjects.map((subject) => {
    const partsPath = path.join(contentDir, subject);
    const parts = fs.readdirSync(partsPath).filter((part) =>
      fs.statSync(path.join(partsPath, part)).isDirectory()
    );

    return {
      subject: subject.replace(/_/g, " "),
      parts: parts.map((part) => {
        const chaptersPath = path.join(partsPath, part);
        const chapters = fs.readdirSync(chaptersPath).filter((chapter) =>
          fs.statSync(path.join(chaptersPath, chapter)).isDirectory()
        );

        return {
          name: part.replace(/_/g, " "),
          chapters: chapters.map((chapter) => {
            const articlesPath = path.join(chaptersPath, chapter);
            const articles = fs.readdirSync(articlesPath).filter((file) => file.endsWith(".txt"));

            return {
              name: chapter.replace(/_/g, " "),
              articles: articles.map((article) => ({
                id: path.basename(article, ".txt").replace(/_/g, "-").toLowerCase(),
                title: path.basename(article, ".txt").replace(/_/g, " "),
                content: parseArticle(path.join(articlesPath, article)),
              })),
            };
          }),
        };
      }),
    };
  });
}

const bookData = loadBookData(CONTENT_DIR);
const bookDataJsContent = `const bookData = ${JSON.stringify(bookData, null, 2)};\n\nexport default bookData;`;

fs.writeFileSync(OUTPUT_FILE, bookDataJsContent, "utf-8");
console.log("📚 bookData.js atualizado com sucesso!");
