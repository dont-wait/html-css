const bookList = [
  {
    title: "Head First HTML and CSS - 2nd Ed.",
    url: "path/to/Head_First_HTML_and_CSS.pdf",
  },
  {
    title: "Computer Architecture A Quantitative Approach (5th edition)",
    url: "path/to/Computer_Architecture.pdf",
  },
  {
    title: "A-Common-Sense-Guide-to-Data-Structures-and-Algorithms",
    url: "path/to/Data_Structures_and_Algorithms.pdf",
  },
  // Thêm thêm dữ liệu sách vào đây
];

const randomButton = document.getElementById("randomButton");
const bookDisplay = document.getElementById("bookDisplay");

randomButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * bookList.length);
  const randomBook = bookList[randomIndex];
  bookDisplay.textContent = `Sách random được là: ${randomBook}`;
  bookDisplay.innerHTML = `<a href="path/to/your/pdf/<span class="math-inline">\{randomBook\}"\></span>{randomBook}</a>`;
});
const downloadButton = document.createElement("button");
downloadButton.textContent = "Tải xuống";
downloadButton.addEventListener("click", () => {
  window.open(randomBook.url, "_blank");
});
bookDisplay.appendChild(downloadButton);
