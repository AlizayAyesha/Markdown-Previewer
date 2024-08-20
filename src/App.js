import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css'; // Custom CSS for styling

function App() {
  // Initial markdown text
  const initialMarkdown = `
# Heading 1
## Heading 2

[Link to FreeCodeCamp](https://www.freecodecamp.org)

Inline \`code\`

\`\`\`
Code block
\`\`\`

- List item 1
- List item 2

> Blockquote

**Bold text**
`;

  // State to hold the markdown input
  const [markdown, setMarkdown] = useState(initialMarkdown);

  // Handle text area changes
  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="container">
      <div className="editor-container">
        <h2>Editor</h2>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
          rows="10"
          cols="50"
        />
      </div>
      <div className="preview-container">
        <h2>Preview</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}

export default App;
