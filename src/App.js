import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import carousel1 from './images/trade-with-confidence_en.jpg';
import carousel2 from './images/DCABot_en.jpg';
import recharge from './images/recharge.png'
import withdraw from './images/withdraw.png'
import convert from './images/convert.png'
import service from './images/service.png'
import Login from './pages/Login';
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Product Name", "Latest Price", "Change"];

const TABLE_ROWS = [
  {
    img: "https://huobicfg.s3.amazonaws.com/currency_icon/btc.png",
    name: "BTC/USDT",
    amount: "51354.3541",
    date: "0.78",
  },
  {
    img: "https://huobicfg.s3.amazonaws.com/currency_icon/eth.png",
    name: "ETH/USDT",
    amount: "2930.51",
    date: "-0.31",
  },
  {
    img: "https://huobicfg.s3.amazonaws.com/currency_icon/doge.png",
    name: "DOGE/USDT",
    amount: "0.0841",
    date: "1.31",
  },
  {
    img: "https://huobicfg.s3.amazonaws.com/currency_icon/trx.png",
    name: "TRX/USDT",
    amount: "0.3246",
    date: "0.314",
  },
  {
    img: "https://huobicfg.s3.amazonaws.com/currency_icon/chz.png",
    name: "CHZ/USDT",
    amount: "0.3241",
    date: "-0.321",
  },
  {
    img: "https://huobicfg.s3.amazonaws.com/currency_icon/psg.png",
    name: "PSG/USDT",
    amount: "1.32",
    date: "0.23",
  },
  {
    img: "https://huobicfg.s3.amazonaws.com/currency_icon/juv.png",
    name: "JUV/USDT",
    amount: "65.3541",
    date: "1.21",
  },
  {
    img: "https://huobicfg.s3.amazonaws.com/currency_icon/atm.png",
    name: "ATM/USDT",
    amount: "35.3545",
    date: "-0.654",
  },
  {
    img: "https://huobicfg.s3.amazonaws.com/currency_icon/ltc.png",
    name: "LTC/USDT",
    amount: "9.356",
    date: "0.31",
  },
  {
    img: "https://huobicfg.s3.amazonaws.com/currency_icon/etc.png",
    name: "ETC/USDT",
    amount: "0.3434",
    date: "1.31",
  },
  {
    img: "https://huobicfg.s3.amazonaws.com/currency_icon/eos.png",
    name: "EOS/USDT",
    amount: "60233.23",
    date: "-0.35",
  },
  {
    img: "https://huobicfg.s3.amazonaws.com/currency_icon/link.png",
    name: "LINK/USDT",
    amount: "32.4564",
    date: "0.32",
  },
  {
    img: "https://huobicfg.s3.amazonaws.com/currency_icon/uni.png",
    name: "UNI/USDT",
    amount: "1.3334",
    date: "1.21",
  },
];

function createData(Avartar, ProductName, LatestPrice, Change) {
  return { Avartar, ProductName, LatestPrice, Change };
}

const rows = [
  createData(require('./images/service.png'), 'BTC/USDT', 50868.5655, 0.36),
  createData(require('./images/service.png'), 'ETH/USDT', 2890.355, -1.2),
  createData(require('./images/service.png'), 'DOGE/USDT', 0.0556, 1.65),
  createData(require('./images/service.png'), 'TRK/USDT', 0.1354, 1.23),
  createData(require('./images/service.png'), 'CHZ/USDT', 0.1235, 0.21),
  createData(require('./images/service.png'), 'PSG/USDT', 3.4568, -0.3),
  createData(require('./images/service.png'), 'JUV/USDT', 2.6584, 0.35),
  createData(require('./images/service.png'), 'ATM/USDT', 2.8465, 1.35),
  createData(require('./images/service.png'), 'LTC/USDT', 67.321, -0.2),
  createData(require('./images/service.png'), 'ETC/USDT', 25.342, 1.35),
  createData(require('./images/service.png'), 'EOS/USDT', 0.7641, 0.31),
  createData(require('./images/service.png'), 'LINK/USDT', 18.3545, -1.2),
  createData(require('./images/service.png'), 'UNI/USDT', 7.354, 0.2),
];

function App() {
  const [number, setNumber] = useState(getRandomNumber());
  const [number1, setNumber1] = useState(getRandomNumber1());
  const [number2, setNumber2] = useState(getRandomNumber2());
  const [number3, setNumber3] = useState(getRandomNumber3());
  const [number4, setNumber4] = useState(getRandomNumber4());
  const [number5, setNumber5] = useState(getRandomNumber5());
  const [color, setColor] = useState('red'); // Initial color

  // Function to generate a random number between 50000.0000 and 51999.9999
  function getRandomNumber() {
    return (50000 + Math.random() * 2000).toFixed(4);
  }
  function getRandomNumber1() {
    return (-2 + Math.random() * 4).toFixed(2);
  }
  function getRandomNumber2() {
    return (2888 + Math.random() * 4).toFixed(4);
  }
  function getRandomNumber3() {
    return (-2 + Math.random() * 4).toFixed(2);
  }
  function getRandomNumber4() {
    return (2888 + Math.random() * 4).toFixed(4);
  }
  function getRandomNumber5() {
    return (-2 + Math.random() * 4).toFixed(2);
  }

  // Update number every second
  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(getRandomNumber());
      setNumber1(getRandomNumber1());
      setNumber2(getRandomNumber2());
      setNumber3(getRandomNumber3());
      setNumber4(getRandomNumber4());
      setNumber5(getRandomNumber5());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle between red and green color
      setColor((prevColor) => (prevColor === 'red' ? '#4EC752' : 'red'));
    }, 1000); // Change color every second

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);
  return (
    <div className="App">
      {/* Render the div with the 'page-width-div' class */}
      <div className="carousel-width-div"></div>
      <div className="h-[110px] bg-white bg-cover rounded-lg mt-[10px] flex w-full">
        <div className="w-1/3 flex flex-col items-center justify-center ">
          <div className="font-bold text-black">BTC/USDT</div>
          <div style={{ color }} className="font-bold mt-0.5">{number}</div>
          <div style={{ color }} className="font-bold mt-0.5">{number1}%</div>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center font-bold text-black">
          <div className="font-bold text-black">ETH/USDT</div>
          <div style={{ color }} className="font-bold mt-0.5">{number2}</div>
          <div style={{ color }} className="font-bold mt-0.5">{number3}%</div>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center font-bold text-black">
          <div className="font-bold text-black">DOGE/USDT</div>
          <div style={{ color }} className="font-bold mt-0.5">{number4}</div>
          <div style={{ color }} className="font-bold mt-0.5">{number5}%</div>
        </div>
      </div>
      <div className="h-[90px] bg-cover rounded-lg mt-[10px] bg-white flex w-full">

        <div className="w-1/4 flex flex-col items-center justify-center text-black">
          <img src={recharge} alt="Recharge" className="h-5 w-5 mb-4 item-center" />
          <div className="text-xs">Recharge</div>
        </div>

        <div className="w-1/4 flex flex-col items-center justify-center text-black">
          <img src={withdraw} alt="Recharge" className="h-5 w-5 mb-4" />
          <div className="text-xs">Withdraw</div>
        </div>
        <div className="w-1/4 flex flex-col items-center justify-center text-black">
          <img src={convert} alt="Recharge" className="h-5 w-5 mb-4" />
          <div className="text-xs">Convert</div>
        </div>
        <div className="w-1/4 flex flex-col items-center justify-center text-black">
          <img src={service} alt="Recharge" className="h-5 w-5 mb-4" />
          <div className="text-xs">Service</div>
        </div>
      </div>
      <div className="h-[1000px] bg-cover rounded-lg mt-[10px] bg-white flex w-full">
        <Card className="h-full w-full">
          <CardBody className="">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="black"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(
                  (
                    {
                      img,
                      name,
                      amount,
                      date,

                    },
                    index,
                  ) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4 "
                      : "p-4 border-b border-blue-gray-50 ";

                    return (
                      <tr key={name}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={img}
                              alt={name}
                              size="md"
                              className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1 w-8 h-8"
                            />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold "
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal text-green-500 font-bold"
                          >
                            {amount}
                          </Typography>
                        </td>
                        <td className={classes} style={{ width: "100px" }}>
                          <Typography
                            variant="small"
                            className="font-normal bg-green-500 rounded-[5px] text-white text-center"
                          >
                            {date}%
                          </Typography>
                        </td>
                      </tr>
                    );
                  },
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
      <footer
        className="bg-[#F7F7FA] 
             text-3xl text-white text-center 
             border-t-2 border-[#CECED1]
             fixed 
             inset-x-0 
             bottom-0 
             p-4
             flex
             ">
        <div className="w-1/4 flex flex-col items-center justify-center text-black">
          <img src='https://globalindia-6wx.pages.dev/static/image/home-on.png' alt="Recharge" className="h-6 w-6 mb-1" />
          <div className="text-xs">Home</div>
        </div>
        <div className="w-1/4 flex flex-col items-center justify-center text-black">
          <img src='https://globalindia-6wx.pages.dev/static/image/order.png' alt="Recharge" className="h-6 w-6 mb-1" />
          <div className="text-xs">purchase</div>
        </div>
        <div className="w-1/4 flex flex-col items-center justify-center text-black">
          <img src='https://globalindia-6wx.pages.dev/static/image/jy.png' alt="Recharge" className="h-6 w-6 mb-1" />
          <div className="text-xs">Record</div>
        </div>
        <div className="w-1/4 flex flex-col items-center justify-center text-black">
          <img src='https://globalindia-6wx.pages.dev/static/image/my.png' alt="Recharge" className="h-6 w-6 mb-1" />
          <div className="text-xs">user</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
