export const convertFormData = (values) => {
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("familyTopic", values.familyTopic);
    formData.append("wallpaper", values.wallpaper);

    return formData;
};
