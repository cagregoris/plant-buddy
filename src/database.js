import db from './firebase';
import { doc, setDoc } from "firebase/firestore";

//IMAGES
import snake from './images/snake.jpg';
import fiddle from "./images/fiddle.jpg"
import dragon from "./images/dragon.jpg"
import pothos from "./images/pothos.jpg"
import spider from "./images/spider.jpg"
import peace from "./images/peace.jpg"
import aloe from "./images/aloe.jpg"
import rubber from "./images/rubber.jpg"
import jade from "./images/jade.jpg"
import donkey from "./images/donkey.jpg"
import cheese from "./images/cheese.jpg"
import dollar from "./images/dollar.jpg"

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
  common: "Golden Pothos (Devil's Ivy)",
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
  common: "Peace Lily",
  scientific: "Spathiphyllum Wallisii",
  growth: "Height 45-60 cm.",
  light: ["Medium Light"],
  water: "Water once a week",
  repotting: "Every spring",
  fertilizer: "Every 2 weeks from spring until fall",
  propagation: ["Divide Main Plant"],
  toxicity: "Toxic to pets",
  image: peace
})
}

const addAloeImg = async() => { setDoc(doc(db, 'plants', 'D16J6pQN4e7ulCsIULCs'), {
  common: "Aloe Vera (Medicine Plant)",
  scientific: "Aloe Barbadensis",
  growth: "Height 1-2 ft.",
  light: ["High Light"],
  water: "Water every 3 weeks",
  repotting: "When it has grown out of its current pot",
  fertilizer: "Not necessary",
  propagation: ["Divide Main Plant", "Leaf-cutting"],
  toxicity: "Toxic to pets",
  image: aloe
})
}

const addRubberImg = async() => { setDoc(doc(db, 'plants', 'atYkoo1bwLqmQlYujCUC'), {
  common: "Rubber Plant",
  scientific: "Ficus elastica",
  growth: "Height 10ft.",
  light: ["Medium Light"],
  water: "Water every 1-2 weeks",
  repotting: "Every year while they are young, then every 3 years",
  fertilizer: "Every two weeks in the spring and summer",
  propagation: ["Stem-cutting"],
  toxicity: "Toxic to pets",
  image: rubber
})
}

const addJadeImg = async() => { setDoc(doc(db, 'plants', 'Ns8HSRDHlX4It1TpkGvh'), {
  common: "Jade Plant",
  scientific: "Crassula Ovata",
  growth: "Height 3ft.",
  light: ["High Light"],
  water: "Water every 2-3 weeks",
  repotting: "Repot when the plant becomes root-bound",
  fertilizer: "Every two weeks",
  propagation: ["Stem-cutting", "Leaf-cutting"],
  toxicity: "Toxic to pets",
  image: jade
})
}

const addDonkeyImg = async() => { setDoc(doc(db, 'plants', 'gpX13NElmV8uRFUg5g46'), {
  common: "Donkey's Tail (Burros Tail)",
  scientific: "Sedum Morganianum",
  growth: "Stem-length 1-3ft.",
  light: ["High Light"],
  water: "Water once a month",
  repotting: "Repot only when the outgrows its pot",
  fertilizer: "Not necessary",
  propagation: ["Stem-cutting", "Leaf-cutting"],
  toxicity: "Non-toxic to pets",
  image: donkey
})
}

const addCheeseImg = async() => { setDoc(doc(db, 'plants', 'URvOiVx9MS6Y7N87DBL7'), {
  common: "Swiss Cheese Plant",
  scientific: "Monstera Deliciosa",
  growth: "Height over 10ft.",
  light: ["Medium Light"],
  water: "Water every 1-2 weeks",
  repotting: "Repot once every 2 years",
  fertilizer: "Once a month",
  propagation: ["Stem-cutting"],
  toxicity: "Non-toxic to pets",
  image: cheese
})
}

const addPileaImg = async() => { setDoc(doc(db, 'plants', 'wcJPcrJGmnlAWPMsfsto'), {
  common: "Chinese Money Plant",
  scientific: "Pilea Peperomioides",
  growth: "Height 1ft.",
  light: ["High Light"],
  water: "Water every week",
  repotting: "Repot once a year",
  fertilizer: "Once a month",
  propagation: ["Stem-cutting"],
  toxicity: "Non-toxic to pets",
  image: dollar
})
}

export {addFiddleImg, addSnakeImg, addDragonImg, addPothosImg, addSpiderImg, addPeaceImg, addAloeImg, addRubberImg, addJadeImg, addDonkeyImg, addCheeseImg, addPileaImg}

