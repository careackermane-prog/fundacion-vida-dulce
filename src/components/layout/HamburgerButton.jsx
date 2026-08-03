import { motion } from "framer-motion";

function HamburgerButton({
  open,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        transition
        hover:bg-slate-100
        lg:hidden
      "
      aria-label="Abrir menú"
    >
      <motion.span
        animate={
          open
            ? {
                rotate: 45,
                y: 6,
              }
            : {
                rotate: 0,
                y: 0,
              }
        }
        className="
          absolute
          h-[2px]
          w-6
          rounded-full
          bg-slate-800
        "
      />

      <motion.span
        animate={
          open
            ? {
                opacity: 0,
              }
            : {
                opacity: 1,
              }
        }
        className="
          absolute
          h-[2px]
          w-6
          rounded-full
          bg-slate-800
        "
      />

      <motion.span
        animate={
          open
            ? {
                rotate: -45,
                y: -6,
              }
            : {
                rotate: 0,
                y: 12,
              }
        }
        className="
          absolute
          h-[2px]
          w-6
          rounded-full
          bg-slate-800
        "
      />
    </button>
  );
}

export default HamburgerButton;