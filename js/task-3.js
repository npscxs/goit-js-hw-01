function getElementWidth(content, padding, border) {
  const contentNumer = Number.parseFloat(content);
  const paddingNumer = Number.parseFloat(padding);
  const borderNumer = Number.parseFloat(border);
  const width = contentNumer + paddingNumer * 2 + borderNumer * 2;
  return width;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
