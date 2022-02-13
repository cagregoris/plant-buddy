import db from './firebase';
import { doc, setDoc } from "firebase/firestore";

//IMAGES
import snake from './images/snake.jpg';
import fiddle from "./images/fiddle.jpg"
import dragon from "./images/dragon.jpg"
import pothos from "./images/pothos.jpg"
import spider from "./images/spider.jpg"

const addSnakeImg = async() => { setDoc(doc(db, 'plants', 'jUsTUaqPckDBcg68GEvX'), {
  common: "Snake Plant (Mother-in-Law's Tongue)",
  scientific: "Sansevieria Trifasciata",
  growth: "Height 3ft.",
  light: ["Low Light", "Medium Light", "High Light"],
  water: "Water every 10-15 days",
  repotting: "Only repot if it's current pot cracks from growth",
  fertilizer: "Once per month during the main growing season (spring - fall)",
  propagation: ["Division", "Leaf-cutting"],
  toxicity: "Toxic to pets",
  image: snake
})
}

const addFiddleImg = async() => { setDoc(doc(db, 'plants', 'tp1o1vy6vURhIbLcwEMz'), {
  common: "Fiddle Leaf Fig",
  scientific: "Ficus Lyrata",
  growth: "Height 10ft.",
  light: ["Medium Light"],
  water: "Water every 7-10 days and decrease watering in the winter",
  repotting: "Once per year until it matures",
  fertilizer: "Once per month during the spring and summer",
  propagation: ["Leaf-cutting"],
  toxicity: "Toxic to pets",
  image: fiddle
})
}

const addDragonImg = async() => { setDoc(doc(db, 'plants', 'qVRha7gom9KkhTqbS9I8'), {
  common: "Dragon Tree",
  scientific: "Dracaena Marginata",
  growth: "Height 8ft.",
  light: ["Medium Light"],
  water: "Water once a week",
  repotting: "Every two years",
  fertilizer: "Not necessary",
  propagation: ["Stem-cutting"],
  toxicity: "Toxic to pets",
  image: dragon
})
}

const addPothosImg = async() => { setDoc(doc(db, 'plants', 'LLAwTW9rmr7l3lpByt0j'), {
  common: "Golden Pothos (Devil's Ivy, Money Plant, Silver Vine)",
  scientific: "Epipremnum Aureum",
  growth: "Height 6ft.",
  light: ["Low Light", "Medium Light"],
  water: "Water once every 2 weeks",
  repotting: "Only repot if it's current pot cracks from growth",
  fertilizer: "Every 2 weeks",
  propagation: ["Stem-cutting"],
  toxicity: "Toxic to pets",
  image: pothos
})
}

const addSpiderImg = async() => { setDoc(doc(db, 'plants', 'LylKVNg2qcNgscNtgBXo'), {
  common: "Spider Plant (Airplane Plant)",
  scientific: "Chlorophytum Comosum Vittatum and Variegatum",
  growth: "Height 60 cm - leaves 45 cm.",
  light: ["Medium Light"],
  water: "Water once a week",
  repotting: "Only repot roots are growing out of current pot's drainage holes.",
  fertilizer: "Every 2 weeks in spring and summer",
  propagation: ["Divide Main Plant"],
  toxicity: "Non-toxic to pets",
  image: spider
})
}

const addPeaceImg = async() => { setDoc(doc(db, 'plants', 'RDcPmkmHK5pd2RYIWIXc'), {
  common: "Spider Plant (Airplane Plant)",
  scientific: "Chlorophytum Comosum Vittatum and Variegatum",
  growth: "Height 60 cm - leaves 45 cm.",
  light: ["Medium Light"],
  water: "Water once a week",
  repotting: "Only repot roots are growing out of current pot's drainage holes.",
  fertilizer: "Every 2 weeks in spring and summer",
  propagation: ["Divide Main Plant"],
  toxicity: "Non-toxic to pets",
  image: spider
})
}

export {addFiddleImg, addSnakeImg, addDragonImg, addPothosImg, addSpiderImg, addPeaceImg}

