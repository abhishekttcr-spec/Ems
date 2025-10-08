import Department from "../models/departmentModel.js";


const getDepartment = async (req, res) => {
    try {
        const departments = await Department.find()
        return res.status(200).json({ success: true, departments })
    } catch (error) {
        return res.status(500).json({ success: false, error: "Add department server error" })
    }
}

const addDepartment = async (req, res) => {
    try {
        const { dep_name, description } = req.body;
        const newDep = new Department({
            dep_name,
            description
        })
        await newDep.save()
        return res.status(200).json({ success: true, department: newDep })

    } catch (error) {
        return res.status(500).json({ success: false, error: "add department server error" })
    }

}
const editDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const department = await Department.findById({ _id: id })
        return res.status(200).json({ success: true, department })
    } catch (error) {
        return res.status(500).json({ success: false, error: "Add department server error" })
    }
}
const UpdateDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const { dep_name, description } = req.body
        const updateDep = await Department.findByIdAndUpdate({ _id: id }, {
            dep_name,
            description
        })
        return res.status(200).json({ success: true, updateDep })

    } catch (error) {
        return res.status(500).json({ success: false, error: "Update department server error" })
    }
}

const deleteDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const DeleteDep = await Department.findByIdAndDelete({ _id: id })
        return res.status(200).json({ success: true, DeleteDep })

    } catch (error) {
        return res.status(500).json({ success: false, error: "Delete department server error" })
    }
}



export { addDepartment, getDepartment, editDepartment, UpdateDepartment, deleteDepartment }