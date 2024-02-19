import React, {useEffect} from 'react'
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

import img from '../../Assets/img(1).webp'
import img2 from '../../Assets/img(2).webp'
import img3 from '../../Assets/img(3).webp'
import img4 from '../../Assets/img(4).webp'
import img5 from '../../Assets/img(5).webp'
import img6 from '../../Assets/img(6).webp'
import img7 from '../../Assets/img(7).webp'
import img8 from '../../Assets/img(8).webp'
import img9 from '../../Assets/img(9).webp'
import img10 from '../../Assets/img(10).webp'
import img11 from '../../Assets/img(11).webp'
import img12 from '../../Assets/img(12).webp'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgsrc: img,
    destTitle: 'Kauai',
    location: 'Hawaii',
    grade: 'CULTURAL RELAX',
    fees: '₹ 7000',
    description: 'There are many relaxing places in Hawaii, but Kauai is particularly special. Known as the Garden Island, here you can find empty beaches like Lumahai Beach, as well as breathtaking landscapes like the vast Waimea Canyon State Park.'
  },
  {
    id: 2,
    imgsrc: img2,
    destTitle: 'Cape Elizabeth ',
    location: 'Maine',
    grade: 'Maines best luxury hotels',
    fees: '₹ 9000',
    description: 'What could be more idyllic than strolling the cape and exploring lighthouses? This town is the home of the Cape Elizabeth Light (or Two Lights Lighthouse) which has been active since 1874. In addition to the interesting history and classic New England architecture, Cape Elizabeth is one of the best places to get juicy lobster.'
  },
  {
    id: 3,
    imgsrc: img3,
    destTitle: 'Banff National Park',
    location: 'canada',
    grade: 'Banff National Park ',
    fees: '₹ 6000',
    description: 'Banff National Park is chock-full of amazing scenery and crystalline lakes, but Lake Louise might be the best (and most relaxing) of them all. Campers and hikers alike can settle by its perfectly blue waters and gaze at mountain views that seem almost too pristine to be real — luckily, it is.'
  },
  {
    id: 4,
    imgsrc: img4,
    destTitle: 'Tenorio Volcano National Park',
    location: 'Costa Rica',
    grade: 'Rio Celeste Hideaway Hotel.',
    fees: '₹ 10000',
    description: 'Located in northern Costa Rica, Tenorio Volcano National Park is one of the countrys most incredible natural wonderlands, without the crowds that tend to go to parks closer to the coast. Here, Rio Celeste is known for its vivid blue color, almost unlike any other waterfall in the world. '
  },
  {
    id: 5,
    imgsrc: img5,
    destTitle: 'East Sussex',
    location: 'England',
    grade: ' East Sussex National Resort',
    fees: '₹ 12000',
    description: 'Lovers of pastoral landscapes and dramatic coastlines will find their paradise in the southern reaches of England. Rolling green hills and proximity to the English Channel make Seven Sisters the quintessential countryside you read about in Victorian novels.'
  },
  {
    id: 6,
    imgsrc: img6,
    destTitle: 'Nordfjord',
    location: 'Norway',
    grade: 'northern lights',
    fees: '₹ 8000',
    description: 'Nordfjord is one of the top destinations in Norway thanks to its breathtaking views. Visitors can take a long, slow pleasure cruise along the fjord and see a wide array of sights including glaciers, mountains, and the open sea — all in just a two-hour trip. If you visit during the winter, you may be able to see the northern lights'
  },
  {
    id: 7,
    imgsrc: img7,
    destTitle: 'Blue Lagoon',
    location: 'Ice land',
    grade: ' world-renowned resort,',
    fees: '₹ 9000',
    description: 'The Blue Lagoon is by far the most popular tourist destination that Iceland has to offer. This geothermal spa is located in a lava field and attached to a world-renowned resort, where you can soak in the warm waters even when the temperatures are freezing outside.'
  },
  {
    id: 8,
    imgsrc: img8,
    destTitle: 'The Ionian Islands',
    location: 'The Ionian Islands',
    grade: 'Paxos',
    fees: '₹ 9000',
    description: 'Home to the Instagram-famous Navagio Beach, the Ionian Islands are some of the most popular for travelers in Greece. You will find the most peace and quiet on the under-the-radar island of Paxos where there are few resorts but many lovely vacation homes. On the island of Zakynthos, there are many other towns and beaches gorgeous enough to make anyone scrolling through your Instagram swoon with envy, including Navagio and the remains of the cargo ship MV Panagiotis that got stuck there in 1980 during a storm'
  }, 
  {
    id: 9,
    imgsrc: img9,
    destTitle: 'Provence',
    location: 'France',
    grade: ' Coquillade Provence Resort & Spa',
    fees: '₹ 10,000',
    description: 'Lose yourself in the gorgeous vineyards and captivating views of the Alps while youre in this famous French region — but know its not all wine here. Provence is celebrated for its biodiversity and famous for olive groves, pine forests, and lavender fields, as well as grapes.'
  },
 
  {
    id: 10,
    imgsrc: img10,
    destTitle: 'Whitsunday Islands National Park',
    location: 'Australia',
    grade: 'worlds most beautiful beaches',
    fees: '₹ 11,000',
    description: 'Australia is a massive country with lots of wide-open spaces to plan a relaxing vacation, but if you go offshore to the Whitsunday Islands, located off the coast of Queensland near the Great Barrier Reef, you can visit one of the worlds most beautiful beaches. On Whitehaven Beach, the pure white silica sand and emerald waters create a gorgeous palette of colors that is a feast for the senses. '
  },
  {
    id: 11,
    imgsrc: img11,
    destTitle: 'Maasai Mara National Reserve',
    location: 'Kenya',
    grade: ' Saruni Samburu Safari Camp,',
    fees: '₹ 6000',
    description: 'In Kenya, many travelers visit the Maasai Mara in hopes of seeing wild animals and to experience a stay in a luxury safari camp. Wild animals may not be everyones idea of relaxation, but adventurers in need of some repose can journey to the Saruni Samburu Safari Camp, which offers a Wellbeing Space with a pool, spa, and dining areas. '
  },
  {
    id: 12,
    imgsrc: img12,
    destTitle: 'Bali',
    location: 'Indonesia',
    grade: 'luxury resorts',
    fees: '₹ 16,000',
    description: 'n Indonesia, the island of Bali has become synonymous these days with yoga retreats in the jungles of Ubud and the beaches of Canggu. Youll find plenty of luxury resorts and hotels on the island, as well as beaches and historic temples. Beyond enjoying the relaxed, coastal living that travelers have come to expect from a trip to Bali, '
  }

]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
   },[])
   
  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3  data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div  data-aos="fade-up" className="secContent grid">
        {
          Data.map(({ id, imgsrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id}  data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgsrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">
                    {destTitle}
                  </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>

                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS<LuClipboardCheck className="ICON" />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Main