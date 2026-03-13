import { motion } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'
import { instagramPosts } from '../data/content'

function InstagramFeed() {
  return (
    <section className="container-shell pt-20">
      <div className="mb-10">
        <p className="section-kicker">Instagram preview</p>
        <h2 className="section-title max-w-3xl">A feed designed to feel cohesive, premium, and instantly shoppable.</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {instagramPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-[26px] border border-white/10"
          >
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[0.9] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/85 via-black/10 to-transparent p-4">
              <div className="flex w-full items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gold/80">{post.type}</p>
                  <p className="mt-2 text-sm font-medium text-white">{post.title}</p>
                </div>
                {post.type === 'Reel' && (
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                    <FiPlay size={16} />
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default InstagramFeed
