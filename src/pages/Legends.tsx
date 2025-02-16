import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Skull } from 'lucide-react';
import StoryModal from '../components/StoryModal';

const LEGENDS = [
  {
    id: 1,
    title: "The Hook Man",
    excerpt: "This urban legend became popular in the 1950s and continues to be told around campfires to this day. It serves as a warning about the dangers of isolated places and the vulnerability of young couples.",
    content: `The popular urban legend of The Hookman tells the story of a "hook-handed lunatic" who escapes from a local institution in Pennsylvania, USA.  

The terrifying campsite story began circulating in the 1950s and has many variations, but the basic story has remained the same, give or take a few elements.  

The tale of The Hookman starts with a young couple who goes for a drive and gets to know about the escaped hooked man on radio. Later, the couple returns home only to find a hook embedded in the back of their car.  

The Business Standard Google News Keep updated, follow The Business Standard's Google news channel
It is believed that The Hookman kills innocent people, especially young couples, roaming around at night. Historians have been trying to find out the origin story of The Hookman for many years. 

The mythical story became very popular among American teenagers by 1959, and continued to expand into the 1960s.  

According to some writers and investigative journalists, the urban legend is linked to a few infamous murder cases, including the 1946 Texarkana Moonlight Murders. 

Folklorists have interpreted the long history of this legend in many ways. In 1960, the story was reprinted in the acclaimed advice column "Dear Abby" and referenced in various horror films ever since.  

This urban legend became popular in the 1950s and continues to be told around campfires to this day. It serves as a warning about the dangers of isolated places and the vulnerability of young couples.`,
    location: "United States",
    era: "1950s",
    image: "https://img.freepik.com/free-photo/spooky-male-pirate-with-long-beard-holding-mace-black-background-halloween-outfit_482257-11644.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid"
  },
  {
    id: 2,
    title: "Bloody Mary",
    excerpt: "The mirror-dwelling spirit who appears when called...",
    content: `Stand in a darkened room with a mirror. Light a candle. Say "Bloody Mary" three times while spinning around. According to legend, a ghostly woman will appear in the mirror, sometimes helpful, sometimes harmful.

The origins of Bloody Mary are often traced back to Queen Mary I of England, nicknamed "Bloody Mary" for her persecution of Protestants. However, the mirror ritual seems to have emerged in the Victorian era, when young women would perform divination rituals using mirrors to see their future husbands.

Today, the legend has evolved into a supernatural challenge that continues to terrify those brave enough to try it. Some say she appears as a beautiful young woman, others as a horrifying corpse with blood streaming from her eyes.`,
    location: "Global",
    era: "Victorian Era",
    image: "https://img.freepik.com/premium-photo/halloween-ghost-girl-makeup_44353-811.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid"
  },
  {
    id: 3,
    title: "The Vanishing Hitchhiker",
    excerpt: "A mysterious woman who disappears from moving vehicles...",
    content: `A driver picks up a young woman in white standing alone on a dark road. She gives an address but remains eerily quiet during the journey. When they arrive, she has vanished from the car without a trace.

Upon investigating, the driver learns that a young woman matching her description died in a car accident on that very road years ago. Some versions say she was heading to her wedding, others to her prom.

This legend appears in various forms across different cultures and continues to be reported as a real experience by drivers worldwide. The story often resurfaces around the anniversary of the supposed death, adding to its supernatural mystique.`,
    location: "Various",
    era: "20th Century",
    image: "https://img.freepik.com/premium-photo/arafed-man-costume-walking-down-road-with-large-head-generative-ai_958192-1522.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid"
  },
  {
    id: 4,
    title: "The Chupacabra",
    excerpt: "A creature that drinks the blood of livestock...",
    content: `The Chupacabra, a creature said to inhabit parts of the Americas, is known for attacking and drinking the blood of livestock, particularly goats. First reported in Puerto Rico in the 1990s, sightings have since spread across the continent. Descriptions vary, but it is often depicted as a reptilian creature with spikes down its back. The legend has sparked numerous investigations and remains a popular topic in cryptozoology.`,
    location: "Americas",
    era: "1990s",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKW_O8IJqOi1kmkf8BoBnWThzmtmjk7iZnPA&s"
  },
  {
    id: 5,
    title: "The Wendigo",
    excerpt: "A malevolent spirit associated with winter and famine...",
    content: `The Wendigo is a mythological creature from Algonquian folklore, often described as a spirit that possesses humans and drives them to commit acts of cannibalism. It is associated with winter and famine, symbolizing the dangers of greed and the consequences of overindulgence. The Wendigo is said to grow larger as it consumes more, representing an insatiable hunger. Many tales of the Wendigo serve as cautionary stories about the importance of community and sharing.`,
    location: "North America",
    era: "Various",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCitrUTSyia1URg1T-CGOyG298bdGUlHvpg&s"
  },
  {
    id: 6,
    title: "The Mothman",
    excerpt: "A winged creature sighted before disasters...",
    content: `The Mothman is a legendary creature reportedly seen in Point Pleasant, West Virginia, during the 1960s. Described as a large humanoid with wings and glowing red eyes, it is often associated with foretelling disasters. Sightings peaked before the collapse of the Silver Bridge in 1967, leading many to believe the creature was a harbinger of doom. The Mothman has since become a symbol of mystery and has inspired numerous books, films, and festivals.`,
    location: "West Virginia, USA",
    era: "1960s",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtqyG_af2JWdkAjFINl4mnTEWg-KnuouM9g&s"
  },
  {
    id: 7,
    title: "The Slender Man",
    excerpt: "A tall, imposing figure with a blank face...",
    content: `The Slender Man is a modern urban legend that originated on the internet. It is often depicted as a tall, imposing figure with a blank face and a suit. According to legend, the Slender Man is a supernatural entity that stalks and terrorizes people, particularly children. The legend has inspired numerous stories, videos, and games.`,
    location: "Global",
    era: "2000s",
    image: "data:image/jpeg;base64,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"
  },
  {
    id: 8,
    title: "The La Llorona",
    excerpt: "A ghostly woman who haunts rivers and lakes...",
    content: `La Llorona, also known as the Weeping Woman, is a legendary ghost from Latin American folklore. According to legend, La Llorona is the spirit of a woman who drowned her children in a river and now haunts the waterways, weeping and searching for them. The legend has been retold in various forms, including films, books, and songs.`,
    location: "Latin America",
    era: "Various",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9wjGt9JhRCf_lriHsQ6FQaN_dNPuC4YoWA&s"
  },
  {
    id: 9,
    title: "The Jersey Devil",
    excerpt: "A mythical creature said to haunt the Pine Barrens...",
    content: `The Jersey Devil is a mythical creature said to haunt the Pine Barrens of New Jersey. According to legend, the creature is the offspring of a woman who invoked the devil during childbirth. It is often depicted as a winged, horse-like creature with hooves and a goat-like head. The legend has been retold in various forms, including stories, films, and songs.`,
    location: "New Jersey, USA",
    era: "18th Century",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXGBYaGBgYFRodGhUXGBgXFxsZGhkeICggGBolHRgZITEhJSorLi4uGh8zODMsNygtMCsBCgoKDQ0NDg0NDysZFRktKysrKy03KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAABAwIDBQUHAwIEBQUAAAABAAIRITEDEkEEUWFx8AUigZGhBhMyscHR4UJS8RRiFSNyolOCktLiBxYzQ7L/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APDUIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgWEQrRpTr8JD1/CCtCIWhs+HLhIoDVMf8AEY4xysgpQiFdcKEU4/bilgU166ogowiFfa6ARCjcTNUFSEQrXNOay/p/A+qCnCIVwga8d3FIPpuQVIRCvMcK69UhNfX+KoKcJFay3QSgrQiFcZs7nfC0nreUuNsWIyS5hABvFJtdBSQpwUAoK6WFOYTj1yQVoRCtZUc/5HNBUSqxP8pwG+lkFWEQtDaWNEZTmp3uaawU9Du8UFGEi0Xinn8z6qJoCCpCRWiOtyc3igqQhWxH7h6fZCBb9aJAw09KoIropsFggk2inE/hA7GdkbkF7u56D6qNogVvFOW9I2sl1fqfqkeSb1JilLC3XBAjGTyQf4SvGmlOX8JSNCeuSCJvRTj1dIEvU/RAiUOQOuoSAIBqUN64pAkCBW3ojLX+EFAhA1pKsbNnmWCt7AmBulQkBTbLjFj2OkwHAmJBiaoHHbsTVxJm0c11e07Xmw31bAw3EtiQ+hbAPrRY3uhjYxjLWSCBAdasCzt44Lex+xSG1/S2w+ZjqqDgnBW9l7NxcQd1h5mB8/DzXU7Bsvusx92ST8PdGvM2pxWfte24rgcNg1k5ZJFN4sEGa7sTFEzkkXGcA8q8lSxcFzDD2kHcRflvVnE2HGFThO/6SfM6J+BtmUe7xWFzeMhzeIQUR8k+eurp+2bLkN8zXCWuFnD7jcoxogCNEEfS8JevX+UghAFSYdqdcYsozcHoV/BU7MPh49WQI8X1HoY6soSR11RSE0B+nyUVOfjZAdddBOiySEO4fLyQJHBCU4g3D1QgfhYRcY1vaysF4JBHwssL5q8d/wB1IBlEGgsYMmug4n6qm92Y2oLcI15oFcSTN/kAn4YFzemvy3hNkTA4BOfiTDQZA9dY+aBmIa2jwNKqMKaaiXeN99OPomYjt1BoJQNHikiEgTg0kxvQJPigD8bkruqJCgQATY6on16KUmkwkj6IF6063oPikT2sJMAHr8IG80QrI7Oxf2O8N3RS/wCHYg/Qa2ETM8kG57E7D717miM1gTYUgn524L0F7e6cMOzENAzug2K5T2X7LxcBpL2lrnTa2gggXsDbfZbO07d7sZnmtKDWtd2/corN9o8NuG0AvbIBJMxJ4AAQOHOq5LC7SwgKsLib2A+snmPqm+0HarsbEOjRoNCsrndVF7bNvDhDWBgtoSRM3AEeG9UR/KGojqiB/vCAQLajSd/PimapW70R1+UAgGqHcESgGj6KcvpbqLcrqEmqe51N0dfVA0tpbdomjmlApySE6C/ogQU9euKcEjWzTr8oa2UFjDwpEnEaOBIlCbmcKSevBCBH4uY9DxTmmARbfvPLcEoIDQbTHg3fxPBIz9zhQUA0J0G+lygbiClfiNY0A+6YxskU1jzPFK9w3yTdOwiL7rfU2pogTGZln7Xr8kx1krqps+nV0AietERw64pQgSKdc0dc0EddcvRIR1yQOafOybxS2W37Ldne+xDIJILcvMnQeSDS9lfZd2MM4YXlokyKNHEcKrqeyNg91tGGQxrq2e2WkEECWxUSU9nZHug04u0s2dpgZMT4nTaAIMm1V3OxYuHgYbcrTiuAgOcWmt6buYRXM4nsw9+O4sDWZnS4MafdlpvA0gblfHZGCzGLcPCGIWCr3PMsLrcJ1tRbbe2sV8jNhYdSKul3iKKu/YWuc5zcZhdRxBIDZIib0p8yiBuytAjuw2ADBqdGyuI9pdqZiOLQZbhupAiXEFobOv4XZ9qbRiYeG0taSRmLi0AiDPGsDWm9cA7s9xLKtGUzlMnM7UkC9PmorzfHwnMcWvEOHUyEzq/ovRPaL2dLxncBOpYIgWsVwO2bMcN5bMjQxEg9WVRB4+iCEpSlA3r+EQlI6+iOHlZAhKVx60SCv8o6v1VAEp+ia4pZ9ECF3WiAet6XwpRIgkZtBbOUxMTvI1g+Ss7Js2cZi6Ii/OB84VZ7BlaRrQ0qDu+o8dyvbIY8OO9BM7ZCLExyP2QpRxzf9X/kPkhBkOMm9JmN3hv4JjnzrS3JO4C3O6MVmWhAmlZ+lpP1QMa2U7ENaWHU+N0mGNfI/Phb5ppi1/TooElJM6FONBw/Kc/DgDiD9kDAFNs2E1wILi11MgiQ41ET+k2hMGGYJgwIJMa87BJiNqAQQaGoqOO/igbz8lNi7M5rWOMd8EgTUQS2u6qtbfs2fGxMhBaJdmNBEVd5n5Kbsh+GHZHsOLhuILu9lAygnMKgTXXggp7PskgOccjJ+LUxEhg/UfQRdXOze2f6dzjhM7pcMte9SADO+k87I7W2DEziO+IloY3usZJymlG66X1Mow+xi4ZqgCGkC+aD3i4w0CQTqLhB0nZPaxxcT+pdggvoA97y6D/aD8O+eK6rsZvv+/iEzJo1zmDUd7KRmPMrmOwdmaLOblrMOnQ1BiZ+4XRdkYzWmAQZoRuJ/hRXUbNsjBAyNjTuhS7S4aiPkoHba0mNyqvxQZJMCl7UtrxVEOJtuIzMWOLOEzPMFY+Dita8hxuSaQATfw5ClEztntvCwmkE3pHXNee9qdt4mK6WktFwaSft4IPS8XFEHiDPrbwXnPtO0SI0Ji1juotTsfaMXHwwTiAkUMis8Y5qj23sdCSZIFq0itDXh5KDnAa7j5JJHV/JKCgKoBPyQjq6Bw6+yBDxsjqqJP3TigQff6WRFLdFLHW5N64oHnhCbHklM+KMnggfgPAdWxuN44cRfwVogyGzQiQ6KO+xpEaFVJruVvs90nI4kEzlMwWu3cjbnCCaTqATrUfY/NCc0nh4mD4gGhQgzmYczAJpPIb53WT2OmnCK9dQjZpFRPKnrZOJNd9z4IG4gAArcWvWamVG1uk62m3GUsSJr40HrdS4tWigI0t506ogbs3cc1xEiTdgcCeTqOVraMAPa7FYIaKO7oY0OiYaJuBffdVmvkkZtKUsd43c1pdm7diNc1rQzEaHZsuXvHeQHCc0SBA89QrbBtjsN2R2JiYY0yE915iCWWdy4laGFO0YPu8SXYmGRld3YyVYA2YA70CDN5hW+09mOC6TiAgQWAGpxRQNkR7sgQZ+Sb2Ht+MBiHFyluQPOcAFwzCwgB1+NS20oI37K0ufhuEFgt7xrpkNbENqYgEaieUbez9ke7YWMwm+7cwDEe81JBdMNPdeLQeNEYuzh7zi4cPccNr8uXM5mfMZkmCHREAgUpCNk7rJcSGuIfiu35SCG949xgiI4lRUWzYLWMazNkc0AA5mhwBEgOpaa2vNgqmI1ocQRLAMNorMBumVppU6gnkVLibS7FgYLmF0hrBmw6wTRwEWiJvlEzVafZnY2NR2L3ZbBEAAGugpU6kD1QR7PtDGA5WQRWACKUqZueKtN2zCd3obmoXWBFqzvnSdyt4PZsnKZLd8ADiD9wtXZuyMJtQxpcJuKiec7kGC7b+9LWOIO5hl2tTup8lQ7U2zan93Dwj4/QAzK7puy2mxmm6oP3orf9K1o048+oQeH7T2NtJJc9uZwuCbHlosvFwXD4mkcwd3FfQHaPZOC9pnKTFwvHPadrW4ha01DiARJkfZVEXsztgYXNJiaxv38yr3bhJbIrXyEV65rCwWQZcKTp86czC6TAwwMMlxk8bRUz6IOOjw6rCDzVrD2UvxMrRMzT5eiTbNkcwwQepHn90Fcxy69EkoQD16ygAPDwTgOurocJ408SkAQEcOZSkd2ef008U9xP4j8QggEcZ+dEDWs8tErtAJ61UjahsC3GRcz9EMmfDXdfxQRkEiTM/TlonNbW558NfRPwACaw296CNeo+xU4bbTO6LesefBBfe5pPeaXn90gZhoSDWSInjKFYw9gDwHSDQDd8Iy61miVBi+6hwLqCdPxMBWWbI4AWIcAW3E1i5iCpsXBxBlcQYEEOLT8I1nQDUxTem4uG8NyBpjMXeNAPCAEFNjKkERe3l47ptVWME4OXK5rs1e8HDK4m0tNotQ7+aeNkMEmBFYJkzcVF0xmHPdNCba8uUoFx9iOH3ZJOoMAg6AGSDz9Fou2PDwQM+K5swSWiCQP0tJJzb5Aio5Kls2CXkMIhtKgWaBUzyn0Wlh7KMYMcQ0RSJNGgw1vhEGL1QTOZh473F0tYWjEOVozEgANeCQCS6Ypu0RsvZbsTFcPgwcsAOh5GHFA2tzS3FO2PAxPdlrXNkCIDWxGaZJsARSJA5XVjtHanYTcNuE0MxQZIP7Mrbwe8ZME0nKeBUUYvaOz4Y/yyWFvdkFzswiBBAIawyNYGmqzW9qYneGKAGtyuDRBgxQgwQbzXU33VMfAfdvf+Fju6bAT9edloYmFkAc8iGiGYcS8kBtQTHvGwQYtWNCqhuy9onCxmPxGskvl+WwBHxRvNzuny9H2PaWuaXMcC2kbo0kLyHMKEVJJuACRS96k1+qt9n7c9gdkeR3eES6A0xcGuvmg9WJEBwA4fPzSv7Uay5AiseZvpqvMP8A3BtQgudINAI4RPOVq9iYGJjuL8QS2RDiPi0LRNuJUV3eHlxYcXyYoGkjwO8+lFeO2e7aRmGWbn9NK9cFyvae2jBaA8mTZjR8UVkkeH5XHdudvY2IIoxhNm3PjThb1Qdj217W7PlyNeC4TAbrfUWHHiuHOzjEJJxmDyJpGkysnDia3vTj5KQOblo0ASKGpPCkHfdVFjb8KGEDEDoImN2hjdZaeNjD3X/KKnWg3dUWAzM5zRQAkDqLrV7fc0MDQeufWqCl2TjMY4vcaWGhgg14iyZ2r2h700EAacOp9Fn5eqp0UqJGvWl0AB/CecOgINd2v2SsYTBN/krDcKhvEjh59UQU2jmN1L0UsQOPG87rqwBebfPcR1omneafU3sgjczx4TytvQ0Aa1MAKZuGTECZtaJ5Uj8JBhkb6aFA1ggDdX66JA2bi38iqmIBJIjzobeN0FpFYoKE013dSgixBIAEzqIqLGU0YcgEVkxYwTXTxUrcQ0G7dexpx/Kk2ZxJ4V/2gmTEIIcbanMcWgNIB1r6hCm92DBIJMCSCIJiKIQdbjYwDXvy5HYRcWSRGO2Iy4jajDxCCRIjNJBAkLnsuLmDsrQKEM3ikCb/AFotHbdhdiFuIMR1R3hVoAaYO+SIIMbp3gQf0xaHuBzhnxGubDEQXRurUi0jRFROw+/mcYdq1o4zXfMWhS4rWAkiX0tAFOHGyXY8RjGloB948R3QIbaXGbwIEDeVaw8GIGXTQGJNjBuJneoKGI2ASCSXkNDdWzGaTYE0FNCtTaMb/MEMaGNEWplBMkjVxd+lPbsYa4ULi2GwCaPxSMxBoCQCa/2qTY9obhA4gwgRlfBc52WWkj4dQAJ30B1QWcDazs2AG4ILnPLC8GwbqM36TE8jay5/HcMxBf73FLpxHOJMC0TFL8t1KK9j7DnDXNe4jEd8LqCRWN8DQ8AquF2UGtkjutpFDldOUGwzC996B+BhkAhr2twxDntu/K2BMR3i6AK2I1BVHaDmOaBT4W0Ja0WANMoBvSZJK1cTZA1oa6kwXm5LiIDd8NaTTe53BVMPAk90akCBvNBOht5ncgpOYXA92HfuAva8THOvjMqTY8MhuQQSXbhuJvMEilFcOEfeZXVaARI0DZrGskeMpwwTGUBxNZ3kGAKW1lBQxz8MCgIoK1nWaEUXqPs/hYeJg4ZZRuWRzsvPDgOa3LlEQJqI4Hd9bbl2X/p1tw9ziYTjOR8g2kOBN9a8ggzfbfsp4e3FbJaO67+2dTuFPMBcztWxktk1bFt43t4herdpYjQQ0uAD+6OdwBxP0XmvbWw7RguflYH4YJgtGmgcBUEToKhUYTMDL/dcwbitCRobKtjvn0tru5n8hSvxXOoQO98r00/gqVmE3KDMWpviwmlPxoiIdhn3gcZp9o8FY7Xw8wkcK1AA5UT8Bndygd+4cDJpeYoRE8oRi7W9zvjBje0UEXkCOHiUGSNndYNJ8EvuXC4yml6fSy1BhksMEdyrpAILCYNLjdE/g2namvZMAQNCJaRpEiWkWJrIQUsLAjW14Anxm6mGymSAC7+evCVDhh3ICl76RH0UmHmggE0vXXjdBY2XYS45R3qCg3Typ1RTN7FcDccgCSB/OvBarMA4OE0vblmopGYxJjf9tyytp29zxAo2XUB//U1JtTjZFWXYGAyRlBIuSTPCAKjyCoYowwTczo3uiNxku33UbZiuluEi3H1Q3CmNeYvNfNEDdqaC6MJkf8x38ax8wreB2kLHBbERSBFNAZB9FWbgjQGtKV10P1U2HaNOQoLzwIQW8bCwMRpA/wArEplluWsRyIrzWW1hBJ/0iJuJEgzyiitYWUa08aaD19JVrAYxzXAwHfpJHdeJqCfkdyKyto7NxA5wZ8IJy97SaaFCuljTXMfMn1qhEa2ybT/TYxdizd7n17pLwbt0Bc625S4XbuC95LsNowcj5DGiWFzC2ZiTQkcjZRdv9nHHxs5YQcrBJEhwa0BpkGHZu7BGnJZn+CEOGfuAgUwWzMDUWmKx4qK1+w+xcQmSGFuQZ6yZIJEUgtjK6RvVjZcIHvGQGuMtNDQwG+MfNPbjB2Ix4xC3/Lbh92ndoWgkGLtN+Isa2hjNYYhzi9wfNXS93IfpEU57kFnB2PNiNYP058V0TLiaAlx3DKd/JYfam0sMFgBawD3cyDo0y21Cbi8wtXa8aWvY5pzPgEmatEXmaExN6Kg1wyPZD+Xw2M2FDXqEEeA14Y1pEQ4PaXU7xbE5jpBVx7GZGYlIYJc2RDiKgGv7gJ1taqysXDeXAATE/HaAAZk3H2U+0tAwzh3Li1pk2aO9lg1zE5SeDWi9EC4QLJBcwvM0Lvjc6pmLXnkYUeFs7cLP3hMxOU0ECIkR+qm+Fd2TYHEgZCIEGLAk6T3gLC4Vz+lNGNa1zSBvIhpIvMBvdoaih4oMXGDnQB8OgZQiJDCAdYqR/KbhbCA2opNRJgtAnM526P1Eea2Hv92HBrWvMRI1BdRoGjb1IrwooTjsxqCQBERH/wAg3UrUXrAF0FXKABasZSBLPiGovNKga0Wg3bTgy7IYIiGAAiJJoIEV4E7kOZ3Rlw3AtMkgl0mCO7SALyQojORp7h0cAJoZLTmN/hrEVA3hBfxu0G4oLDMmmVzTcfCZFjbWarFxe0w1zmy7FBtBJgjiTJBrQinjSN4xC0Aw1riCWtrUd3ui7hWJPmLKvnhxDWDmT3iLElwMi80tvQV8fszMXvDcra0EB0XqKCKmwmImqqf07coc0kmBE2nUQN0aK9hvzWcZaZiKi4BBiKSfAhJikuzXDptoRSkCAN08OCCo3BpItkNYrvg8KwosLZYDoIkRMCscBaLablaw8RmaAJHAiCQbm4ieFZTi6e8AXER3gSKgRItpqN/FBnDCAm5Bnh4mPknN2KCAGuk1IkaQaRwhWs2ZwzzWJPvdTfu5SE52z5QA1x5BonkXAxF+NvGim7AoTlJyxIOUgTBruHh80/BwgXtBIy5hmgWEiZ1srjMITmzOisUvQxMaVi2qr47BZtBXmaa/iig1Pantf3+NLCfdsbkw27hbNFwSfkNyx5E0PLlTXyTYjfobJM4JF/Hzj0VEgw+OlbX68/NPZg3POo+Xl1ZNcSa8p47q7uaVuLJJMeUQeEmSFBI3D69I50ieCezBFJivlE3iEwYwIuOVuVvopGuME2E0FaAVncbHyQB2e1YkTblxtJPkmPw46Ou7cQlZtLQ7vVFZHVtFaZtOzOFsRh5seN9R3TMHRBmOwf7QfB30CFpt2PDNRj4RG8seD490/NCDRwc4a5j2PBLXiZPdIynugwWBzmiAKTXenYG1A5xLCGZS2GWMVzTDg6pG7hK4ce1G1/8AGdcGzdK7vRNxfaTaXGTi135GAnmQ2qqO0wHd6cuUkk90CBUWtF5i11PiZnF2W9SYNS08CbmBpN7Lgm+0W0j/AO0+Tfsmu7e2guze8MkAE5W6UGiD0HAcXtLagwWmQJg5TSu6K3tyVl3ZAZhAyRBAn9RbFBH4XnI9pNpjL70xuys/7U8+1W1xBx3RT9LdLaIPR8DZsrWtDayIBiC7dBrAoTTnSYdjYQb3hJIkVBqYMmB3qu8d681PtRtcR750U0bp4cSnH2s2z/jG8/Ay9P7eCg9PqG98xJAaIAJrBIBtMm958FWa44heHTIMEXFDUCd53XjcF5y/2s2wmTjEnflZ/wBqYPabagCBiXv3GV/2oO/xGCS7KSTeSJqN06n5qf3zWNJhsgVqBNACBbWy83d7R7Sb4p8m/ZQO7YxjfEPkPsqPQ39rYZoXf6pDpoIvFfTXgU120YdcrqVbmkEAGvwi1YPgvOz2pi/vPomO255qXV3wJ84Qeis2h05nS+WkaZS47m08prGlFXz5g4hnxG8abrUGviuKPbePEe8pT9LdLaIf23jm+Ia37rR9EHcdnez+PjCWMo2nvCcrRSb/AEA0S4vs3jCWsy4hF2wARECQDcA8yuZ2X277Qw8MYbNoLWCYaGYcCb/pVUe1e2TPv3Tvhu4DdwQdAdie0w4EGLOGU6ScpidPNSNdAyn6aW150WDtHtntrxlfj5h/dh4Zjl3aKi7tzHNC+n+lv2QdWZEQSJ4UOibiPeaknlaK0iPouVPbePEe8Mcm/ZN/xjG/efJv2QdI9pkm5NdZJ1580yLyI8evyucd2rim7/QfZDe1MUGc5niAfQhB0T8MVFiAdOHVVEH2rO7j+bLn3bfiEyXb9BrS0JBtr/3H0+yDoS4UmOdZnW9qz0UMvADpnffrcufG34n7vQfZSYPa2M34X/7Wn5jig6MbBiOnumZiS03mDFLazOiB2bitc45fhyhzdCTFN32WBhdu7Q0gjEII4N+1VI72j2k3xSaRVrTTyQbG1YOJhgd0kHcCRyJOtLKLDxARBaOI3Xml1mD2j2mI97QEn4WXN9FWd2pim7t+jdTO5B0jHgD4QeNB80Lmf8RxP3H0+yEFRCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIP//Z"
  }
];

const Legends = () => {
  const [selectedStory, setSelectedStory] = useState<typeof LEGENDS[0] | null>(null);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 style={{ color: '#333333' }} className="horror-title mb-4">Urban Legends</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover chilling tales passed down through generations, each with its own dark truth and mysterious origins.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LEGENDS.map((legend, index) => (
          <motion.div
            key={legend.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="horror-card group"
            onClick={() => setSelectedStory(legend)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={legend.image}
                alt={legend.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Skull className="w-6 h-6 text-blood-red" />
                <h3 className="font-horror text-xl text-blood-red">{legend.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{legend.excerpt}</p>
              <div className="text-sm text-gray-400">
                <p>Location: {legend.location}</p>
                <p>Era: {legend.era}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedStory && (
        <StoryModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </div>
  );
};

export default Legends;