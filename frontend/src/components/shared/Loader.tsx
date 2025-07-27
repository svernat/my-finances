import {CircularProgress} from "@mui/material";

export interface LoaderProps {
  readonly text: string;
  readonly height?: string;
  readonly size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  readonly color?: "secondary" | "success" | "inherit";
}

function Loader({ text, height, size, color }: LoaderProps) {
  return (
    <div className={`flex justify-center items-center h-[${height}] gap-4`}>
      <CircularProgress size={size} color={color} />
      <p className="text-lg">{text}...</p>
    </div>
  );
}

export default Loader;
