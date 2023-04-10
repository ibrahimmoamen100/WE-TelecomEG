import React from "react";
import "./WepayPage.css";
import wepayimage from "../../img/we pay.png";
import MoveToPage from "../components/MoveToPage";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Collapsing from "../components/Collapsing";

function WepayPage() {
  return (
    <div className="WepayPage">
      <TopNavbar />
      <Navbar />
      <div className="WepayPage_container ">
        <MoveToPage name="WE Pay" />
        <div className="WepayPage_img_container">
          <img src={wepayimage} alt="" className="WepayPage_img" />
          <div className="container wepay_content-container">
            <h4>WE Pay</h4>
            <p>
              هي محفظة إلكترونية بتوفرلك مجموعة من الخدمات لتسهيل معاملاتك
              المالية مثل إيداع وسحب الأموال ودفع فواتير WE والمرافق (الكهرباء و
              المياه و الغاز) والتبرعات وغيرها، وتقدر تستخدمها في أي وقت وأي
              مكان بسهولة وأمان.
            </p>

            <div className="collapse_wepay-container">
              <Collapsing
                title="الاشترك في الخدمه "
                information1="قم بزيارة  أقرب فرع من فروع WE ومعك بطاقة الرقم القومي سارية وخط موبايل WE بإسمك "
                information2="قم بملئ طلب الإشتراك في الخدمه ووقع على العقد "
                information3="ستتلقى رسالة نصية بها كود التفعيل و اللينك الخاص بالتطبيق والموجود علي موقع الشركة "
                information4="انشئ الرقم السري  الخاص بالتطبيق و المكون من 6  أرقام  لحسابك (بدون أرقام متكررة أو متتابعة)"
              />
              <Collapsing
                title="قائمة خدمات WE Pay "
                information1="قم بزيارة  أقرب فرع من فروع WE ومعك بطاقة الرقم القومي سارية وخط موبايل WE بإسمك "
                information2="قم بملئ طلب الإشتراك في الخدمه ووقع على العقد "
                information3="ستتلقى رسالة نصية بها كود التفعيل و اللينك الخاص بالتطبيق والموجود علي موقع الشركة "
                information4="انشئ الرقم السري  الخاص بالتطبيق و المكون من 6  أرقام  لحسابك (بدون أرقام متكررة أو متتابعة)"
              />
              <Collapsing
                title="شروط عامه "
                information1="قم بزيارة  أقرب فرع من فروع WE ومعك بطاقة الرقم القومي سارية وخط موبايل WE بإسمك "
                information2="قم بملئ طلب الإشتراك في الخدمه ووقع على العقد "
                information3="ستتلقى رسالة نصية بها كود التفعيل و اللينك الخاص بالتطبيق والموجود علي موقع الشركة "
                information4="انشئ الرقم السري  الخاص بالتطبيق و المكون من 6  أرقام  لحسابك (بدون أرقام متكررة أو متتابعة)"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WepayPage;
