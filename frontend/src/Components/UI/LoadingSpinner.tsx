import { motion } from "framer-motion";

const LoadingSpinner = ({ size = 40, color = "#3b82f6" }) => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                }}
                style={{
                    width: size,
                    height: size,
                    border: `4px solid ${color}40`, 
                    borderTop: `4px solid ${color}`,
                    borderRadius: "50%",
                }}
            />
        </div>
    );
};

export default LoadingSpinner;
