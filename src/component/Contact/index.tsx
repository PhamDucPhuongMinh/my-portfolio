import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Modal, Result, Button } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import "./index.scss";
import { setLoading } from "../../redux/slices/loadingSlice";

interface IFormInput {
  name: String;
  email: String;
  message: String;
}

const Contact: React.FC = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState<"success" | "error" | null>(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data, e) => {
    dispatch(setLoading(true));
    emailjs
      .send(
        "service_y2djxjm",
        "template_odz0w0l",
        { ...data },
        "B_YXSoAfDzNiR7qzx"
      )
      .then(
        (response) => {
          setShowModal("success");
        },
        (err) => {
          console.log(err);
          setShowModal("error");
        }
      )
      .finally(() => {
        dispatch(setLoading(false));
        e?.target.reset();
      });
  };

  return (
    <>
      <div id="contact" className="contact">
        <div className="my-container">
          <div className="contact__heading">
            <h3 className="text-uppercase text-center pb-5">contact</h3>
            <p className="text-center mt-4">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>
          <div className="contact__content">
            <div className="contact__content__form bg-white">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-danger">Please enter your name.</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address.",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-danger">
                      {errors.email?.message || "Please enter your email."}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    cols={30}
                    rows={10}
                    placeholder="Enter Your Message"
                    {...register("message", { required: true })}
                  ></textarea>
                  {errors.message && (
                    <span className="text-danger">
                      Please enter your message.
                    </span>
                  )}
                </div>
                <div className="form-group mb-0 align-items-end">
                  <button type="submit" className="btn-primary btn-lg">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={!!showModal}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        closable={false}
      >
        {showModal === "success" ? (
          <Result
            status="success"
            title="Successfully Send Message!"
            subTitle="Your message has been received. Thank you!"
            icon={<CheckCircleOutlined />}
            extra={[
              <Button
                type="primary"
                key="console"
                className="px-5"
                onClick={() => setShowModal(null)}
              >
                OK
              </Button>,
            ]}
          />
        ) : (
          <Result
            status="error"
            title="Fail Send Message!"
            subTitle="Your message sent failed. Please try again or contact via channels such as Facebook, Instargram, ...."
            icon={<CloseCircleOutlined />}
            extra={[
              <Button
                type="primary"
                key="console"
                className="px-5"
                onClick={() => setShowModal(null)}
              >
                OK
              </Button>,
            ]}
          />
        )}
      </Modal>
    </>
  );
};

export default Contact;
