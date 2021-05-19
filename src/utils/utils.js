export function get(key) {
  return (obj) => obj[key];
}

export function getCurrnetDate() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return {
    month,
    year,
  };
}
