export default function useThrottle() {
  const throttleScroll = (func:Function , delay:number) => {
    
      let flag = true;
      if(!flag) return;
      flag = false;
      setTimeout(() => {
        func();
        flag = true;
      }
      , delay)
    
    
  };
  return {throttleScroll};
}
