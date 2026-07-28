import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90",
        secondary: "border border-white/10 bg-white/5 text-white hover:bg-white/10",
        outline: "border border-white/10 bg-transparent text-white hover:bg-white/5"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, ...props }: ButtonProps) => {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
};

export default Button;
