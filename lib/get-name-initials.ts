export const getInitials = (name: string) => {
  return name
    .toUpperCase()
    .split(' ')
    .map((word) => word.charAt(0))
    .slice(0, 2)
}
