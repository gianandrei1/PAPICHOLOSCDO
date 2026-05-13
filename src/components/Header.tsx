import { motion } from "framer-motion";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-40 w-full h-16 flex items-center justify-center"
      style={{
        backgroundColor: "rgba(20, 19, 19, 0.96)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #444748",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "clamp(22px, 6vw, 32px)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          color: "#ffffff",
          textTransform: "uppercase",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        PAPICHOLOS
      </motion.h1>
    </header>
  );
};

export default Header;
