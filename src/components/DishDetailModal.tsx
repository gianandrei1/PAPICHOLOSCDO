import { formatPrice } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Minus, Plus, Check } from "lucide-react";
import { MenuItem, useCart } from "@/contexts/CartContext";

interface DishDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

const DishDetailModal = ({ item, onClose }: DishDetailModalProps) => {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  // Reset qty & added state whenever a new item is opened
  useEffect(() => {
    if (item) {
      setQty(1);
      setAdded(false);
    }
  }, [item]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  const handleAddToOrder = () => {
    if (!item) return;
    for (let i = 0; i < qty; i++) addItem(item);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  const totalVal = item ? item.price * qty : 0;

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* ── Backdrop ─────────────────────────────────────────── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 60,
              backgroundColor: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          />

          {/* ── Modal Sheet ──────────────────────────────────────── */}
          <motion.div
            key="modal"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 61,
              backgroundColor: "#141313",
              maxHeight: "96dvh",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              borderTop: "1px solid #444748",
            }}
          >
            {/* ── Sticky Top Bar ─────────────────────────────────── */}
            <div
              style={{
                position: "sticky",
                top: 0,
                zIndex: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 20px",
                height: "64px",
                backgroundColor: "rgba(20,19,19,0.55)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                flexShrink: 0,
              }}
            >
              <button
                onClick={onClose}
                aria-label="Go back"
                style={{
                  background: "none",
                  border: "none",
                  color: "#ffffff",
                  cursor: "pointer",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  transition: "opacity 0.15s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.opacity = "0.7")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.opacity = "1")
                }
              >
                <ArrowLeft style={{ width: "22px", height: "22px" }} strokeWidth={2} />
              </button>
            </div>

            {/* ── Hero Image ─────────────────────────────────────── */}
            <section
              style={{
                position: "relative",
                width: "100%",
                height: "340px",
                flexShrink: 0,
                backgroundColor: "#0e0e0e",
              }}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              )}
              {/* Gradient overlay for text legibility */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, #141313 0%, rgba(20,19,19,0.2) 60%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />
              {/* Status chip (category) */}
              {item.category && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "24px",
                    left: "20px",
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#2a2a2a",
                      border: "1px solid #444748",
                      color: "#ffffff",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "4px 12px",
                      borderRadius: 0,
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              )}
            </section>

            {/* ── Content Area ───────────────────────────────────── */}
            <main
              style={{
                padding: "24px 20px",
                flex: 1,
                paddingBottom: "120px",
              }}
            >
              {/* Title & Price */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                  gap: "12px",
                }}
              >
                <h1
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "clamp(28px, 7vw, 40px)",
                    fontWeight: 800,
                    lineHeight: 1.05,
                    letterSpacing: "-0.04em",
                    color: "#ffffff",
                    textTransform: "uppercase",
                    maxWidth: "70%",
                    margin: 0,
                  }}
                >
                  {item.name}
                </h1>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "clamp(22px, 5vw, 32px)",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    color: "#ffffff",
                    flexShrink: 0,
                  }}
                >
                  ₱{formatPrice(item.price)}
                </span>
              </div>

              {/* Description */}
              {item.description && (
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "#c4c7c8",
                    marginBottom: "32px",
                    maxWidth: "600px",
                  }}
                >
                  {item.description}
                </p>
              )}

              {/* "The Details" divider section */}
              {item.details && item.details.length > 0 && (
                <div style={{ marginBottom: "24px" }}>
                  <h2
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#8e9192",
                      borderBottom: "1px solid #444748",
                      paddingBottom: "10px",
                      marginBottom: "16px",
                    }}
                  >
                    Details
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {item.details.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: "#2a2a2a",
                          border: "1px solid #444748",
                          color: "#e5e2e1",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "12px",
                          fontWeight: 500,
                          letterSpacing: "0.04em",
                          padding: "5px 12px",
                          borderRadius: "2px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        {/* thin checkmark */}
                        <svg width="10" height="8" viewBox="0 0 14 10" fill="none">
                          <polyline
                            points="1 5 5 9 13 1"
                            stroke="#8e9192"
                            strokeWidth="1.5"
                            strokeLinecap="square"
                          />
                        </svg>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </main>

            {/* ── Fixed Bottom Action Bar ────────────────────────── */}
            <div
              style={{
                position: "sticky",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "16px 20px",
                backgroundColor: "rgba(20,19,19,0.97)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderTop: "1px solid #444748",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                zIndex: 10,
              }}
            >
              {/* Quantity Toggle */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #444748",
                  borderRadius: 0,
                  flexShrink: 0,
                }}
              >
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  disabled={qty <= 1}
                  style={{
                    width: "44px",
                    height: "52px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "none",
                    border: "none",
                    borderRight: "1px solid #444748",
                    color: qty <= 1 ? "#444748" : "#ffffff",
                    cursor: qty <= 1 ? "default" : "pointer",
                    transition: "color 0.15s ease",
                    borderRadius: 0,
                  }}
                >
                  <Minus style={{ width: "14px", height: "14px" }} strokeWidth={2} />
                </button>
                <span
                  style={{
                    width: "44px",
                    textAlign: "center",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  style={{
                    width: "44px",
                    height: "52px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "none",
                    border: "none",
                    borderLeft: "1px solid #444748",
                    color: "#ffffff",
                    cursor: "pointer",
                    transition: "color 0.15s ease",
                    borderRadius: 0,
                  }}
                >
                  <Plus style={{ width: "14px", height: "14px" }} strokeWidth={2} />
                </button>
              </div>

              {/* Add to Order Button */}
              <button
                onClick={handleAddToOrder}
                disabled={added}
                style={{
                  flex: 1,
                  height: "52px",
                  backgroundColor: added ? "#1c1b1b" : "#ffffff",
                  color: added ? "#ffffff" : "#141313",
                  border: added ? "1px solid #ffffff" : "none",
                  borderRadius: 0,
                  cursor: added ? "default" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  transition: "all 0.2s ease",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {added ? (
                  <>
                    <Check style={{ width: "16px", height: "16px" }} strokeWidth={2.5} />
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      Added
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      Add to Order
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      • ₱{formatPrice(totalVal)}
                    </span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DishDetailModal;
