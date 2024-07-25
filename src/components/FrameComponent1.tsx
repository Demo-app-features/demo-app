import { FunctionComponent } from "react";
import { Button } from "@mui/material";

export type FrameComponentType = {
  className?: string;
  onClose?: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div
      className={`w-[1385px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full max-h-full overflow-auto text-center text-5xl text-black font-delivery ${className}`}
    >
      <div className="w-[351px] bg-whitesmoke flex flex-col items-start justify-start py-[30px] px-[25px] box-border gap-[20px] max-w-full z-[1]">
        <b className="self-stretch h-[30px] relative inline-block mq450:text-lgi">
          DHL Stock Price
        </b>
        <b className="self-stretch h-[60px] relative text-29xl inline-block mq450:text-10xl mq750:text-19xl">
          33.33 EUR
        </b>
        <Button
          className="self-stretch h-[62px]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "24",
            background: "#ffcc00",
            borderRadius: "3px",
            "&:hover": { background: "#ffcc00" },
            height: 62,
          }}
        >
          Refresh Price
        </Button>
      </div>
    </div>
  );
};

export default FrameComponent;
