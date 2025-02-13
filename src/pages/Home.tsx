import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Skull, Book, Ghost } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-shadow-black/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative text-center space-y-8 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="relative"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="horror-title text-center mb-16"
                style={{ fontSize: '3rem', textShadow: '1px 1px 2px rgba(255, 204, 0, 0.5)', '@media (min-width: 640px)': { fontSize: '4rem' }, '@media (min-width: 768px)': { fontSize: '5rem' }, '@media (min-width: 1024px)': { fontSize: '6rem' } }}
              >
                Welcome to GothicTales
              </motion.h2>
              <div className="blood-drip absolute left-1/2 transform -translate-x-1/2" />
              <div className="enhanced-blood absolute bottom-0 left-0 w-full" />
            </motion.div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-2xl text-gray-300 font-body italic"
          >
            Where Your Darkest Nightmares Come to Life
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <Link to="/legends" className="horror-button group">
              <span>Enter If You Dare</span>
              <div className="blood-drip absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100" />
            </Link>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20"
        >
          <Skull className="w-16 h-16 text-blood-red opacity-30" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-20"
        >
          <Ghost className="w-16 h-16 text-blood-red opacity-30" />
        </motion.div>
      </section>



      {/* Featured Categories */}
      <section ref={ref} className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="horror-title text-center mb-16"
          style={{ textShadow: '1px 1px 2px rgba(255, 204, 0, 0.4)' }}
        >
          Choose Your Nightmare
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Ghost className="w-16 h-16 text-blood-red" />,
              title: "Urban Legends",
              description: "Tales passed down through generations, each with a dark truth at its core.",
              link: "/legends"
            },
            {
              icon: <Skull className="w-16 h-16 text-blood-red" />,
              title: "True Crime",
              description: "Real stories of horror that prove truth is darker than fiction.",
              link: "/true-crime"
            },
            {
              icon: <Book className="w-16 h-16 text-blood-red" />,
              title: "Creepypasta",
              description: "Modern myths and digital age horror stories that haunt the internet.",
              link: "/creepypasta"
            }
          ].map((category, index) => (
            <Link to={category.link} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="horror-card p-8 text-center group cursor-pointer"
              >
                <div className="mb-6 flex justify-center relative">
                  <div className="blood-drip absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100" />
                  {category.icon}
                </div>
                <h3 className="text-2xl font-horror text-blood-red mb-4">{category.title}</h3>
                <p className="text-gray-400">{category.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Stories */}
      <section className="bg-mist-gray/30 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="horror-title text-center mb-16"
            style={{ textShadow: '1px 1px 2px rgba(255, 204, 0, 0.6)' }}
          >
            Fresh Nightmares
          </motion.h2>
          <div className="description" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)', backgroundSize: 'cover', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.5)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
              <img src='https://img.freepik.com/free-vector/red-background-with-haunted-house-halloween_1048-3312.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid' alt='Icon 1' style={{ marginRight: '8px', height: 'auto', maxWidth: '50%' }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#ffcc00', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', margin: 0 }}>Explore the Depths of Gothic Tales</h3>
                <p>Delve into the eerie world of Gothic literature where every shadow holds a story. From haunted houses to mysterious figures lurking in the dark, these tales captivate the imagination. They invite you to explore the unknown and embrace your fears. Each narrative is a journey through the human psyche, revealing our deepest anxieties and desires. Experience the thrill of suspense and the allure of the supernatural as you uncover the secrets hidden within these pages.</p>
                <blockquote style={{ fontFamily: 'Creepster', fontSize: '1.5rem', textShadow: '0 0 10px rgba(0, 191, 255, 1)', textAlign: 'center', margin: '10px 0' }}>
                  <p>Shadows creep, and darkness falls,<br/>The night awakens, with eerie calls.<br/>The wind it howls, like a mournful sigh,<br/>As the moon hides, behind a darkened sky.</p>
                </blockquote>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
              <img src='https://img.freepik.com/free-photo/halloween-wallpaper-with-zombie-hand_23-2149122586.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid' alt='Icon 2' style={{ marginRight: '8px', height: 'auto', maxWidth: '50%' }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#ffcc00', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', margin: 0 }}>Immerse Yourself in Mystery and Suspense</h3>
                <p>Gothic tales are renowned for their intricate plots and suspenseful storytelling. They weave together elements of mystery, horror, and romance, creating an atmosphere of tension and intrigue. As you turn each page, you'll find yourself questioning what lies ahead. The unexpected twists and turns keep readers on the edge of their seats, eager to discover the fate of the characters. These stories remind us that not everything is as it seems, and sometimes the truth is far more terrifying than fiction.</p>
                <blockquote style={{ fontFamily: 'Creepster', fontSize: '1.5rem', textShadow: '0 0 10px rgba(0, 191, 255, 1)', textAlign: 'center', margin: '10px 0' }}>
                  <p>The trees they creak, with an otherworldly sound,<br/>As the leaves rustle, with a haunted all around.<br/>The darkness whispers, with a ghostly tone,<br/>As the night devils, begin to make their moan.</p>
                </blockquote>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
              <img src='https://img.freepik.com/premium-photo/spirit-dead-young-woman-sits-abandoned-hotel-room-filled-with-grief-resentment_1317355-290.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid' alt='Icon 3' style={{ marginRight: '8px', height: 'auto', maxWidth: '50%' }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#ffcc00', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', margin: 0 }}>Confront Your Fears</h3>
                <p>Every Gothic tale challenges its readers to confront their deepest fears. Whether it's the fear of the unknown, the supernatural, or the darkness within ourselves, these narratives force us to face what we often try to ignore. They explore themes of isolation, madness, and despair, reflecting the struggles of the human condition. By engaging with these stories, readers can gain a deeper understanding of their own fears and anxieties, ultimately finding empowerment in the process of confronting them.</p>
                <blockquote style={{ fontFamily: 'Creepster', fontSize: '1.5rem', textShadow: '0 0 10px rgba(0, 191, 255, 1)', textAlign: 'center', margin: '10px 0' }}>
                  <p>The graveyards creak, with a haunted sigh,<br/>As the tombstones shiver, with a ghostly cry.<br/>The zombies rise, with a monstrous roar,<br/>As the night of terror, begins to pour.</p>
                </blockquote>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
              <img src='https://img.freepik.com/premium-photo/vampire-costume-halloween-holidays_1368-19192.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid' alt='Icon 4' style={{ marginRight: '8px', height: 'auto', maxWidth: '50%' }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#ffcc00', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', margin: 0 }}>Join the Haunting Journey</h3>
                <p>Embark on a haunting journey through the pages of Gothic literature. Each story transports you to a different time and place, filled with atmospheric settings and richly developed characters. You'll encounter ghosts, monsters, and tragic heroes, each with their own story to tell. As you navigate through these narratives, you'll find yourself immersed in a world where reality blurs with the supernatural. This journey invites you to reflect on your own experiences and emotions, making the reading experience deeply personal.</p>
                <blockquote style={{ fontFamily: 'Creepster', fontSize: '1.5rem', textShadow: '0 0 10px rgba(0, 191, 255, 1)', textAlign: 'center', margin: '10px 0' }}>
                  <p>The witches cackle, with a wicked delight,<br/>As the warlocks weave, their magic spell tonight.<br/>The bats they fly, with a ghostly scream,<br/>As the night of horror, begins to beam.</p>
                </blockquote>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
              <img src='https://img.freepik.com/premium-photo/spooky-demon-death-long-black-dress-3d-conceptual-art-macabre-illustration_87538-3274.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid' alt='Icon 5' style={{ marginRight: '8px', height: 'auto', maxWidth: '50%' }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#ffcc00', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', margin: 0 }}>Delve into the World of GothicTales</h3>
                <p>GothicTales is a treasure trove of stories that explore the darker aspects of human nature. From tales of betrayal and revenge to stories of love and loss, each narrative offers a unique perspective on the human experience. The themes of darkness and light are intricately woven together, creating a rich tapestry of storytelling. As you delve into this world, you'll find that these tales resonate with your own experiences, making them all the more impactful.</p>
                <blockquote style={{ fontFamily: 'Creepster', fontSize: '1.5rem', textShadow: '0 0 10px rgba(0, 191, 255, 1)', textAlign: 'center', margin: '10px 0' }}>
                  <p>The monsters lurk, in the dark of night,<br/>As the creatures creep, with a ghostly might.<br/>The night it trembles, with a fearful sound,<br/>As the terror rises, all around.</p>
                </blockquote>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
              <img src='https://img.freepik.com/free-photo/low-view-man-holding-skull-black-fog_23-2148277541.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid' alt='Icon 6' style={{ marginRight: '8px', height: 'auto', maxWidth: '50%' }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#ffcc00', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', margin: 0 }}>Discover the Darker Side of Human Nature</h3>
                <p>Gothic literature often delves into the complexities of human nature, exploring themes of morality, desire, and the consequences of our actions. These stories challenge readers to reflect on their own beliefs and values, prompting questions about right and wrong. They reveal the duality of human nature, showcasing both the beauty and the darkness that exists within us all. By engaging with these narratives, readers can gain insight into their own motivations and the human condition as a whole.</p>
                <blockquote style={{ fontFamily: 'Creepster', fontSize: '1.5rem', textShadow: '0 0 10px rgba(0, 191, 255, 1)', textAlign: 'center', margin: '10px 0' }}>
                  <p>The darkness reigns, with a ghostly throne,<br/>As the night of terror, begins to atone.<br/>The creatures scream, with a haunted cry,<br/>As the night of horror, begins to fly.</p>
                </blockquote>
              </div>
            </div>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story cards will be dynamically loaded here */}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Community Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-5xl font-bold">1,000+</h3>
              <p className="text-lg">Horror Stories</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold">50,000+</h3>
              <p className="text-lg">Monthly Readers</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold">5,000+</h3>
              <p className="text-lg">Community Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creepy Horror Facts */}
      <section className="bg-gray-900 text-gray-200 py-16" style={{ backgroundImage: 'url(https://example.com/blood-splash-background.jpg)', backgroundSize: 'cover' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-shadow-lg" style={{ textShadow: '0 0 10px rgba(255, 0, 0, 1)' }}>Creepy Horror Facts</h2>
          <p className="text-lg mb-4" style={{ fontStyle: 'italic', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Did you know that the first horror film was made in 1896? Titled 'Le Manoir du Diable', it set the stage for the horror genre we know today.</p>
          <p className="text-lg mb-4" style={{ fontStyle: 'italic', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Horror stories have been used for centuries to explore the darker sides of human nature, allowing readers to confront their fears in a safe environment.</p>
          <h3 className="text-3xl font-semibold mb-4 text-center text-shadow-lg" style={{ textShadow: '0 0 10px rgba(255, 0, 0, 1)' }}>Featured Horror Tales</h3>
          <ul className="list-disc list-inside mb-4">
            <li><strong>The Haunting of Hill House</strong> - A chilling tale of a haunted mansion that explores the psychological effects of fear.</li>
            <li><strong>Dracula</strong> - The classic vampire story that has captivated readers for generations.</li>
            <li><strong>Frankenstein</strong> - A story that delves into the consequences of playing God and the nature of humanity.</li>
          </ul>
          <h3 className="text-3xl font-semibold mb-4 text-center text-shadow-lg" style={{ textShadow: '0 0 10px rgba(255, 0, 0, 1)' }}>What Our Readers Say</h3>
          <blockquote className="border-l-4 border-gray-600 pl-4 italic mb-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '5px' }}>
            <p>"Reading horror stories is like stepping into another world where anything can happen. It's thrilling!" - Joe Mama</p>
          </blockquote>
          <blockquote className="border-l-4 border-gray-600 pl-4 italic mb-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '5px' }}>
            <p>"I love how horror stories make me feel alive. The suspense keeps me on the edge of my seat!" - Candice</p>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home;