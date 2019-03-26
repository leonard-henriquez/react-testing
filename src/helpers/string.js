export function capitalize(value) {
  if (!value) {
    return value;
  }

  return `${value[0].toUpperCase()}${value.substr(1).toLowerCase()}`;
}
