import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});

  // Fetch the currency information when the component mounts and whenever the currency changes
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrencyInfo(data.rates);
        console.log("Response Data => ", data);
      });
  }, [currency]);

  console.log("Currency information => ", currencyInfo);

  return currencyInfo;
}

export default useCurrencyInfo;
