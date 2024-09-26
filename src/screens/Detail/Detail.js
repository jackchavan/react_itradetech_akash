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

  const TextStyling = (props) => {
    if (typeof props.text !== "string") {
      console.error("Expected a string");
      return null; // or handle the error appropriately
    }
    const [firstWord, ...remainingWords] = props.text?.split(" ");
    const remainingText = remainingWords?.join(" ");

    return (
      <div className={props?.class} style={props?.style}>
        <span className="first-word">{firstWord}</span>
        <span className="remaining-text">{remainingText}</span>
      </div>
    );
  };
  const cardDetails = () => {
    return detilsData.map((item, i) => (
      <div className="list-item">
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
          {/* <img className="img-detail" src={Img} alt="img" /> */}
          <div className="sub-section">
            <span className="rupee">&#8377; {courseDetail?.cost ?? ""}</span>
            <div className="card-details">{cardDetails()}</div>
            {/* <button className="btn-enroll-now" onClick={onEnroll}>
              Enroll Now
            </button> */}
          </div>
        </div>
      </div>
    );
  };

  const ListItem = ({ data }) => {
    return data?.map((item, i) => (
      <li key={i}>
        <img src={BullletPoint} />
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
    <div className="detail-continer">
      <div className="detail-box">
        <div className="desc-div">
          <TextStyling
            text={courseDetail?.title}
            class={"text-container"}
            style={{ marginLeft: "10%" }}
          />
        </div>
      </div>
      {card()}
      <div className="syllabus-div">
        <div className="syllabus-title">
          <TextStyling
            text={"Things YOU LEARN"}
            class={"text-container-center"}
          />
        </div>
        <div className="li-learn">
          <ul className="ul-learn">
            <ListItem data={list} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
