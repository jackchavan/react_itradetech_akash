import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Detail.css";
import BullletPoint from "../../assets/img/bulletPoint.png";
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetail } from "../../services/courseService";
import { setLoading } from "../../store/actions/CommonActions";
import { LOGIN, PAYMENT_RESPONSE } from "../../constants/PathConstants";
import { initiatePayment } from "../../services/paymentService";
import { setOrder, setOrderId } from "../../store/actions/PaymentActions";
import { getUniqueId } from "../../utils/CommonMethods";
import { setCourse } from "../../store/actions/CourseActions";
import BgTitle from "../../assets/img/course-detail-banner.png";
const Detail = () => {
  const { id } = useParams();
  const { auth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [list, setList] = useState([
    "Build 16 web development projects for your portfolio",
    "ready to apply for junior developer jobs. Learn the latest technologies",
    "including Javascript, React, Node and even Web3 development",
    "Build 16 web development projects for your portfolio",
  ]);

  const [courseDetail, setCourseDetail] = useState({});

  const detilsData = [
    {
      icon: "fa fa-clock-o",
      label: "Duration",
      value: `${courseDetail?.duration ?? ""} minutes`,
    },
    {
      icon: "fa fa-book",
      label: "Lecture",
      value: "2",
    },
    {
      icon: "fa fa-play-circle-o",
      label: "Mode",
      value: `${courseDetail?.mode ?? ""}`,
    },
    {
      icon: "fa fa-tachometer",
      label: "Level",
      value: "Beginner",
    },
  ];

  useEffect(() => {
    getDetail(id);
  }, []);

  const getDetail = async (id) => {
    dispatch(setLoading(true));

    try {
      const response = await getCourseDetail(id);
      if (response) {
        dispatch(setCourse(response));
        setCourseDetail(response);
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));

      console.error(error);
      return false;
    }
  };

  const onEnroll = () => {
    if (auth?.login) {
      makePayment();
    } else {
      navigate(LOGIN);
    }
  };

  const makePayment = async () => {
    dispatch(setLoading(true));

    const body = {
      CourseCode: courseDetail?.code,
      orderId: getUniqueId().toString(),
      customerId: auth?.userId.toString(),
      amount: courseDetail.cost,
      paymentPageClientId: auth?.userId.toString(),
      returnUrl: `http://localhost:3000/${PAYMENT_RESPONSE}`,
      customerEmail: 0,
      customer_phone: 0,
      first_name: 0,
      last_name: 0,
      description: "string",
      myProperty: "string",
      currency: "string",
      udf1: "string",
      udf2: "string",
      udf3: "string",
      udf4: "string",
      udf5: "string",
      udf6: "string",
      udf7: "string",
      udf8: "string",
      udf9: "string",
      udf10: "string",
    };
    try {
      const response = await initiatePayment(body);
      if (response) {
        dispatch(setOrderId(response.orderId));
        dispatch(setOrder(response));
        window.open(response?.paymentLinks?.web, "_self");
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const TextStyling = ({ text, style, customClass }) => {
    if (typeof text !== "string") {
      return null;
    }
    const [firstWord, ...remainingWords] = text?.split(" ");
    const remainingText = remainingWords?.join(" ");

    return (
      <div className={customClass} style={style}>
        <h1 className="first-word">{firstWord}</h1>
        <h1 className="remaining-text">{remainingText}</h1>
      </div>
    );
  };
  const cardDetails = () => {
    return detilsData.map((item, i) => (
      <div className="list-item" key={i}>
        <span className="item-icon">
          <i className={item.icon}></i>
        </span>
        <span className="item-name">{item.label}</span>
        <span className="item-value">{item.value}</span>
      </div>
    ));
  };

  const card = () => {
    return (
      <div className="card-deatil">
        <div className="card-details-wrapper">
          <div className="sub-section">
            <span className="rupee">&#8377; {courseDetail?.cost ?? ""}</span>
            <div className="card-details">{cardDetails()}</div>
            {auth?.isAdmin === 1 && (
              <button className="btn-enroll-now" onClick={onEnroll}>
                Enroll Now
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const ListItem = ({ data }) => {
    return data?.map((item, i) => (
      <li key={i} className="d-flex gap-3 align-items-center txt-justify">
        <img className="bullet-img" src={BullletPoint} />
        <div dangerouslySetInnerHTML={{ __html: item }} />
        {item.child && (
          <ul>
            <ListItem key={item.child} data={item.child} />
          </ul>
        )}
      </li>
    ));
  };

  return (
    <div
      className="text-center"
      style={{ backgroundColor: "var(--gray-light)" }}
    >
      <div className="detail-box">
        <img src={BgTitle} className="img-fluid title-banner" />
        <div className="desc-div">
          <TextStyling
            text={courseDetail?.title}
            customClass={"text-container"}
          />
        </div>
      </div>
      {/* Details */}
      <div className="col col-12 mt-4">
        <TextStyling
          text={"Things YOU LEARN"}
          customClass={"col-md-6 text-container-center"}
        />
      </div>
      <div className="row detail px-4 gap-5 py-2">
        <div className="detail-container col-12 col-md-6">
          <div className="li-learn">
            <ul className="ul-learn">
              <ListItem data={list} />
            </ul>
          </div>
        </div>
        <div className="detail-card col-12 col-md-5">{card()}</div>
      </div>
    </div>
  );
};

export default Detail;
