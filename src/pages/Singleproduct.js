import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useProductContext } from "./context/productcontex";

import { useProductContext } from "../context/productcontex";
import PageNavigation from "../helpers/PageNavigation";
import ImageCollector from "../components/ImageCollector";
import Formateprice from "../helpers/Formateprice";
import { FaTruck } from "react-icons/fa";
import Footer from "../components/Footer"

import { TbReplaceFilled } from "react-icons/tb";
import { BsFillTruckFrontFill } from "react-icons/bs";
import { HiShieldCheck } from "react-icons/hi";
import StarRatings from "react-star-ratings";
import AddtoCart from "../components/AddtoCart";
import Spinner from "../helpers/Spinner";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
     
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  return (
    <div className=" mt-[100px] bg-customTooDark">
      <PageNavigation title={name} />

      {isSingleLoading==true ? (<Spinner/>): ( <div className="flex justify-center gap-9  px-[15rem] h-auto py-[100px] items-center text-xl service flex-wrap ">
        <div>
          <ImageCollector image={image} />
        </div>

        <div className="text-customWhite w-[500px] flex flex-col  justify-center gap-6 single-product">
          <h1 className="text-2xl">{name}</h1>
          <h3>
            {" "}
            <StarRatings
            starRatedColor="yellow"
        rating={2.403}
        starDimension="40px"
        starSpacing="5px"
      />
          </h3>
          <p className="text-customlightDark">{reviews} customer reviews</p>
          <p className="font-bold">
            MRP:{" "}
            {
              <del>
                <Formateprice price={price + 200000}></Formateprice>
              </del>
            }
          </p>
          <p className="text-customSky">
            Deal of the Day:{" "}
            <span className="text-xl text-customSky font-bold">
              {" "}
              {<Formateprice price={price} />}
            </span>
          </p>
          <p>{description}</p>

          <div className="flex flex-wrap product-icons">
            <div className="m-4 flex justify-center items-center gap-4">
              <FaTruck className="text-customViloet text-3xl" />
              <p>Free Delivery</p>
            </div>

            <div className="m-4 flex justify-center items-center gap-4">
              <TbReplaceFilled className="text-customViloet text-3xl" />
              <p>30 days Replacement</p>
            </div>

            <div className="m-4 flex justify-center items-center gap-4">
              <BsFillTruckFrontFill className="text-customViloet text-3xl" />
              <p>
                Flip<span>Zon</span> Delivered
              </p>
            </div>

            <div className="m-4  flex justify-center items-center gap-4">
              <HiShieldCheck className="text-customViloet text-3xl" />
              <p>1 Year Warranty</p>
            </div>
          </div>

          <div className="w-full bg-customlightDark h-[1px]"></div>

          <p className="text-customlightDark">
            {" "}
            Availability :{" "}
            {stock > 0 ? (
              <span className="text-customWhite"> {stock} in stocks </span>
            ) : (
              <span>No stocks left</span>
            )}{" "}
          </p>
          <h3 className="text-customlightDark">
            Brand :<span className="text-customWhite"> {company}</span>
          </h3>

          <div className="w-full bg-customWhite h-[2px]"></div>
          <div>  {stock>0 && <AddtoCart product={singleProduct}/> } </div>
        </div>
      </div>)}

     
       <br />
       <br />
       <br />
      <Footer/>
    </div>
  );
};

export default SingleProduct;
