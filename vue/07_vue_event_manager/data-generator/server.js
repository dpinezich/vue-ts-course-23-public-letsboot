const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('hi')
})

app.get('/cantons', (req, res) => {
  res.json(cantonList)
})

app.get('/adventures', (req, res) => {
  res.json(AdventureList)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const AdventureList = [
  {
    id: 1,
    adventure: 'Sightseeing',
    options: [
    ]
  },
  {
    id: 2,
    adventure: 'Shopping',
    options: [
    ]
  },
  {
    id: 3,
    adventure: 'Zoo visits',
    options: [
    ]
  },
  {
    id: 4,
    adventure: 'Fine dining',
    options: [
    ]
  },
  {
    id: 5,
    adventure: 'Jewelery & Watches Museum',
    options: [
    ]
  },
]

const cantonList = [
  {
    id: 1,
    canton: 'Zurich',
    image: 'https://www.zuerich.com/sites/default/files/styles/1408_792_focal_scale_crop/public/image/2020/web_zuerich_view_over_old_town_1920x1080_ZT_7967.jpg?h=d1cb525d&itok=1_iSTJrN',
    description: 'Zürich is the largest city in Switzerland and the capital of the canton of Zürich. It is located in north-central Switzerland, at the northwestern tip of Lake Zürich. As of January 2020, the municipality has 434,335 inhabitants, the urban area (agglomeration) 1.315 million (2009), and the Zürich metropolitan area 1.83 million (2011). Zürich is a hub for railways, roads, and air traffic. Both Zurich Airport and Zürich\'s main railway station are the largest and busiest in the country.',
    adventures: [1, 2, 3, 4]
  },
  {
    id: 2,
    canton: 'Geneva',
    image: 'https://c.nau.ch/i/MqG01/680/genf.jpg',
    description: 'Geneva is the second-most populous city in Switzerland (after Zürich) and the most populous city of Romandy, the French-speaking part of Switzerland. Situated where the Rhône exits Lake Geneva, it is the capital of the Republic and Canton of Geneva.',
    adventures: [1, 2, 4, 5]
  },
  {
    id: 3,
    canton: 'Basel',
    image: 'https://dorint.com/fileadmin/_processed_/5/0/csm_Basel_Opener_7035b29cdb.jpg',
    description: 'Basel is a city in northwestern Switzerland on the river Rhine. Basel is Switzerland\'s third-most-populous city (after Zürich and Geneva) with about 175,000 inhabitants. The official language of Basel is (the Swiss variety of Standard) German, but the main spoken language is the local Basel German dialect.',
    adventures: [1, 3]
  },
  {
    id: 4,
    canton: 'Aarau',
    image: 'https://www.swisslife.ch/content/internet/ch/de/ueber-uns/kontakt/generalagenturen/_jcr_content/parsys/gridctrl_copy/parsys_grid_ctrl/textimage_copy_1545855287/image.1564060072572.transform/16_9_3840w/ga_header_aarau.jpg',
    description: 'Aarau is a town, a municipality, and the capital of the northern Swiss canton of Aargau. The town is also the capital of the district of Aarau. It is German-speaking and predominantly Protestant. Aarau is situated on the Swiss plateau, in the valley of the Aare, on the river\'s right bank, and at the southern foot of the Jura Mountains, and is west of Zürich, 58 kilometres (36 mi) south of Basel and 65 kilometres (40 mi) northeast of Bern. The municipality borders directly on the canton of Solothurn to the west. It is the largest town in Aargau. At the beginning of 2010 Rohr became a district of Aarau.',
    adventures: [1, 4]
  },
  {
    id: 5,
    canton: 'Bern',
    image: 'https://youimg1.tripcdn.com/target/fd/tg/g4/M04/84/D9/CggYHlXNuAeAJUJ7AAic4zyBL0Y194_C_640_320_Q70.jpg_.webp?proc=source%2Ftrip',
    description: 'Bern is the de facto capital of Switzerland, referred to by the Swiss as their "federal city" (in German: Bundesstadt, French: ville fédérale, and Italian: città federale). With a population of about 144,000 (as of 2020), Bern is the fifth-most populous city in Switzerland. The Bern agglomeration, which includes 36 municipalities, had a population of 406,900 in 2014. The metropolitan area had a population of 660,000 in 2000.',
    adventures: [1, 2, 4]
  },
];


