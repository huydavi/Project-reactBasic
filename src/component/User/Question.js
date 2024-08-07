import _ from "lodash";
import { useState } from "react";
import Lightbox from "react-awesome-lightbox";

const Question = (props) => {
  const { data, index } = props;

  const [isPreviewImage, setIsPreviewImage] = useState(false);

  if (_.isEmpty(data)) {
    return <></>;
  }

  const handleCheckbox = (event, aId, qId) => {
    props.handleCheckbox(aId, qId);
  };

  return (
    <>
      {data.image ? (
        <div className="q-image">
          <img
            onClick={() => setIsPreviewImage(true)}
            src={`data:image/jpeg;base64,${data.image}`}
            style={{ cursor: "pointer" }}
          />
          {isPreviewImage === true && (
            <Lightbox
              onClose={() => setIsPreviewImage(false)}
              image={`data:image/jpeg;base64,${data.image}`}
              title={"Question Image"}
            ></Lightbox>
          )}
        </div>
      ) : (
        <div className="q-image"></div>
      )}
      <div className="question">
        Question {index + 1}: {data.questionDescription}
      </div>
      <div className="answer">
        {data.answers &&
          data.answers.length &&
          data.answers.map((a, index) => {
            return (
              <div key={`answer-${index}`} className="a-child">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={a.isSelected}
                    onChange={(event) =>
                      handleCheckbox(event, a.id, data.questionId)
                    }
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    {a.description}
                  </label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Question;
