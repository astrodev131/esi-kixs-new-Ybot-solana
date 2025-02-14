import React, { useContext } from 'react';

import { POINT_PER_FARMING } from '../../constants';
import { PointContext } from '../../state/PointContext';

const FarmingCompleteDialog = ({ setDialogOpen, handleStartFarm }) => {
    const { boosted } = useContext(PointContext)
    const handleFarm = async () => {
        handleStartFarm()
        setDialogOpen(false)
    }
    return (
        <div className="bottom-sheet-scroll">
            <div className="text-center justify-center">
                <div className="flex w-full justify-center">
                    <img src={`/images/farm_complete.png`} alt="farm complete" width={160} />
                </div>
                <div className='text-[20px] mb-4 opacity-70'>Farming Complete</div>
                <div className='text-[20px]'>Reward</div>
                <div className="flex justify-center gap-2 mt-4 items-center">
                    <div className="">
                        <img src='/images/y_crystal.png' width={36} />
                    </div>
                    <div className="text-[24px]">{boosted ? POINT_PER_FARMING * 2 : POINT_PER_FARMING}</div>
                </div>
                <button
                    rel="noopener noreferrer"
                    style={{ border: "3px solid white" }}
                    className="button text-white bg-gradient-to-b from-[#fd55f5] to-[#a32ea3] rounded-full text-xl p-4 font-bold mt-4"
                    onClick={handleFarm}
                >
                    Farm
                </button>
            </div>
        </div>
    )
}

export default FarmingCompleteDialog;