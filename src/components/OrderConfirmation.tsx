import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

interface OrderConfirmationProps {
  onBack: () => void;
}

const OrderConfirmation = ({ onBack }: OrderConfirmationProps) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#141313",
        padding: "32px",
      }}
    >
      {/* Subtle grid texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(#444748 1px, transparent 1px), linear-gradient(90deg, #444748 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "relative",
          textAlign: "center",
          maxWidth: "320px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0",
        }}
      >
        {/* Top border line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#444748",
            marginBottom: "40px",
          }}
        />

        {/* Label caps */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "#8e9192",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Order Received
        </motion.p>

        {/* Large checkmark display */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.25 }}
          style={{
            width: "80px",
            height: "80px",
            border: "1px solid #ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "32px",
            borderRadius: 0,
          }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(28px, 8vw, 40px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#ffffff",
            textTransform: "uppercase",
            lineHeight: 1.05,
            marginBottom: "16px",
          }}
        >
          Order<br />Confirmed
        </motion.h2>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            lineHeight: 1.6,
            color: "#c4c7c8",
            maxWidth: "260px",
            marginBottom: "40px",
          }}
        >
          Your order has been received. Please wait while we prepare your food.
        </motion.p>

        {/* Bottom border line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#444748",
            marginBottom: "32px",
          }}
        />

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          whileTap={{ scale: 0.97 }}
          onClick={onBack}
          style={{
            width: "100%",
            backgroundColor: "#ffffff",
            color: "#141313",
            border: "none",
            borderRadius: 0,
            padding: "18px 32px",
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "opacity 0.15s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "0.88";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "1";
          }}
        >
          Back to Menu
        </motion.button>
      </motion.div>
    </div>
  );
};

export default OrderConfirmation;
