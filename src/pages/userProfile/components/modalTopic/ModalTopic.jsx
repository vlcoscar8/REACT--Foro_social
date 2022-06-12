import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { convertFormData, postDataToDatabase } from "./formUtils/form.utils";
import { AuthStateContext } from "../../../../state/context/authStateContext";
import { useDispatch, useSelector } from "react-redux";
import { getFamilyList } from "../../../../state/actions/familyActions";

const INITIAL_STATE = { title: "", familyTopic: "", wallpaper: "" };

const ModalTopic = ({ showModalTopic, modalTopic }) => {
    const { userLogged } = useContext(AuthStateContext);
    const { familyList, done } = useSelector((state) => state.family);
    const [result, setResult] = useState();
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
        setResult(result);
    };

    const handleChangeInputFile = (event, formik) => {
        formik.setFieldValue("wallpaper", event.currentTarget.files[0]);
    };

    return (
        <>
            {done && (
                <section
                    className={
                        modalTopic ? "modal-comment" : "modal-comment no-active"
                    }
                >
                    <button onClick={handleShowModal} className="btn__close">
                        <FontAwesomeIcon icon={faXmark} className="icon" />
                    </button>
                    <Formik initialValues={INITIAL_STATE} onSubmit={submitForm}>
                        {(formik) => {
                            return (
                                <>
                                    <Form>
                                        <label>Title</label>
                                        <Field
                                            id="title"
                                            name="title"
                                            type="text"
                                        />
                                        <label>
                                            Choose the family of your topic:
                                        </label>
                                        <Field
                                            as="select"
                                            id="familyTopic"
                                            name="familyTopic"
                                        >
                                            {familyList.map((el) => (
                                                <option
                                                    value={el.title}
                                                    key={el.id}
                                                >
                                                    {el.title}
                                                </option>
                                            ))}
                                        </Field>
                                        <label>Wallpaper</label>
                                        <input
                                            id="wallpaper"
                                            name="wallpaper"
                                            type="file"
                                            value={undefined}
                                            onChange={(event) =>
                                                handleChangeInputFile(
                                                    event,
                                                    formik
                                                )
                                            }
                                        />
                                        <button type="submit">
                                            Create Topic
                                        </button>
                                    </Form>
                                </>
                            );
                        }}
                    </Formik>
                    {result && <p>{result}</p>}
                </section>
            )}

            <div
                className={
                    modalTopic
                        ? "modal-comment__overlay"
                        : "modal-comment__overlay no-active"
                }
            ></div>
        </>
    );
};

export default ModalTopic;
