import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { convertFormData } from "./formUtils/form.utils";

const INITIAL_STATE = { title: "", familyTopic: "", wallpaper: "" };

const ModalTopic = ({ showModalTopic, modalTopic }) => {
    const handleShowModal = () => {
        showModalTopic(false);
    };

    const submitForm = (values, actions) => {
        const formData = convertFormData(values);
        console.log(formData);
        actions.resetForm();
    };

    const handleImageFile = (formik, event) => {
        formik.setFieldValue("wallpaper", event.target.files[0]);
    };

    return (
        <>
            <section
                className={
                    modalTopic ? "modal-comment" : "modal-comment no-active"
                }
            >
                <button onClick={handleShowModal} className="btn__close">
                    <FontAwesomeIcon icon={faXmark} className="icon" />
                </button>
                <Formik
                    initialValues={INITIAL_STATE}
                    onSubmit={submitForm}
                    enableReinitialize
                >
                    {(formik) => {
                        return (
                            <Form>
                                <label htmlFor="title">Title</label>
                                <Field id="title" name="title" type="text" />
                                <label htmlFor="familyTopic">FamilyTopic</label>
                                <Field
                                    id="familyTopic"
                                    name="familyTopic"
                                    type="text"
                                />
                                <label htmlFor="wallpaper">Wallpaper</label>
                                <Field
                                    id="wallpaper"
                                    name="wallpaper"
                                    type="file"
                                    value={undefined}
                                    onChange={(event) =>
                                        handleImageFile(formik, event)
                                    }
                                />
                                <button type="submit">Create Topic</button>
                            </Form>
                        );
                    }}
                </Formik>
            </section>
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
