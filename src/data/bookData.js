const bookData = {
  subject: "Artificial Intelligence",
  parts: [
    {
      name: "Computer Vision",
      chapters: [
        {
          name: "Linear Equations",
          articles: [
            {
              id: "article-1",
              title: "Solving Equations",
              content: [
                { type: "Title", level: 1, text: "Solving Equations" },
                { type: "Text", text: "Linear equations are fundamental in mathematics and computer science." },
                { type: "Figure", src: "https://via.placeholder.com/400", alt: "Equation Graph", caption: "Example of a linear equation graph" },
                { type: "Notes", text: "Always check your equation solutions to avoid mistakes.", noteType: "tip" },
                { type: "Notes", text: "Be careful when dividing by zero!", noteType: "warning" },
                { type: "Notes", text: "This method is crucial for advanced AI techniques.", noteType: "important" },
                { type: "Formulas", formula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default bookData;
