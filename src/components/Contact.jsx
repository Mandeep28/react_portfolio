import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import { object, ref, string } from "yup";
import { useFormik } from "formik";
import { toast } from 'react-toastify';

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: object({
        name: string().min(3).max(30).required("Please enter your name"),
        email: string().email().required("Please enter a valid email"),
        message: string()
          .min(3)
          .max(2000)
          .required("Please enter your message"),
      }),
      onSubmit: (values, action) => {
        // console.log(values);
        send(values);
        action.resetForm();
      },
    });

  const send = (values) => {
   
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        {
          from_name: values.name,
          to_name: "Mandeep Singh",
          from_email: values.email,
          to_email: "mandeepsingh2822@outlook.com",
          message: values.message,
        },
        import.meta.env.VITE_PUBLIC_API_KEY
      )
      .then(() => {
        setLoading(false);
        // console.log("message send");
        toast.success("Thank you. I shall be get back to you as soon as possible.")
      })
      .catch((error) => {
        setLoading(false);
        // console.log(error);
        console.log("message not send");
        toast.error("Something went wrong. Please try again later!")
      });
  };

  return (
    <section className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-7 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 0.75)}
        className="flex-[0.80] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
          ref={formRef}
          className="mt-12 flex flex-col gap-8"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col ">
            <label htmlFor="name" className="text-white font-medium mb-4 mx-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="What your name ?"
              className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary border-none outline-none rounded-lg "
            />
            {errors.name && touched.name ? (
              <p className="text-red-400 mx-2 my-1">{errors.name}</p>
            ) : null}
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-white font-medium mb-4 mx-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="What your Email ?"
              className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary border-none outline-none rounded-lg "
            />
              {errors.email && touched.email ? (
              <p className="text-red-400 mx-2 my-1">{errors.email}</p>
            ) : null}
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="message"
              className="text-white font-medium mb-4 mx-2"
            >
              Your Message
            </label>
            <textarea
              rows="7"
              name="message"
              autoComplete="off"
              value={values.message}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="What you want to say ?"
              className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary border-none outline-none rounded-lg "
            />
              {errors.message && touched.message ? (
              <p className="text-red-400 mx-2 my-1">{errors.message}</p>
            ) : null}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary rounded-lg w-fit text-white font-bold py-3 px-8 shadow-lg shadow-primary"
          >
            {loading ? "Sending ..." : "Send"}
          </button>
        </form>
      </motion.div>
      {/*  Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 0.75)}
        className="xl:flex-[0.90] xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
