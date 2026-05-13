import { formatPrice } from "@/lib/utils";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const CartDrawer = ({ open, onClose, onCheckout }: CartDrawerProps) => {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  return (
    <Drawer open={open} onOpenChange={(o) => !o && onClose()}>
      <DrawerContent
        style={{
          backgroundColor: "#141313",
          border: "1px solid #444748",
          borderBottom: "none",
          borderRadius: 0,
          maxHeight: "88vh",
        }}
      >
        {/* ── Header ─────────────────────────────────────────────── */}
        <DrawerHeader
          style={{
            borderBottom: "1px solid #444748",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <DrawerTitle
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            Your Order
          </DrawerTitle>
          <button
            onClick={onClose}
            aria-label="Close cart"
            style={{
              background: "none",
              border: "none",
              color: "#8e9192",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <X style={{ width: "18px", height: "18px" }} />
          </button>
        </DrawerHeader>

        {/* ── Item List ──────────────────────────────────────────── */}
        <div style={{ flex: 1, overflowY: "auto", padding: "0 20px" }}>
          {items.length === 0 ? (
            <p
              style={{
                padding: "48px 0",
                textAlign: "center",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                letterSpacing: "0.05em",
                color: "#8e9192",
              }}
            >
              Your cart is empty
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom: "1px solid #444748",
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      flexShrink: 0,
                      overflow: "hidden",
                      border: "1px solid #444748",
                      borderRadius: 0,
                      backgroundColor: "#0e0e0e",
                    }}
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    )}
                  </div>

                  {/* Name + price */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#ffffff",
                        letterSpacing: "-0.01em",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#e5e2e1",
                        marginTop: "4px",
                      }}
                    >
                      ₱{formatPrice(item.price * item.quantity)}
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #444748",
                      borderRadius: 0,
                    }}
                  >
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                      style={{
                        width: "32px",
                        height: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "none",
                        border: "none",
                        borderRight: "1px solid #444748",
                        color: "#ffffff",
                        cursor: "pointer",
                        transition: "background 0.15s ease",
                        borderRadius: 0,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2a2a2a";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                      }}
                    >
                      <Minus style={{ width: "12px", height: "12px" }} />
                    </button>
                    <span
                      style={{
                        width: "32px",
                        textAlign: "center",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#ffffff",
                      }}
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                      style={{
                        width: "32px",
                        height: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "none",
                        border: "none",
                        borderLeft: "1px solid #444748",
                        color: "#ffffff",
                        cursor: "pointer",
                        transition: "background 0.15s ease",
                        borderRadius: 0,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2a2a2a";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                      }}
                    >
                      <Plus style={{ width: "12px", height: "12px" }} />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove item"
                    style={{
                      background: "none",
                      border: "none",
                      color: "#8e9192",
                      cursor: "pointer",
                      padding: "4px",
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0,
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = "#ffb4ab";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = "#8e9192";
                    }}
                  >
                    <Trash2 style={{ width: "14px", height: "14px" }} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Footer ─────────────────────────────────────────────── */}
        {items.length > 0 && (
          <DrawerFooter
            style={{
              padding: "20px",
              borderTop: "1px solid #444748",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#8e9192",
                }}
              >
                Total
              </span>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                ₱{formatPrice(totalPrice)}
              </span>
            </div>
            <Button
              onClick={onCheckout}
              style={{
                width: "100%",
                backgroundColor: "#ffffff",
                color: "#141313",
                border: "none",
                borderRadius: 0,
                padding: "18px 20px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "opacity 0.15s ease",
                height: "auto",
              }}
            >
              Proceed to Checkout
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
