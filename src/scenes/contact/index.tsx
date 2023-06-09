import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyle = `mt-4 w-full border border-black px-5 py-2 placeholder-gray`;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    e.preventDefault();
    if (isValid) {
      setIsSubmitted(true);
    } else if (!isValid) {
      setIsSubmitted(false);
    }
  };
  return (
    <section id="contactus" className=" bg-gray-20 p-10">
      {!isSubmitted && (
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
          className="mx-auto w-2/6 pb-20 pt-20 "
        >
          <div>
            {/*header */}
            <motion.div
              className="md:w-4/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="mb-8 text-xl">contact us.</p>
              <p className="mb-6 text-sm">
                provide us your email and we'll send you the details
              </p>
            </motion.div>

            {/*form  */}
            <div className=" ">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <form target="" onSubmit={onSubmit}>
                  <input
                    id="name"
                    className={inputStyle}
                    type="text"
                    placeholder="name"
                    {...register("name", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.name && (
                    <p className=" text-sm">
                      {errors.name.type === "required" &&
                        "This field is required."}
                      {errors.name.type === "maxLength" &&
                        "Max length is 100 char."}
                    </p>
                  )}

                  <input
                    className={inputStyle}
                    type="text"
                    placeholder="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && (
                    <p className=" text-sm">
                      {errors.email.type === "required" &&
                        "This field is required."}
                      {errors.email.type === "pattern" &&
                        "Invalid email address."}
                    </p>
                  )}

                  <textarea
                    className={inputStyle}
                    placeholder="message"
                    rows={4}
                    cols={50}
                    {...register("message", {
                      required: true,
                      maxLength: 2000,
                    })}
                  />
                  {errors.message && (
                    <p className=" text-primary-500">
                      {errors.message.type === "required" &&
                        "This field is required."}
                      {errors.message.type === "maxLength" &&
                        "Max length is 2000 char."}
                    </p>
                  )}

                  <button type="submit" className="  mt-5  hover:underline">
                    submit
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
      {isSubmitted && (
        <div className=" text-center">
          <h2 className="mb-8 mt-4 text-xl ">message sent.</h2>
          <p>thank you for trusting us</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
