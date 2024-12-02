import { animate , stagger,inView
} from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

inView(".animation", (info) => {
    animate(info.target ,{opacity:[0,1],y:[-5000,0]},{delay:stagger(0.5),duration:2} )
    return (leaveInfo) => animation.stop()

  })