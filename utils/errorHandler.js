export const errorHandler = (handler) => async (req, res) => {
    try {
        await handler(req, res);
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
