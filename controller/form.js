const formModel = require("../model/form");

const createform = async (req, res) => {
    try {
        console.log(req.body);

        const { Username, Email, Password } = req.body;

        if (!Username || !Email || !Password) {
            return res.json({
                success: false,
                message: "all fields are required"
            });
        }

        const isExisting = await formModel.findOne({ Email });

        if (isExisting) {
            return res.json({
                success: false,
                message: "already existing the email"
            });
        }

        const newUser = await formModel.create({
            Username,
            Email,
            Password
        });

        return res.json({
            success: true,
            message: "account created successfully",
            data: newUser
        });

    } catch (err) {
        console.log(err);
        console.log(err.message)

        return res.json({
            success: false,
            message: "Server Error"
        });
    }
};


const fetchform = async (req, res) => {
    try {
        const form = await formModel.find({});



        if (!form) {
            return res.json({
                success: false,
                message: "data not found"
            });
        }

        return res.json({
            success: true,
            message: "form fetch successfully",
            data: form
        });
    }
    catch (err) {
        console.log(err.message);
        return res.json({
            success: false,
            message: "network error in fetch method"
        });
    }
}

const deleteform = async (req, res) => {
    try {
        const { id } = req.params;
        const deletelist = await formModel.findByIdAndDelete(id)
        if (!deletelist) {
            return res.json({ success: false, message: "not deleted" })
        }
        return res.json({ success: true, message: " deleted successfully" })
    }
    catch (err) {
        console.log(err.message)
        return res.json({ success: false, message: "networ error for delete method" })

    }
}

const updateform = async (req, res) => {
    try {
        const { id } = req.params;

        console.log("URL ID:", id);

        const form = await formModel.findByIdAndUpdate(id, req.body, { new: true });
        console.log("FORM:", form);

        if (!form) {
            return res.json({ success: false, message: "Form not found" });
        }

        return res.json({ success: true, message: "Form updated successfully", data: form });

    } catch (err) {
        console.log(err.message);

        return res.json({ success: false, message: err.message });
    }
};

module.exports = { createform, fetchform, deleteform, updateform };