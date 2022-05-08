import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import Modal from './modal'

export default function NavbarComp() {
    const [modalOpen, setModalOpen] = useState(false)
	return (
		<nav className="flex justify-between px-16 my-6 items-end">
			<div className="text-4xl font-bold cursor-pointer">
				<span>a.</span>
			</div>
			<div className="text-xl cursor-pointer">
                <div id="nav-menu" className="hidden md:flex gap-6">
                    <span>about</span>
                    <span>studio</span>
                    <span>contact</span>
                    <span>blog</span>
                </div>
                <motion.div
                    onClick={() => setModalOpen(!modalOpen)}
                    className="md:hidden font-bold flex flex-col gap-1"
                >
                    <span className="block w-6 h-1 bg-white-default"></span>
                    <span className="block w-6 h-1 bg-blue-100"></span>
                    <span className="block w-6 h-1 bg-blue-200 mb-1.5"></span>
                </motion.div>
                <AnimatePresence>
                    {modalOpen && (
                        <Modal modalClose={() => setModalOpen(false)}></Modal>
                    )}
                </AnimatePresence>
			</div>
		</nav>
	)
}