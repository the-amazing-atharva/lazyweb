
import { AnimatePresence } from 'framer-motion';
import { useFilterUsingCategoriesArray } from '@/hooks/Zustand';
import { motion } from 'framer-motion';
import { ResourceCard } from 'components';
type Props = {}

const FilteredResources = (props: Props) => {
  const {filteredResources} = useFilterUsingCategoriesArray()
  return (
    <div>
        <p className='text-[18px] text-white mt-[1rem] ml-[1rem]'>Filtered Resources: {filteredResources.length} {filteredResources.length>1?'results':'result'}</p>
      <div className={`relative w-[100%] transition-all duration-300 flex justify-center`}>
        <div className="flex ml-[2rem] w-[95%] justify-start gap-[2rem] flex-wrap my-[1rem]">
        <AnimatePresence>
          {filteredResources.map((e)=>{
            return (
              <motion.div
                key={e.id}
                initial={{ scale:0 }}
                animate={{ scale: 1 }}
              >
                <ResourceCard resource={e} description={e.desc} title={e.title} image={e.image_url} url={e.url}/>
              </motion.div>
              )
            })}
        </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default FilteredResources