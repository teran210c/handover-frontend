import { useLocation } from "react-router-dom"
import { useState } from "react";


export default function AddDefect() {
    const location = useLocation()
    const date = location.state.dateSent

    const mockUser = {
        id: "usr-992",
        name: "Carlos Terán"
    }

    const [formData, setFormData] = useState({
        date: location.state.dateSent,
        reporterId: mockUser.id,
        reporterName: mockUser.name,
        description: ""
    });


    return (
        <div>
            <form>
                <div>
                    <div>
                        <label htmlFor="date-id">Registry Date</label>
                        <input
                            id="date-id"
                            type="text"
                            value={formData.date}
                            readOnly
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="line-id"

                        >
                            Line
                        </label>
                        <select name="" id="">
                            <option value={''}>-- Select your line --</option>
                            <option value={'L1'}>L1</option>
                            <option value={'L2'}>L2</option>
                            <option value={'L3'}>L3</option>
                            <option value={'L5'}>L5</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="mo-id">MO</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label htmlFor="">ISN</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label htmlFor="">Station</label>
                        <select name="" id="">
                            <option value="">-- Select station --</option>
                            <option value="post-aoi">Post AOI</option>
                            <option value="ict">ICT</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">Model</label>
                        <select name="" id="">
                            <option value="bcm031">BCM031</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">Shift</label>
                        <select name="" id="">
                            <option value="">-- Select shift</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">Process side</label>
                        <select name="" id="">-- Select side --</select>
                    </div>

                    <div>
                        <label htmlFor="">Location</label>
                        <input type="text" />
                    </div>
                </div>
            </form>
        </div>
    )
}