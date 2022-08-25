const timeDate = () => {
  const current = new Intl.DateTimeFormat(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date());

  return current;
};

export default timeDate;
