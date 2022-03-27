export const textContainer={
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition:{
      staggerChildren: 0.5,
      delayChildren: 0.5,
      duration: 2
    }
  },
  
}
export const textItem={
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
export const items = {
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
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
export const opacity = {
  hidden:{
      opacity: 0,
  },
  visible:{
      opacity: 1,
  }  
}
export const movieHero= {
  hidden:{
    opacity: 0,
    x: -100,
  },
  visible:{
    opacity: 1,
    x: 0,
    transition:{
      delay: 0.5,
      duration: .45,
    }
  },
}