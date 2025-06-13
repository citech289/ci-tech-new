import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import CEO from "./components/CEO";
import CourseDetails from "./components/CourseDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Methodology from "./components/Methodology";
import Navbar from "./components/Navbar";
import BlockchainDevelopment from "./routes/BlockchainDevelopment";
import Carrer from "./routes/Carrer";
import DigitalMarketing from "./routes/DigitalMarketing";
import Internship from "./routes/Internship";
import JoinThisCourse from "./routes/JoinThisCourse";
import MobileDevelopment from "./routes/MobileDevelopment";
import Staff from "./routes/Staff";
import Training from "./routes/Training";
import WebDevelopment from "./routes/WebDevelopment";
import Blockchain from "./components/Internship/Blockchain";
import BusinessAnalytics from "./components/Internship/BusinessAnalytics";
import DataAnalytics from "./components/internship/DataAnalytics";
import DataScienceAi from "./components/internship/DataScienceAi";
import JavaFsd from "./components/internship/JavaFsd";
import JavaBackend from "./components/internship/JavaBackend";
import HumanResource from "./components/internship/HumanResource";
import MernStack from "./components/internship/MernStack";
import Devops from "./components/internship/Devops";
import PowerBi from "./components/internship/PowerBi";
import DigitalMarketinngIntern from "./components/internship/DigitalMarketinngIntern";
import WebDevelopmentIntern from "./components/internship/WebDevelopmentIntern";
import MobileDevelopmentIntern from "./components/internship/MobileDevelopmentIntern";
import Board from "./routes/Board";
import Events from "./routes/Events";
import ContactUs from "./routes/ContactUs";



const App = () => {
  return (
    <div className="w-full overflow-hidden scroll-smooth">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Methodology />
              <Footer />
            </>
          }
        />
        
        <Route
          path="/ContactUs"
          element={
            <>
              <ContactUs />
              <Footer />
            </>
          }
        />

        <Route
          path="/Training"
          element={
            <>
              <Training />
              <Footer />
            </>
          }
        />
        
        <Route
          path="/BlockchainDevelopment"
          element={
            <>
              <BlockchainDevelopment />
              <Footer />
            </>
          }
        />
        <Route
          path="/WebDevelopment"
          element={
            <>
              <WebDevelopment />
              <Footer />
            </>
          }
        />
        <Route
          path="/MobileDevelopment"
          element={
            <>
              <MobileDevelopment />
              <Footer />
            </>
          }
        />
        <Route
          path="/DigitalMarketing"
          element={
            <>
              <DigitalMarketing />
              <Footer />
            </>
          }
        />
        <Route
          path="/DigitalMarketingIntern"
          element={
            <>
              <DigitalMarketinngIntern />
              <Footer />
            </>
          }
        />
        <Route
          path="/WebDevelopmentIntern"
          element={
            <>
              <WebDevelopmentIntern />
              <Footer />
            </>
          }
        />
        <Route
          path="/MobileDevelopmentIntern"
          element={
            <>
              <MobileDevelopmentIntern />
              <Footer />
            </>
          }
        />
        <Route
          path="/About"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/CEO"
          element={
            <>
              <div className="mt-[80px]">
                <CEO />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/Board"
          element={
            <>
              <div className="mt-[80px]">
                <Board />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/Events"
          element={
            <>
              <div className="mt-[80px]">
                <Events />
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/Internship"
          element={
            <>
              <Internship />
              <Footer />
            </>
          }
        />
        
         {/* Internship Dropdown Start Here */}
         <Route
          path="/Blockchain"
          element={
            <>
              <Blockchain />
              <Footer />
            </>
          }
        />
        <Route
          path="/BusinessAnalytics"
          element={
            <>
              <BusinessAnalytics />
              <Footer />
            </>
          }
        />
        <Route
          path="/DataAnalytics"
          element={
            <>
              <DataAnalytics />
              <Footer />
            </>
          }
        />
        <Route
          path="/DataScienceAi"
          element={
            <>
              <DataScienceAi />
              <Footer />
            </>
          }
        />
        <Route
          path="/JavaFsd"
          element={
            <>
              <JavaFsd />
              <Footer />
            </>
          }
        />
        <Route
          path="/JavaBackend"
          element={
            <>
              <JavaBackend />
              <Footer />
            </>
          }
        />
        <Route
          path="/HumanResource"
          element={
            <>
              <HumanResource />
              <Footer />
            </>
          }
        />
        <Route
          path="/MernStack"
          element={
            <>
              <MernStack />
              <Footer />
            </>
          }
        />
        <Route
          path="/Powerbi"
          element={
            <>
              <PowerBi />
              <Footer />
            </>
          }
        />
        <Route
          path="/Devops"
          element={
            <>
              <Devops />
              <Footer />
            </>
          }
        />
        <Route
          path="/DigitalMarketingIntern"
          element={
            <>
              <DigitalMarketinngIntern />
              <Footer />
            </>
          }
        />
        {/* Internship Dropdown End Here */}



        
        <Route
          path="/Staff"
          element={
            <>
              <Staff />
              <Footer />
            </>
          }
        />
        <Route
          path="/Carrer"
          element={
            <>
              <Carrer />
              <Footer />
            </>
          }
        />
        <Route
          path="/roadmap/:slug"
          element={
            <>
              <Footer />
            </>
          }
        />
        <Route
          path="/course/:slug"
          element={
            <>
              <CourseDetails />
              <JoinThisCourse />
              <Footer />
            </>
          }
        />

        
      </Routes>
    </div>
  );
};

export default App;
