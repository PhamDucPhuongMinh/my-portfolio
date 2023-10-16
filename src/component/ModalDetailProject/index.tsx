import React, { useEffect } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getContentModalDetailProject,
  getImageListModalDetailProject,
  getIsShowModalDetailProject,
  getTitleModalDetailProject,
} from "../../redux/selectors";
import { setDetailProject } from "../../redux/slices/detailProjectSlice";
import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from "../FancyBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const ModalDetailProject: React.FC = () => {
  const dispatch = useDispatch();
  const isShow = useSelector(getIsShowModalDetailProject);
  const title = useSelector(getTitleModalDetailProject);
  const content = useSelector(getContentModalDetailProject);
  const imageList = useSelector(getImageListModalDetailProject);

  const handleCloseModal = () => {
    dispatch(setDetailProject({ isShow: false }));
  };

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isShow]);

  return (
    <>
      <Modal
        className="modal-detail-project"
        open={isShow && title !== "" && content !== ""}
        footer={null}
        onCancel={handleCloseModal}
        destroyOnClose={true}
      >
        {content !== "" ? (
          <>
            <h3 className="text-center">{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <Fancybox
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                {imageList.map((item, index) => {
                  return (
                    <SwiperSlide>
                      <div
                        key={index}
                        className="f-carousel__slide"
                        data-fancybox="gallery"
                        data-src={item}
                      >
                        <img
                          alt=""
                          src={item}
                          className="w-100 pe-zoomin d-block"
                          style={{
                            minHeight: 100,
                          }}
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Fancybox>
            <button
              className="btn-primary ms-auto mt-4"
              onClick={handleCloseModal}
            >
              OK
            </button>
          </>
        ) : (
          ""
        )}
      </Modal>
    </>
  );
};

export default ModalDetailProject;
