import React from 'react';
import Card from '../Card/Card';
import OngoinIPOSubscriptionTable from '../OngoinIPOSubscriptionTable/OngoinIPOSubscriptionTable';
import Heading from '../Heading/Heading';
import RecentMainIPo from '../RecentMainIPo/RecentMainIPo';
import RecentlyClosedIPO from '../RecentlyClosedIPO/RecentlyClosedIPO';
import GMP from '../GMP/GMP';
import RecentSMEIPO from '../RecentSMEIPO/RecentSMEIPO';
import SMEIPO from '../SMEIPO/SMEIPO';
import IPOListing from '../IPOListing/IPOListing';
import MainIPO from '../MainIPO/MainIPO';
import IPOAllotment from '../IPOAllotment/IPOAllotment';
import UpcomingIPO from '../UpcomingIPO/UpcomingIPO';
import ExpertsReview from '../ExpertsReview/ExpertsReview';
import AboutUs from '../AboutUs/AboutUs';
<<<<<<< HEAD
import Disclaimer from '../Disclaimer/Disclaimer';
=======
import ContactUs from '../ContactUs/ContactUs';
<<<<<<< HEAD
>>>>>>> ffaa9139ce636f99b7409247a357ef704c46bcde
=======
import Careers from '../Careers/Careers';
>>>>>>> ddbcd4a23d5ddd48969a27bce521033958903a45



const IPO = () => {

  const dataOfSMEIPO = [
    {
      "company_name": "Baweja Studios",
      "dates": "29-1 Feb 2024",
      "price": "₹170 to ₹180",
      "platform": "NSE SME"
    },
    {
      "company_name": "Fonebox Retail",
      "dates": "24-29 Jan 2024",
      "price": "₹66 to ₹70",
      "platform": "NSE SME"
    },
    {
      "company_name": "DelaPlex",
      "dates": "24-29 Jan 2024",
      "price": "₹-",
      "platform": "NSE SME"
    },
    {
      "company_name": "Brisk Technovision",
      "dates": "22-24 Jan 2024",
      "price": "₹156",
      "platform": "BSE SME"
    },
    {
      "company_name": "Lawsikho",
      "dates": "19-23 Jan 2024",
      "price": "₹130 to ₹140",
      "platform": "NSE SME"
    },
    {
      "company_name": "Konstelec Engineers",
      "dates": "19-23 Jan 2024",
      "price": "₹66 to ₹70",
      "platform": "NSE SME"
    },
    {
      "company_name": "Euphoria Infotech",
      "dates": "19-23 Jan 2024",
      "price": "₹96 to ₹100",
      "platform": "BSE SME"
    },
    {
      "company_name": "Qualitek Labs",
      "dates": "18-22 Jan 2024",
      "price": "₹100",
      "platform": "BSE SME"
    },
    {
      "company_name": "Maxposure",
      "dates": "15-17 Jan 2024",
      "price": "₹31 to ₹33",
      "platform": "NSE SME"
    },
    {
      "company_name": "Shree Marutinandan Tubes",
      "dates": "12-16 Jan 2024",
      "price": "₹143",
      "platform": "BSE SME"
    },
    {
      "company_name": "Australian Premium Solar",
      "dates": "11-15 Jan 2024",
      "price": "₹51 to ₹54",
      "platform": "NSE SME"
    },
    {
      "company_name": "New Swan Multitech",
      "dates": "11-15 Jan 2024",
      "price": "₹62 to ₹66",
      "platform": "BSE SME"
    },
    {
      "company_name": "IBL Finance",
      "dates": "9-11 Jan 2024",
      "price": "₹51",
      "platform": "NSE SME"
    },
    {
      "company_name": "Kaushalya Logistics",
      "dates": "29-3 Jan 2024",
      "price": "₹71 to ₹75",
      "platform": "NSE SME"
    },
    {
      "company_name": "Kay Cee Energy",
      "dates": "28-2 Jan 2024",
      "price": "₹51 to ₹54",
      "platform": "NSE SME"
    },
    {
      "company_name": "HRH Next Services",
      "dates": "27-29 Dec 2023",
      "price": "₹36",
      "platform": "NSE SME"
    },
    {
      "company_name": "Manoj Ceramic",
      "dates": "27-29 Dec 2023",
      "price": "₹62",
      "platform": "BSE SME"
    },
    {
      "company_name": "Balaji Valve Components",
      "dates": "27-29 Dec 2023",
      "price": "₹95 to ₹100",
      "platform": "BSE SME"
    },
    {
      "company_name": "Akanksha Power",
      "dates": "27-29 Dec 2023",
      "price": "₹52 to ₹55",
      "platform": "NSE SME"
    },
    {
      "company_name": "AIK Pipes and Polymers",
      "dates": "26-28 Dec 2023",
      "price": "₹89",
      "platform": "BSE SME"
    },
    {
      "company_name": "Sameera Agro and Infra",
      "dates": "21-27 Dec 2023",
      "price": "₹180",
      "platform": "NSE SME"
    },
    {
      "company_name": "Supreme Power Equipment",
      "dates": "21-26 Dec 2023",
      "price": "₹61 to ₹65",
      "platform": "NSE SME"
    },
    {
      "company_name": "Indifra",
      "dates": "21-26 Dec 2023",
      "price": "₹65",
      "platform": "NSE SME"
    },
    {
      "company_name": "Trident Techlabs",
      "dates": "21-26 Dec 2023",
      "price": "₹33 to ₹35",
      "platform": "NSE SME"
    },
    {
      "company_name": "Electro Force India",
      "dates": "19-21 Dec 2023",
      "price": "₹80.68",
      "platform": "NSE SME"
    },
    {
      "company_name": "Shanti Spintex",
      "dates": "19-21 Dec 2023",
      "price": "₹66 to ₹70",
      "platform": "BSE SME"
    },
    {
      "company_name": "Sahara Maritime",
      "dates": "18-20 Dec 2023",
      "price": "₹81",
      "platform": "BSE SME"
    },
    {
      "company_name": "Benchmark Computer Solutions",
      "dates": "14-18 Dec 2023",
      "price": "₹66",
      "platform": "BSE SME"
    },
    {
      "company_name": "Shree OSFM E-Mobility",
      "dates": "14-18 Dec 2023",
      "price": "₹65",
      "platform": "NSE SME"
    },
    {
      "company_name": "Siyaram Recycling",
      "dates": "14-18 Dec 2023",
      "price": "₹43 to ₹46",
      "platform": "BSE SME"
    },
    {
      "company_name": "S J Logistics",
      "dates": "12-14 Dec 2023",
      "price": "₹121 to ₹125",
      "platform": "NSE SME"
    }
  ]

  const dataIPOListing = [
    {
      "company_name": "Shree Marutinandan Tubes",
      "ipo_listing_date": "IPO Listing Today",
      "ipo_type": "BSE SME"
    },
    {
      "company_name": "Medi Assist Healthcare",
      "ipo_listing_date": "22 Jan 2024",
      "ipo_type": "Mainline"
    },
    {
      "company_name": "Maxposure",
      "ipo_listing_date": "22 Jan 2024",
      "ipo_type": "NSE SME"
    },
    {
      "company_name": "Qualitek Labs",
      "ipo_listing_date": "25 Jan 2024",
      "ipo_type": "BSE SME"
    },
    {
      "company_name": "Konstelec Engineers",
      "ipo_listing_date": "29 Jan 2024",
      "ipo_type": "NSE SME"
    },
    {
      "company_name": "Lawsikho",
      "ipo_listing_date": "29 Jan 2024",
      "ipo_type": "NSE SME"
    },
    {
      "company_name": "Euphoria Infotech",
      "ipo_listing_date": "29 Jan 2024",
      "ipo_type": "BSE SME"
    },
    {
      "company_name": "EPACK Durable",
      "ipo_listing_date": "29 Jan 2024",
      "ipo_type": "Mainline"
    },
    {
      "company_name": "Brisk Technovision",
      "ipo_listing_date": "30 Jan 2024",
      "ipo_type": "BSE SME"
    },
    {
      "company_name": "Nova Agri Tech",
      "ipo_listing_date": "30 Jan 2024",
      "ipo_type": "Mainline"
    },
    {
      "company_name": "DelaPlex",
      "ipo_listing_date": "1 Feb 2024",
      "ipo_type": "NSE SME"
    },
    {
      "company_name": "Fonebox Retail",
      "ipo_listing_date": "1 Feb 2024",
      "ipo_type": "NSE SME"
    },
    {
      "company_name": "Megatherm Induction",
      "ipo_listing_date": "2 Feb 2024",
      "ipo_type": "NSE SME"
    },
    {
      "company_name": "Baweja Studios",
      "ipo_listing_date": "6 Feb 2024",
      "ipo_type": "NSE SME"
    },
    {
      "company_name": "Mukka Proteins",
      "ipo_listing_date": "TBA",
      "ipo_type": "Mainline"
    },
    {
      "company_name": "R K SWAMY",
      "ipo_listing_date": "TBA",
      "ipo_type": "Mainline"
    },
    {
      "company_name": "Allied Blenders and Distillers",
      "ipo_listing_date": "TBA",
      "ipo_type": "Mainline"
    },
    {
      "company_name": "SPC Life Sciences",
      "ipo_listing_date": "TBA",
      "ipo_type": "Mainline"
    },
    {
      "company_name": "Balaji Speciality Chemicals",
      "ipo_listing_date": "TBA",
      "ipo_type": "Mainline"
    },
    {
      "company_name": "EbixCash",
      "ipo_listing_date": "TBA",
      "ipo_type": "Mainline"
    }
  ]



  return (
    <div className='w-full my-32'>

      {/* 1. Ongoing SME IPO and Ongoing Main IPO secton============================================ */}

      {/*a. For large screen========================================================== */}
      {/* Heading */}
      <div className="flex justify-around items-center mb-8">
        <h1 className='text-3xl text-gray-600 font-semibold hidden sm:block'>Ongoing Main IPO</h1>
        <h1 className='text-3xl text-gray-600 font-semibold hidden sm:block'>Ongoing SME IPO</h1>
      </div>

      {/* Card section for large screen============== */}
      <div className=' hidden sm:grid grid-rows-2 grid-cols-2 gap-10 w-11/12 mx-auto'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>

      {/*b. For small screen=========================================================== */}
      <div className=' w-11/12 mx-auto block sm:hidden'>
        {/* Ongoing Main IPO */}
        <h1 className=' text-3xl font-bold text-gray-600 mb-7'>Ongoing Main IPO</h1>
        <div className=' grid grid-rows-2 grid-cols-1 gap-10'>
          <Card></Card>
          <Card></Card>
        </div>

        {/* Ongoing SME IPO */}
        <h1 className=' text-3xl font-bold text-gray-600 mb-5 mt-12'>Ongoing SME IPO</h1>
        <div className=' grid grid-rows-2 grid-cols-1 gap-10'>
          <Card></Card>
          <Card></Card>
        </div>
      </div>

      {/*2. Recent Main IPOs==================================================================== */}
      <Heading heading="Recent Main IPOs"></Heading>
      <RecentMainIPo></RecentMainIPo>

      {/*3. Recent SME IPOs ====================================================================== */}
      <Heading heading="Recent SME IPOs"></Heading>
      <RecentSMEIPO></RecentSMEIPO>

      {/*4. Ongoing IPO Subscription ==============================================================*/}
      <div className=' my-20 mx-auto w-11/12'>

        {/* heading for table */}
        <h1 className='text-center text-3xl font-semibold mt-96 mb-10 text-gray-700'>Ongoing IPO Subscription</h1>

        {/* Table */}
        <div className='w-full grid grid-rows-4 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 gap-10'>
          <OngoinIPOSubscriptionTable></OngoinIPOSubscriptionTable>
          <OngoinIPOSubscriptionTable></OngoinIPOSubscriptionTable>
          <OngoinIPOSubscriptionTable></OngoinIPOSubscriptionTable>
          <OngoinIPOSubscriptionTable></OngoinIPOSubscriptionTable>
        </div>

      </div>


      {/*5. Recently closed IPO Subscription - Main IPO ================================*/}
      <RecentlyClosedIPO heading="Recently closed IPO Subscription - Main IPO"></RecentlyClosedIPO>

      {/*6. Recently closed IPO Subscription - SME IPO================================== */}
      <RecentlyClosedIPO heading="Recently closed IPO Subscription - SME IPO"></RecentlyClosedIPO>

      {/*7. Main IPO GMP====green ========================================================*/}
      <GMP heading="Main IPO GMP" ></GMP>

      {/*8. SME IPO GMP==================================================================== */}
      <GMP heading="SME IPO GMP" ></GMP>
      {/* TODO: make this dynamic */}
      <MainIPO></MainIPO>
      {/* 9. SME IPO component. when user click on sme ipo from side menu user will get redirected to this component */}
      <SMEIPO data={dataOfSMEIPO}></SMEIPO>
      {/* TODO: The ipo allotment is dynamic */}
      <IPOAllotment></IPOAllotment>
      {/* 10. IPO listing component. when user click on sme ipo from side menu user will get redirected to this component */}
      <IPOListing data={dataIPOListing}></IPOListing>
      {/* TODO:Create This to dynamic  */}
      <ExpertsReview></ExpertsReview>
      {/* TODO: The upcoming ipo is dynamic */}
      <UpcomingIPO></UpcomingIPO>
      {/* TODO: create this to real */}
      <Careers></Careers>
      {/* TODO: Create This To Real */}
      <ContactUs></ContactUs>
      {/* TODO: Create this to Real INFO */}
      <AboutUs></AboutUs>
      {/* TODO:  Disclaimer section */}
      <Disclaimer></Disclaimer>
    </div>
  );
};

export default IPO;