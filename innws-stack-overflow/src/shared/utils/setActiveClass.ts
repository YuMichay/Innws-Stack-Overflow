export const setActiveClass = (path: string, currentPath: string) => {
  if (path === currentPath || currentPath.split('/').includes(path)) {
    return "active";
  } else {
    return "";
  }
}