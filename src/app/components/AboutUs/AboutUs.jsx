import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

const AboutUs = () => {
    return (
        <div id="about-us" className='w-11/12 mx-auto mt-28 '>
          
  <h1 className="text-center font-extrabold text-5xl text-slate-700 mb-14">
              About US
      </h1>
      <div>
      <Accordion className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600 hover:ps-10">
        <AccordionSummary
        expandIcon={">"}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="text-xl">Some information about us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        

          Welcome to our website, a trusted hub for accurate and timely information on a diverse range of topics. Committed to delivering reliable insights, we pride ourselves on being a go-to resource for users seeking knowledge and understanding. Our platform strives to empower individuals with valuable information, fostering informed decision-making across various domains. Explore our content and discover a wealth of reliable resources tailored to meet your informational needs.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600 hover:ps-10">
        <AccordionSummary
        expandIcon={">"}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="text-xl">What we can basically get from this website ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        
This website serves as a comprehensive resource, providing intricate details on a multitude of country's IPOs, encompassing crucial information such as IPO prices and more. It stands as an invaluable source for those seeking in-depth insights into the dynamic world of initial public offerings.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600 hover:ps-10">
        <AccordionSummary
          expandIcon={">"}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="text-xl">Why do we use this website?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
Expressing a strong determination, I am committed to navigating this website with utmost precision to acquire authentic and up-to-date information regarding IPOs. Rest assured, my pursuit for accurate insights is unwavering, ensuring the reliability of the data gathered for informed decision-making.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
        </div>
    );
};

export default AboutUs;