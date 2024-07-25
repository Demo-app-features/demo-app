import { FunctionComponent, useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { MongoClient } from "mongodb";

export type FrameComponentType = {
  className?: string;
  onClose?: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  onClose,
}) => {
  const [price, setPrice] = useState("Loading ..."); // initial price
  const [xetraCode, setXetraCode] = useState("ETR:DHL"); // XETRA Code

  const fetchPrice = async () => {
    try {
      const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${xetraCode}&outputsize=compact&apikey=ODS7SLFECN0K6343`);
      const data = await response.json();
      const lastRefreshed = data["Meta Data"]["3. Last Refreshed"];
      const lastClosePrice = data["Time Series (Daily)"][lastRefreshed]["4. close"];
      setPrice(`${lastClosePrice} EUR`);
    } catch (error) {
      console.error("Failed to fetch price:", error);
    }
  };

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const client = await MongoClient.connect("mongodb://localhost:27017");
        const db = client.db("yourDatabaseName");
        const codes = db.collection("codes");
        const code = await codes.findOne({ code: xetraCode });
        if (code) {
          fetchPrice();
        }
      } catch (error) {
        console.error("Failed to fetch code:", error);
      }
    };

    if (xetraCode) {
      fetchCode();
    }
  }, [xetraCode]);

  return (
    <div
      className={`w-[1385px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full max-h-full overflow-auto text-center text-5xl text-black font-delivery ${className}`}
    >
      <div className="w-[351px] bg-whitesmoke flex flex-col items-start justify-start py-[30px] px-[25px] box-border gap-[20px] max-w-full z-[1]">
        <TextField
          label="XETRA Code"
          variant="outlined"
          value={xetraCode}
          onChange={(e) => setXetraCode(e.target.value)}
        />
        <b className="self-stretch h-[30px] relative inline-block mq450:text-lgi">
          DHL Stock Price
        </b>
        <b className="self-stretch h-[60px] relative text-29xl inline-block mq450:text-10xl mq750:text-19xl">
          {price}
        </b>
        <Button
          className="self-stretch h-[62px]"
          disableElevation
          variant="contained"
          onClick={fetchPrice}
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
          Refresh Price of {xetraCode}
        </Button>
      </div>
    </div>
  );
};

export default FrameComponent;