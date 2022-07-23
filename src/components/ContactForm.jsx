import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const provinces = ["PUNJAB", "KPK", "SINDH", "BALOCHISTANA"];
const cities = {
  KPK: ["Peshawar", "Mardan", "Abbottabad"],
  PUNJAB: ["Lahore", "Multan", "Faisalabad"],
  SINDH: ["Karachi", "Ghotki", "Sukkur"],
  BALOCHISTANA: ["Quetta", "Gawadar", "Chaman"],
};

const schema = yup
    .object({
      username: yup.string().min(3).required(),
      phoneNumber: yup.number().positive().integer().required(),
      email: yup
        .string()
        .email("Email is not valid")
        .required("Email is required"),
      address: yup.string().required(),
      gender: yup.string().required(),
      discounts: yup.boolean(),
      offers: yup.boolean(),
      news: yup.boolean(),
    })
    .required();

function ContactForm({onSubmitOrder}) {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      province: provinces[0],
    },
  });

  let selectedProvince = watch("province");

  const onSubmit = (data) => {
    // console.log(data);
    onSubmitOrder(data);
    reset();
  };

  return (
    <div className="">
      <h1 className="p-3 text-black-50 mt-2 text-center text-decoration-underline">
        Contact Details
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row m-3">
          <div className="col-md-6 mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Customer Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              {...register("username")}
            />
            <p style={{ display: "inline", color: "red" }}>
              {errors.username?.message}
            </p>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Mobile Number
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...register("phoneNumber")}
            />
            <p style={{ display: "inline", color: "red" }}>
              {errors.phoneNumber?.message}
            </p>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...register("email")}
            />
            <p style={{ display: "inline", color: "red" }}>
              {errors.email?.message}
            </p>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              {...register("address")}
            />
            <p style={{ display: "inline", color: "red" }}>
              {errors.address?.message}
            </p>
          </div>

          <div className="col-md-6">
            <select
              className="form-select"
              {...register("province")}
              defaultValue={provinces[0]}
            >
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6">
            <select
              className="form-select"
              {...register("city")}
            >
              {cities[selectedProvince].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6 my-3">
            <h5>Send me Updates for:</h5>
            <div className="mb-3 form-check d-block">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                {...register("discounts")}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Discounts
              </label>
            </div>

            <div className="mb-3 form-check d-block">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck2"
                {...register("offers")}
              />
              <label className="form-check-label" htmlFor="exampleCheck2">
                Offers
              </label>
            </div>

            <div className="mb-3 form-check d-block">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck3"
                {...register("news")}
              />
              <label className="form-check-label" htmlFor="exampleCheck3">
                News
              </label>
            </div>
            <p style={{ display: "inline", color: "red" }}>
              {errors.check?.message}
            </p>
          </div>

          <div className="col-md-6 my-3">
            <h5>Gender</h5>
            <div className="mb-3 form-check d-block">
              <input
                type="radio"
                className="form-check-input"
                id="exampleCheck4"
                {...register("gender")}
                value="male"
              />
              <label className="form-check-label" htmlFor="exampleCheck4">
                Male
              </label>
            </div>

            <div className="mb-3 form-check d-block">
              <input
                type="radio"
                className="form-check-input"
                id="exampleCheck5"
                {...register("gender")}
                value="female"
              />
              <label className="form-check-label" htmlFor="exampleCheck4">
                Female
              </label>
            </div>

            <p style={{ display: "inline", color: "red" }}>
              {errors.gender?.message}
            </p>
          </div>

          <div className="col-12 form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              {...register("textarea")}
            ></textarea>
            <label htmlFor="floatingTextarea">Delivery Instructions, if Any?</label>
            <p style={{ display: "inline", color: "red" }}>
              {errors.textarea?.message}
            </p>
          </div>

          <button
            type="submit"
            disabled={!formState.isValid}
            className="btn btn-primary mt-3"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
