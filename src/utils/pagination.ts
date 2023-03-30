export default ({
  totalPages,
  currentPage,
  totalButtonsLeft,
  totalButtonsRight
}) => {
  const pages = [];
  const totalButtons = totalButtonsLeft + totalButtonsRight;

  const start =
    totalButtons >= totalPages || currentPage - totalButtonsLeft <= 1
      ? 1
      : currentPage + totalButtonsRight > totalPages
      ? totalPages - totalButtons
      : currentPage - totalButtonsLeft;
  const end =
    start + totalButtons >= totalPages ? totalPages : start + totalButtons;

  for (let i = start; i <= end; i++) pages.push(i);

  return pages;
};
