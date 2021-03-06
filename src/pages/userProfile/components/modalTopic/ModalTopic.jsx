import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { convertFormData, postDataToDatabase } from "./formUtils/form.utils";
import { AuthStateContext } from "../../../../state/context/authStateContext";
import { useDispatch, useSelector } from "react-redux";
import { getFamilyList } from "../../../../state/actions/familyActions";
import PreviewImage from "./previewImage/PreviewImage";

const INITIAL_STATE = { title: "", familyTopic: "", wallpaper: "" };

const ModalTopic = ({ showModalTopic, modalTopic }) => {
    const { userLogged } = useContext(AuthStateContext);
    const { familyList, done } = useSelector((state) => state.family);
    const [result, setResult] = useState(false);
    const [file, setFile] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFamilyList());
    }, [dispatch]);

    const handleShowModal = () => {
        showModalTopic(false);
    };

    const submitForm = async (values, actions) => {
        const formData = convertFormData(values);
        actions.resetForm({ values: INITIAL_STATE });

        const result = await postDataToDatabase(
            formData,
            userLogged.userId,
            userLogged.token
        );
        result && setResult(true);
        showModalTopic(false);
    };

    const handleChangeInputFile = (event, formik) => {
        const file = event.currentTarget.files[0];
        formik.setFieldValue("wallpaper", file);
        setFile(file);
    };

    return (
        <>
            {done && (
                <section
                    className={
                        modalTopic ? "modal-topic" : "modal-topic no-active"
                    }
                >
                    <button onClick={handleShowModal} className="btn__close">
                        <FontAwesomeIcon icon={faXmark} className="icon" />
                    </button>
                    <Formik initialValues={INITIAL_STATE} onSubmit={submitForm}>
                        {(formik) => {
                            return (
                                <>
                                    <Form className="modal-topic__form">
                                        <label className="modal-topic__form--label">
                                            Title{" "}
                                            <Field
                                                id="title"
                                                name="title"
                                                type="text"
                                                className="input"
                                                required
                                            />
                                        </label>

                                        <label className="modal-topic__form--label">
                                            Choose the family of your topic:
                                            <Field
                                                as="select"
                                                id="familyTopic"
                                                name="familyTopic"
                                                className="input"
                                                required
                                            >
                                                <option value="" disabled>
                                                    Family options
                                                </option>
                                                {familyList.map((el) => (
                                                    <option
                                                        value={el.title}
                                                        key={el.id}
                                                    >
                                                        {el.title}
                                                    </option>
                                                ))}
                                            </Field>
                                        </label>
                                        <div className="modal-topic__form--label">
                                            <p>Wallpaper</p>
                                            <label className="label-file">
                                                {!file ? (
                                                    <FontAwesomeIcon
                                                        icon={faCamera}
                                                    />
                                                ) : (
                                                    <PreviewImage file={file} />
                                                )}
                                                <input
                                                    id="wallpaper"
                                                    name="wallpaper"
                                                    type="file"
                                                    className="input-file"
                                                    required
                                                    value={undefined}
                                                    onChange={(event) =>
                                                        handleChangeInputFile(
                                                            event,
                                                            formik
                                                        )
                                                    }
                                                />
                                            </label>
                                        </div>

                                        <button type="submit">Submit</button>
                                    </Form>
                                </>
                            );
                        }}
                    </Formik>
                    {result && <p>Done!</p>}
                </section>
            )}

            <div
                className={
                    modalTopic
                        ? "modal-topic__overlay"
                        : "modal-topic__overlay no-active"
                }
            ></div>
        </>
    );
};

export default ModalTopic;
