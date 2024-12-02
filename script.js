import { animate , stagger,
} from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

animate(".animation", { opacity: 1, y:[-5000 , 0] }, { delay:stagger(0.5), duration: 1 });


