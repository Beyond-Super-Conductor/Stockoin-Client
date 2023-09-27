export const objectFalsyCheck = (obj:object) => {
  for(const key in obj) {
    if(!obj[key as keyof object]) {
      return false;
    }
  }
  return true;
}