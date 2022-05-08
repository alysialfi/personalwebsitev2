import { motion } from 'framer-motion'

export default function ModalComp({modalClose}: {modalClose: any}) {
    return (
        <motion.div
            className="fixed flex justify-center items-center top-0 right-0 w-screen h-screen bg-blue-200"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-105%" }}
            onClick={modalClose}
            transition={{ type: "spring", bounce: .25, duration: .5 }}
        >
            <motion.ul 
                className="text-3xl text-blue-bg inline-flex gap-4 flex-col"
                exit={{ opacity: 0}}>
                <li>about</li>
                <li>studio</li>
                <li>contact</li>
                <li>blog</li>
            </motion.ul>
        </motion.div>
    )
}