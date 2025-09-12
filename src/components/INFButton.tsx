interface INFButtonProps {
  children: React.ReactNode;
  variant?: "filled" | "outlined" | "canceled";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function INFButton({
  children,
  variant = "filled",
  onClick,
  className = "",
  disabled = false,
  type = "button",
}: INFButtonProps) {
  const baseClasses =
    "px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ease-in-out outline-none border-2";

  const variantClasses = {
    filled: `bg-primary text-primary-selected border-primary hover:bg-primary-hover hover:border-primary-hover active:bg-primary-pressed active:border-primary-pressed shadow-md ${
      disabled ? "cursor-not-allowed bg-primary-disabled opacity-50" : "cursor-pointer hover:shadow-lg animate-slide-in"
    }`,
    outlined: `bg-transparent text-primary border-primary hover:bg-primary-50 hover:text-primary-pressed active:bg-primary-100 active:text-primary shadow-sm ${
      disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
    }`,
    canceled: `bg-card-cancel text-primary border-card-cancel hover:bg-card-selected-bg hover:text-primary-pressed active:bg-card-border active:text-primary shadow-md ${
      disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer animate-fade-in"
    }`,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}