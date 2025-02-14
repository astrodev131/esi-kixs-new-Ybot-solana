import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

import { PointContext } from '../../state/PointContext';
import { BACKEND_URL } from "../../constants";

const InviteTaskDialog = ({ setDialogOpen, friends }) => {
    const { setUser, setPoint } = useContext(PointContext);
    const navigate = useNavigate();

    const handleCheckInvite = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/task/invite-check`);
            if (response?.data?.status === 'success') {
                setUser(response?.data?.user);
                setPoint(response?.data?.user?.point);
            }
        }
        catch (e) {
            console.error(e.message);
        }
        finally {
            toast.error(`Task isn't completed.`)
            setDialogOpen('');
        }
    }

    return (
        <>
            <div className="bottom-sheet-scroll">
                <div className="text-center justify-center">
                    <div className="flex w-full justify-center">
                        <img src="/images/tasks/invite-task.png" alt="invite friends logo" width={120} />
                    </div>
                    <div className="text-[32px] font-semibold leading-12 mt-2">Invite {friends} friends</div>
                    <div className="flex justify-center gap-2 m-4 items-center">
                        <div className="">
                            <img src='/images/y_token.png' width={36} />
                        </div>
                        <div className="text-[24px]">+25,000</div>
                    </div>
                    <div
                        onClick={() => { navigate('/friends') }}
                        style={{ border: "3px solid white" }}
                        rel="noopener noreferrer"
                        className="button button-primary text-white rounded-full text-xl p-4 font-bold"
                    >
                        Invite
                    </div>
                    <button style={{ border: "3px solid white" }}
                        className="button text-white bg-gradient-to-b from-[#fd55f5] to-[#a32ea3] rounded-full text-xl p-4 font-bold mt-4" onClick={handleCheckInvite}>
                        <span>Check</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default InviteTaskDialog;
