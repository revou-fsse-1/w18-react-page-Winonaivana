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
    <section id="contactus" className=" bg-gray-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="mx-auto w-3/6 pb-20 pt-20 "
      >
        <div>
          {/*header */}
          <motion.div className="md:w-3/5">
            <p className="mb-8 text-xl">contact us.</p>
            <p className="mb-6">book an appointment with our consultant</p>
          </motion.div>

          {/*form  */}
          <div className=" ">
            <motion.div>
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
              {isSubmitted && (
                <div className="text-center">
                  <h2 className="mb-8 mt-4 text-xl">message sent.</h2>
                  <p>thank you for trusting us</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
