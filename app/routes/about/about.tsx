import { motion, useMotionValue, useTransform } from "framer-motion";
import emoji_hand from "../../../public/images/swaggy_hand.png";
import emoji_flower from "../../../public/images/sun_flower.png";
import emoji_glitter from "../../../public/images/glitter.png";

export default function AboutRoute() {
    const x = useMotionValue(0)

    return (
        <div className="h-[85vh] overflow-hidden">
            <div className="relative z-20 container px-16 h-4/5 flex justify-center content-center flex-col">
                <div className="w-fit relative box-border">
                    <div className="inline-flex">
                        <h1 className="text-[9rem] font-bold leading-[8rem]">Hi! I'm <span className="text-pink-200">A</span><span className="text-pink-300">l</span><span className="text-pink-400">f</span><span className="text-pink-500">i</span></h1>
                        <img className="w-28 h-28 mt-4" src={emoji_hand} alt="swaggy hand emoji" />
                    </div>
                    <h2 className="text-4xl">your nice and experienced front-end dev</h2>
                    <motion.div
                        drag
                        dragMomentum={false}
                        whileDrag={{ scale: .7, rotate: "-30deg" }}
                        whileTap={{ cursor: "grabbing" }}
                        style={{ rotate: "-30deg" }}
                        className="absolute px-4 bottom-0 left-24 text-2xl text-center text-black rounded-full bg-amber-500 cursor-grab"
                    >
                        fun
                    </motion.div>
                    <div className="absolute px-2 -bottom-8 right-12 text-small text-center text-black rounded-md bg-amber-500">
                        *sometimes back-end *only for fun
                    </div>
                </div>
            </div>
            <div className="absolute z-0 w-[35rem] h-[35rem] top-16 left-[33%] rounded-full border-[1px] border-gray-400 animate-spin-slow">
                <img src={emoji_glitter} className="w-10 h-10 absolute bottom-6 right-28"/>
            </div>
            <div className="absolute z-0 w-[65rem] h-[65rem] -top-36 left-[16%] rounded-full border-[1px] border-gray-400 animate-reverse-spin">
                <img src={emoji_flower} className="w-8 h-8 absolute bottom-36 right-32"/>
            </div>
            {/* <div className="absolute z-0 w-[12rem] h-[12rem] rotate-45 top-40 right-32 border-[1px] border-gray-400">
            </div> */}
        </div>
    )
}