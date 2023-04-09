import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { BsPencil } from "react-icons/bs"

const EditTooltip = () => {

    const tooltip = (
        <Tooltip>
            Edit
        </Tooltip>
    )

    return (
        <OverlayTrigger overlay={tooltip}>
            <BsPencil />
            </OverlayTrigger>
    )
}

export default EditTooltip

/* This component is for edit icon */