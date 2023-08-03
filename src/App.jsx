import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Pricing from "./pages/pricing/Pricing";
import TryDemo from "./pages/try-demo/TryDemo";
import PrivacyPolicy from "./pages/privacy-policy/PricacyPolicy";
import TermsOfUse from "./pages/terms-of-use/TermsOfUse";
import CookiePolicy from "./pages/cookie-policy/CookiePolicy";
import ContactUs from "./pages/contact-us/ContactUs";
import FAQ from "./pages/faq/FAQ";
import SignIn from "./pages/authentication/sign-in/SignIn";
import SignUp from "./pages/authentication/sign-up/SignUp";
import ForgotPassword from "./pages/authentication/forgot-password/ForgotPassword";
import PasswordReset from "./pages/authentication/password-reset/PasswordReset";
import TermsAndConditions from "./pages/terms-and-conditions/TermsAndConditions";
import AccountVerification from "./pages/authentication/account-verification/AccountVerification";
import UserDashboard from "./pages/dashboard/UserDashboard";
import AddGiftCard from "./pages/add-gift-card/AddGiftCard";
import SingleCardView from "./pages/single-card-view/SingleCardView";
import DeliveryDetails from "./pages/delivery-details/DeliveryDetails";
import PaymentSuccessful from "./pages/payment-successful/PaymentSuccessful";
import PaymentFailed from "./pages/payment-failed/PaymentFailed";
import UploadCardCoverBirthday from "./pages/upload-card-cover-birthday/UploadCardCoverBirthday";
import "./App.css";
import UploadCard from "./pages/upload-card/UploadCard";
import PreviewUploadedCard from "./pages/preview-uploaded-card/PreviewUploadedCard";
import SavedCards from "./pages/saved-cards/SavedCards";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/try-demo" element={<TryDemo />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
        <Route path="/account-verification/:id/:token" element={<AccountVerification />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/upload-card-cover-birthday" element={<UploadCardCoverBirthday />} />
        <Route path="/upload-card" element={<UploadCard />} />
        <Route path="/saved-card" element={<SavedCards />} />
        <Route path="/preview-uploaded-card" element={<PreviewUploadedCard />} />
        <Route path="/card-delivery-details" element={<DeliveryDetails />} />
        <Route path="/payment-successful" element={<PaymentSuccessful />} />
        <Route path="/single-card-view" element={<SingleCardView />} />

        {/* not yet linked */}
        <Route path="/payment-failed" element={<PaymentFailed />} />
        {/* <Route path="/add-gift-card" element={<AddGiftCard />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
