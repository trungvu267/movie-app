export const list={
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition:{
      staggerChildren: 0.5,
    }
  },
  
}
export const item={
  hidden:{
    opacity: 0,
    y: -100,
  },
  visible:{
    opacity: 1,
    y: 0,
    transition:{
      duration: .45,
    }
  },
}
export const variants = {
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.045,
    },
  }),
  hidden: { 
    opacity: 0,
    x: -100
   },
}
export const nav =  {
  visible: {
    animate:{ y: 0 },
    transition:{ duration: 0.4 }
  },
  hidden: {
    animate:{ y: -100 },
    transition:{ duration: 0.4 }
  } 
}
export const videoEffect = {
  hidden:{
      opacity: 0,
      y: -100
  },
  visible:{
      opacity: 1,
      y: 0
  }
  
}