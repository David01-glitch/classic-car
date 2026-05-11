import CategoryPage from './CategoryPage';
import muscle from '../assets/images/categories/muscle-cars.jpg';
import resto from '../assets/images/categories/restoration.jpg';
import collector from '../assets/images/categories/collector.jpg';
import road from '../assets/images/categories/road-trips.jpg';
import garage from '../assets/images/categories/garage-builds.jpg';
import reviews from '../assets/images/categories/reviews.jpg';

const data = {
  muscle: {
    kicker:'Department', title:'Muscle Cars', img:muscle,
    intro:'Big-block legends, raw torque and American attitude — the cars that defined a continent.',
    sections:{
      difficulty:'Intermediate', time:'8–14 months', tools:'Engine hoist, torque wrench, body dolly, MIG welder',
      body:[
        {h:'A Decade of Excess',p:'From the 1964 Pontiac GTO to the last 1972 Hemi Cuda, the American muscle era compressed a generation of mechanical exuberance into a single decade. Big cubic-inch V8s, four-speed manuals, and steel bodies built when steel still meant something.'},
        {h:'What to Buy First',p:'Mustangs and Camaros are the gateway. Parts availability is unmatched, technical documentation is exhaustive, and you can learn every craft on a single car. Avoid project Chargers and Cudas unless you have deep pockets and a forgiving spouse.'},
        {h:'Restoration Realities',p:'Budget 1.4× your first estimate. Frame rust is the silent killer — a Mustang torque-box repair alone can run $4,500 done correctly. Always inspect the cowl, the trunk drops, and the lower quarters before any cash exchanges hands.'},
        {h:'Why It Matters',p:'These cars carry a generation’s aspirations on their hoods. Restoring one isn’t nostalgia. It’s curation.'},
      ]
    }
  },
  resto: {
    kicker:'Department', title:'Restoration Guides', img:resto,
    intro:'Step-by-step playbooks for sympathetic and frame-off restorations done the right way.',
    sections:{
      difficulty:'Beginner → Advanced', time:'6–24 months', tools:'Media blaster, paint booth, panel beating tools, spray gun',
      body:[
        {h:'Choose Your Philosophy',p:'Sympathetic restoration preserves the car’s honest age. Frame-off restoration rebuilds it to better than new. Concours restoration aims for factory-perfect. Choose deliberately — the philosophy dictates every decision downstream.'},
        {h:'Document, Document, Document',p:'Photograph everything before disassembly. Bag and label every fastener. Make a digital archive. Your future self will thank you four months in when you cannot remember which way the door check strap was clipped.'},
        {h:'The Craft of Bodywork',p:'Bodywork is the slowest part of every restoration. Get good at panel beating before you reach for filler. A skim coat is fine. A half-inch of filler is a future buyer’s nightmare.'},
        {h:'Paint Is the Hardest Trade',p:'Hire a professional unless you have a dust-free booth, a downdraft, calibrated lighting and 200+ hours of spray time. The difference between adequate and brilliant paint is measured in mortgages.'},
      ]
    }
  },
  collector: {
    kicker:'Department', title:'Collector Stories', img:collector,
    intro:'Personal essays from lifelong garage keepers — the obsession, the patience, the joy.',
    sections:{
      difficulty:'Curator', time:'A lifetime', tools:'Trickle charger, dust covers, hygrometer, archival folder',
      body:[
        {h:'Why People Collect',p:'Some collect cars to remember a father. Some collect to recreate a childhood Saturday morning. Some collect because they love mechanical purity. The motivations are individual, but the patterns are universal — discipline, patience, and an unembarrassed love of objects.'},
        {h:'The Long View',p:'The best collectors think in decades. They buy quietly, sell rarely, and document obsessively. Their garages double as private archives — climate controlled, well-lit, beautifully organized.'},
        {h:'On Provenance',p:'A documented chain of ownership can double a car’s value. We teach you how to research and preserve provenance — service records, build sheets, factory invoices and previous-owner letters.'},
      ]
    }
  },
  road: {
    kicker:'Department', title:'Retro Road Trips', img:road,
    intro:'Two-lane diaries — sunrise on Route 66, mountain passes, and roadside diners that still matter.',
    sections:{
      difficulty:'Easy', time:'Weekends', tools:'Tool roll, jack, fire extinguisher, paper atlas',
      body:[
        {h:'The Best Drives in America',p:'Route 66 from Tucumcari to Flagstaff. The Blue Ridge Parkway in October. California’s Highway 1 from Cambria to Big Sur. The Hill Country loop out of Fredericksburg, Texas.'},
        {h:'Pack the Right Tools',p:'Spare points and condenser, a quart of oil, water, a tool roll, a jack, jumper cables, a paper atlas and a small fire extinguisher. The fancy bag is optional. The contents are not.'},
        {h:'Drive It Like You Stole It',p:'A classic car that sits in a climate-controlled barn for fifty weeks a year will outlast its owner — but it will also break the moment it leaves. Drive these cars. They were built for two-lane roads and they remember.'},
      ]
    }
  },
  garage: {
    kicker:'Department', title:'Garage Workshops', img:garage,
    intro:'Workshops that double as sanctuaries — concrete, sodium lights, pegboards, and good coffee.',
    sections:{
      difficulty:'DIY Friendly', time:'2–6 weekends', tools:'Air compressor, lift, bench grinder, parts washer',
      body:[
        {h:'The Floor Matters',p:'An epoxy-coated concrete floor protects your back, your tools and your knees. It also makes the space feel finished — and a finished space gets used.'},
        {h:'Light Like a Photographer',p:'High-CRI LED panels at 6500K eliminate shadows and make paintwork honest. A dim garage is a guessing garage.'},
        {h:'Power & Ventilation',p:'Dedicated 240V circuits for welders, lifts and compressors. Cross-flow ventilation for paint and solvent fumes. Both are non-negotiable.'},
      ]
    }
  },
  reviews: {
    kicker:'Department', title:'Classic Reviews', img:reviews,
    intro:'Hands-on retrospectives — what these machines actually feel like decades after they left the line.',
    sections:{
      difficulty:'Reader-friendly', time:'15 min reads', tools:'A discerning eye',
      body:[
        {h:'Why a Modern Review of an Old Car',p:'Period reviews told you whether to buy the car new. Retrospective reviews tell you whether to live with one today — and that is a very different question.'},
        {h:'Drive Before You Buy',p:'A test drive reveals more than a hundred photos. Listen for the gearbox synchros, watch the temperature gauge climb, feel the steering load up on a corner. The car will tell you the truth.'},
        {h:'Honest Notes Only',p:'We publish what we feel, not what the seller wants us to feel. Some legends are legends. Some are merely old.'},
      ]
    }
  },
};

export const MuscleCars = () => <CategoryPage {...data.muscle}/>;
export const RestorationGuides = () => <CategoryPage {...data.resto}/>;
export const CollectorStories = () => <CategoryPage {...data.collector}/>;
export const RetroRoadTrips = () => <CategoryPage {...data.road}/>;
export const GarageWorkshops = () => <CategoryPage {...data.garage}/>;
export const ClassicReviews = () => <CategoryPage {...data.reviews}/>;
