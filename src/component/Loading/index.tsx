import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./index.scss";
import { getLoadingSelector } from "../../redux/selectors";

const Loading: React.FC = () => {
  const isLoading = useSelector(getLoadingSelector);

  useEffect(() => {
    const bodyEle: HTMLElement | null = document.querySelector("body");
    if (isLoading && bodyEle) {
      bodyEle.style.overflow = "hidden";
    } else if (!isLoading && bodyEle) {
      bodyEle.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      )}
    </>
  );
};

export default Loading;
