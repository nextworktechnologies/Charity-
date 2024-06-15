import React, { useEffect } from "react";
import Layout from "../../Components/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import member from "../../Assets/Images/Shapes/about-2-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function TempleDetails() {
  const [templeData, setTempleData] = React.useState([]);
  const { id } = useParams();
  const getTemples = async () => {
    try {
      const response = await axios.get(`/get-temple/${id}`);

      setTempleData(response.data?.data[0]);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getTemples();
  }, []);
  return (
    <Layout
      title="Temple-Detail"
      discription={"Hindu Temple "}
      keywords={"Hindu Temple"}
    >
      <section className="page-header">
        <div className="page-header__bg"></div>
        <div className="container">
          <ul className="sanatanSewaNyas-breadcrumb list-unstyled">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span>Temple</span>
            </li>
          </ul>
          <h2 className="page-header__title">{templeData.title}</h2>
        </div>
      </section>
      <section className="blog-details">
        <div className="container">
          <div key={templeData._id} className=" row gutter-y-60">
            <div className="col-lg-8">
              <div className="blog-details__content">
                <div className="blog-details__image">
                  <img
                    src={`http://localhost:8080/temples/${templeData.mainImage.image}`}
                    alt="Best place of true splander"
                  />
                </div>
                <div className="blog-card__date">
                  {templeData.establishedDate}
                </div>

                <h3 className="blog-details__title">{templeData.title}</h3>
                <p className="blog-details__text">
                  काशी विश्वनाथ मंदिर, जो उत्तर प्रदेश के वाराणसी में पवित्र
                  गंगा किनारे स्थित है, वह बारह ज्योतिर्लिंगों में से एक है, जो
                  भगवान शिव के लिंग के रूप में दिव्य प्रतिष्ठान का प्रतीक है। यह
                  पवित्र मंदिर हिंदुओं के लिए एक महत्वपूर्ण आध्यात्मिक और
                  सांस्कृतिक केंद्र है जो पूरी दुनिया में धर्मिक समृद्धि की
                  अनुपम गहराई को दर्शाता है। श्रद्धालु इस पूजनीय स्थल पर
                  आशीर्वाद प्राप्त करने, रीति-रिवाजों का पालन करने, और मंदिर और
                  इसके आस-पास की आध्यात्मिक वातावरण में खो जाने के लिए इस स्थल
                  पर भक्ति करते हैं। वाराणसी के प्राचीन शहर में स्थित होने से
                  मंदिर का आध्यात्मिक महत्व और भी गहरा है। <br></br>काशी
                  विश्वनाथ मंदिर का निर्माण विभिन्न सदियों में हुआ, जिसे नष्ट
                  करने और पुनर्निर्माण के अवधियों के साथ चिह्नित किया गया है।
                  मंदिर की आरंभिक अवधि प्राचीन काल में जाती है, जिसे विशेष रूप
                  से संदर्भित नहीं किया गया है। हालांकि, स्पष्ट जानकारी मंदिर के
                  प्रारंभिक निर्माण के बारे में उपलब्ध नहीं है। इसके इतिहास में,
                  मंदिर भक्ति और तीर्थयात्रा का केंद्र रहा है, जिसमें विभिन्न
                  शासकों और राजवंशों ने अपना योगदान दिया है।<br></br>
                  <br></br> मंदिर के इतिहास में सबसे महत्वपूर्ण घटना मुग़ल
                  सम्राट औरंगज़ेब के शासनकाल में हुई जब उन्होंने इसके नष्टि का
                  आदेश दिया। उसके स्थान पर, उन्होंने ज्ञानवापी मस्जिद का निर्माण
                  किया, जो आज भी मंदिर के साथ समीप में स्थित है। इस विपरीतता के
                  बावजूद, हिंदू समुदाय की भक्ति की भावना को कोई अस्थायी नहीं
                  किया गया। 18वीं सदी में, मराठा रानी अहिल्याबाई होलकर ने मंदिर
                  की पुनर्निर्माण की पहल की, जिससे इसे पूर्वी महिमा में पुनः
                  स्थापित किया गया। उनके प्रयासों ने मंदिर को पुनः एक महत्वपूर्ण
                  पूजा और तीर्थ स्थल बनाने में मदद की।<br></br> मंदिर का संचार
                  केंद्र बना रहने के लिए अगले सदियों में भी इसे विकसित किया गया,
                  मंदिर का संचार केंद्र बना रहने के लिए अगले सदियों में भी इसे
                  विकसित किया गया, 19वीं और 20वीं सदी में महत्वपूर्ण सुधार और
                  विस्तार किए गए। ये प्रयास इसे विशेष रूप से बनाए रखने के लिए
                  किये गए थे, जो मंदिर की वास्तुशिल्पीय और सांस्कृतिक विरासत को
                  संरक्षित रखने के साथ-साथ भक्तों की बढ़ती हुई संख्या को संभालने
                  के लिए भी थे। विभिन्न हिंदू भक्तों और दानीदारों के योगदान ने
                  इसमें एक महत्वपूर्ण भूमिका निभाई।<br></br>
                  <br></br> 2021 में, भारतीय सरकार ने एक महत्वपूर्ण पुनर्विकास
                  परियोजना की शुरुआत की, जिसे काशी विश्वनाथ धाम कॉरिडोर के नाम
                  से जाना जाता है। इस पहल का उद्देश्य हर साल मंदिर के लाखों
                  पिलग्रिम्स और भक्तों के लिए बेहतर सुविधाएँ प्रदान करना था।
                  कॉरिडोर परियोजना में सुधारित बुनियादी ढांचा, बेहतर सुरक्षा, और
                  यात्रियों के लिए बेहतर सुविधाएं शामिल हैं। इस पुनर्विकास से
                  मंदिर के ऐतिहासिक महत्व को और बढ़ावा मिला है, जिससे यह
                  पीढ़ियों के लिए एक महत्वपूर्ण आध्यात्मिक स्थल बने रहे।
                </p>
                {/* <p className="blog-details__text">{templeData.description}</p> */}

                <ul className="list-unstyled blog-details__paginations">
                  <li className="blog-details__paginations__item">
                    <div className="blog-details__paginations__image">
                      <img src="assets/images/blog/blog-page-p-1.png" alt="" />
                    </div>
                    <div className="blog-details__paginations__content">
                      <h4 className="blog-details__paginations__title">
                        <a href="blog-details.html">
                          It is important to support poor people
                        </a>
                      </h4>
                    </div>
                  </li>
                  <li className="blog-details__paginations__item">
                    <div className="blog-details__paginations__image">
                      <img src="assets/images/blog/blog-page-p-2.png" alt="" />
                    </div>
                    <div className="blog-details__paginations__content">
                      <h4 className="blog-details__paginations__title">
                        <a href="blog-details.html">
                          Get deep knowledge of your beauty
                        </a>
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <aside className="widget-area">
                  <div className="sidebar__single">
                    <h4 className="sidebar__title">Commite Member</h4>
                    <ul className="sidebar__posts list-unstyled">
                      <li className="sidebar__posts__item">
                        <div className="sidebar__posts__image">
                          <img src={member} alt="blog" />
                        </div>
                        <div className="sidebar__posts__content">
                          <h4 className="sidebar__posts__title">
                            <a href="blog-details.html">Rajat Rai</a>
                          </h4>
                          <p> Chief</p>
                        </div>
                      </li>
                      <li className="sidebar__posts__item">
                        <div className="sidebar__posts__image">
                          <img src={member} alt="blog" />
                        </div>
                        <div className="sidebar__posts__content">
                          <h4 className="sidebar__posts__title">
                            <a href="blog-details.html">Suraj Rao</a>
                          </h4>
                          <p> Expert</p>
                        </div>
                      </li>
                      <li className="sidebar__posts__item">
                        <div className="sidebar__posts__image">
                          <img src={member} alt="blog" />
                        </div>
                        <div className="sidebar__posts__content">
                          <h4 className="sidebar__posts__title">
                            <a href="blog-details.html">Abhay Panjla</a>
                          </h4>
                          <p> Chief</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar__single">
                    <h4 className="sidebar__title">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ color: "#470604" }}
                      />{" "}
                      Location
                    </h4>
                    <ul className="sidebar__categories list-unstyled">
                      <li>
                        <a href="blog.html">
                          <span> City : </span> {templeData.city}
                        </a>
                      </li>
                      <li>
                        <a href="blog.html">
                          {" "}
                          <span> State : </span> {templeData.state}
                        </a>
                      </li>
                      <li>
                        <a href="blog.html">
                          {" "}
                          <span> Country : </span> {templeData.country}
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default TempleDetails;
