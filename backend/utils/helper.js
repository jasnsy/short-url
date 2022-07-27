export const trimResult = (result) => {
    delete result._id;
    delete result.__v;

    return result;
};