import { useContext, useState } from "react";

import { PointContext } from "../state/PointContext";

import AppBar from "../Components/AppBar";
import TaskChannelDialog from "../Components/Dialogs/TaskChannelDialog.jsx";
import InviteTaskDialog from "../Components/Dialogs/InviteTaskDialog.jsx";

import DeleteIcon from "../Svg/DeleteIcon";
import CheckedIcon from "../Svg/CheckedIcon";
import ArrowRightIcon from "../Svg/ArrowRightIcon";

import {
  CHANNEL_TASKS,
  TG_CHANNEL_TASK_NAME,
  TG_CHANNEL_TASK_POINT,
  TG_CHANNEL_LINK,
  INVITE_TASK_NAME,
  INVITE_TASK_POINT,
  INVITE_TASK_NAME_4,
  INVITE_TASK_POINT_4,
} from "../constants.js";

import convert from "../utils/convert";

function Earn() {
  const { user } = useContext(PointContext);

  const [isDialogOpen, setDialogOpen] = useState("");

  const checkTask = (name) => {
    return user?.tasks?.find((task) => task.name == name) ? true : false;
  };

  const TASK_LIST = [
    ...CHANNEL_TASKS,
    {
      name: TG_CHANNEL_TASK_NAME,
      point: TG_CHANNEL_TASK_POINT,
      link: TG_CHANNEL_LINK,
      description: "Join Why Protocol's Telegram"
    },
    {
      name: INVITE_TASK_NAME,
      point: INVITE_TASK_POINT,
      description: 'Invite 1 Friend'
    },
    {
      name: INVITE_TASK_NAME_4,
      point: INVITE_TASK_POINT_4,
      description: "Invite 4 Friends"
    },
  ];

  return (
    <div className="page">
      <main className="main">
        <div className="inner">
          <div className="page-title">Tasks</div>
          <div className="flex gap-2 justify-between mb-4">
            <div className="p-4 bg-card rounded-2xl bg-opacity-50 w-[50%]">
              <p className="text-[14px] mb-2">TASK COMPLETED</p>
              <p className="text-[20px]">
                {TASK_LIST.filter((task) => checkTask(task)).length}
              </p>
            </div>
            <div className="p-4 bg-card rounded-2xl bg-opacity-50 w-[50%]">
              <p className="text-[14px] mb-2">Y-CRYSTAL EARNED</p>
              <div className="flex gap-2 items-center">
                <img src="/images/y_crystal.png" alt="y token" width={18} />
                <p className="text-[20px]">{user?.task_point ?? 0}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {TASK_LIST.filter((task) => !checkTask(task)).length > 0 && (
              <div className="p-2 bg-card rounded-2xl bg-opacity-50">
                <div className="p-2">Available</div>
                <div className="flex flex-col gap-2">
                  {TASK_LIST.filter((task) => !checkTask(task)).map(
                    (item, i) => (
                      <div
                        className="flex items-center justify-between p-2 cursor-pointer"
                        onClick={() => {
                          setDialogOpen(item.name);
                        }}
                        key={item.name}
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            <img
                              src={`/images/tasks/${item.name}.png`}
                              alt={`${item.name} icon`}
                              width={40}
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="">{item.description}</div>
                            <div className="flex items-center gap-2">
                              <div className="">
                                <img
                                  className=""
                                  src="/images/y_crystal.png"
                                  width={18}
                                />
                              </div>
                              <div className="text-[14px]">
                                +{convert(item.point)}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[24px]">
                          <ArrowRightIcon />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
            {TASK_LIST.filter((task) => checkTask(task)).length > 0 && (
              <div className="p-2 bg-card rounded-2xl bg-opacity-50">
                <div className="p-2">Completed</div>
                <div className="flex flex-col gap-2">
                  {TASK_LIST.filter((task) => checkTask(task)).map(
                    (item, i) => (
                      <div
                        className="flex items-center justify-between p-2 cursor-pointer"
                        key={item.name}
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            <img
                              src={`/images/tasks/${item.name}.png`}
                              alt={`${item.name} icon`}
                              width={40}
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="">{item.description}</div>
                            <div className="flex items-center gap-2">
                              <div className="">
                                <img
                                  className=""
                                  src="/images/y_crystal.png"
                                  width={18}
                                />
                              </div>
                              <div className="text-[14px]">
                                +{convert(item.point)}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[24px]">
                          <CheckedIcon />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <AppBar />
      <div
        className="bottom-sheet"
        style={{ display: isDialogOpen ? "flex" : "none" }}
      >
        <div
          className="bottom-sheet-bg"
          style={{ touchAction: "none", userSelect: "none" }}
        />
        <div className="bottom-sheet-inner">
          <div
            className="bottom-sheet-close"
            onClick={() => {
              setDialogOpen("");
            }}
          >
            <DeleteIcon />
          </div>
          {CHANNEL_TASKS.map(
            (item, index) =>
              isDialogOpen == item.name && (
                <TaskChannelDialog
                  setDialogOpen={setDialogOpen}
                  taskName={item.name}
                  channelName={item.description}
                  url={item.url}
                  score={item.point}
                  key={item.name}
                />
              )
          )}
          {isDialogOpen == "invite-task" && (
            <InviteTaskDialog setDialogOpen={setDialogOpen} friends={1}/>
          )}
          {isDialogOpen == "invite-task-4" && (
            <InviteTaskDialog setDialogOpen={setDialogOpen} friends={4}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default Earn;
